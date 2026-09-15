import React, { useState } from 'react';
import { Heart, MessageSquareHeart, Plus, Send } from 'lucide-react';
import { Blessing } from '../types';

interface BlessingsWallProps {
  onOpenRsvp: () => void;
}

const initialBlessings: Blessing[] = [
  {
    id: '1',
    sender: 'Amma & Thaththa (Silva Family)',
    relation: "Bride's Parents",
    message: 'May the Triple Gem bless our precious Janani & Denuwan with everlasting joy, harmony, and prosperity!',
    date: 'August 2026',
  },
  {
    id: '2',
    sender: 'Perera Family Elders',
    relation: "Groom's Family",
    message: 'දෙදෙනාටම චිරං ජයතු! Wishing you both a marriage filled with unconditional love and radiant smiles.',
    date: 'August 2026',
  },
  {
    id: '3',
    sender: 'Sahan & Tharushi',
    relation: 'University Friends',
    message: 'Still remember your first smiles in Peradeniya! So thrilled to celebrate your special Poruwa day in Colombo!',
    date: 'August 2026',
  },
];

export const BlessingsWall: React.FC<BlessingsWallProps> = ({ onOpenRsvp }) => {
  const [blessings, setBlessings] = useState<Blessing[]>(initialBlessings);
  const [showForm, setShowForm] = useState(false);
  const [sender, setSender] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');

  const handleAddBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sender.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      sender: sender.trim(),
      relation: relation.trim() || 'Well-wisher',
      message: message.trim(),
      date: 'Just now',
    };

    setBlessings([newBlessing, ...blessings]);
    setSender('');
    setRelation('');
    setMessage('');
    setShowForm(false);
  };

  const handleCalendar = () => {
    const title = encodeURIComponent("Janani & Denuwan's Wedding Poruwa Ceremony");
    const details = encodeURIComponent(
      "Poruwa Ceremony & Wedding Reception of Janani & Denuwan at Galle Face Hotel Colombo."
    );
    const location = encodeURIComponent('Galle Face Hotel, Colombo, Sri Lanka');
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260814T040000Z/20260814T100000Z&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <section className="px-5 mb-8" data-purpose="rsvp-and-wishes">
      {/* RSVP Banner */}
      <div className="bg-[#FAF0E6] rounded-3xl p-6 border border-[#C59A5F]/35 text-center mb-8 shadow-2xs">
        <h4 className="font-serif italic text-2xl text-[#7A1C29] mb-2">
          We Look Forward to Celebrating With You
        </h4>
        <p className="font-sinhala text-xs text-stone-600 mb-5 leading-relaxed">
          ඔබගේ පැමිණීම අපගේ සතුටට හා ආශිර්වාදයට හේතු වනු ඇත.
        </p>

        <button
          id="open-rsvp-modal-btn"
          onClick={onOpenRsvp}
          className="w-full py-3.5 rounded-full bg-white border border-[#C59A5F]/70 text-[#7A1C29] font-serif text-base tracking-wide font-semibold shadow-xs hover:bg-[#FAF4EB] active:scale-[0.98] transition-all mb-3.5 cursor-pointer"
        >
          RSVP TO INVITATION
        </button>

        <button
          id="add-to-calendar-btn"
          onClick={handleCalendar}
          className="text-xs uppercase tracking-widest text-[#8F662C] font-semibold hover:underline inline-flex items-center gap-1.5 cursor-pointer"
        >
          <span>+ Add to iOS / Google Calendar</span>
        </button>
      </div>

      {/* Guest Blessings & Well Wishes Card */}
      <div className="bg-white rounded-3xl p-6 border border-[#C59A5F]/25 poruwa-card-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-[#7A1C29]">
            <MessageSquareHeart className="w-5 h-5" />
            <h4 className="font-serif text-xl font-semibold text-stone-800">
              Blessings &amp; Well Wishes
            </h4>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="p-1.5 rounded-full bg-[#FAF4EB] text-[#8F662C] hover:bg-amber-100 transition-colors cursor-pointer"
            title="Add Blessing"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <p className="font-serif italic text-xs text-stone-500 mb-4">
          Leave your sacred words of congratulations for the auspicious couple.
        </p>

        {showForm && (
          <form onSubmit={handleAddBlessing} className="mb-5 p-4 rounded-2xl bg-[#FFFDF9] border border-[#C59A5F]/30 space-y-3 animate-fadeIn">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:border-[#7A1C29] outline-hidden bg-white text-stone-800"
            />
            <input
              type="text"
              placeholder="Your Relation (e.g., Cousin, Colleague, Friend)"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:border-[#7A1C29] outline-hidden bg-white text-stone-800"
            />
            <textarea
              required
              rows={2}
              placeholder="Your warm wedding message or Sinhala blessing..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:border-[#7A1C29] outline-hidden bg-white text-stone-800 resize-none"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-[#7A1C29] text-white text-xs font-serif font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#8F2231]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Blessing</span>
            </button>
          </form>
        )}

        {/* Blessings List */}
        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
          {blessings.map((b) => (
            <div
              key={b.id}
              className="p-3 rounded-2xl bg-[#FFFDF9] border border-stone-100 hover:border-[#C59A5F]/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3 h-3 text-[#D67D89] fill-[#D67D89]" />
                  <span className="font-serif font-semibold text-stone-900 text-xs">
                    {b.sender}
                  </span>
                </div>
                <span className="text-[10px] text-stone-400 font-sans">{b.date}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#8F662C] font-medium block mb-1.5">
                {b.relation}
              </span>
              <p className="font-serif italic text-xs text-stone-700 leading-relaxed">
                "{b.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
