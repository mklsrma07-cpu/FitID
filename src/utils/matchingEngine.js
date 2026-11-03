// FitID Size Matching Engine
// Real-world Multi-brand Biometric Resolution for Women and Men

import { WOMEN_BRANDS, MEN_BRANDS, getBrandsByGender } from '../data/sizeCharts';

export function matchBrandSize(userProfile, brand) {
  const isWomen = userProfile.gender === 'women';
  const { 
    height = isWomen ? 166 : 178,
    bust = 88, 
    chest = 98, 
    waist = isWomen ? 68 : 82, 
    hips = isWomen ? 94 : 96, 
    shoulder = isWomen ? 40 : 46, 
    fitPreference = 'regular' 
  } = userProfile;

  // Fit preference offset applied to perceived dimensions
  // 'slim' = user tolerates snugger fit (-1.5cm offset)
  // 'relaxed' = user prefers looser drape (+2.5cm offset)
  const offset = fitPreference === 'slim' ? -1.5 : fitPreference === 'relaxed' ? 2.5 : 0;
  
  const upperMetric = isWomen ? Number(bust || chest || 88) : Number(chest || bust || 98);
  const targetUpper = upperMetric + offset;
  const targetWaist = Number(waist) + (offset * 0.5);
  const targetHips = Number(hips) + (offset * 0.6);
  const targetShoulder = Number(shoulder) + (offset * 0.3);

  const topSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  let bestTopSize = 'M';
  let highestScore = -Infinity;
  const sizeScores = [];

  for (const size of topSizes) {
    const range = brand.sizes[size];
    if (!range) continue;

    // Range checks
    const upperRange = range.bust || range.chest;
    if (!upperRange) continue;

    const waistRange = range.waist;
    const hipsRange = range.hips;
    const shoulderRange = range.shoulder;

    // Distances
    let upperDist = 0;
    if (targetUpper < upperRange[0]) upperDist = upperRange[0] - targetUpper;
    else if (targetUpper > upperRange[1]) upperDist = targetUpper - upperRange[1];

    let waistDist = 0;
    if (waistRange) {
      if (targetWaist < waistRange[0]) waistDist = waistRange[0] - targetWaist;
      else if (targetWaist > waistRange[1]) waistDist = targetWaist - waistRange[1];
    }

    let hipsDist = 0;
    if (hipsRange) {
      if (targetHips < hipsRange[0]) hipsDist = hipsRange[0] - targetHips;
      else if (targetHips > hipsRange[1]) hipsDist = targetHips - hipsRange[1];
    }

    let shoulderDist = 0;
    if (shoulderRange) {
      if (targetShoulder < shoulderRange[0]) shoulderDist = shoulderRange[0] - targetShoulder;
      else if (targetShoulder > shoulderRange[1]) shoulderDist = targetShoulder - shoulderRange[1];
    }

    // Centeredness bonus
    const upperSpan = upperRange[1] - upperRange[0];
    const upperMid = (upperRange[0] + upperRange[1]) / 2;
    const upperCenterOffset = Math.abs(targetUpper - upperMid) / (upperSpan / 2);

    let weightedDistance = 0;
    if (isWomen) {
      // For Women: Bust (50%), Waist (30%), Hips (20%)
      weightedDistance = (upperDist * 0.50) + (waistDist * 0.30) + (hipsDist * 0.20);
    } else {
      // For Men: Chest (55%), Shoulder (30%), Waist (15%)
      weightedDistance = (upperDist * 0.55) + (shoulderDist * 0.30) + (waistDist * 0.15);
    }

    let score = 100 - (weightedDistance * 8.5) - (upperCenterOffset * 3);
    score = Math.max(25, Math.min(99, Math.round(score)));

    sizeScores.push({ size, score, range });

    if (score > highestScore) {
      highestScore = score;
      bestTopSize = size;
    }
  }

  // Match bottom sizes (Pants / Jeans / Skirts)
  const bottomSizes = Object.keys(brand.bottomSizes);
  let bestBottomSize = bottomSizes[0] || '28';
  let bestBottomDiff = Infinity;

  for (const bSize of bottomSizes) {
    const bRange = brand.bottomSizes[bSize];
    if (!bRange) continue;
    
    const midWaist = (bRange.waist[0] + bRange.waist[1]) / 2;
    const waistDiff = Math.abs(Number(waist) - midWaist);
    
    let hipsDiff = 0;
    if (bRange.hips || bRange.hip) {
      const hRange = bRange.hips || bRange.hip;
      const midHips = (hRange[0] + hRange[1]) / 2;
      hipsDiff = Math.abs(Number(hips) - midHips);
    }

    const totalDiff = isWomen ? (waistDiff * 0.5 + hipsDiff * 0.5) : waistDiff;

    if (totalDiff < bestBottomDiff) {
      bestBottomDiff = totalDiff;
      bestBottomSize = bSize;
    }
  }

  // Generate detailed insight
  const matchedRange = brand.sizes[bestTopSize] || {};
  const matchedUpperRange = matchedRange.bust || matchedRange.chest || [84, 88];
  const metricName = isWomen ? 'bust' : 'chest';

  let fitNote = `Harmonious alignment across ${metricName} & waist.`;
  if (upperMetric >= matchedUpperRange[0] && upperMetric <= matchedUpperRange[1]) {
    fitNote = `Direct match for ${metricName} (${matchedUpperRange[0]}-${matchedUpperRange[1]} cm).`;
  } else if (upperMetric > matchedUpperRange[1]) {
    fitNote = `Slightly snug around ${metricName} (+${(upperMetric - matchedUpperRange[1]).toFixed(0)}cm). Sized for ${fitPreference} fit.`;
  } else if (upperMetric < matchedUpperRange[0]) {
    fitNote = `Comfortable drape (-${(matchedUpperRange[0] - upperMetric).toFixed(0)}cm) aligned with ${fitPreference} cut.`;
  }

  return {
    brandId: brand.id,
    brandName: brand.name,
    gender: brand.gender || (isWomen ? 'women' : 'men'),
    origin: brand.origin,
    styleTag: brand.styleTag,
    fitTendency: brand.fitTendency,
    website: brand.website,
    topSize: bestTopSize,
    bottomSize: bestBottomSize,
    confidence: highestScore,
    fitNote,
    range: matchedRange,
    sizeScores
  };
}

export function matchAllBrands(userProfile) {
  const brands = getBrandsByGender(userProfile.gender || 'women');
  return brands.map(brand => matchBrandSize(userProfile, brand));
}

export const DEFAULT_WOMEN_PROFILE = {
  gender: 'women',
  height: 166,
  bust: 88,
  waist: 68,
  hips: 94,
  shoulder: 40,
  weight: 58,
  fitPreference: 'regular',
  unit: 'cm'
};

export const DEFAULT_MEN_PROFILE = {
  gender: 'men',
  height: 178,
  chest: 98,
  waist: 82,
  hips: 96,
  shoulder: 46,
  weight: 74,
  fitPreference: 'regular',
  unit: 'cm'
};

export const DEFAULT_PROFILE = DEFAULT_WOMEN_PROFILE;

export function loadSavedProfile() {
  try {
    const saved = localStorage.getItem('fitid_user_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      const defaults = parsed.gender === 'men' ? DEFAULT_MEN_PROFILE : DEFAULT_WOMEN_PROFILE;
      return { ...defaults, ...parsed };
    }
  } catch (e) {
    console.error('Failed to load profile from localStorage', e);
  }
  return null;
}

export function saveProfile(profile) {
  try {
    localStorage.setItem('fitid_user_profile', JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile to localStorage', e);
  }
}
