import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TShirtIcon, { WomensTopIcon, DressIcon, PantsIcon, CheckAccentIcon } from './Icons';
import { Search, ChevronDown, ChevronUp, SlidersHorizontal, ArrowRight, Share2, Sparkles, ExternalLink } from 'lucide-react';

export default function ResultsScreen({ 
  profile, 
  matchedBrands, 
  onEditProfile, 
  onGoToDemo,
  onOpenShare,
  onSwitchGender
}) {
  const isWomen = profile.gender === 'women';
  const [category, setCategory] = useState('tops'); // 'tops' | 'bottoms' | 'dresses'
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedBrand, setExpandedBrand] = useState(null);

  const toggleExpand = (brandId) => {
    setExpandedBrand(expandedBrand === brandId ? null : brandId);
  };

  const filteredBrands = matchedBrands.filter(b => {
    return b.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
           b.styleTag.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="text-center mb-6 sm:mb-8 space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-neutral-400 bg-[#141414] border border-[#2A2A2A] px-3 py-1 rounded-full"
        >
          <CheckAccentIcon className="w-3.5 h-3.5" />
          <span>{isWomen ? "WOMEN'S RESOLUTION" : "MEN'S RESOLUTION"} • {matchedBrands.length} BRANDS MATCHED</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans leading-tight"
        >
          SAME PERSON.<br />DIFFERENT BRAND SIZES.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm font-mono tracking-wider text-neutral-400 uppercase max-w-lg mx-auto"
        >
          OFFICIAL ONLINE BRAND DATASETS MATCHED TO YOUR EXACT BIOMETRICS.
        </motion.p>
      </div>

      {/* Summary Profile Banner */}
      <div className="mb-6 p-4 rounded-[12px] bg-[#141414] border border-[#2A2A2A] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-xs font-mono font-bold text-white uppercase">
              {isWomen ? "WOMEN'S FITID:" : "MEN'S FITID:"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {isWomen ? (
              <>
                <span className="px-2 py-0.5 rounded-[6px] bg-[#0B0B0B] border border-[#2A2A2A] text-xs font-bold text-white font-mono">
                  BUST: {profile.bust || 88} CM
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-[#0B0B0B] border border-[#2A2A2A] text-xs font-bold text-white font-mono">
                  WAIST: {profile.waist} CM
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-[#0B0B0B] border border-[#2A2A2A] text-xs font-bold text-white font-mono">
                  HIPS: {profile.hips || 94} CM
                </span>
              </>
            ) : (
              <>
                <span className="px-2 py-0.5 rounded-[6px] bg-[#0B0B0B] border border-[#2A2A2A] text-xs font-bold text-white font-mono">
                  CHEST: {profile.chest} CM
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-[#0B0B0B] border border-[#2A2A2A] text-xs font-bold text-white font-mono">
                  WAIST: {profile.waist} CM
                </span>
                <span className="px-2 py-0.5 rounded-[6px] bg-[#0B0B0B] border border-[#2A2A2A] text-xs font-bold text-white font-mono">
                  SHOULDER: {profile.shoulder} CM
                </span>
              </>
            )}
            <span className="px-2 py-0.5 rounded-[6px] bg-[#0B0B0B] border border-[#2A2A2A] text-xs text-neutral-300 font-mono capitalize">
              {profile.fitPreference} fit
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onSwitchGender && (
            <button
              onClick={onSwitchGender}
              className="px-3 py-1 text-xs font-mono tracking-wider text-neutral-300 hover:text-white bg-[#1C1C1C] hover:bg-[#252525] border border-[#333333] rounded-[8px] transition-all uppercase"
            >
              SWITCH TO {isWomen ? "MEN'S" : "WOMEN'S"}
            </button>
          )}

          <button
            onClick={onEditProfile}
            className="px-3 py-1 text-xs font-mono tracking-wider text-neutral-300 hover:text-white bg-[#1C1C1C] hover:bg-[#252525] border border-[#333333] rounded-[8px] transition-all uppercase"
          >
            EDIT
          </button>
          {onOpenShare && (
            <button
              onClick={onOpenShare}
              title="Share FitID Card"
              className="p-1.5 rounded-[8px] bg-[#1C1C1C] hover:bg-[#252525] border border-[#333333] text-neutral-300 hover:text-white transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Controls: Search & Category Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
        
        {/* Category switcher */}
        <div className="flex items-center bg-[#141414] border border-[#2A2A2A] p-1 rounded-[10px] w-full sm:w-auto">
          <button
            onClick={() => setCategory('tops')}
            className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-[8px] transition-all flex items-center justify-center gap-1.5 ${
              category === 'tops'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {isWomen ? <WomensTopIcon className="w-3.5 h-3.5" /> : <TShirtIcon className="w-3.5 h-3.5" />}
            <span>TOPS &amp; TEES</span>
          </button>

          {isWomen && (
            <button
              onClick={() => setCategory('dresses')}
              className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-[8px] transition-all flex items-center justify-center gap-1.5 ${
                category === 'dresses'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <DressIcon className="w-3.5 h-3.5" />
              <span>DRESSES</span>
            </button>
          )}

          <button
            onClick={() => setCategory('bottoms')}
            className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-[8px] transition-all flex items-center justify-center gap-1.5 ${
              category === 'bottoms'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <PantsIcon className="w-3.5 h-3.5" />
            <span>{isWomen ? 'JEANS & SKIRTS' : 'PANTS & JEANS'}</span>
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="FILTER BRANDS..."
            className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-neutral-500 rounded-[10px] pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none font-mono"
          />
        </div>

      </div>

      {/* STACKED LIST OF BRAND CARDS */}
      <div className="space-y-3">
        {filteredBrands.map((brand, idx) => {
          const isExpanded = expandedBrand === brand.brandId;
          const displaySize = category === 'bottoms' ? brand.bottomSize : brand.topSize;

          return (
            <motion.div
              key={brand.brandId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className={`rounded-[12px] bg-[#141414] border transition-all ${
                isExpanded ? 'border-neutral-400' : 'border-[#2A2A2A] hover:border-neutral-600'
              }`}
            >
              {/* Main Card Header */}
              <div 
                onClick={() => toggleExpand(brand.brandId)}
                className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none"
              >
                
                {/* Left: Line Icon + Brand Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 rounded-[10px] bg-[#0B0B0B] border border-[#2A2A2A] flex items-center justify-center text-white shrink-0">
                    {category === 'bottoms' ? (
                      <PantsIcon className="w-5 h-5 stroke-[1.5]" />
                    ) : category === 'dresses' ? (
                      <DressIcon className="w-5 h-5 stroke-[1.5]" />
                    ) : isWomen ? (
                      <WomensTopIcon className="w-5 h-5 stroke-[1.5]" />
                    ) : (
                      <TShirtIcon className="w-5 h-5 stroke-[1.5]" />
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white font-sans">
                        {brand.brandName}
                      </h3>
                      <span className="text-[10px] font-mono text-neutral-400 px-1.5 py-0.5 rounded bg-[#1C1C1C] border border-[#2A2A2A] uppercase">
                        {brand.origin}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-neutral-400 font-medium">
                        {brand.styleTag}
                      </span>
                      <span className="text-neutral-700 hidden sm:inline">•</span>
                      <span className="text-[11px] text-neutral-500 font-mono hidden sm:inline truncate max-w-[260px]">
                        {brand.fitTendency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Big Boxed Size Letter + Fit Confidence % */}
                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="text-right hidden xs:block">
                    <div className="flex items-center justify-end gap-1.5 text-xs font-mono text-neutral-300">
                      <CheckAccentIcon className="w-3.5 h-3.5" />
                      <span>{brand.confidence}%</span>
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">
                      CONFIDENCE
                    </div>
                  </div>

                  {/* BIG BOXED SIZE LETTER */}
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-[12px] bg-[#0B0B0B] border-2 border-white/90 flex flex-col items-center justify-center shadow-lg shrink-0"
                  >
                    <span className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight leading-none">
                      {displaySize}
                    </span>
                    <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-tighter mt-0.5">
                      {category === 'bottoms' ? 'IN' : 'SIZE'}
                    </span>
                  </motion.div>

                  <div className="text-neutral-500">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

              </div>

              {/* Expandable Breakdown Drawer */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-[#2A2A2A] bg-[#0F0F0F] p-4 sm:p-5 rounded-b-[12px]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Left: Fit Diagnostic */}
                      <div className="space-y-3">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                          DATASET FIT DIAGNOSTIC
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                          {brand.fitNote}
                        </p>
                        
                        <div className="p-2.5 rounded-[8px] bg-[#141414] border border-[#2A2A2A] space-y-1.5 text-[11px] font-mono">
                          <div className="flex justify-between">
                            <span className="text-neutral-500 uppercase">OFFICIAL CUT:</span>
                            <span className="text-white font-medium">{brand.styleTag}</span>
                          </div>
                          
                          {brand.range.bust && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500 uppercase">BUST BRACKET:</span>
                              <span className="text-neutral-300 font-medium">{brand.range.bust[0]}-{brand.range.bust[1]} cm</span>
                            </div>
                          )}

                          {brand.range.chest && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500 uppercase">CHEST BRACKET:</span>
                              <span className="text-neutral-300 font-medium">{brand.range.chest[0]}-{brand.range.chest[1]} cm</span>
                            </div>
                          )}

                          {brand.range.waist && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500 uppercase">WAIST BRACKET:</span>
                              <span className="text-neutral-300 font-medium">{brand.range.waist[0]}-{brand.range.waist[1]} cm</span>
                            </div>
                          )}

                          {brand.range.hips && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500 uppercase">HIPS BRACKET:</span>
                              <span className="text-neutral-300 font-medium">{brand.range.hips[0]}-{brand.range.hips[1]} cm</span>
                            </div>
                          )}

                          <div className="flex justify-between">
                            <span className="text-neutral-500 uppercase">FIT PREFERENCE:</span>
                            <span className="text-[#10B981] font-medium uppercase">{profile.fitPreference} (APPLIED)</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Sizing Spectrum */}
                      <div className="space-y-3">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                          SIZING TOLERANCE SPECTRUM
                        </div>

                        <div className="space-y-2">
                          {brand.sizeScores.slice(0, 5).map((item) => {
                            const isSelected = item.size === brand.topSize;
                            return (
                              <div key={item.size} className="space-y-1">
                                <div className="flex justify-between text-[11px] font-mono">
                                  <span className={`font-bold ${isSelected ? 'text-white' : 'text-neutral-400'}`}>
                                    SIZE {item.size} {isSelected && '(RECOMMENDED)'}
                                  </span>
                                  <span className={isSelected ? 'text-[#10B981] font-bold' : 'text-neutral-500'}>
                                    {item.score}% match
                                  </span>
                                </div>
                                <div className="w-full bg-[#1A1A1A] h-1.5 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full rounded-full ${isSelected ? 'bg-white' : 'bg-neutral-600'}`}
                                    style={{ width: `${item.score}%` }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA to Product Demo */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 p-6 rounded-[12px] bg-[#141414] border border-[#2A2A2A] text-center max-w-xl mx-auto space-y-4"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#333] text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
          E-COMMERCE INTEGRATION PREVIEW
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-sans">
          SEE FITID ON A PRODUCT PAGE
        </h3>

        <p className="text-xs text-neutral-400 font-mono uppercase max-w-sm mx-auto">
          EXPERIENCE HOW SIZES AUTO-RESOLVE DYNAMICALLY IN ONLINE SHOPPING CART DEMOS.
        </p>

        <button
          onClick={onGoToDemo}
          className="w-full h-13 rounded-[12px] bg-white hover:bg-neutral-200 text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-white/5 cursor-pointer"
        >
          <span>OPEN PRODUCT DEMO</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </motion.div>

    </div>
  );
}
