import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckAccentIcon } from './Icons';
import { Cpu } from 'lucide-react';
import { getBrandsByGender } from '../data/sizeCharts';
import { matchBrandSize } from '../utils/matchingEngine';

export default function MatchingEngineScreen({ profile, onComplete }) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(15);
  const isWomen = profile.gender === 'women';

  const steps = isWomen ? [
    'Parsing female anatomical vector dimensions...',
    'Cross-referencing Zara, Mango, H&M, Uniqlo women charts...',
    'Calculating bust-to-waist drop & hip curves...',
    'Calibrating ease allowances & resolving 8 brand sizes...'
  ] : [
    'Parsing anatomical vector dimensions...',
    'Cross-referencing European & Asian brand blocks...',
    'Calibrating ease allowances & fit preference...',
    'Resolving confidence indices across 8 brands...'
  ];

  const brandList = getBrandsByGender(profile.gender).slice(0, 6);
  const brandPreviewList = brandList.map(b => ({
    name: b.name,
    size: matchBrandSize(profile, b).topSize
  }));

  useEffect(() => {
    const timer1 = setTimeout(() => { setStage(1); setProgress(45); }, 600);
    const timer2 = setTimeout(() => { setStage(2); setProgress(75); }, 1300);
    const timer3 = setTimeout(() => { setStage(3); setProgress(100); }, 2000);
    const timer4 = setTimeout(() => { onComplete(); }, 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const chips = isWomen ? [
    { label: 'HEIGHT', value: `${profile.height} CM` },
    { label: 'BUST', value: `${profile.bust || 88} CM` },
    { label: 'WAIST', value: `${profile.waist} CM` },
    { label: 'HIPS', value: `${profile.hips || 94} CM` }
  ] : [
    { label: 'HEIGHT', value: `${profile.height} CM` },
    { label: 'CHEST', value: `${profile.chest} CM` },
    { label: 'WAIST', value: `${profile.waist} CM` },
    { label: 'SHOULDER', value: `${profile.shoulder} CM` }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-8 px-4 sm:px-6 max-w-3xl mx-auto">
      
      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 space-y-2"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-neutral-400 text-xs font-mono tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span>{isWomen ? "WOMEN'S NEURAL FIT COMPUTATION" : "MEN'S NEURAL FIT COMPUTATION"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
          SIZE MATCHING ENGINE
        </h2>
        <p className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
          MAPPING YOUR BIOMETRICS TO BRAND SIZE GEOMETRIES
        </p>
      </motion.div>

      {/* DIAGRAM CONTAINER */}
      <div className="w-full relative flex flex-col items-center">
        
        {/* ROW 1: 4 MEASUREMENT CHIPS AT TOP */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-xl z-10">
          {chips.map((chip, idx) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-2.5 rounded-[10px] bg-[#141414] border border-[#2A2A2A] text-center shadow-lg relative group"
            >
              <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                {chip.label}
              </div>
              <div className="text-sm font-bold text-white tracking-tight font-sans">
                {chip.value}
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white" />
            </motion.div>
          ))}
        </div>

        {/* SVG CONNECTING LINES (TOP CHIPS TO CENTER BOX) */}
        <div className="w-full max-w-xl h-14 relative my-[-2px]">
          <svg className="w-full h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
            <path d="M 75 0 C 75 30, 260 30, 260 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 225 0 C 225 30, 280 30, 280 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 375 0 C 375 30, 320 30, 320 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 525 0 C 525 30, 340 30, 340 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />

            <motion.circle r="3" fill="#FFFFFF">
              <animateMotion path="M 75 0 C 75 30, 260 30, 260 60" dur="1s" repeatCount="indefinite" />
            </motion.circle>
            <motion.circle r="3" fill="#FFFFFF">
              <animateMotion path="M 225 0 C 225 30, 280 30, 280 60" dur="1.2s" repeatCount="indefinite" />
            </motion.circle>
            <motion.circle r="3" fill="#FFFFFF">
              <animateMotion path="M 375 0 C 375 30, 320 30, 320 60" dur="1.1s" repeatCount="indefinite" />
            </motion.circle>
            <motion.circle r="3" fill="#FFFFFF">
              <animateMotion path="M 525 0 C 525 30, 340 30, 340 60" dur="1.3s" repeatCount="indefinite" />
            </motion.circle>
          </svg>
        </div>

        {/* ROW 2: CENTRAL BOX "SIZE MATCHING ENGINE" */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md p-5 rounded-[12px] bg-[#141414] border border-[#2A2A2A] shadow-2xl relative z-10 text-center"
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white animate-ping" />
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-base font-black uppercase tracking-tight text-white font-sans">
              SIZE MATCHING ENGINE
            </span>
          </div>

          <div className="text-xs font-mono text-neutral-300 min-h-[22px] flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>{steps[stage]}</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-full h-2 mt-4 overflow-hidden p-0.5">
            <motion.div 
              className="bg-white h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-neutral-500">
            <span>FIT PREFERENCE: {profile.fitPreference.toUpperCase()}</span>
            <span>{progress}%</span>
          </div>

          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>

        {/* SVG BRANCHING CONNECTING LINES TO BRAND CARDS */}
        <div className="w-full max-w-xl h-14 relative my-[-2px]">
          <svg className="w-full h-full" viewBox="0 0 600 60" preserveAspectRatio="none">
            <path d="M 300 0 C 300 25, 50 25, 50 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 300 0 C 300 25, 150 25, 150 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 300 0 C 300 25, 250 25, 250 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 300 0 C 300 25, 350 25, 350 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 300 0 C 300 25, 450 25, 450 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <path d="M 300 0 C 300 25, 550 25, 550 60" stroke="#333333" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />

            <motion.circle r="2.5" fill="#FFFFFF">
              <animateMotion path="M 300 0 C 300 25, 50 25, 50 60" dur="1s" repeatCount="indefinite" />
            </motion.circle>
            <motion.circle r="2.5" fill="#FFFFFF">
              <animateMotion path="M 300 0 C 300 25, 250 25, 250 60" dur="0.9s" repeatCount="indefinite" />
            </motion.circle>
            <motion.circle r="2.5" fill="#FFFFFF">
              <animateMotion path="M 300 0 C 300 25, 450 25, 450 60" dur="1.1s" repeatCount="indefinite" />
            </motion.circle>
            <motion.circle r="2.5" fill="#FFFFFF">
              <animateMotion path="M 300 0 C 300 25, 550 25, 550 60" dur="0.8s" repeatCount="indefinite" />
            </motion.circle>
          </svg>
        </div>

        {/* ROW 3: BRANCHED BRAND MINI CARDS BELOW */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full max-w-xl z-10">
          {brandPreviewList.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: stage >= 1 ? 1 : 0.3, 
                scale: stage >= 2 ? 1 : 0.95 
              }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="p-2 rounded-[8px] bg-[#141414] border border-[#2A2A2A] text-center"
            >
              <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider truncate">
                {brand.name}
              </div>
              <div className="text-xs font-bold text-white mt-1">
                {stage >= 2 ? (
                  <span className="text-white font-mono bg-[#1E1E1E] px-1.5 py-0.5 rounded border border-[#333]">
                    {brand.size}
                  </span>
                ) : (
                  <span className="text-neutral-600 animate-pulse">...</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="mt-8">
        <button
          onClick={onComplete}
          className="text-xs font-mono text-neutral-500 hover:text-white uppercase tracking-wider transition-colors underline underline-offset-4"
        >
          SKIP ANIMATION →
        </button>
      </div>

    </div>
  );
}
