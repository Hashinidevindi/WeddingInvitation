import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const address = 'Galle Face Hotel, 2 Galle Road, Colombo 00300, Sri Lanka';

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="px-5 mb-8" data-purpose="venue-and-location">
      <div className="bg-white rounded-3xl p-6 border border-[#C59A5F]/25 poruwa-card-shadow text-center relative">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-semibold mb-1">
          THE VENUE
        </p>
        <h3 className="font-serif italic text-3xl text-[#2D2829] mb-4">
          Where We Celebrate
        </h3>

        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#FBECE7] flex items-center justify-center text-[#7A1C29]">
            <MapPin className="w-4 h-4 stroke-[2]" />
          </div>
          <div className="text-left">
            <h4 className="font-serif text-xl font-bold text-stone-800">
              Galle Face Hotel
            </h4>
            <p className="text-[11px] text-stone-500 uppercase tracking-widest font-sans">
              Colombo, Sri Lanka
            </p>
          </div>
        </div>

        <p className="font-serif italic text-stone-600 text-sm max-w-xs mx-auto mb-5 leading-relaxed">
          "A serene and elegant oceanfront setting where we will begin our new chapter together."
        </p>

        {/* Live Map Preview Area */}
        <div className="relative rounded-2xl overflow-hidden border border-[#C59A5F]/30 bg-stone-100 h-44 mb-4 flex items-center justify-center shadow-inner">
          {/* Stylized Mock Map Graphic (Colombo Ocean & Galle Face green simulation) */}
          <div className="absolute inset-0 bg-[#d8ecf8]">
            {/* Ocean waves indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-2/5 bg-[#bde0f5] flex flex-col justify-around py-2">
              <span className="text-[9px] text-[#488cb8]/60 font-sans tracking-widest -rotate-90 block">
                INDIAN OCEAN
              </span>
            </div>

            {/* Galle Road / Coastline */}
            <div className="absolute left-[38%] top-0 bottom-0 w-3 bg-[#e8d5b5]" />

            {/* Land / Park area */}
            <div className="absolute right-0 top-0 bottom-0 w-[58%] bg-[#eef5e6]">
              <div className="p-2 text-[9px] text-stone-500 font-sans text-right">
                Galle Face Green • One Galle Face
              </div>
            </div>

            {/* Marker */}
            <div className="absolute left-[45%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-[#7A1C29] text-white flex items-center justify-center shadow-lg animate-bounce">
                <MapPin className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="bg-white/95 text-stone-800 text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs mt-1 whitespace-nowrap">
                Galle Face Hotel
              </span>
            </div>
          </div>

          {/* Live Location action button inside card */}
          <a
            href="https://maps.google.com/?q=Galle+Face+Hotel+Colombo"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 bg-stone-900/90 hover:bg-stone-900 text-white text-[11px] font-sans font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#C59A5F]" />
            <span>LIVE MAP</span>
          </a>
        </div>

        {/* Directions Action */}
        <div className="space-y-2">
          <a
            href="https://maps.google.com/?q=Galle+Face+Hotel+Colombo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#7A1C29] hover:bg-[#8F2231] text-white font-serif text-sm tracking-wider uppercase shadow-md transition-transform active:scale-[0.98]"
          >
            <Navigation className="w-4 h-4" />
            <span>GET DIRECTIONS</span>
          </a>

          <button
            onClick={handleCopy}
            className="w-full py-2 rounded-full border border-stone-200 hover:bg-stone-50 text-stone-600 text-xs font-sans flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Address Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-400" />
                <span>Copy Full Address: 2 Galle Rd, Colombo</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
