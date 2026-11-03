import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TShirtIcon, { WomensTopIcon, CheckAccentIcon } from './Icons';
import { getBrandsByGender } from '../data/sizeCharts';
import { matchBrandSize } from '../utils/matchingEngine';
import { ShoppingBag, ArrowLeft, Heart, Check, Ruler } from 'lucide-react';

export default function ProductDemoScreen({ 
  profile, 
  onBackToResults, 
  onEditProfile 
}) {
  const isWomen = profile.gender === 'women';
  const brands = getBrandsByGender(profile.gender);

  const [selectedBrandId, setSelectedBrandId] = useState(brands[0]?.id || 'zara-women');
  const [selectedColor, setSelectedColor] = useState('black');
  
  // Calculate recommended size for current selected brand
  const currentBrand = brands.find(b => b.id === selectedBrandId) || brands[0];
  const matchResult = matchBrandSize(profile, currentBrand);
  const recommendedSize = matchResult.topSize;

  // Active selected size (defaults to recommended)
  const [userSelectedSize, setUserSelectedSize] = useState(recommendedSize);

  // Sync if brand changes
  const handleBrandChange = (brandId) => {
    setSelectedBrandId(brandId);
    const newBrand = brands.find(b => b.id === brandId) || brands[0];
    const newMatch = matchBrandSize(profile, newBrand);
    setUserSelectedSize(newMatch.topSize);
  };

  const sizes = isWomen ? ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'] : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const colors = [
    { id: 'black', name: 'OBSIDIAN BLACK', bg: '#0F0F0F', border: '#333' },
    { id: 'white', name: 'OPTIC WHITE', bg: '#F5F5F5', border: '#FFF' },
    { id: 'charcoal', name: 'CHARCOAL HEATHER', bg: '#2B2B2B', border: '#444' }
  ];

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Top Navigation & Status */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2A2A2A]">
        <button
          onClick={onBackToResults}
          className="flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-400 hover:text-white uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL BRAND SIZES</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#2A2A2A] text-neutral-300 uppercase">
            {isWomen ? "WOMEN'S SECTION" : "MEN'S SECTION"}
          </span>
          <button
            onClick={onEditProfile}
            className="text-xs font-mono tracking-wider text-neutral-400 hover:text-white uppercase transition-colors"
          >
            EDIT BIOMETRICS
          </button>
        </div>
      </div>

      {/* Screen Title */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-block px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
          LIVE E-COMMERCE DEMO
        </div>
        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
          PRODUCT FIT INTEGRATION
        </h2>
        <p className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
          SWITCH BRANDS BELOW TO OBSERVE SIZES AUTO-CALIBRATING ACROSS REAL DATASETS.
        </p>
      </div>

      {/* Brand Switcher Bar */}
      <div className="mb-8 p-3 rounded-[12px] bg-[#141414] border border-[#2A2A2A]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
          SIMULATE {isWomen ? "WOMEN'S" : "MEN'S"} STOREFRONT BRAND:
        </div>
        <div className="flex flex-wrap gap-2">
          {brands.map(brand => {
            const isSelected = brand.id === selectedBrandId;
            const bMatch = matchBrandSize(profile, brand);
            return (
              <button
                key={brand.id}
                onClick={() => handleBrandChange(brand.id)}
                className={`px-3 py-1.5 rounded-[8px] text-xs font-bold tracking-wider uppercase border transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-sm'
                    : 'bg-[#0B0B0B] text-neutral-400 border-[#2A2A2A] hover:border-neutral-500 hover:text-white'
                }`}
              >
                <span>{brand.name}</span>
                <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${isSelected ? 'bg-neutral-200 text-black' : 'bg-[#1C1C1C] text-neutral-400'}`}>
                  {bMatch.topSize}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* PRODUCT CARD CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-[#141414] border border-[#2A2A2A] rounded-[16px] p-5 sm:p-8">
        
        {/* Left Column: Product Visual Mockup */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-[12px] bg-[#0B0B0B] border border-[#2A2A2A] relative">
          
          <div className="absolute top-3.5 left-4 flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
              {currentBrand.name} {isWomen ? "WOMEN" : "MEN"}
            </span>
          </div>

          <div className="absolute top-3.5 right-4">
            <button className="text-neutral-500 hover:text-white transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Minimal line-art garment illustration */}
          <div className="w-full max-w-[200px] my-6 flex items-center justify-center">
            <div className="relative">
              {isWomen ? (
                <WomensTopIcon className="w-44 h-44 text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.06)]" strokeWidth={1.2} />
              ) : (
                <TShirtIcon className="w-44 h-44 text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.06)]" strokeWidth={1.2} />
              )}
              
              <div className="absolute inset-0 flex items-center justify-center pt-2">
                <span className="text-3xl font-black font-sans text-neutral-700/60 select-none">
                  {userSelectedSize}
                </span>
              </div>
            </div>
          </div>

          {/* Color swatches */}
          <div className="flex items-center gap-2 mt-2">
            {colors.map(col => (
              <button
                key={col.id}
                onClick={() => setSelectedColor(col.id)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === col.id ? 'border-white scale-110' : 'border-neutral-700'
                }`}
                style={{ backgroundColor: col.bg }}
                title={col.name}
              />
            ))}
          </div>
          <div className="text-[10px] font-mono text-neutral-500 mt-2 uppercase">
            COLOR: {colors.find(c => c.id === selectedColor)?.name}
          </div>
        </div>

        {/* Right Column: Product Details & Size Selector */}
        <div className="md:col-span-7 space-y-6">
          
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                {isWomen ? "ORGANIC RIBBED MODAL FIBERS" : "100% HEAVYWEIGHT COTTON"}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                SKU: FT-{isWomen ? 'W' : 'M'}-{currentBrand.name.toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans">
              {isWomen ? "RIBBED MODAL FITTED TEE" : "ESSENTIAL COTTON TEE"}
            </h1>
            
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xl font-bold font-mono text-white">
                $36.00
              </span>
              <span className="text-xs text-neutral-500 uppercase font-mono">
                VAT INCLUDED
              </span>
            </div>
          </div>

          {/* THE HIGHLIGHT BAR: "YOUR RECOMMENDED SIZE: S / M" */}
          <motion.div 
            key={`${selectedBrandId}-${recommendedSize}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3.5 rounded-[12px] bg-[#0B0B0B] border border-[#2A2A2A] shadow-md space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckAccentIcon className="w-4 h-4 shrink-0" />
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  YOUR RECOMMENDED SIZE: <span className="underline underline-offset-4 decoration-2 decoration-white">{recommendedSize}</span>
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#10B981] font-bold">
                {matchResult.confidence}% FIT
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 leading-relaxed font-sans pl-6">
              Based on your {isWomen ? "women's" : "men's"} biometrics ({isWomen ? `${profile.bust || 88}cm bust, ${profile.waist}cm waist` : `${profile.chest}cm chest, ${profile.shoulder}cm shoulder`}) calibrated to {currentBrand.name}'s {currentBrand.styleTag.toLowerCase()}.
            </p>
          </motion.div>

          {/* SIZE SELECTOR */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                SELECT SIZE
              </span>
              <button 
                onClick={onBackToResults}
                className="text-[10px] font-mono text-neutral-400 hover:text-white uppercase flex items-center gap-1"
              >
                <Ruler className="w-3 h-3" />
                <span>VIEW SIZE CHART</span>
              </button>
            </div>

            <div className={`grid ${sizes.length > 6 ? 'grid-cols-7' : 'grid-cols-6'} gap-1.5 sm:gap-2`}>
              {sizes.map((sz) => {
                const isRecommended = sz === recommendedSize;
                const isSelected = sz === userSelectedSize;

                return (
                  <button
                    key={sz}
                    onClick={() => setUserSelectedSize(sz)}
                    className={`relative h-13 rounded-[10px] flex flex-col items-center justify-center border font-sans font-black transition-all ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-md'
                        : isRecommended
                        ? 'bg-[#181818] text-white border-neutral-400 hover:border-white'
                        : 'bg-[#0B0B0B] text-neutral-400 border-[#2A2A2A] hover:border-neutral-500 hover:text-white'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold tracking-tight">
                      {sz}
                    </span>

                    {isRecommended && (
                      <span className={`text-[7px] sm:text-[8px] font-mono tracking-tighter uppercase px-1 rounded-sm mt-0.5 ${
                        isSelected ? 'bg-neutral-900 text-white' : 'bg-[#10B981]/20 text-[#10B981]'
                      }`}>
                        BEST FIT
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {userSelectedSize !== recommendedSize && (
              <p className="text-[11px] text-neutral-400 font-mono mt-1">
                Note: You chose size {userSelectedSize}. FitID recommends {recommendedSize} for optimal {profile.fitPreference} fit.
              </p>
            )}
          </div>

          {/* ADD TO BAG */}
          <div className="pt-2 space-y-3">
            <button
              onClick={() => alert(`Added ${currentBrand.name} (Size: ${userSelectedSize}) to bag!`)}
              className="w-full h-13 rounded-[12px] bg-white hover:bg-neutral-200 text-black font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-white/5 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
              <span>ADD SIZE {userSelectedSize} TO BAG</span>
            </button>

            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-2 border-t border-[#2A2A2A]">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-neutral-400" />
                FIT GUARANTEED BY FITID
              </span>
              <span>FREE 30-DAY ZERO-FRICTION RETURNS</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
