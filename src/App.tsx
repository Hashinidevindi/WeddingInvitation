import React, { useState, useEffect } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { PetalLayer } from './components/PetalLayer';
import { MainCard } from './components/MainCard';
import { Countdown } from './components/Countdown';
import { CoupleProfiles } from './components/CoupleProfiles';
import { Itinerary } from './components/Itinerary';
import { VenueSection } from './components/VenueSection';
import { BlessingsWall } from './components/BlessingsWall';
import { StickyBottomBar } from './components/StickyBottomBar';
import { RsvpModal } from './components/RsvpModal';
import { TraditionsModal } from './components/TraditionsModal';
import { weddingAudio } from './utils/audio';
import { RsvpSubmission } from './types';
import { Smartphone, Monitor, RotateCcw } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [traditionsOpen, setTraditionsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'mobile' | 'responsive'>('mobile');

  // Listen to audio state
  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing) => {
      setIsPlayingAudio(playing);
    });
    return unsub;
  }, []);

  const handleEnterExperience = () => {
    setShowIntro(false);
    weddingAudio.start();
  };

  const handleSkipIntro = () => {
    setShowIntro(false);
    weddingAudio.start();
  };

  const handleToggleAudio = () => {
    weddingAudio.toggle();
  };

  const handleRsvpSubmit = (data: RsvpSubmission) => {
    console.log('RSVP Received:', data);
  };

  return (
    <div className="min-h-screen bg-stone-900 flex flex-col items-center justify-start selection:bg-[#C59A5F]/30 selection:text-[#7A1C29]">
      {/* Intro Screen Overlay matching Screenshot 1 */}
      {showIntro && (
        <IntroScreen onEnter={handleEnterExperience} onSkip={handleSkipIntro} />
      )}

      {/* Top Controls Bar for testing & device preview */}
      <div className="w-full max-w-2xl px-4 py-2 flex items-center justify-between text-xs text-stone-400 z-30">
        <button
          onClick={() => setShowIntro(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-[#d4af82] border border-stone-700 transition-colors cursor-pointer"
          title="Return to the Auspicious Splash Screen"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay Intro Screen</span>
        </button>

        <div className="flex items-center gap-1 bg-stone-800/80 p-1 rounded-full border border-stone-700/80">
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all cursor-pointer ${
              viewMode === 'mobile'
                ? 'bg-[#7A1C29] text-white font-medium shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile View</span>
          </button>
          <button
            onClick={() => setViewMode('responsive')}
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all cursor-pointer ${
              viewMode === 'responsive'
                ? 'bg-[#7A1C29] text-white font-medium shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Expanded View</span>
          </button>
        </div>
      </div>

      {/* Main Container: Mobile phone viewport or Expanded view */}
      <main
        id="main-container"
        className={`w-full ${
          viewMode === 'mobile' ? 'max-w-[430px]' : 'max-w-2xl'
        } min-h-screen bg-[#FAF4EB] relative overflow-x-hidden shadow-2xl flex flex-col pb-24 transition-all duration-300 border-x border-[#C59A5F]/20`}
      >
        {/* Floating Petal Layer Simulation */}
        <PetalLayer />

        {/* Top Auspicious Floral Arch & Main Invitation Card */}
        <MainCard
          onOpenRsvp={() => setRsvpOpen(true)}
          onOpenTraditions={() => setTraditionsOpen(true)}
        />

        {/* Live Countdown Section */}
        <Countdown targetDate="2026-08-14T09:30:00+05:30" />

        {/* Happy Couple Profiles (Nilame Groom & Osariya Bride) */}
        <CoupleProfiles />

        {/* Wedding Day Schedule & Itinerary */}
        <Itinerary />

        {/* Venue, Map Preview & Location Details */}
        <VenueSection />

        {/* RSVP Card & Guest Blessings Wall */}
        <BlessingsWall onOpenRsvp={() => setRsvpOpen(true)} />

        {/* Bottom Poruwa Emblem Footer */}
        <footer className="text-center pb-8 pt-2 px-6 text-stone-500">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-px bg-[#C59A5F]/40" />
            <span className="font-sinhala text-sm text-[#7A1C29]">
              චිරං ජයතු • May Blessings Abound
            </span>
            <div className="w-8 h-px bg-[#C59A5F]/40" />
          </div>
          <p className="font-serif italic text-xs text-stone-600">
            Janani &amp; Denuwan • August 14, 2026 • Colombo
          </p>
        </footer>

        {/* Floating Audio Player and Sticky Action Bar */}
        <StickyBottomBar
          isPlaying={isPlayingAudio}
          onToggleAudio={handleToggleAudio}
          onOpenRsvp={() => setRsvpOpen(true)}
        />
      </main>

      {/* Interactive RSVP Modal */}
      <RsvpModal
        isOpen={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        onSubmitRsvp={handleRsvpSubmit}
      />

      {/* Poruwa Traditions Information Guide Modal */}
      <TraditionsModal
        isOpen={traditionsOpen}
        onClose={() => setTraditionsOpen(false)}
      />
    </div>
  );
}
