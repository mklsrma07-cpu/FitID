import React from 'react';
import { motion } from 'framer-motion';
import { CheckAccentIcon } from './Icons';
import { RotateCcw } from 'lucide-react';

export default function Header({ 
  currentScreen, 
  onNavigate, 
  hasProfile,
  profile,
  onReset,
  onSwitchGender
}) {
  const isWomen = profile?.gender === 'women';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#2A2A2A] px-4 sm:px-6 py-3.5 transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-8 rounded-[8px] bg-[#141414] border border-[#2A2A2A] flex items-center justify-center group-hover:border-neutral-500 transition-colors">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12l-1 6-2 1v11H9V10L7 9 6 3z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white uppercase font-sans">
                FITID
              </span>
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 px-1.5 py-0.5 rounded bg-[#1A1A1A] border border-[#2A2A2A]">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-neutral-500 tracking-wider uppercase font-medium hidden sm:block">
              UNIVERSAL SIZE PROFILE
            </p>
          </div>
        </button>

        {/* Center / Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Gender pill toggle */}
          <button
            onClick={onSwitchGender}
            title="Switch Women / Men Section"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] hover:border-neutral-500 text-[11px] font-mono text-neutral-300 transition-colors cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>{isWomen ? "WOMEN'S" : "MEN'S"}</span>
          </button>

          {/* Status pill if profile saved */}
          {hasProfile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-[11px] font-mono text-neutral-300"
            >
              <CheckAccentIcon className="w-3.5 h-3.5" />
              <span>SAVED</span>
            </motion.div>
          )}

          {/* Quick Screen Nav Links */}
          {hasProfile && (
            <div className="flex items-center bg-[#141414] p-0.5 rounded-[10px] border border-[#2A2A2A]">
              <button
                onClick={() => onNavigate('measure')}
                className={`px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase rounded-[8px] transition-all cursor-pointer ${
                  currentScreen === 'measure'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                EDIT
              </button>
              <button
                onClick={() => onNavigate('results')}
                className={`px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase rounded-[8px] transition-all cursor-pointer ${
                  currentScreen === 'results'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                SIZES
              </button>
              <button
                onClick={() => onNavigate('demo')}
                className={`px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase rounded-[8px] transition-all cursor-pointer ${
                  currentScreen === 'demo'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                DEMO
              </button>
            </div>
          )}

          {/* Reset profile action button */}
          {hasProfile && (
            <button
              onClick={onReset}
              title="Reset profile"
              className="w-8 h-8 rounded-[8px] bg-[#141414] border border-[#2A2A2A] text-neutral-400 hover:text-white hover:border-neutral-500 flex items-center justify-center transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
