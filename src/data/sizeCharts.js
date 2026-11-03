// FitID Multi-Brand Size Charts (Official Brand Datasets in Centimeters)
// Sourced from official size guides: Zara, H&M, Uniqlo, Mango, Levi's, Urbanic, ASOS, Bewakoof, Snitch

export const WOMEN_BRANDS = [
  {
    id: 'zara-women',
    name: 'ZARA',
    gender: 'women',
    origin: 'Spain',
    styleTag: 'European Slim & Tailored',
    fitTendency: 'Runs 0.5 size small. Tailored through bust and waist; size up if curvy.',
    website: 'zara.com',
    sizes: {
      XXS: { bust: [78, 81], waist: [58, 61], hips: [86, 89], height: [158, 166] },
      XS:  { bust: [82, 85], waist: [62, 65], hips: [90, 93], height: [160, 168] },
      S:   { bust: [86, 89], waist: [66, 69], hips: [94, 97], height: [162, 172] },
      M:   { bust: [90, 94], waist: [70, 74], hips: [98, 102], height: [165, 175] },
      L:   { bust: [95, 100], waist: [75, 80], hips: [103, 108], height: [168, 178] },
      XL:  { bust: [101, 106], waist: [81, 86], hips: [109, 114], height: [170, 180] },
      XXL: { bust: [107, 114], waist: [87, 94], hips: [115, 122], height: [170, 182] }
    },
    bottomSizes: {
      '24': { waist: [61, 64], hips: [86, 89] },
      '26': { waist: [65, 68], hips: [90, 93] },
      '28': { waist: [69, 72], hips: [94, 97] },
      '30': { waist: [73, 77], hips: [98, 102] },
      '32': { waist: [78, 83], hips: [103, 108] },
      '34': { waist: [84, 89], hips: [109, 114] }
    }
  },
  {
    id: 'hm-women',
    name: 'H&M',
    gender: 'women',
    origin: 'Sweden',
    styleTag: 'Scandinavian Standard',
    fitTendency: 'True to size with generous bust allowance. Divided line runs 0.5 size smaller.',
    website: 'hm.com',
    sizes: {
      XXS: { bust: [75, 78], waist: [59, 62], hips: [83, 86], height: [158, 166] },
      XS:  { bust: [79, 82], waist: [63, 66], hips: [87, 90], height: [160, 168] },
      S:   { bust: [83, 87], waist: [67, 71], hips: [91, 95], height: [162, 172] },
      M:   { bust: [88, 93], waist: [72, 77], hips: [96, 101], height: [165, 175] },
      L:   { bust: [94, 101], waist: [78, 85], hips: [102, 109], height: [168, 178] },
      XL:  { bust: [102, 110], waist: [86, 94], hips: [110, 118], height: [170, 180] },
      XXL: { bust: [111, 119], waist: [95, 103], hips: [119, 127], height: [170, 182] }
    },
    bottomSizes: {
      '24': { waist: [60, 63], hips: [84, 87] },
      '26': { waist: [64, 67], hips: [88, 91] },
      '28': { waist: [68, 71], hips: [92, 95] },
      '30': { waist: [72, 76], hips: [96, 100] },
      '32': { waist: [77, 82], hips: [101, 106] },
      '34': { waist: [83, 88], hips: [107, 112] }
    }
  },
  {
    id: 'uniqlo-women',
    name: 'UNIQLO',
    gender: 'women',
    origin: 'Japan',
    styleTag: 'Clean Minimalist Cut',
    fitTendency: 'Straight torso cut with slightly shorter sleeve length. Snug around the bust.',
    website: 'uniqlo.com',
    sizes: {
      XXS: { bust: [74, 77], waist: [56, 59], hips: [80, 83], height: [153, 160] },
      XS:  { bust: [78, 82], waist: [60, 63], hips: [84, 87], height: [155, 163] },
      S:   { bust: [83, 86], waist: [64, 67], hips: [88, 91], height: [158, 166] },
      M:   { bust: [87, 91], waist: [68, 72], hips: [92, 95], height: [160, 170] },
      L:   { bust: [92, 98], waist: [73, 79], hips: [96, 102], height: [163, 173] },
      XL:  { bust: [99, 106], waist: [80, 87], hips: [103, 110], height: [165, 175] },
      XXL: { bust: [107, 114], waist: [88, 95], hips: [111, 118], height: [165, 176] }
    },
    bottomSizes: {
      '24': { waist: [60, 63], hips: [84, 87] },
      '26': { waist: [64, 67], hips: [88, 91] },
      '28': { waist: [68, 71], hips: [92, 95] },
      '30': { waist: [72, 75], hips: [96, 99] },
      '32': { waist: [76, 81], hips: [100, 105] },
      '34': { waist: [82, 87], hips: [106, 111] }
    }
  },
  {
    id: 'mango-women',
    name: 'MANGO',
    gender: 'women',
    origin: 'Spain',
    styleTag: 'Mediterranean Chic',
    fitTendency: 'Fitted through high waist and bust. Tailored European drape; size up for comfort.',
    website: 'mango.com',
    sizes: {
      XXS: { bust: [77, 80], waist: [58, 61], hips: [85, 88], height: [160, 168] },
      XS:  { bust: [81, 84], waist: [62, 65], hips: [89, 92], height: [162, 170] },
      S:   { bust: [85, 89], waist: [66, 70], hips: [93, 97], height: [164, 172] },
      M:   { bust: [90, 95], waist: [71, 76], hips: [98, 103], height: [165, 175] },
      L:   { bust: [96, 102], waist: [77, 83], hips: [104, 110], height: [168, 178] },
      XL:  { bust: [103, 109], waist: [84, 90], hips: [111, 117], height: [170, 180] },
      XXL: { bust: [110, 117], waist: [91, 98], hips: [118, 125], height: [170, 182] }
    },
    bottomSizes: {
      '24': { waist: [60, 63], hips: [86, 89] },
      '26': { waist: [64, 67], hips: [90, 93] },
      '28': { waist: [68, 71], hips: [94, 97] },
      '30': { waist: [72, 76], hips: [98, 102] },
      '32': { waist: [77, 82], hips: [103, 108] },
      '34': { waist: [83, 89], hips: [109, 115] }
    }
  },
  {
    id: 'levis-women',
    name: "LEVI'S",
    gender: 'women',
    origin: 'USA',
    styleTag: 'Authentic Denim Heritage',
    fitTendency: 'Curved hip design in denim; tops run relaxed American standard.',
    website: 'levi.com',
    sizes: {
      XXS: { bust: [75, 78], waist: [55, 58], hips: [85, 88], height: [160, 168] },
      XS:  { bust: [79, 84], waist: [59, 64], hips: [89, 92], height: [162, 170] },
      S:   { bust: [85, 89], waist: [65, 70], hips: [93, 97], height: [164, 172] },
      M:   { bust: [90, 95], waist: [71, 76], hips: [98, 103], height: [165, 175] },
      L:   { bust: [96, 102], waist: [77, 84], hips: [104, 110], height: [168, 178] },
      XL:  { bust: [103, 110], waist: [85, 93], hips: [111, 118], height: [170, 180] },
      XXL: { bust: [111, 119], waist: [94, 103], hips: [119, 127], height: [170, 182] }
    },
    bottomSizes: {
      '24': { waist: [62, 65], hips: [85, 88] },
      '25': { waist: [65, 68], hips: [88, 91] },
      '26': { waist: [68, 70], hips: [91, 93] },
      '27': { waist: [71, 73], hips: [93, 96] },
      '28': { waist: [74, 76], hips: [96, 98] },
      '29': { waist: [76, 79], hips: [98, 101] },
      '30': { waist: [79, 82], hips: [101, 104] },
      '31': { waist: [82, 86], hips: [104, 108] },
      '32': { waist: [86, 90], hips: [108, 112] }
    }
  },
  {
    id: 'urbanic-women',
    name: 'URBANIC',
    gender: 'women',
    origin: 'UK',
    styleTag: 'Youth Fast-Fashion',
    fitTendency: 'Fitted stretch silhouettes. Cropped cuts sit high; size up for length.',
    website: 'urbanic.com',
    sizes: {
      XXS: { bust: [78, 81], waist: [58, 61], hips: [84, 87], height: [158, 166] },
      XS:  { bust: [82, 85], waist: [62, 65], hips: [88, 91], height: [160, 168] },
      S:   { bust: [86, 89], waist: [66, 69], hips: [92, 95], height: [162, 172] },
      M:   { bust: [90, 94], waist: [70, 74], hips: [96, 100], height: [165, 175] },
      L:   { bust: [95, 100], waist: [75, 80], hips: [101, 106], height: [168, 178] },
      XL:  { bust: [101, 107], waist: [81, 87], hips: [107, 113], height: [170, 180] },
      XXL: { bust: [108, 115], waist: [88, 95], hips: [114, 121], height: [170, 182] }
    },
    bottomSizes: {
      '24': { waist: [60, 63], hips: [86, 89] },
      '26': { waist: [64, 67], hips: [90, 93] },
      '28': { waist: [68, 71], hips: [94, 97] },
      '30': { waist: [72, 76], hips: [98, 102] },
      '32': { waist: [77, 82], hips: [103, 108] },
      '34': { waist: [83, 89], hips: [109, 115] }
    }
  },
  {
    id: 'asos-women',
    name: 'ASOS DESIGN',
    gender: 'women',
    origin: 'UK',
    styleTag: 'Contemporary London Trend',
    fitTendency: 'Standard UK sizing. Fitted through bodice; size up for relaxed streetwear.',
    website: 'asos.com',
    sizes: {
      XXS: { bust: [76, 80], waist: [58, 62], hips: [84, 88], height: [160, 168] },
      XS:  { bust: [81, 85], waist: [63, 67], hips: [89, 93], height: [162, 170] },
      S:   { bust: [86, 90], waist: [68, 72], hips: [94, 98], height: [164, 172] },
      M:   { bust: [91, 96], waist: [73, 78], hips: [99, 104], height: [165, 175] },
      L:   { bust: [97, 103], waist: [79, 85], hips: [105, 111], height: [168, 178] },
      XL:  { bust: [104, 111], waist: [86, 93], hips: [112, 119], height: [170, 180] },
      XXL: { bust: [112, 120], waist: [94, 102], hips: [120, 128], height: [170, 182] }
    },
    bottomSizes: {
      '24': { waist: [60, 63], hips: [85, 88] },
      '26': { waist: [64, 67], hips: [89, 92] },
      '28': { waist: [68, 71], hips: [93, 96] },
      '30': { waist: [72, 76], hips: [97, 101] },
      '32': { waist: [77, 82], hips: [102, 107] },
      '34': { waist: [83, 89], hips: [108, 114] }
    }
  },
  {
    id: 'bewakoof-women',
    name: 'BEWAKOOF',
    gender: 'women',
    origin: 'India',
    styleTag: 'Relaxed Casual Streetwear',
    fitTendency: 'Slightly oversized drop-shoulder fit on boyfriend tees; regular fit on tops.',
    website: 'bewakoof.com',
    sizes: {
      XS:  { bust: [80, 84], waist: [62, 66], hips: [86, 90], height: [158, 166] },
      S:   { bust: [85, 89], waist: [67, 71], hips: [91, 95], height: [160, 168] },
      M:   { bust: [90, 94], waist: [72, 76], hips: [96, 100], height: [162, 172] },
      L:   { bust: [95, 100], waist: [77, 82], hips: [101, 106], height: [165, 175] },
      XL:  { bust: [101, 107], waist: [83, 89], hips: [107, 113], height: [168, 178] },
      XXL: { bust: [108, 115], waist: [90, 97], hips: [114, 121], height: [168, 180] }
    },
    bottomSizes: {
      '26': { waist: [64, 67], hips: [88, 92] },
      '28': { waist: [68, 71], hips: [93, 97] },
      '30': { waist: [72, 76], hips: [98, 102] },
      '32': { waist: [77, 82], hips: [103, 108] },
      '34': { waist: [83, 89], hips: [109, 115] }
    }
  }
];

