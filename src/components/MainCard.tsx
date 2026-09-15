import React from 'react';
import { Heart, Calendar, Sparkles } from 'lucide-react';

interface MainCardProps {
  onOpenRsvp: () => void;
  onOpenTraditions: () => void;
}

export const MainCard: React.FC<MainCardProps> = ({ onOpenRsvp, onOpenTraditions }) => {
  return (
    <div>
      {/* Invitation Header Subtitle */}
      <header className="pt-8 pb-5 px-6 text-center relative" data-purpose="invitation-header">
        <div className="w-12 h-0.5 bg-[#C59A5F]/70 mx-auto mb-3" />
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8F662C] font-semibold">
          Lovely Wedding Ceremony • ආදරණීය මංගල උත්සවය
        </p>
        <div className="flex items-center justify-center gap-2.5 mt-3 mb-1">
          <div className="h-px w-10 bg-[#C59A5F]/40" />
          <Heart className="w-3.5 h-3.5 text-[#D67D89] fill-[#D67D89]/30 stroke-[1.5]" />
          <div className="h-px w-10 bg-[#C59A5F]/40" />
        </div>
      </header>

      {/* Main Arch Invitation Card */}
      <section className="px-5 mb-8" data-purpose="formal-invitation-card">
        <div className="bg-[#FFFDF9] arch-card traditional-border poruwa-card-shadow pt-12 pb-10 px-6 text-center relative overflow-hidden">
          {/* Subtle background glow watermarks */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#FBECE7]/70 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-amber-100/50 blur-2xl pointer-events-none" />

          {/* Gold Traditional Arch Motif SVG Top */}
          <div className="flex justify-center mb-4">
            <svg className="w-16 h-8 text-[#C59A5F] opacity-85" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 80 40">
              <path d="M40 5 C25 5 10 20 5 35 M40 5 C55 5 70 20 75 35" />
              <circle cx="40" cy="5" fill="currentColor" r="2.5" />
              <circle cx="40" cy="16" fill="currentColor" r="1.5" />
            </svg>
          </div>

          {/* Couple Names in English & Sinhala */}
          <div className="space-y-1 mb-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2829] tracking-wide font-normal">
              Janani
            </h2>
            <div className="font-serif italic text-xl text-[#8F662C] font-semibold">&amp;</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2829] tracking-wide font-normal">
              Denuwan
            </h2>
            <p className="font-sinhala text-lg sm:text-xl text-[#7A1C29] font-medium pt-2">
              ජනනි &amp; දෙනුවන්
            </p>
          </div>

          <div className="w-16 h-px bg-[#C59A5F]/45 mx-auto my-5" />

          {/* Invitation wording: English & Sinhala */}
          <div className="space-y-3.5 max-w-xs mx-auto">
            <p className="font-serif italic text-stone-700 text-base leading-relaxed">
              Together with our families, we joyfully invite you to celebrate the beginning of our forever on our auspicious wedding day.
            </p>
            <p className="font-sinhala text-xs leading-relaxed text-stone-600 font-normal">
              අපගේ දෙමාපියන්ගේ ආශිර්වාදය මැද, චාරිත්‍රානුකූල මංගල උත්සවය සඳහා ඔබ සැමට ඉතාමත් ගෞරවයෙන් හා ප්‍රීතියෙන් ආරාධනා කර සිටිමු.
            </p>
          </div>

          {/* Date Badge inside card */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FBECE7]/80 border border-[#D67D89]/30 text-[#7A1C29] shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-xs font-serif tracking-widest uppercase font-semibold">14 . 11 . 2026</span>
            </div>

            <button
              onClick={onOpenTraditions}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-50/70 border border-[#C59A5F]/35 text-[#8F662C] hover:bg-amber-100/60 text-[11px] font-serif transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#C59A5F]" />
              <span>Poruwa Traditions</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
