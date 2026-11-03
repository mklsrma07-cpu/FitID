import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckAccentIcon } from './Icons';
import { X, Copy, Check, QrCode, Download } from 'lucide-react';

export default function ShareProfileModal({ isOpen, onClose, profile, matchedBrands }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    const summary = `My FitID Profile:\nChest: ${profile.chest}cm | Waist: ${profile.waist}cm | Height: ${profile.height}cm\nSizes:\n` +
      matchedBrands.map(b => `${b.brandName}: ${b.topSize}`).join('\n');
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-sm rounded-[16px] bg-[#141414] border border-[#2A2A2A] p-6 shadow-2xl text-white space-y-5"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 rounded-[6px] hover:bg-[#222] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
              FITID PASSPORT
            </span>
            <h3 className="text-xl font-black uppercase tracking-tight text-white font-sans mt-0.5">
              YOUR UNIVERSAL PASS
            </h3>
          </div>

          {/* Wallet Pass Card */}
          <div className="rounded-[12px] bg-[#0B0B0B] border border-[#2A2A2A] p-4 space-y-4 font-mono">
            <div className="flex justify-between items-center pb-2 border-b border-[#222]">
              <div className="flex items-center gap-1.5">
                <CheckAccentIcon className="w-3.5 h-3.5" />
                <span className="text-xs font-bold tracking-tight text-white">FITID-88402</span>
              </div>
              <span className="text-[10px] text-neutral-500 uppercase">{profile.fitPreference} FIT</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-[#141414] border border-[#222]">
                <span className="text-[8px] text-neutral-500 block uppercase">CHEST</span>
                <span className="text-xs font-bold text-white">{profile.chest} CM</span>
              </div>
              <div className="p-2 rounded bg-[#141414] border border-[#222]">
                <span className="text-[8px] text-neutral-500 block uppercase">WAIST</span>
                <span className="text-xs font-bold text-white">{profile.waist} CM</span>
              </div>
              <div className="p-2 rounded bg-[#141414] border border-[#222]">
                <span className="text-[8px] text-neutral-500 block uppercase">SHOULDER</span>
                <span className="text-xs font-bold text-white">{profile.shoulder} CM</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[#222]">
              {matchedBrands.slice(0, 6).map(b => (
                <div key={b.brandId} className="flex items-center justify-between p-1.5 rounded bg-[#141414]">
                  <span className="text-[9px] text-neutral-400 truncate">{b.brandName}</span>
                  <span className="text-xs font-bold text-white ml-1">{b.topSize}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2">
            <button
              onClick={handleCopyLink}
              className="w-full h-11 rounded-[10px] bg-white hover:bg-neutral-200 text-black font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY SIZE SUMMARY'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-full h-10 rounded-[10px] bg-[#1C1C1C] hover:bg-[#242424] text-neutral-400 hover:text-white font-mono uppercase tracking-wider text-xs transition-all"
            >
              CLOSE
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
