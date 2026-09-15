import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleProfiles: React.FC = () => {
  const [showStory, setShowStory] = useState(false);
  const [showFullPhoto, setShowFullPhoto] = useState(false);

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
            Denuwan
          </h4>
          <p className="font-sinhala text-base text-[#7A1C29] font-medium">
            දෙනුවන්
          </p>
          <div className="mt-2 text-xs text-stone-600 font-serif italic">
            Son of Mr. &amp; Mrs. Perera
          </div>
          <div className="text-[11px] text-stone-500 font-sinhala mt-0.5">
            පෙරේරා මහතාගේ සහ මහත්මියගේ පුතණුවන්
          </div>
        </div>

        {/* Wedding Couple Portrait */}
        <div className="my-6 relative flex justify-center">
          <div className="relative group cursor-pointer" onClick={() => setShowFullPhoto(!showFullPhoto)}>
            {/* Outer golden halo */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#C59A5F] via-[#D67D89] to-[#C59A5F] opacity-70 blur-xs group-hover:opacity-100 transition-opacity" />

            <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-amber-100 via-rose-50 to-pink-100 border-2 border-[#C59A5F]/70 shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src="/assets/wedding_couple.jpg"
                alt="Janani & Denuwan - Auspicious Sri Lankan Wedding"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Sparkle badge */}
            <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white/95 shadow-sm border border-[#C59A5F]/40 flex items-center justify-center text-[#8F662C] text-xs">
              ✦
            </div>

            <span className="text-[10px] text-stone-400 font-sans block mt-2 text-center hover:text-[#7A1C29] transition-colors">
              {showFullPhoto ? 'Tap to close photo' : 'Tap to view full portrait'}
            </span>
          </div>
        </div>

        {/* Full Portrait Lightbox / Expanded View */}
        {showFullPhoto && (
          <div className="mb-6 p-3 rounded-2xl bg-[#FFFDF9] border border-[#C59A5F]/35 shadow-md animate-fadeIn">
            <div className="relative rounded-xl overflow-hidden max-h-[420px] flex items-center justify-center bg-stone-100">
              <img
                src="/assets/wedding_couple.jpg"
                alt="Janani & Denuwan - Full Wedding Portrait"
                className="w-full h-auto object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-serif italic text-xs text-stone-600 mt-2 text-center">
              "Two hearts uniting under the auspicious golden sunset of Sri Lanka"
            </p>
          </div>
        )}

        {/* Bride Profile Card */}
        <div className="pt-2">
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
            THE BRIDE | මනාලිය
          </span>
          <h4 className="font-serif text-3xl text-stone-800 font-normal mt-1">
            Janani
          </h4>
          <p className="font-sinhala text-base text-[#7A1C29] font-medium">
            ජනනි
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