export const MEN_BRANDS = [
  {
    id: 'zara-men',
    name: 'ZARA',
    gender: 'men',
    origin: 'Spain',
    styleTag: 'European Slim Cut',
    fitTendency: 'Runs 0.5 size smaller. Narrow shoulders & slim torso.',
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
    id: 'hm-men',
    name: 'H&M',
    gender: 'men',
    origin: 'Sweden',
    styleTag: 'Contemporary Regular',
    fitTendency: 'True to size with standard Scandinavian proportions.',
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
    id: 'uniqlo-men',
    name: 'UNIQLO',
    gender: 'men',
    origin: 'Japan',
    styleTag: 'Clean Minimalist Cut',
    fitTendency: 'Generous chest boxiness with slightly shorter sleeve length.',
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
    id: 'levis-men',
    name: "LEVI'S",
    gender: 'men',
    origin: 'USA',
    styleTag: 'American Heritage Standard',
    fitTendency: 'Generous American cut. Roomy chest and straight torso.',
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
    id: 'bewakoof-men',
    name: 'BEWAKOOF',
    gender: 'men',
    origin: 'India',
    styleTag: 'Relaxed Urban Casual',
    fitTendency: 'Slightly relaxed, pre-shrunk cotton with drop shoulder balance.',
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
    id: 'snitch-men',
    name: 'SNITCH',
    gender: 'men',
    origin: 'India',
    styleTag: 'Tailored Fast-Fashion Slim',
    fitTendency: 'Fitted cut across chest and biceps; size up for relaxed comfort.',
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
    id: 'nike-men',
    name: 'NIKE',
    gender: 'men',
    origin: 'USA',
    styleTag: 'Performance Athletic',
    fitTendency: 'Standard athletic fit with ergonomic taper and shoulder freedom.',
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
    id: 'asos-men',
    name: 'ASOS DESIGN',
    gender: 'men',
    origin: 'UK',
    styleTag: 'British Modern Standard',
    fitTendency: 'Designed to fit true to chest; sleeves cut on the longer side.',
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

// Unified brands accessor
export function getBrandsByGender(gender = 'women') {
  return gender === 'women' ? WOMEN_BRANDS : MEN_BRANDS;
}

export const WOMEN_PRESET_PROFILES = [
  {
    name: 'Petite Frame',
    description: 'Slender frame (160cm, 82cm bust, 63cm waist, 89cm hips)',
    data: {
      gender: 'women',
      height: 160,
      bust: 82,
      waist: 63,
      hips: 89,
      shoulder: 38,
      weight: 50,
      fitPreference: 'slim'
    }
  },
  {
    name: 'Standard Hourglass',
    description: 'Balanced proportions (166cm, 88cm bust, 68cm waist, 94cm hips)',
    data: {
      gender: 'women',
      height: 166,
      bust: 88,
      waist: 68,
      hips: 94,
      shoulder: 40,
      weight: 58,
      fitPreference: 'regular'
    }
  },
  {
    name: 'Athletic / Toned',
    description: 'Wider shoulders (172cm, 93cm bust, 73cm waist, 98cm hips)',
    data: {
      gender: 'women',
      height: 172,
      bust: 93,
      waist: 73,
      hips: 98,
      shoulder: 42,
      weight: 64,
      fitPreference: 'regular'
    }
  },
  {
    name: 'Curvy Silhouette',
    description: 'Fuller bust & hips (168cm, 101cm bust, 82cm waist, 108cm hips)',
    data: {
      gender: 'women',
      height: 168,
      bust: 101,
      waist: 82,
      hips: 108,
      shoulder: 43,
      weight: 73,
      fitPreference: 'relaxed'
    }
  }
];

export const MEN_PRESET_PROFILES = [
  {
    name: 'Standard Athletic',
    description: 'Average lean athletic build (178cm, 98cm chest, 82cm waist)',
    data: {
      gender: 'men',
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
    description: 'Slender frame (174cm, 90cm chest, 75cm waist)',
    data: {
      gender: 'men',
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
    description: 'Wide shoulders & chest (183cm, 106cm chest, 88cm waist)',
    data: {
      gender: 'men',
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
    description: 'Prefers oversized drape (180cm, 100cm chest, 84cm waist)',
    data: {
      gender: 'men',
      height: 180,
      chest: 100,
      waist: 84,
      shoulder: 47,
      weight: 78,
      fitPreference: 'relaxed'
    }
  }
];

export const PRESET_PROFILES = WOMEN_PRESET_PROFILES;
