import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleProfiles: React.FC = () => {
  const [showStory, setShowStory] = useState(false);

  return (
    <section className="px-5 mb-10" data-purpose="happy-couple-section">
      <div className="bg-white/95 rounded-3xl p-6 border border-[#C59A5F]/30 poruwa-card-shadow text-center relative">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F662C] font-semibold block mb-4">
          THE HAPPY COUPLE
        </span>

        {/* Groom Profile Card */}
        <div className="mb-6 pb-6 border-b border-stone-100">
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
            THE GROOM | මනාලයා
          </span>
          <h4 className="font-serif text-3xl text-stone-800 font-normal mt-1">
            Tharun
          </h4>
          <p className="font-sinhala text-base text-[#7A1C29] font-medium">
            තරුන්
          </p>
          <div className="mt-2 text-xs text-stone-600 font-serif italic">
            Son of Mr. &amp; Mrs. Perera
          </div>
          <div className="text-[11px] text-stone-500 font-sinhala mt-0.5">
            පෙරේරා මහතාගේ සහ මහත්මියගේ පුතණුවන්
          </div>
        </div>

        {/* Illustrated Couple Graphic (Traditional Kandyan Avatar Art) */}
        <div className="my-6 relative flex justify-center">
          <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-100 via-rose-50 to-pink-100 p-1 border-2 border-[#C59A5F]/50 shadow-inner flex items-center justify-center overflow-hidden">
            {/* Stylized SVG Couple representing Traditional Kandyan Bride & Groom */}
            <svg className="w-28 h-28 text-stone-700" fill="none" viewBox="0 0 100 100">
              {/* Groom (Nilame) */}
              <circle cx="36" cy="45" fill="#E8C39E" r="14" />
              {/* Nilame Traditional Hat (Thoppiya) */}
              <polygon fill="#80182A" points="22,36 50,36 44,22 28,22" />
              <circle cx="36" cy="20" fill="#D4AF37" r="3" />
              <path d="M22,36 Q36,32 50,36" stroke="#D4AF37" strokeWidth="2" />
              {/* Nilame Jacket & Chain */}
              <path d="M20,60 Q36,54 48,60 L50,95 L18,95 Z" fill="#6B1D2A" />
              <circle cx="36" cy="70" fill="#D4AF37" r="4" />

              {/* Bride (Kandyan Osariya) */}
              <circle cx="64" cy="47" fill="#F0CDB0" r="13" />
              {/* Bride Hair bun & Nalalpatiya Headband */}
              <ellipse cx="64" cy="40" fill="#262223" rx="14" ry="8" />
              <path d="M52,43 Q64,38 76,43" stroke="#D4AF37" strokeWidth="2" />
              <circle cx="64" cy="38" fill="#D4AF37" r="2" />
              {/* Bride Dress Cream & Gold */}
              <path d="M50,60 Q64,56 78,60 L80,95 L48,95 Z" fill="#FAF6EE" />
              {/* Necklaces & Agasthi Mala */}
              <path d="M56,60 Q64,68 72,60" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M54,64 Q64,74 74,64" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Sparkle icon */}
          <div className="absolute right-1/4 top-1 text-[#C59A5F] text-sm animate-pulse">
            ✦
          </div>
        </div>

        {/* Bride Profile Card */}
        <div className="pt-2">
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
            THE BRIDE | මනාලිය
          </span>
          <h4 className="font-serif text-3xl text-stone-800 font-normal mt-1">
            Tharushi
          </h4>
          <p className="font-sinhala text-base text-[#7A1C29] font-medium">
            තරුෂි
          </p>
          <div className="mt-2 text-xs text-stone-600 font-serif italic">
            Daughter of Mr. &amp; Mrs. Silva
          </div>
          <div className="text-[11px] text-stone-500 font-sinhala mt-0.5">
            සිල්වා මහතාගේ සහ මහත්මියගේ දියණිය
          </div>
        </div>

        {/* Interactive Couple Story toggle */}
        <div className="mt-6 pt-5 border-t border-stone-100">
          <button
            onClick={() => setShowStory(!showStory)}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8F662C] font-semibold hover:text-[#7A1C29] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{showStory ? 'Hide Our Story' : 'Read Our Love Story • අපේ කතාව'}</span>
          </button>

          {showStory && (
            <div className="mt-4 p-4 rounded-2xl bg-[#FAF4EB] border border-[#C59A5F]/20 text-left space-y-3 text-xs leading-relaxed text-stone-700 animate-fadeIn">
              <div className="flex items-center gap-2 text-[#7A1C29] font-serif font-semibold text-sm">
                <Heart className="w-3.5 h-3.5 fill-[#7A1C29]" />
                <span>How Our Journey Began</span>
              </div>
              <p>
                From university days in Peradeniya sharing warm cups of Ceylon tea amidst misty hills, to starry beach walks along the shores of Colombo, Janani and Denuwan discovered a shared devotion to family, culture, and laughter.
              </p>
              <p className="font-sinhala text-stone-600">
                සරසවි බිමේදී ඇරඹි මිතුදම, ආදරයකට පෙරළී අද අප පවුලේ ආශිර්වාදය මැද නව දිවියකට පා තබමු.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
