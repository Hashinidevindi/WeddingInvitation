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
          තරුෂි &amp; තරුන්
        </p>
      </div>

      {/* Center Iconic Lotus Blossom Graphic & Enter Button */}
      <div className="relative z-10 my-auto flex flex-col items-center">
        {/* Glowing Lotus Sacred Illustration */}
        <div className="relative mb-8">
          <div className="absolute inset-0 blur-3xl bg-[#ea7a98]/30 rounded-full scale-150 animate-pulse pointer-events-none" />
          <svg
            className="w-40 h-40 sm:w-44 sm:h-44 relative drop-shadow-[0_12px_28px_rgba(235,110,140,0.5)] transition-transform duration-500 hover:scale-105"
            fill="none"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Sacred Lotus Blossom"
          >
            {/* Center petals */}
            <path
              d="M100 24C100 24 88 64 88 88C88 112 100 125 100 125C100 125 112 112 112 88C112 64 100 24 100 24Z"
              fill="url(#lotus-grad-center)"
            />
            {/* Inner Left */}
            <path
              d="M100 125C100 125 72 115 54 92C36 69 47 42 47 42C47 42 66 69 82 86C98 103 100 125 100 125Z"
              fill="url(#lotus-grad-left)"
            />
            {/* Inner Right */}
            <path
              d="M100 125C100 125 128 115 146 92C164 69 153 42 153 42C153 42 134 69 118 86C102 103 100 125 100 125Z"
              fill="url(#lotus-grad-right)"
            />
            {/* Outer Left */}
            <path
              d="M100 128C100 128 65 130 38 114C11 98 15 76 15 76C15 76 34 99 58 109C82 119 100 128 100 128Z"
              fill="url(#lotus-grad-outer-l)"
              opacity="0.92"
            />
            {/* Outer Right */}
            <path
              d="M100 128C100 128 135 130 162 114C189 98 185 76 185 76C185 76 166 99 142 109C118 119 100 128 100 128Z"
              fill="url(#lotus-grad-outer-r)"
              opacity="0.92"
            />
            {/* Lotus Base */}
            <ellipse cx="100" cy="132" fill="#7a3617" opacity="0.65" rx="44" ry="7" />

            <defs>
              <linearGradient id="lotus-grad-center" x1="100" y1="24" x2="100" y2="125" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF5F7" />
                <stop offset="0.5" stopColor="#F7819E" />
                <stop offset="1" stopColor="#A8193D" />
              </linearGradient>
              <linearGradient id="lotus-grad-left" x1="47" y1="42" x2="100" y2="125" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD4DE" />
                <stop offset="0.65" stopColor="#E85D83" />
                <stop offset="1" stopColor="#8C1332" />
              </linearGradient>
              <linearGradient id="lotus-grad-right" x1="153" y1="42" x2="100" y2="125" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD4DE" />
                <stop offset="0.65" stopColor="#E85D83" />
                <stop offset="1" stopColor="#8C1332" />
              </linearGradient>
              <linearGradient id="lotus-grad-outer-l" x1="15" y1="76" x2="100" y2="128" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFBED0" />
                <stop offset="1" stopColor="#BA254E" />
              </linearGradient>
              <linearGradient id="lotus-grad-outer-r" x1="185" y1="76" x2="100" y2="128" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFBED0" />
                <stop offset="1" stopColor="#BA254E" />
              </linearGradient>
            </defs>
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
