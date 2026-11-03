import React from 'react';
import { motion } from 'framer-motion';
import BodyFigure from './BodyFigure';
import TShirtIcon, { CheckAccentIcon } from './Icons';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function HeroScreen({ onStart, hasSavedProfile, onQuickDemo }) {
  return (
    <div className="min-h-[calc(100vh-65px)] flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Top Banner tag */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-neutral-400 text-xs font-mono tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>ZERO GUESSWORK. ZERO RETURNS.</span>
        </div>
      </motion.div>

      {/* Main Hero Header */}
      <div className="text-center mt-6 sm:mt-8 space-y-3">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none font-sans"
        >
          YOUR UNIVERSAL<br />SIZE PROFILE
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-400"
        >
          ONE PROFILE. MULTIPLE BRANDS.
        </motion.p>
      </div>

      {/* Hero Visual Area: Outline body figure NEXT TO phone-style card "Size profile" */}
      <div className="my-8 sm:my-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto w-full">
        
        {/* Left: Body Outline Figure */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative flex flex-col items-center justify-center bg-[#141414] border border-[#2A2A2A] rounded-[12px] p-6 sm:p-8"
        >
          <div className="absolute top-3.5 left-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-600" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
              BODY TOPOLOGY
            </span>
          </div>

          <div className="w-full max-w-[220px] pt-4">
            <BodyFigure 
              activePart="chest"
              measurements={{ height: 178, chest: 98, waist: 82, shoulder: 46 }}
              interactive={false}
              compact={false}
            />
          </div>

          <div className="mt-3 text-center">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
              PRECISION VECTOR ANATOMY
            </span>
          </div>
        </motion.div>

        {/* Right: Phone-style card "Size profile" */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mx-auto w-full max-w-[320px] bg-[#141414] border border-[#2A2A2A] rounded-[24px] p-4 sm:p-5 shadow-2xl flex flex-col justify-between"
          style={{ minHeight: '380px' }}
        >
          {/* Phone top notch */}
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#2A2A2A]/60">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-neutral-500">9:41</span>
            </div>
            <div className="w-14 h-3 bg-[#0B0B0B] border border-[#2A2A2A] rounded-full mx-auto" />
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2 border border-neutral-500 rounded-[1px]" />
            </div>
          </div>

          {/* Card Header inside phone */}
          <div className="space-y-1 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                FITID PASS #082
              </span>
              <CheckAccentIcon className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight text-white">
              SIZE PROFILE
            </h3>
            <p className="text-[11px] text-neutral-400">
              Synced across 8 global fashion standards
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="p-2.5 rounded-[8px] bg-[#0B0B0B] border border-[#2A2A2A]">
              <span className="text-[9px] font-mono text-neutral-500 uppercase block">CHEST</span>
              <span className="text-sm font-bold text-white tracking-tight">98 CM</span>
            </div>
            <div className="p-2.5 rounded-[8px] bg-[#0B0B0B] border border-[#2A2A2A]">
              <span className="text-[9px] font-mono text-neutral-500 uppercase block">SHOULDER</span>
              <span className="text-sm font-bold text-white tracking-tight">46 CM</span>
            </div>
          </div>

          {/* Brand Size Preview Stack */}
          <div className="space-y-1.5 mb-4">
            <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-1">
              RESOLVED SIZES
            </div>

            <div className="flex items-center justify-between p-2 rounded-[8px] bg-[#0B0B0B] border border-[#2A2A2A]">
              <div className="flex items-center gap-2">
                <TShirtIcon className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-xs font-semibold tracking-wider text-white">ZARA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-neutral-500">96% fit</span>
                <span className="w-6 h-6 rounded-[6px] bg-[#1E1E1E] border border-[#3A3A3A] flex items-center justify-center font-bold text-xs text-white">
                  L
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 rounded-[8px] bg-[#0B0B0B] border border-[#2A2A2A]">
              <div className="flex items-center gap-2">
                <TShirtIcon className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-xs font-semibold tracking-wider text-white">UNIQLO</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-neutral-500">98% fit</span>
                <span className="w-6 h-6 rounded-[6px] bg-[#1E1E1E] border border-[#3A3A3A] flex items-center justify-center font-bold text-xs text-white">
                  M
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 rounded-[8px] bg-[#0B0B0B] border border-[#2A2A2A]">
              <div className="flex items-center gap-2">
                <TShirtIcon className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-xs font-semibold tracking-wider text-white">SNITCH</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-neutral-500">95% fit</span>
                <span className="w-6 h-6 rounded-[6px] bg-[#1E1E1E] border border-[#3A3A3A] flex items-center justify-center font-bold text-xs text-white">
                  L
                </span>
              </div>
            </div>
          </div>

          <div className="text-center pt-1 border-t border-[#2A2A2A]/40">
            <span className="text-[10px] font-mono text-neutral-400">
              TAP BELOW TO ENTER YOUR PROFILE
            </span>
          </div>
        </motion.div>

      </div>

      {/* Supported Brands Marquee / Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-xl mx-auto py-3 px-4 rounded-[12px] bg-[#141414] border border-[#2A2A2A] flex flex-wrap items-center justify-between gap-3 text-neutral-400 text-xs font-semibold tracking-widest uppercase mb-6"
      >
        <span>ZARA</span>
        <span className="text-neutral-700">•</span>
        <span>H&M</span>
        <span className="text-neutral-700">•</span>
        <span>UNIQLO</span>
        <span className="text-neutral-700">•</span>
        <span>LEVI'S</span>
        <span className="text-neutral-700">•</span>
        <span>BEWAKOOF</span>
        <span className="text-neutral-700">•</span>
        <span>SNITCH</span>
      </motion.div>

      {/* Action CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto"
      >
        <button
          onClick={onStart}
          className="w-full sm:w-auto flex-1 h-13 px-8 rounded-[12px] bg-white hover:bg-neutral-200 text-black font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-white/5"
        >
          <span>{hasSavedProfile ? 'UPDATE MEASUREMENTS' : 'GET STARTED'}</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        {hasSavedProfile && (
          <button
            onClick={onQuickDemo}
            className="w-full sm:w-auto h-13 px-6 rounded-[12px] bg-[#141414] hover:bg-[#1A1A1A] border border-[#2A2A2A] text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <span>VIEW SIZES</span>
          </button>
        )}
      </motion.div>

    </div>
  );
}
