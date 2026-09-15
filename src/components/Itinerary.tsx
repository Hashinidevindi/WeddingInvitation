import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp, BellRing, Sparkles } from 'lucide-react';

export const Itinerary: React.FC = () => {
  const [showDetailedSchedule, setShowDetailedSchedule] = useState(false);

  return (
    <section className="px-5 mb-10" data-purpose="wedding-day-itinerary">
      <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FDF5ED] arch-card traditional-border poruwa-card-shadow pt-10 pb-8 px-6 text-center relative">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#8F662C] font-semibold mb-1">
          THE WEDDING DAY
        </p>
        <h3 className="font-serif italic text-2xl sm:text-3xl text-[#2D2829] mb-2">
          A Journey of Tradition &amp; Grace
        </h3>
        <p className="font-serif text-xs text-stone-600 italic leading-relaxed max-w-xs mx-auto mb-8">
          With joyful hearts, we invite you to witness our union in a timeless Poruwa ceremony, surrounded by family, blessings, and the enchanting beauty of Sri Lanka.
        </p>

        {/* Vertical Timeline Items */}
        <div className="space-y-4 text-left relative">
          {/* Timeline Vertical Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#C59A5F]/30 -z-0" />

          {/* Date Item */}
          <div className="relative z-10 flex items-center gap-4 bg-white/85 p-3.5 rounded-2xl border border-[#C59A5F]/25 shadow-xs">
            <div className="w-11 h-11 rounded-full bg-[#7A1C29] text-white flex items-center justify-center shrink-0 shadow-md">
              <Calendar className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h5 className="font-serif text-lg text-stone-900 font-semibold leading-tight">
                Saturday, November 14
              </h5>
              <p className="font-sinhala text-xs text-stone-600">
                2026 නොවැම්බර් 14 සෙනසුරාදා
              </p>
              <span className="text-[10px] tracking-wider text-[#8F662C] font-semibold uppercase">
                YEAR 2026
              </span>
            </div>
          </div>

          {/* Time Item */}
          <div className="relative z-10 flex items-center gap-4 bg-white/85 p-3.5 rounded-2xl border border-[#C59A5F]/25 shadow-xs">
            <div className="w-11 h-11 rounded-full bg-[#7A1C29] text-white flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h5 className="font-serif text-lg text-stone-900 font-semibold leading-tight">
                09:30 AM - 03:30 PM
              </h5>
              <p className="font-sinhala text-xs text-stone-600">
                පෙ.ව. 09:30 - ප.ව. 03:30
              </p>
              <span className="text-[10px] tracking-wider text-[#D67D89] font-medium uppercase">
                PORUWA CEREMONY &amp; RECEPTION
              </span>
            </div>
          </div>

          {/* Location Item */}
          <div className="relative z-10 flex items-center gap-4 bg-white/85 p-3.5 rounded-2xl border border-[#C59A5F]/25 shadow-xs">
            <div className="w-11 h-11 rounded-full bg-[#7A1C29] text-white flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h5 className="font-serif text-lg text-stone-900 font-semibold leading-tight">
                Galle Face Hotel, Colombo
              </h5>
              <p className="font-sinhala text-xs text-stone-600">
                ගාලු මුවදොර හෝටලය, කොළඹ
              </p>
              <span className="text-[10px] tracking-wider text-stone-400 uppercase">
                COLOMBO, SRI LANKA
              </span>
            </div>
          </div>
        </div>

        {/* Auspicious Moments Breakdown Expander */}
        <div className="mt-6 pt-4 border-t border-[#C59A5F]/20 text-center">
          <button
            onClick={() => setShowDetailedSchedule(!showDetailedSchedule)}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8F662C] font-semibold hover:text-[#7A1C29] transition-colors cursor-pointer"
          >
            <span>{showDetailedSchedule ? 'Hide Auspicious Schedule' : 'View Auspicious Timings (නැකත්)'}</span>
            {showDetailedSchedule ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showDetailedSchedule && (
            <div className="mt-4 space-y-3 text-left">
              <div className="bg-white p-3 rounded-xl border border-[#C59A5F]/20">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-stone-900 text-sm">09:30 AM</span>
                  <span className="text-[10px] uppercase font-bold text-[#D67D89] bg-[#FBECE7] px-2 py-0.5 rounded">Arrival</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">Arrival of guests to ceremonial Magul Bera drumming.</p>
                <p className="font-sinhala text-[11px] text-stone-500">ආරාධිත අමුත්තන්ගේ පැමිණීම සහ මඟුල් බෙර වාදනය.</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#C59A5F]/20">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-stone-900 text-sm">10:05 AM</span>
                  <span className="text-[10px] uppercase font-bold text-[#8F662C] bg-amber-50 px-2 py-0.5 rounded">Poruwa Siritha</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">Ascending the auspicious Poruwa &amp; exchanging wedding vows.</p>
                <p className="font-sinhala text-[11px] text-stone-500">ශුභ මුහුර්තියෙන් පෝරුවට නැගීම සහ චාරිත්‍ර ඉටුකිරීම.</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#C59A5F]/20">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-stone-900 text-sm">11:15 AM</span>
                  <span className="text-[10px] uppercase font-bold text-[#7A1C29] bg-[#FAF0E6] px-2 py-0.5 rounded">Blessings</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">Jayamangala Gatha chanting &amp; lighting the traditional oil lamp.</p>
                <p className="font-sinhala text-[11px] text-stone-500">ජයමංගල ගාථා සහ සාම්ප්‍රදායික පහන දැල්වීම.</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#C59A5F]/20">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-stone-900 text-sm">12:30 PM</span>
                  <span className="text-[10px] uppercase font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">Banquet</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">Festive wedding lunch &amp; champagne celebration.</p>
                <p className="font-sinhala text-[11px] text-stone-500">මංගල භෝජන සංග්‍රහය සහ ප්‍රීතිමත් උත්සවය.</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#C59A5F]/20">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-stone-900 text-sm">03:30 PM</span>
                  <span className="text-[10px] uppercase font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">Going Away</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">Departure of bride and groom with heartfelt blessings.</p>
                <p className="font-sinhala text-[11px] text-stone-500">යුවලගේ නික්මයාම (නැකතට පිටත්වීම).</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
