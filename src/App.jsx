import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Header from './components/Header';
import HeroScreen from './components/HeroScreen';
import MeasurementForm from './components/MeasurementForm';
import MatchingEngineScreen from './components/MatchingEngineScreen';
import ResultsScreen from './components/ResultsScreen';
import ProductDemoScreen from './components/ProductDemoScreen';
import ShareProfileModal from './components/ShareProfileModal';
import { 
  DEFAULT_PROFILE, 
  loadSavedProfile, 
  saveProfile, 
  matchAllBrands 
} from './utils/matchingEngine';

export default function App() {
  // Load initial profile from localStorage or fallback
  const [profile, setProfile] = useState(() => {
    return loadSavedProfile() || DEFAULT_PROFILE;
  });

  const [hasSavedProfile, setHasSavedProfile] = useState(() => {
    return !!localStorage.getItem('fitid_user_profile');
  });

  // Screen flow: 'hero' | 'measure' | 'engine' | 'results' | 'demo'
  const [currentScreen, setCurrentScreen] = useState(() => {
    // If user already saved a profile previously, go straight to results, else hero
    return localStorage.getItem('fitid_user_profile') ? 'results' : 'hero';
  });

  const [isShareOpen, setIsShareOpen] = useState(false);

  // Compute matched brands dynamically from active profile
  const matchedBrands = matchAllBrands(profile);

  const handleStartFromHero = () => {
    setCurrentScreen('measure');
  };

  const handleFormSubmit = (newProfile) => {
    setProfile(newProfile);
    saveProfile(newProfile);
    setHasSavedProfile(true);
    setCurrentScreen('engine');
  };

  const handleEngineComplete = () => {
    setCurrentScreen('results');
    // Subtle white/silver confetti burst
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFFFFF', '#A3A3A3', '#525252', '#10B981']
      });
    } catch (e) {
      // Ignore if confetti blocked
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset your FitID profile? This will clear your saved measurements.')) {
      localStorage.removeItem('fitid_user_profile');
      setHasSavedProfile(false);
      setProfile(DEFAULT_PROFILE);
      setCurrentScreen('hero');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      
      {/* Universal Top Header */}
      <Header 
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        hasProfile={hasSavedProfile}
        onReset={handleReset}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {currentScreen === 'hero' && (
          <HeroScreen 
            onStart={handleStartFromHero}
            hasSavedProfile={hasSavedProfile}
            onQuickDemo={() => setCurrentScreen('results')}
          />
        )}

        {currentScreen === 'measure' && (
          <MeasurementForm 
            initialProfile={profile}
            onSubmit={handleFormSubmit}
          />
        )}

        {currentScreen === 'engine' && (
          <MatchingEngineScreen 
            profile={profile}
            onComplete={handleEngineComplete}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen 
            profile={profile}
            matchedBrands={matchedBrands}
            onEditProfile={() => setCurrentScreen('measure')}
            onGoToDemo={() => setCurrentScreen('demo')}
            onOpenShare={() => setIsShareOpen(true)}
          />
        )}

        {currentScreen === 'demo' && (
          <ProductDemoScreen 
            profile={profile}
            onBackToResults={() => setCurrentScreen('results')}
            onEditProfile={() => setCurrentScreen('measure')}
          />
        )}
      </main>

      {/* Share / Export Modal */}
      <ShareProfileModal 
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        profile={profile}
        matchedBrands={matchedBrands}
      />

      {/* Minimal Monochrome Footer */}
      <footer className="border-t border-[#2A2A2A] py-6 px-4 sm:px-6 text-center text-neutral-400 text-xs font-mono tracking-wider bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span className="text-neutral-400 font-bold uppercase text-[11px]">
              FITID UNIVERSAL ENGINE
            </span>
          </div>

          <div className="text-[11px] text-neutral-400">
            ZARA • H&amp;M • UNIQLO • LEVI'S • BEWAKOOF • SNITCH • NIKE • ASOS
          </div>

          <div className="text-[11px] text-neutral-400">
            ENTER ONCE. FIT EVERYWHERE.
          </div>
        </div>
      </footer>

    </div>
  );
}
