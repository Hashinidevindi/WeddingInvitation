import React from 'react';

interface IntroScreenProps {
  onEnter: () => void;
  onSkip: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter, onSkip }) => {
  return (
    <section
      id="intro-screen"
      data-purpose="interactive-intro"
      className="fixed inset-0 z-50 bg-[#241014] flex flex-col justify-between items-center text-center p-6 transition-all duration-700 overflow-hidden"
    >
      {/* Ambient gradient lighting & warm dots texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b87640]/25 via-[#241014]/85 to-[#15070a] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 bg-dots-pattern pointer-events-none" />

      {/* Top Auspicious Sinhala Greeting */}
      <div className="relative z-10 pt-10 sm:pt-14 max-w-sm mx-auto">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#e8b982]/85 block mb-2 font-serif font-medium">
          · Auspicious · Sri · Lankan · Wedding ·
        </span>
        <h1 className="text-3xl sm:text-4xl text-[#ffe5c7] font-sinhala font-semibold drop-shadow-[0_2px_10px_rgba(255,229,199,0.3)] tracking-wider">
          ශ්‍රී සුභ මංගලම්
        </h1>
        <p className="font-sinhala text-sm sm:text-base text-[#d4af82] mt-2 tracking-wide font-normal">
          තරුෂි &amp; සදුන්
        </p>
      </div>

      {/* Center Iconic Lotus Blossom Graphic & Enter Button */}
      <div className="relative z-10 my-auto flex flex-col items-center">
        {/* Two Intertwined Golden Wedding Rings Illustration */}
        <div className="relative mb-8">
          <div className="absolute inset-0 blur-3xl bg-[#d4af37]/25 rounded-full scale-150 animate-pulse pointer-events-none" />
          <svg
            className="w-44 h-44 sm:w-48 sm:h-48 relative drop-shadow-[0_12px_32px_rgba(212,175,55,0.45)] transition-transform duration-500 hover:scale-105"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Two Intertwined Wedding Rings"
          >
            <defs>
              {/* Rich Warm Gold Gradients */}
              <linearGradient id="ring-gold-1" x1="40" y1="70" x2="115" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="25%" stopColor="#F5D061" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="75%" stopColor="#AA7C11" />
                <stop offset="100%" stopColor="#F9E295" />
              </linearGradient>

              <linearGradient id="ring-gold-2" x1="85" y1="55" x2="165" y2="145" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="20%" stopColor="#FCE38A" />
                <stop offset="50%" stopColor="#E5B842" />
                <stop offset="75%" stopColor="#996D0F" />
                <stop offset="100%" stopColor="#F5D26C" />
              </linearGradient>

              {/* Inner metallic depth gradient */}
              <linearGradient id="ring-inner-shadow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#684705" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFECA8" stopOpacity="0.3" />
              </linearGradient>

              {/* Diamond Facet Shimmer */}
              <linearGradient id="diamond-glow" x1="126" y1="42" x2="142" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="45%" stopColor="#E0F2FE" />
                <stop offset="70%" stopColor="#BAE6FD" />
                <stop offset="100%" stopColor="#7DD3FC" />
              </linearGradient>
            </defs>

            {/* Ambient ring drop shadow on floor */}
            <ellipse cx="102" cy="158" rx="56" ry="9" fill="#000000" opacity="0.35" filter="blur(4px)" />

            {/* --- Ring 1: Groom's Classic Gold Band (Left) --- */}
            {/* Outer ring path with thickness */}
            <circle
              cx="76"
              cy="110"
              r="37"
              stroke="url(#ring-gold-1)"
              strokeWidth="11"
              className="drop-shadow-sm"
            />
            {/* Inner rim highlight */}
            <circle
              cx="76"
              cy="110"
              r="31.5"
              stroke="#FFF7D1"
              strokeWidth="1.2"
              opacity="0.8"
            />
            {/* Outer rim gold contour */}
            <circle
              cx="76"
              cy="110"
              r="42.5"
              stroke="#7A560B"
              strokeWidth="1"
              opacity="0.6"
            />
            {/* Specular sheen curve */}
            <path
              d="M 45 92 A 37 37 0 0 1 78 73"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* --- Ring 2: Bride's Engagement / Diamond Ring (Right) --- */}
            {/* Main band passing through Ring 1 */}
            <circle
              cx="124"
              cy="102"
              r="35"
              stroke="url(#ring-gold-2)"
              strokeWidth="10"
            />
            {/* Inner rim highlight */}
            <circle
              cx="124"
              cy="102"
              r="30"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              opacity="0.75"
            />
            {/* Outer rim gold contour */}
            <circle
              cx="124"
              cy="102"
              r="40"
              stroke="#7A560B"
              strokeWidth="1"
              opacity="0.5"
            />

            {/* --- Interlocking Illusion Overlap --- */}
            {/* Lower-right front arc of Ring 1 overlaps in front of Ring 2 */}
            <path
              d="M 96 130 A 37 37 0 0 0 113 110"
              stroke="url(#ring-gold-1)"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <path
              d="M 96 130 A 37 37 0 0 0 113 110"
              stroke="#FFF7D1"
              strokeWidth="1.5"
              fill="none"
              opacity="0.9"
            />

            {/* Specular sheen curve on Ring 2 */}
            <path
              d="M 148 80 A 35 35 0 0 1 159 104"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* --- Solitaire Diamond on Bride's Ring --- */}
            {/* Gold Diamond Mount / Crown */}
            <path
              d="M 128 67 L 134 57 L 144 57 L 150 67 Z"
              fill="url(#ring-gold-2)"
              stroke="#7A560B"
              strokeWidth="1"
            />
            {/* 4-Prong setting */}
            <rect x="132" y="55" width="2" height="6" fill="#FFF2B2" rx="1" />
            <rect x="144" y="55" width="2" height="6" fill="#FFF2B2" rx="1" />

            {/* Brilliant Cut Diamond Gemstone */}
            <g transform="translate(138, 51)">
              {/* Diamond Table & Crown */}
              <polygon
                points="-10,0 -5,-7 5,-7 10,0 0,11"
                fill="url(#diamond-glow)"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              {/* Facet lines */}
              <line x1="-5" y1="-7" x2="-2" y2="0" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.9" />
              <line x1="5" y1="-7" x2="2" y2="0" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.9" />
              <line x1="-10" y1="0" x2="10" y2="0" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.9" />
              <line x1="-2" y1="0" x2="0" y2="11" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.9" />
              <line x1="2" y1="0" x2="0" y2="11" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.9" />

              {/* Diamond Sparkle / Flare Starburst */}
              <path
                d="M 0,-14 Q 0,-7 -7,-7 Q 0,-7 0,0 Q 0,-7 7,-7 Q 0,-7 0,-14 Z"
                fill="#FFFFFF"
                className="animate-pulse"
              />
              <circle cx="0" cy="-7" r="1.5" fill="#FFFFFF" />
            </g>

            {/* Romantic Sparkles around the rings */}
            <g className="text-[#FFE58F]">
              {/* Sparkle 1 */}
              <path
                d="M 46,68 Q 46,73 41,73 Q 46,73 46,78 Q 46,73 51,73 Q 46,73 46,68 Z"
                fill="#FFF4B8"
                opacity="0.9"
              />
              {/* Sparkle 2 */}
              <path
                d="M 166,134 Q 166,138 162,138 Q 166,138 166,142 Q 166,138 170,138 Q 166,138 166,134 Z"
                fill="#FFF4B8"
                opacity="0.85"
              />
              {/* Sparkle 3 (small) */}
              <circle cx="102" cy="74" r="1.5" fill="#FFFFFF" opacity="0.8" />
              <circle cx="62" cy="148" r="1.2" fill="#FFE58F" opacity="0.7" />
            </g>
          </svg>
        </div>

        {/* Tap to Play Button matching Screenshot 1 */}
        <button
          id="enter-experience-btn"
          onClick={onEnter}
          className="group relative px-9 py-4 rounded-full bg-[#701625] hover:bg-[#851b2e] text-white shadow-2xl shadow-[#701625]/60 border border-[#d67d89]/45 flex flex-col items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
        >
          {/* Subtle button glow */}
          <div className="absolute -inset-1 rounded-full bg-[#d67d89]/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Circle Play icon */}
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-current text-[#FBECE7] ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <span className="font-serif text-lg tracking-wide font-medium relative z-10">
            Wedding Invitation
          </span>
          <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#e3a89a] font-semibold mt-0.5 relative z-10">
            TAP TO ENTER
          </span>
        </button>
      </div>

      {/* Bottom Skip Action */}
      <div className="relative z-10 pb-6 sm:pb-8">
        <button
          id="skip-intro-btn"
          onClick={onSkip}
          className="text-xs uppercase tracking-[0.25em] text-[#e0b78c]/80 hover:text-white transition-colors py-2 px-5 rounded-full hover:bg-white/5 cursor-pointer font-serif"
        >
          SKIP INTRO
        </button>
      </div>
    </section>
  );
};
