import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BodyFigure from './BodyFigure';
import { CheckAccentIcon } from './Icons';
import { PRESET_PROFILES } from '../data/sizeCharts';
import { ArrowRight, HelpCircle, Check, Info } from 'lucide-react';

export default function MeasurementForm({ initialProfile, onSubmit }) {
  const [unit, setUnit] = useState(initialProfile?.unit || 'cm');
  const [activePart, setActivePart] = useState('chest');
  const [showHelper, setShowHelper] = useState(null);

  // Measurements state
  const [formData, setFormData] = useState({
    height: initialProfile?.height || 178,
    chest: initialProfile?.chest || 98,
    waist: initialProfile?.waist || 82,
    shoulder: initialProfile?.shoulder || 46,
    weight: initialProfile?.weight || 74,
    fitPreference: initialProfile?.fitPreference || 'regular'
  });

  // Validation rules (in cm)
  const isValid = {
    height: formData.height >= 140 && formData.height <= 220,
    chest: formData.chest >= 70 && formData.chest <= 150,
    waist: formData.waist >= 55 && formData.waist <= 140,
    shoulder: formData.shoulder >= 35 && formData.shoulder <= 65,
    weight: !formData.weight || (formData.weight >= 40 && formData.weight <= 160)
  };

  const isFormValid = isValid.height && isValid.chest && isValid.waist && isValid.shoulder;

  const handleChange = (field, val) => {
    const num = val === '' ? '' : Number(val);
    setFormData(prev => ({ ...prev, [field]: num }));
  };

  const applyPreset = (preset) => {
    setFormData({ ...preset.data });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (isFormValid) {
      onSubmit({ ...formData, unit });
    }
  };

  const fieldHelperInfo = {
    height: 'Measure barefoot from the top of your head to the floor against a flat wall.',
    shoulder: 'Measure across the back from the edge of one shoulder bone across to the other.',
    chest: 'Wrap the tape under your armpits around the fullest part of your chest/bust horizontally.',
    waist: 'Measure around your natural waistline, typically narrowest point above belly button.',
    weight: 'Optional body mass used for volume adjustment and drape estimation.'
  };

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="text-center mb-8 sm:mb-10 space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-[11px] font-mono tracking-widest uppercase text-neutral-400 bg-[#141414] border border-[#2A2A2A] px-3 py-1 rounded-full"
        >
          STEP 01 / 02
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans"
        >
          ENTER IT ONCE.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm font-mono tracking-wider text-neutral-400 uppercase"
        >
          INPUT YOUR MEASUREMENTS. WE RESOLVE YOUR SIZE FOR EVERY BRAND.
        </motion.p>
      </div>

      {/* Preset selector bar */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-[#141414] border border-[#2A2A2A] rounded-[12px]">
        <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono">
          <span className="text-neutral-500 uppercase tracking-wider text-[11px]">QUICK PRESETS:</span>
        </div>
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
          {PRESET_PROFILES.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => applyPreset(preset)}
              className="px-2.5 py-1 text-[11px] font-mono rounded-[8px] bg-[#1E1E1E] hover:bg-[#2A2A2A] text-neutral-300 hover:text-white border border-[#2F2F2F] transition-all"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Form Layout: Body outline on left; inputs on right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Body Outline Figure */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 bg-[#141414] border border-[#2A2A2A] rounded-[12px] p-5 flex flex-col items-center justify-center relative sticky top-20"
        >
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              INTERACTIVE GUIDE
            </span>
            <span className="text-[10px] font-mono text-neutral-500">
              TAP ZONE TO FOCUS
            </span>
          </div>

          <BodyFigure 
            activePart={activePart}
            onSelectPart={(part) => setActivePart(part)}
            measurements={formData}
            unit={unit}
            interactive={true}
          />

          {/* Active measurement tip pill */}
          <div className="w-full mt-4 p-3 rounded-[8px] bg-[#0B0B0B] border border-[#2A2A2A] text-left">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-neutral-400 mb-1">
              <span>HOW TO MEASURE: {activePart}</span>
              <Info className="w-3 h-3 text-neutral-500" />
            </div>
            <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
              {fieldHelperInfo[activePart] || 'Focus on an input to see measuring guidance.'}
            </p>
          </div>
        </motion.div>

        {/* Right Column: Measurement Inputs Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="md:col-span-7 space-y-4"
        >
          
          {/* Unit Toggle and Micro-header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#2A2A2A]">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
              CORE METRICS (CENTIMETERS)
            </span>
            <div className="flex items-center bg-[#141414] border border-[#2A2A2A] rounded-[8px] p-0.5">
              <button
                type="button"
                onClick={() => setUnit('cm')}
                className={`px-2.5 py-0.5 text-[10px] font-mono rounded-[6px] transition-all ${
                  unit === 'cm' ? 'bg-white text-black font-bold' : 'text-neutral-400'
                }`}
              >
                CM
              </button>
              <button
                type="button"
                onClick={() => setUnit('in')}
                className={`px-2.5 py-0.5 text-[10px] font-mono rounded-[6px] transition-all ${
                  unit === 'in' ? 'bg-white text-black font-bold' : 'text-neutral-400'
                }`}
              >
                IN
              </button>
            </div>
          </div>

          {/* 1. HEIGHT FIELD */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
              activePart === 'height' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
            }`}
            onClick={() => setActivePart('height')}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="height-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                HEIGHT
              </label>
              {isValid.height && <CheckAccentIcon className="w-4 h-4" />}
            </div>
            <div className="flex items-center justify-between">
              <input
                id="height-input"
                type="number"
                value={formData.height}
                onChange={(e) => handleChange('height', e.target.value)}
                onFocus={() => setActivePart('height')}
                placeholder="178"
                min="130"
                max="230"
                className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
              />
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                {unit}
              </span>
            </div>
          </motion.div>

          {/* 2. CHEST FIELD */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
              activePart === 'chest' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
            }`}
            onClick={() => setActivePart('chest')}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="chest-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                CHEST
              </label>
              {isValid.chest && <CheckAccentIcon className="w-4 h-4" />}
            </div>
            <div className="flex items-center justify-between">
              <input
                id="chest-input"
                type="number"
                value={formData.chest}
                onChange={(e) => handleChange('chest', e.target.value)}
                onFocus={() => setActivePart('chest')}
                placeholder="98"
                min="60"
                max="160"
                className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
              />
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                {unit}
              </span>
            </div>
          </motion.div>

          {/* 3. WAIST FIELD */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
              activePart === 'waist' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
            }`}
            onClick={() => setActivePart('waist')}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="waist-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                WAIST
              </label>
              {isValid.waist && <CheckAccentIcon className="w-4 h-4" />}
            </div>
            <div className="flex items-center justify-between">
              <input
                id="waist-input"
                type="number"
                value={formData.waist}
                onChange={(e) => handleChange('waist', e.target.value)}
                onFocus={() => setActivePart('waist')}
                placeholder="82"
                min="50"
                max="150"
                className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
              />
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                {unit}
              </span>
            </div>
          </motion.div>

          {/* 4. SHOULDER FIELD */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
              activePart === 'shoulder' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
            }`}
            onClick={() => setActivePart('shoulder')}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="shoulder-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                SHOULDER
              </label>
              {isValid.shoulder && <CheckAccentIcon className="w-4 h-4" />}
            </div>
            <div className="flex items-center justify-between">
              <input
                id="shoulder-input"
                type="number"
                value={formData.shoulder}
                onChange={(e) => handleChange('shoulder', e.target.value)}
                onFocus={() => setActivePart('shoulder')}
                placeholder="46"
                min="30"
                max="70"
                className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
              />
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                {unit}
              </span>
            </div>
          </motion.div>

          {/* 5. OPTIONAL WEIGHT FIELD */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-3.5 rounded-[12px] bg-[#141414] border border-[#2A2A2A]"
          >
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="weight-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                WEIGHT (OPTIONAL)
              </label>
              {formData.weight && <CheckAccentIcon className="w-4 h-4" />}
            </div>
            <div className="flex items-center justify-between">
              <input
                id="weight-input"
                type="number"
                value={formData.weight || ''}
                onChange={(e) => handleChange('weight', e.target.value)}
                placeholder="74"
                min="40"
                max="200"
                className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
              />
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                KG
              </span>
            </div>
          </motion.div>

          {/* FIT PREFERENCE SELECTOR (SLIM / REGULAR / RELAXED) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="p-3.5 rounded-[12px] bg-[#141414] border border-[#2A2A2A]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                FIT PREFERENCE
              </span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase">
                {formData.fitPreference}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'slim', label: 'SLIM', desc: 'Fitted silhouette' },
                { id: 'regular', label: 'REGULAR', desc: 'Standard drape' },
                { id: 'relaxed', label: 'RELAXED', desc: 'Slightly roomier' }
              ].map((fit) => (
                <button
                  key={fit.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, fitPreference: fit.id }))}
                  className={`p-2.5 rounded-[8px] text-left border transition-all ${
                    formData.fitPreference === fit.id
                      ? 'bg-white text-black border-white shadow-sm'
                      : 'bg-[#0B0B0B] text-neutral-300 border-[#2A2A2A] hover:border-neutral-500'
                  }`}
                >
                  <div className="font-bold text-xs uppercase tracking-tight">
                    {fit.label}
                  </div>
                  <div className={`text-[9px] mt-0.5 ${formData.fitPreference === fit.id ? 'text-neutral-700' : 'text-neutral-500'}`}>
                    {fit.desc}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* SUBMIT BUTTON */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-2"
          >
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full h-13 rounded-[12px] font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-3 transition-all transform active:scale-[0.99] ${
                isFormValid
                  ? 'bg-white hover:bg-neutral-200 text-black shadow-lg shadow-white/5 cursor-pointer'
                  : 'bg-[#1C1C1C] text-neutral-600 border border-[#2A2A2A] cursor-not-allowed'
              }`}
            >
              <span>RUN SIZE MATCHING ENGINE</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </motion.div>

        </motion.form>

      </div>

    </div>
  );
}
