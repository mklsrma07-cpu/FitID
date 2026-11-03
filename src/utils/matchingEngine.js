// FitID Size Matching Engine
// Calculates optimal clothing sizes and confidence ratings across brands

import { BRANDS } from '../data/sizeCharts';

export function matchBrandSize(userProfile, brand) {
  const { chest = 98, waist = 82, shoulder = 46, height = 175, fitPreference = 'regular' } = userProfile;

  // Fit preference offset applied to perceived dimensions
  // 'slim' = user tolerates snugger fit (-1.5cm offset)
  // 'relaxed' = user prefers looser drape (+2.5cm offset)
  const offset = fitPreference === 'slim' ? -1.5 : fitPreference === 'relaxed' ? 2.5 : 0;
  const targetChest = Number(chest) + offset;
  const targetShoulder = Number(shoulder) + (offset * 0.3);
  const targetWaist = Number(waist) + (offset * 0.5);

  const topSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  let bestTopSize = 'M';
  let highestScore = -Infinity;
  const sizeScores = [];

  for (const size of topSizes) {
    const range = brand.sizes[size];
    if (!range) continue;

    // Midpoints
    const midChest = (range.chest[0] + range.chest[1]) / 2;
    const midShoulder = (range.shoulder[0] + range.shoulder[1]) / 2;
    const midWaist = (range.waist[0] + range.waist[1]) / 2;

    // Range spans
    const chestSpan = range.chest[1] - range.chest[0];
    const shoulderSpan = range.shoulder[1] - range.shoulder[0];
    const waistSpan = range.waist[1] - range.waist[0];

    // Penalty based on distance from range bounds
    let chestDist = 0;
    if (targetChest < range.chest[0]) {
      chestDist = range.chest[0] - targetChest;
    } else if (targetChest > range.chest[1]) {
      chestDist = targetChest - range.chest[1];
    }

    let shoulderDist = 0;
    if (targetShoulder < range.shoulder[0]) {
      shoulderDist = range.shoulder[0] - targetShoulder;
    } else if (targetShoulder > range.shoulder[1]) {
      shoulderDist = targetShoulder - range.shoulder[1];
    }

    let waistDist = 0;
    if (targetWaist < range.waist[0]) {
      waistDist = range.waist[0] - targetWaist;
    } else if (targetWaist > range.waist[1]) {
      waistDist = targetWaist - range.waist[1];
    }

    // Centeredness bonus (closer to midpoint gives higher accuracy)
    const chestCenterOffset = Math.abs(targetChest - midChest) / (chestSpan / 2);
    const shoulderCenterOffset = Math.abs(targetShoulder - midShoulder) / (shoulderSpan / 2);

    // Weighted distance score
    const weightedDistance = (chestDist * 0.55) + (shoulderDist * 0.30) + (waistDist * 0.15);
    
    // Normalized score (100 is perfect fit)
    let score = 100 - (weightedDistance * 9) - (chestCenterOffset * 3) - (shoulderCenterOffset * 2);
    score = Math.max(20, Math.min(99, Math.round(score)));

    sizeScores.push({ size, score, range });

    if (score > highestScore) {
      highestScore = score;
      bestTopSize = size;
    }
  }

  // Match bottom sizes (Pants / Jeans)
  const bottomSizes = ['28', '30', '31', '32', '34', '36'];
  let bestBottomSize = '32';
  let bestBottomDiff = Infinity;

  for (const bSize of bottomSizes) {
    const bRange = brand.bottomSizes[bSize];
    if (!bRange) continue;
    const midWaist = (bRange.waist[0] + bRange.waist[1]) / 2;
    const diff = Math.abs(Number(waist) - midWaist);
    if (diff < bestBottomDiff) {
      bestBottomDiff = diff;
      bestBottomSize = bSize;
    }
  }

  // Generate detailed insight
  const matchedRange = brand.sizes[bestTopSize];
  let fitNote = 'Standard balanced fit across chest & shoulders.';
  if (chest >= matchedRange.chest[0] && chest <= matchedRange.chest[1]) {
    fitNote = `Exact match for chest (${matchedRange.chest[0]}-${matchedRange.chest[1]} cm).`;
  } else if (chest > matchedRange.chest[1]) {
    fitNote = `Snug fit around chest (+${(chest - matchedRange.chest[1]).toFixed(0)}cm). Sized for ${fitPreference} cut.`;
  } else if (chest < matchedRange.chest[0]) {
    fitNote = `Roomy chest drape (-${(matchedRange.chest[0] - chest).toFixed(0)}cm) aligned with ${fitPreference} style.`;
  }

  return {
    brandId: brand.id,
    brandName: brand.name,
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
  return BRANDS.map(brand => matchBrandSize(userProfile, brand));
}

export const DEFAULT_PROFILE = {
  height: 178,
  chest: 98,
  waist: 82,
  shoulder: 46,
  weight: 74,
  fitPreference: 'regular',
  unit: 'cm'
};

export function loadSavedProfile() {
  try {
    const saved = localStorage.getItem('fitid_user_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_PROFILE, ...parsed };
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
