import React from 'react';
import { Volume2, VolumeX, Share2 } from 'lucide-react';

interface StickyBottomBarProps {
  isPlaying: boolean;
  onToggleAudio: () => void;
  onOpenRsvp: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  isPlaying,
  onToggleAudio,
  onOpenRsvp,
}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Tharushi & Sadun's Wedding Invitation",
          text: 'You are joyfully invited to the auspicious Poruwa wedding of Tharushi & Sadun!',
          url: window.location.href,
        });
      } catch {
        // Ignore abort
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  return (
    <aside
      data-purpose="sticky-bottom-bar"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] z-40 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-[#C59A5F]/40 px-4 py-2.5 flex items-center justify-between"
    >
      <div className="flex items-center gap-2.5">
        {/* Traditional Poruwa wedding tune indicator with sound bars */}
        <div className="flex items-end gap-0.5 h-4 w-4 shrink-0 pb-0.5">
          {isPlaying ? (
            <>
              <span className="w-1 bg-emerald-500 rounded-xs animate-bounce" style={{ height: '80%', animationDuration: '0.6s' }} />
              <span className="w-1 bg-emerald-600 rounded-xs animate-bounce" style={{ height: '100%', animationDuration: '0.4s' }} />
              <span className="w-1 bg-emerald-400 rounded-xs animate-bounce" style={{ height: '60%', animationDuration: '0.8s' }} />
            </>
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-stone-400 mx-auto" />
          )}
        </div>

        <div className="text-left leading-tight">
          <p className="text-[11px] font-semibold text-stone-800 line-clamp-1">
            Magul Bera • Jayamangala
          </p>
          <span className="text-[9px] text-[#8F662C] font-sans">
            Traditional Instrumental
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Share Button */}
        <button
          onClick={handleShare}
          aria-label="Share Invitation"
          className="w-8 h-8 rounded-full bg-[#FAF4EB] border border-[#C59A5F]/35 flex items-center justify-center text-[#8F662C] hover:bg-[#FBECE7] transition-colors cursor-pointer"
          title="Share"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>

        {/* Audio Mute / Unmute Button */}
        <button
          id="audio-toggle-btn"
          onClick={onToggleAudio}
          aria-label="Toggle Wedding Music"
          className="w-8 h-8 rounded-full bg-[#FAF4EB] border border-[#C59A5F]/40 flex items-center justify-center text-[#7A1C29] hover:bg-[#FBECE7] transition-colors cursor-pointer"
          title={isPlaying ? 'Mute Music' : 'Play Music'}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-emerald-600" id="icon-sound-on" />
          ) : (
            <VolumeX className="w-4 h-4 text-stone-600" id="icon-sound-off" />
          )}
        </button>

        {/* Quick RSVP Button */}
        <button
          onClick={onOpenRsvp}
          className="px-4 py-1.5 rounded-full bg-[#7A1C29] text-white text-xs font-serif font-semibold tracking-wide shadow-xs hover:bg-[#8F2231] active:scale-95 transition-all cursor-pointer"
        >
          RSVP
        </button>
      </div>
    </aside>
  );
};
