import React from 'react';
import { X, Sparkles, Droplets, Flame, Music, Sun } from 'lucide-react';

interface TraditionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TraditionsModal: React.FC<TraditionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const traditions = [
    {
      title: 'The Sacred Poruwa (පෝරුව)',
      icon: <Sparkles className="w-5 h-5 text-[#8F662C]" />,
      desc: 'The carved wooden throne symbolizes sacred ground, decorated with fresh lotus flowers, betel leaves, and coconut flowers (Pol Mal) denoting eternal fertility and abundance.',
    },
    {
      title: 'Tying of Pinkies & Holy Water (නූල් බැඳ පැන් වැක්කිරීම)',
      icon: <Droplets className="w-5 h-5 text-[#7A1C29]" />,
      desc: 'The bride’s maternal uncle binds the couple’s right little fingers with a blessed golden thread (Pirith Nool). Sacred water is poured from a silver Kendiya kettle to bestow eternal unity.',
    },
    {
      title: 'Jayamangala Gatha Chanting (ජයමංගල ගාථා)',
      icon: <Music className="w-5 h-5 text-[#D67D89]" />,
      desc: 'Young maidens dressed in traditional half-saris sing timeless Pali stanzas invoking the blessings of the Triple Gem to shield the couple throughout life.',
    },
    {
      title: 'Lighting the Traditional Brass Lamp (පහන දැල්වීම)',
      icon: <Flame className="w-5 h-5 text-amber-600" />,
      desc: 'The couple together with beloved elders ignite wicks on a tall brass oil lamp (Pahan Pettiya), signifying light, wisdom, and the warmth of a unified home.',
    },
    {
      title: 'Sharing of Milk Rice (කිරිබත් කැවීම)',
      icon: <Sun className="w-5 h-5 text-[#C59A5F]" />,
      desc: 'The bride and groom tenderly feed each other the first morsel of auspicious Kiribath, sealing their commitment to nurture and cherish one another through every season.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FFFDF9] w-full max-w-lg rounded-3xl border border-[#C59A5F]/40 p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#8F662C] font-semibold">
            SRI LANKAN HERITAGE
          </p>
          <h3 className="font-serif italic text-2xl text-[#7A1C29] mt-1">
            Poruwa Siritha Traditions
          </h3>
          <p className="font-sinhala text-sm text-[#8F662C] mt-0.5">
            පෝරුවේ චාරිත්‍ර වාරිත්‍ර
          </p>
          <div className="w-12 h-0.5 bg-[#C59A5F]/40 mx-auto mt-3" />
        </div>

        <div className="space-y-4">
          {traditions.map((t, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-[#C59A5F]/20 flex items-start gap-3.5 shadow-2xs"
            >
              <div className="p-2.5 rounded-xl bg-[#FAF4EB] shrink-0 mt-0.5">
                {t.icon}
              </div>
              <div>
                <h4 className="font-serif font-semibold text-stone-900 text-sm">
                  {t.title}
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#7A1C29] text-white text-xs font-serif font-medium tracking-wider uppercase hover:bg-[#8F2231] transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
