import React, { useState } from 'react';
import { X, CheckCircle2, Send, Calendar } from 'lucide-react';
import { RsvpSubmission } from '../types';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitRsvp: (data: RsvpSubmission) => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose, onSubmitRsvp }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestsCount, setGuestsCount] = useState(1);
  const [dietary, setDietary] = useState('Traditional Sri Lankan Buffet');
  const [wishes, setWishes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const data: RsvpSubmission = {
      name: name.trim(),
      phoneOrEmail: contact.trim(),
      attending,
      guestsCount: attending === 'yes' ? guestsCount : 0,
      dietary,
      wishes: wishes.trim(),
      submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    onSubmitRsvp(data);
    setSubmitted(true);
  };

  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Janani and Denuwan//Wedding Invitation//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Wedding Poruwa Ceremony - Janani & Denuwan',
      'DESCRIPTION:Traditional Sri Lankan Poruwa ceremony & wedding reception of Janani and Denuwan at Galle Face Hotel Colombo.',
      'LOCATION:Galle Face Hotel, Colombo, Sri Lanka',
      'DTSTART:20261114T040000Z',
      'DTEND:20261114T100000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Janani-Denuwan-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FFFDF9] w-full max-w-md rounded-3xl border border-[#C59A5F]/40 p-6 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl text-stone-800">
              Ayubowan, {name}!
            </h3>
            <p className="font-sinhala text-sm text-[#7A1C29]">
              ඔබගේ ආදරණීය ප්‍රතිචාරයට අපගේ හදපිරි ස්තූතිය!
            </p>
            <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
              Thank you for confirming your presence. Your blessings mean the world to Janani &amp; Denuwan as they unite in sacred marriage.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleDownloadIcs}
                className="w-full py-2.5 rounded-full bg-[#FAF4EB] border border-[#C59A5F]/40 text-[#8F662C] hover:bg-amber-50 text-xs font-serif font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Save to Apple / Google Calendar</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full bg-[#7A1C29] text-white text-xs font-serif font-medium uppercase tracking-wider hover:bg-[#8F2231] cursor-pointer"
              >
                Back to Invitation
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8F662C] font-semibold">
                R. S. V. P.
              </p>
              <h3 className="font-serif italic text-2xl text-[#7A1C29] mt-0.5">
                Will You Join Us?
              </h3>
              <p className="font-sinhala text-xs text-stone-600 mt-1">
                කරුණාකර ඔබගේ පැමිණීම තහවුරු කරන්න
              </p>
            </div>

            {/* Attendance Toggle */}
            <div className="grid grid-cols-2 gap-2.5 p-1 bg-stone-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setAttending('yes')}
                className={`py-2 rounded-xl text-xs font-serif font-semibold transition-all cursor-pointer ${
                  attending === 'yes'
                    ? 'bg-white text-[#7A1C29] shadow-xs border border-[#C59A5F]/30'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Joyfully Accept
              </button>
              <button
                type="button"
                onClick={() => setAttending('no')}
                className={`py-2 rounded-xl text-xs font-serif font-semibold transition-all cursor-pointer ${
                  attending === 'no'
                    ? 'bg-white text-stone-800 shadow-xs border border-stone-300'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Regretfully Decline
              </button>
            </div>

            {/* Guest Name */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Kasun & Dinithi Ranasinghe"
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#7A1C29] focus:ring-1 focus:ring-[#7A1C29] text-xs bg-white text-stone-800 outline-hidden"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Contact Number or Email
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g. +94 77 123 4567 or email@domain.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#7A1C29] focus:ring-1 focus:ring-[#7A1C29] text-xs bg-white text-stone-800 outline-hidden"
              />
            </div>

            {attending === 'yes' && (
              <>
                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Number of Seats Reserved
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#7A1C29] text-xs bg-white text-stone-800 outline-hidden"
                  >
                    <option value={1}>1 Guest (Self)</option>
                    <option value={2}>2 Guests (Couple)</option>
                    <option value={3}>3 Guests (Family)</option>
                    <option value={4}>4 Guests (Family)</option>
                  </select>
                </div>

                {/* Meal Preference */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Meal Preference
                  </label>
                  <select
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#7A1C29] text-xs bg-white text-stone-800 outline-hidden"
                  >
                    <option value="Traditional Sri Lankan Buffet">Traditional Sri Lankan Buffet</option>
                    <option value="Vegetarian / Vegan">Vegetarian / Vegan</option>
                    <option value="Halal Friendly">Halal Friendly</option>
                    <option value="Children's Meal">Children's Meal</option>
                  </select>
                </div>
              </>
            )}

            {/* Warm Blessings note */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Warm Blessings / සුබ පැතුම්
              </label>
              <textarea
                rows={2}
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                placeholder="Share your heartfelt blessing for the couple..."
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:border-[#7A1C29] text-xs bg-white text-stone-800 outline-hidden resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#7A1C29] hover:bg-[#8F2231] text-white font-serif text-sm tracking-wide font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM ATTENDANCE</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
