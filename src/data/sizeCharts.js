// Realistic Brand Size Charts (Measurements in CM)
// Includes Chest, Waist, Shoulder, and Height reference ranges

export const BRANDS = [
  {
    id: 'zara',
    name: 'ZARA',
    origin: 'Spain',
    styleTag: 'European Slim Cut',
    fitTendency: 'Runs 0.5 size smaller. Narrow shoulders & slim torso.',
    accentColor: '#FFFFFF',
    website: 'zara.com',
    sizes: {
      XS: { chest: [84, 88], waist: [70, 74], shoulder: [40, 42], height: [165, 172] },
      S:  { chest: [89, 93], waist: [75, 79], shoulder: [42, 44], height: [168, 175] },
      M:  { chest: [94, 98], waist: [80, 84], shoulder: [44, 46], height: [172, 180] },
      L:  { chest: [99, 104], waist: [85, 90], shoulder: [46, 48], height: [176, 185] },
      XL: { chest: [105, 110], waist: [91, 96], shoulder: [48, 50], height: [180, 190] },
      XXL:{ chest: [111, 118], waist: [97, 104], shoulder: [50, 52], height: [182, 194] }
    },
    bottomSizes: {
      '28': { waist: [71, 74], hip: [86, 89] },
      '30': { waist: [75, 78], hip: [90, 93] },
      '31': { waist: [79, 82], hip: [94, 97] },
      '32': { waist: [83, 86], hip: [98, 101] },
      '34': { waist: [87, 91], hip: [102, 105] },
      '36': { waist: [92, 97], hip: [106, 110] }
    }
  },
  {
    id: 'hm',
    name: 'H&M',
    origin: 'Sweden',
    styleTag: 'Contemporary Regular',
    fitTendency: 'True to size with standard Scandinavian proportions.',
    accentColor: '#FFFFFF',
    website: 'hm.com',
    sizes: {
      XS: { chest: [86, 90], waist: [72, 76], shoulder: [41, 43], height: [165, 172] },
      S:  { chest: [91, 95], waist: [77, 81], shoulder: [43, 45], height: [170, 177] },
      M:  { chest: [96, 101], waist: [82, 87], shoulder: [45, 47], height: [174, 182] },
      L:  { chest: [102, 108], waist: [88, 94], shoulder: [47, 49], height: [178, 186] },
      XL: { chest: [109, 115], waist: [95, 101], shoulder: [49, 51], height: [180, 190] },
      XXL:{ chest: [116, 122], waist: [102, 108], shoulder: [51, 53], height: [182, 192] }
    },
    bottomSizes: {
      '28': { waist: [72, 75], hip: [87, 90] },
      '30': { waist: [76, 80], hip: [91, 95] },
      '31': { waist: [81, 84], hip: [96, 99] },
      '32': { waist: [85, 88], hip: [100, 103] },
      '34': { waist: [89, 93], hip: [104, 107] },
      '36': { waist: [94, 99], hip: [108, 112] }
    }
  },
  {
    id: 'uniqlo',
    name: 'UNIQLO',
    origin: 'Japan',
    styleTag: 'Clean Minimalist Cut',
    fitTendency: 'Generous chest boxiness with slightly shorter sleeve length.',
    accentColor: '#FFFFFF',
    website: 'uniqlo.com',
    sizes: {
      XS: { chest: [82, 88], waist: [68, 74], shoulder: [41, 43], height: [160, 168] },
      S:  { chest: [88, 94], waist: [74, 80], shoulder: [43, 45], height: [165, 173] },
      M:  { chest: [94, 100], waist: [80, 86], shoulder: [45, 47], height: [170, 178] },
      L:  { chest: [100, 107], waist: [86, 93], shoulder: [47, 49], height: [175, 183] },
      XL: { chest: [107, 114], waist: [93, 100], shoulder: [49, 51], height: [178, 188] },
      XXL:{ chest: [114, 122], waist: [100, 108], shoulder: [51, 53], height: [180, 192] }
    },
    bottomSizes: {
      '28': { waist: [70, 74], hip: [86, 90] },
      '30': { waist: [75, 79], hip: [91, 95] },
      '31': { waist: [80, 83], hip: [96, 98] },
      '32': { waist: [84, 88], hip: [99, 103] },
      '34': { waist: [89, 94], hip: [104, 108] },
      '36': { waist: [95, 100], hip: [109, 114] }
    }
  },
  {
    id: 'levis',
    name: "LEVI'S",
    origin: 'USA',
    styleTag: 'American Heritage Standard',
    fitTendency: 'Generous American cut. Roomy chest and straight torso.',
    accentColor: '#FFFFFF',
    website: 'levi.com',
    sizes: {
      XS: { chest: [88, 92], waist: [72, 76], shoulder: [42, 44], height: [168, 175] },
      S:  { chest: [93, 98], waist: [77, 82], shoulder: [44, 46], height: [172, 178] },
      M:  { chest: [99, 105], waist: [83, 89], shoulder: [46, 48], height: [175, 183] },
      L:  { chest: [106, 113], waist: [90, 97], shoulder: [48, 50], height: [178, 188] },
      XL: { chest: [114, 121], waist: [98, 105], shoulder: [50, 52], height: [180, 192] },
      XXL:{ chest: [122, 130], waist: [106, 115], shoulder: [52, 55], height: [182, 195] }
    },
    bottomSizes: {
      '28': { waist: [71, 74], hip: [88, 91] },
      '30': { waist: [75, 79], hip: [92, 96] },
      '31': { waist: [80, 83], hip: [97, 100] },
      '32': { waist: [84, 87], hip: [101, 104] },
      '34': { waist: [88, 93], hip: [105, 109] },
      '36': { waist: [94, 99], hip: [110, 115] }
    }
  },
  {
    id: 'bewakoof',
    name: 'BEWAKOOF',
    origin: 'India',
    styleTag: 'Relaxed Urban Casual',
    fitTendency: 'Slightly relaxed, pre-shrunk cotton with drop shoulder balance.',
    accentColor: '#FFFFFF',
    website: 'bewakoof.com',
    sizes: {
      XS: { chest: [86, 91], waist: [71, 76], shoulder: [41, 43], height: [162, 170] },
      S:  { chest: [92, 97], waist: [77, 82], shoulder: [43, 45], height: [166, 174] },
      M:  { chest: [98, 103], waist: [83, 88], shoulder: [45, 47], height: [170, 178] },
      L:  { chest: [104, 110], waist: [89, 95], shoulder: [47, 49], height: [174, 182] },
      XL: { chest: [111, 117], waist: [96, 102], shoulder: [49, 51], height: [178, 186] },
      XXL:{ chest: [118, 125], waist: [103, 110], shoulder: [51, 54], height: [180, 190] }
    },
    bottomSizes: {
      '28': { waist: [70, 74], hip: [88, 92] },
      '30': { waist: [75, 79], hip: [93, 97] },
      '31': { waist: [80, 83], hip: [98, 101] },
      '32': { waist: [84, 88], hip: [102, 106] },
      '34': { waist: [89, 94], hip: [107, 112] },
      '36': { waist: [95, 100], hip: [113, 118] }
    }
  },
  {
    id: 'snitch',
    name: 'SNITCH',
    origin: 'India',
    styleTag: 'Tailored Fast-Fashion Slim',
    fitTendency: 'Fitted cut across chest and biceps; size up for relaxed comfort.',
    accentColor: '#FFFFFF',
    website: 'snitch.co.in',
    sizes: {
      XS: { chest: [83, 87], waist: [69, 73], shoulder: [39, 41], height: [163, 170] },
      S:  { chest: [88, 92], waist: [74, 78], shoulder: [41, 43], height: [167, 174] },
      M:  { chest: [93, 97], waist: [79, 83], shoulder: [43, 45], height: [171, 178] },
      L:  { chest: [98, 103], waist: [84, 89], shoulder: [45, 47], height: [175, 183] },
      XL: { chest: [104, 109], waist: [90, 95], shoulder: [47, 49], height: [178, 187] },
      XXL:{ chest: [110, 116], waist: [96, 102], shoulder: [49, 51], height: [180, 190] }
    },
    bottomSizes: {
      '28': { waist: [70, 73], hip: [86, 89] },
      '30': { waist: [74, 78], hip: [90, 94] },
      '31': { waist: [79, 82], hip: [95, 98] },
      '32': { waist: [83, 86], hip: [99, 102] },
      '34': { waist: [87, 91], hip: [103, 107] },
      '36': { waist: [92, 97], hip: [108, 112] }
    }
  },
  {
    id: 'nike',
    name: 'NIKE',
    origin: 'USA',
    styleTag: 'Performance Athletic',
    fitTendency: 'Standard athletic fit with ergonomic taper and shoulder freedom.',
    accentColor: '#FFFFFF',
    website: 'nike.com',
    sizes: {
      XS: { chest: [85, 90], waist: [70, 75], shoulder: [41, 43], height: [165, 173] },
      S:  { chest: [91, 96], waist: [76, 81], shoulder: [43, 45], height: [170, 178] },
      M:  { chest: [97, 103], waist: [82, 88], shoulder: [45, 47], height: [175, 183] },
      L:  { chest: [104, 111], waist: [89, 96], shoulder: [47, 50], height: [178, 188] },
      XL: { chest: [112, 119], waist: [97, 104], shoulder: [50, 52], height: [182, 192] },
      XXL:{ chest: [120, 128], waist: [105, 113], shoulder: [52, 55], height: [184, 195] }
    },
    bottomSizes: {
      '28': { waist: [71, 75], hip: [87, 91] },
      '30': { waist: [76, 80], hip: [92, 96] },
      '31': { waist: [81, 84], hip: [97, 100] },
      '32': { waist: [85, 89], hip: [101, 105] },
      '34': { waist: [90, 95], hip: [106, 111] },
      '36': { waist: [96, 101], hip: [112, 117] }
    }
  },
  {
    id: 'asos',
    name: 'ASOS DESIGN',
    origin: 'UK',
    styleTag: 'British Modern Standard',
    fitTendency: 'Designed to fit true to chest; sleeves cut on the longer side.',
    accentColor: '#FFFFFF',
    website: 'asos.com',
    sizes: {
      XS: { chest: [85, 90], waist: [71, 76], shoulder: [41, 43], height: [165, 173] },
      S:  { chest: [91, 96], waist: [76, 81], shoulder: [43, 45], height: [170, 177] },
      M:  { chest: [96, 102], waist: [81, 87], shoulder: [45, 47], height: [175, 183] },
      L:  { chest: [102, 108], waist: [87, 93], shoulder: [47, 49], height: [178, 186] },
      XL: { chest: [109, 116], waist: [94, 101], shoulder: [49, 52], height: [180, 190] },
      XXL:{ chest: [117, 124], waist: [102, 109], shoulder: [52, 54], height: [182, 193] }
    },
    bottomSizes: {
      '28': { waist: [71, 74], hip: [87, 90] },
      '30': { waist: [75, 79], hip: [91, 95] },
      '31': { waist: [80, 83], hip: [96, 99] },
      '32': { waist: [84, 88], hip: [100, 104] },
      '34': { waist: [89, 94], hip: [105, 109] },
      '36': { waist: [95, 100], hip: [110, 115] }
    }
  }
];

export const PRESET_PROFILES = [
  {
    name: 'Standard Athletic',
    description: 'Average lean athletic build (178cm, 98cm chest)',
    data: {
      height: 178,
      chest: 98,
      waist: 82,
      shoulder: 46,
      weight: 74,
      fitPreference: 'regular'
    }
  },
  {
    name: 'Slim / Lean',
    description: 'Slender frame (174cm, 90cm chest)',
    data: {
      height: 174,
      chest: 90,
      waist: 75,
      shoulder: 43,
      weight: 64,
      fitPreference: 'slim'
    }
  },
  {
    name: 'Muscular / Broad',
    description: 'Wide shoulders & chest (183cm, 106cm chest)',
    data: {
      height: 183,
      chest: 106,
      waist: 88,
      shoulder: 50,
      weight: 86,
      fitPreference: 'regular'
    }
  },
  {
    name: 'Relaxed Streetwear',
    description: 'Prefers oversized drape (180cm, 100cm chest)',
    data: {
      height: 180,
      chest: 100,
      waist: 84,
      shoulder: 47,
      weight: 78,
      fitPreference: 'relaxed'
    }
  }
];
