import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BodyFigure from './BodyFigure';
import { CheckAccentIcon } from './Icons';
import { WOMEN_PRESET_PROFILES, MEN_PRESET_PROFILES } from '../data/sizeCharts';
import { ArrowRight, Sparkles, Info } from 'lucide-react';

export default function MeasurementForm({ initialProfile, onSubmit }) {
  const [gender, setGender] = useState(initialProfile?.gender || 'women');
  const [unit, setUnit] = useState(initialProfile?.unit || 'cm');
  const [activePart, setActivePart] = useState(gender === 'women' ? 'bust' : 'chest');

  const isWomen = gender === 'women';

  // Measurements state
  const [formData, setFormData] = useState({
    gender: initialProfile?.gender || 'women',
    height: initialProfile?.height || (isWomen ? 166 : 178),
    bust: initialProfile?.bust || 88,
    chest: initialProfile?.chest || 98,
    waist: initialProfile?.waist || (isWomen ? 68 : 82),
    hips: initialProfile?.hips || (isWomen ? 94 : 96),
    shoulder: initialProfile?.shoulder || (isWomen ? 40 : 46),
    weight: initialProfile?.weight || (isWomen ? 58 : 74),
    fitPreference: initialProfile?.fitPreference || 'regular'
  });

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    setActivePart(newGender === 'women' ? 'bust' : 'chest');
    if (newGender === 'women') {
      const p = WOMEN_PRESET_PROFILES[1].data; // Standard Hourglass
      setFormData(prev => ({ ...prev, ...p, gender: 'women' }));
    } else {
      const p = MEN_PRESET_PROFILES[0].data; // Standard Athletic
      setFormData(prev => ({ ...prev, ...p, gender: 'men' }));
    }
  };

  // Validation rules (in cm)
  const isValid = {
    height: formData.height >= 130 && formData.height <= 230,
    upper: isWomen 
      ? (formData.bust >= 65 && formData.bust <= 150)
      : (formData.chest >= 65 && formData.chest <= 160),
    waist: formData.waist >= 50 && formData.waist <= 140,
    hips: !isWomen || (formData.hips >= 70 && formData.hips <= 160),
    shoulder: !formData.shoulder || (formData.shoulder >= 30 && formData.shoulder <= 65),
    weight: !formData.weight || (formData.weight >= 35 && formData.weight <= 180)
  };

  const isFormValid = isValid.height && isValid.upper && isValid.waist && (!isWomen || isValid.hips);

  const handleChange = (field, val) => {
    const num = val === '' ? '' : Number(val);
    setFormData(prev => ({ ...prev, [field]: num }));
  };

  const applyPreset = (preset) => {
    setFormData({ ...preset.data, gender });
    setActivePart(isWomen ? 'bust' : 'chest');
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (isFormValid) {
      onSubmit({ ...formData, gender, unit });
    }
  };

  const fieldHelperInfo = {
    height: 'Measure barefoot from head to floor with heels touching the wall.',
    bust: 'Wrap tape horizontally around the fullest part of the bust over a well-fitting bra.',
    chest: 'Wrap tape under armpits around fullest part of chest horizontally.',
    waist: 'Measure around the narrowest point of your natural waist (just above navel).',
    hips: 'Stand with feet together and measure around the fullest part of your hips/seat.',
    shoulder: 'Measure across the back from one shoulder point edge to the other.',
    weight: 'Optional body mass used for drape dynamics and volume estimation.'
  };

  const currentPresets = isWomen ? WOMEN_PRESET_PROFILES : MEN_PRESET_PROFILES;

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="text-center mb-6 sm:mb-8 space-y-2">
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
          SELECT SECTION &amp; ENTER BIOMETRICS. SIZES RESOLVE ACROSS ALL BRANDS.
        </motion.p>
      </div>

      {/* GENDER / SECTION SWITCHER BAR */}
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center bg-[#141414] p-1 rounded-[12px] border border-[#2A2A2A] shadow-lg">
          <button
            type="button"
            onClick={() => handleGenderChange('women')}
            className={`px-6 py-2 rounded-[9px] text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-2 ${
              isWomen 
                ? 'bg-white text-black shadow-md' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>WOMEN'S SECTION</span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-200 text-black">
              NEW
            </span>
          </button>
          
          <button
            type="button"
            onClick={() => handleGenderChange('men')}
            className={`px-6 py-2 rounded-[9px] text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-2 ${
              !isWomen 
                ? 'bg-white text-black shadow-md' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>MEN'S SECTION</span>
          </button>
        </div>
      </div>

      {/* Preset selector bar */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-[#141414] border border-[#2A2A2A] rounded-[12px]">
        <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono">
          <span className="text-neutral-500 uppercase tracking-wider text-[11px]">
            {isWomen ? "WOMEN'S" : "MEN'S"} PRESETS:
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
          {currentPresets.map((preset) => (
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
          key={gender}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-5 bg-[#141414] border border-[#2A2A2A] rounded-[12px] p-5 flex flex-col items-center justify-center relative sticky top-20"
        >
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              {isWomen ? "FEMALE VECTOR TOPOLOGY" : "MALE VECTOR TOPOLOGY"}
            </span>
            <span className="text-[10px] font-mono text-neutral-500">
              TAP ZONE TO FOCUS
            </span>
          </div>

          <BodyFigure 
            gender={gender}
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
              {isWomen ? "WOMEN'S METRICS" : "MEN'S METRICS"} (CENTIMETERS)
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
                placeholder={isWomen ? "166" : "178"}
                min="130"
                max="230"
                className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
              />
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                {unit}
              </span>
            </div>
          </motion.div>

          {/* 2. BUST (WOMEN) or CHEST (MEN) */}
          {isWomen ? (
            <motion.div 
              className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
                activePart === 'bust' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
              }`}
              onClick={() => setActivePart('bust')}
            >
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="bust-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                  BUST (CIRCUMFERENCE)
                </label>
                {isValid.upper && <CheckAccentIcon className="w-4 h-4" />}
              </div>
              <div className="flex items-center justify-between">
                <input
                  id="bust-input"
                  type="number"
                  value={formData.bust}
                  onChange={(e) => handleChange('bust', e.target.value)}
                  onFocus={() => setActivePart('bust')}
                  placeholder="88"
                  min="60"
                  max="160"
                  className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
                />
                <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                  {unit}
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
                activePart === 'chest' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
              }`}
              onClick={() => setActivePart('chest')}
            >
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="chest-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                  CHEST
                </label>
                {isValid.upper && <CheckAccentIcon className="w-4 h-4" />}
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
          )}

          {/* 3. WAIST FIELD */}
          <motion.div 
            className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
              activePart === 'waist' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
            }`}
            onClick={() => setActivePart('waist')}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="waist-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                WAIST (NATURAL WAISTLINE)
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
                placeholder={isWomen ? "68" : "82"}
                min="50"
                max="150"
                className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
              />
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                {unit}
              </span>
            </div>
          </motion.div>

          {/* 4. HIPS FIELD (Essential for Women) */}
          {isWomen && (
            <motion.div 
              className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
                activePart === 'hips' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
              }`}
              onClick={() => setActivePart('hips')}
            >
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="hips-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                  HIPS (WIDEST CIRCUMFERENCE)
                </label>
                {isValid.hips && <CheckAccentIcon className="w-4 h-4" />}
              </div>
              <div className="flex items-center justify-between">
                <input
                  id="hips-input"
                  type="number"
                  value={formData.hips}
                  onChange={(e) => handleChange('hips', e.target.value)}
                  onFocus={() => setActivePart('hips')}
                  placeholder="94"
                  min="60"
                  max="160"
                  className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
                />
                <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                  {unit}
                </span>
              </div>
            </motion.div>
          )}

          {/* 5. SHOULDER FIELD */}
          <motion.div 
            className={`p-3.5 rounded-[12px] bg-[#141414] border transition-all ${
              activePart === 'shoulder' ? 'border-neutral-400 shadow-md ring-1 ring-neutral-400/20' : 'border-[#2A2A2A]'
            }`}
            onClick={() => setActivePart('shoulder')}
          >
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="shoulder-input" className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                SHOULDER {isWomen ? "(OPTIONAL)" : ""}
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
                placeholder={isWomen ? "40" : "46"}
                min="30"
                max="70"
                className="w-full bg-transparent text-xl font-bold text-white focus:outline-none placeholder:text-neutral-700 tracking-tight font-sans"
              />
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase ml-2">
                {unit}
              </span>
            </div>
          </motion.div>

          {/* 6. FIT PREFERENCE SELECTOR */}
          <div className="p-3.5 rounded-[12px] bg-[#141414] border border-[#2A2A2A]">
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
                { id: 'slim', label: isWomen ? 'FITTED' : 'SLIM', desc: isWomen ? 'Contour hug' : 'Fitted torso' },
                { id: 'regular', label: 'REGULAR', desc: 'Standard drape' },
                { id: 'relaxed', label: 'RELAXED', desc: 'Easy roominess' }
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
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full h-13 rounded-[12px] font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-3 transition-all transform active:scale-[0.99] ${
                isFormValid
                  ? 'bg-white hover:bg-neutral-200 text-black shadow-lg shadow-white/5 cursor-pointer'
                  : 'bg-[#1C1C1C] text-neutral-600 border border-[#2A2A2A] cursor-not-allowed'
              }`}
            >
              <span>RUN {isWomen ? "WOMEN'S" : "MEN'S"} SIZE MATCHING ENGINE</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </motion.form>

      </div>

    </div>
  );
}
