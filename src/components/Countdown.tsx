import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, Clock, Edit3, Check } from 'lucide-react';

interface CountdownProps {
  targetDate?: string;
  onDateChange?: (newDate: string) => void;
}

// Helper to calculate time left or roll forward to the next future occurrence of August 14
function getResolvedTargetTime(inputDateStr: string): { targetMs: number; isRolledForward: boolean; resolvedDateStr: string } {
  const now = Date.now();
  let target = new Date(inputDateStr).getTime();

  if (isNaN(target)) {
    // Fallback default
    target = new Date('2026-11-14T09:30:00+05:30').getTime();
  }

  let isRolledForward = false;
  if (target <= now) {
    const targetObj = new Date(inputDateStr);
    if (!isNaN(targetObj.getTime())) {
      while (targetObj.getTime() <= now) {
        targetObj.setFullYear(targetObj.getFullYear() + 1);
      }
      target = targetObj.getTime();
      isRolledForward = true;
      return { targetMs: target, isRolledForward, resolvedDateStr: targetObj.toISOString() };
    }
  }

  return { targetMs: target, isRolledForward, resolvedDateStr: inputDateStr };
}

function computeTimeLeft(targetMs: number) {
  const now = Date.now();
  const difference = targetMs - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      totalMs: difference,
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate = '2026-11-14T09:30:00+05:30',
  onDateChange,
}) => {
  const [activeDate, setActiveDate] = useState(targetDate);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [customInput, setCustomInput] = useState('');

  // Resolve target to a valid future date
  const { targetMs, isRolledForward } = useMemo(() => {
    return getResolvedTargetTime(activeDate);
  }, [activeDate]);

  // Initial state calculated immediately so it never flashes 00
  const [timeLeft, setTimeLeft] = useState(() => computeTimeLeft(targetMs));

  useEffect(() => {
    // Immediate calculation on target change
    setTimeLeft(computeTimeLeft(targetMs));

    const interval = window.setInterval(() => {
      setTimeLeft(computeTimeLeft(targetMs));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetMs]);

  const pad = (n: number) => String(n).padStart(2, '0');

  const setPreset = (presetType: 'upcoming' | 'seven_days' | 'custom') => {
    const now = new Date();
    if (presetType === 'upcoming') {
      const nextDate = '2026-11-14T09:30:00+05:30';
      setActiveDate(nextDate);
      if (onDateChange) onDateChange(nextDate);
      setShowDatePicker(false);
    } else if (presetType === 'seven_days') {
      // 7 days, 5 hours, 28 minutes, 46 seconds to match the screenshot!
      const mockFuture = new Date(now.getTime() + (7 * 86400000) + (5 * 3600000) + (28 * 60000) + (46 * 1000));
      const mockStr = mockFuture.toISOString();
      setActiveDate(mockStr);
      if (onDateChange) onDateChange(mockStr);
      setShowDatePicker(false);
    }
  };

  const applyCustomDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput) return;
    const parsed = new Date(customInput);
    if (!isNaN(parsed.getTime())) {
      setActiveDate(parsed.toISOString());
      if (onDateChange) onDateChange(parsed.toISOString());
      setShowDatePicker(false);
    }
  };

  return (
    <section className="px-5 mb-10" data-purpose="countdown-timer">
      <div className="bg-gradient-to-b from-white/95 to-[#FBECE7]/40 rounded-3xl p-6 border border-[#C59A5F]/25 poruwa-card-shadow text-center relative overflow-hidden">
        {/* Header label & edit button */}
        <div className="flex items-center justify-between mb-1">
          <div className="w-6" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#8F662C] font-semibold">
            THE FINAL COUNTDOWN
          </p>
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="w-6 h-6 rounded-full hover:bg-stone-100 flex items-center justify-center text-stone-400 hover:text-[#7A1C29] transition-colors cursor-pointer"
            title="Adjust Wedding Date"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        </div>

        <h3 className="font-serif italic text-2xl sm:text-3xl text-[#7A1C29] mb-1.5">
          Until We Say "I Do"
        </h3>
        <p className="text-xs text-stone-500 font-serif italic mb-6">
          Time is standing still as we eagerly await the moment our forever begins.
        </p>

        {/* Date options accordion */}
        {showDatePicker && (
          <div className="mb-6 p-4 rounded-2xl bg-white border border-[#C59A5F]/35 text-left text-xs shadow-xs space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between font-serif font-semibold text-stone-800">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#8F662C]" />
                Select Countdown Target
              </span>
              <span className="text-[10px] font-sans font-normal text-stone-400">
                Live Preview
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setPreset('upcoming')}
                className="px-3 py-1.5 rounded-xl bg-[#FAF4EB] border border-[#C59A5F]/30 text-[#7A1C29] font-medium text-[11px] hover:bg-amber-50 cursor-pointer"
              >
                Saturday, November 14 (Auspicious Poruwa)
              </button>
              <button
                type="button"
                onClick={() => setPreset('seven_days')}
                className="px-3 py-1.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 font-medium text-[11px] hover:bg-stone-200 cursor-pointer"
              >
                Demo Screenshot (07 Days Left)
              </button>
            </div>

            <form onSubmit={applyCustomDate} className="pt-2 border-t border-stone-100 flex items-center gap-2">
              <input
                type="datetime-local"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="px-2 py-1 border border-stone-300 rounded-lg text-[11px] text-stone-700 bg-white"
              />
              <button
                type="submit"
                className="px-3 py-1 rounded-lg bg-[#7A1C29] text-white text-[11px] font-medium flex items-center gap-1 cursor-pointer"
              >
                <Check className="w-3 h-3" />
                <span>Apply</span>
              </button>
            </form>
          </div>
        )}

        {/* Countdown Timer Grid (Days, Hours, Minutes) */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          {/* Days */}
          <div className="countdown-arch py-4 px-2 flex flex-col items-center">
            <span className="font-serif text-3xl font-medium text-stone-800" id="timer-days">
              {pad(timeLeft.days)}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#8F662C] font-semibold mt-1">
              DAYS
            </span>
            <div className="mt-2 text-[#D67D89] opacity-70">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L14 9H21L15.5 13.5L17.5 21L12 16.5L6.5 21L8.5 13.5L3 9H10L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Hours */}
          <div className="countdown-arch py-4 px-2 flex flex-col items-center">
            <span className="font-serif text-3xl font-medium text-stone-800" id="timer-hours">
              {pad(timeLeft.hours)}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#8F662C] font-semibold mt-1">
              HOURS
            </span>
            <div className="mt-2 text-[#D67D89] opacity-70">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L14 9H21L15.5 13.5L17.5 21L12 16.5L6.5 21L8.5 13.5L3 9H10L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Minutes */}
          <div className="countdown-arch py-4 px-2 flex flex-col items-center">
            <span className="font-serif text-3xl font-medium text-stone-800" id="timer-minutes">
              {pad(timeLeft.minutes)}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#8F662C] font-semibold mt-1">
              MINUTES
            </span>
            <div className="mt-2 text-[#D67D89] opacity-70">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L14 9H21L15.5 13.5L17.5 21L12 16.5L6.5 21L8.5 13.5L3 9H10L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Seconds block centered beneath with active second tick indicator */}
        <div className="w-1/3 mx-auto">
          <div className="countdown-arch py-3 px-2 flex flex-col items-center relative overflow-hidden">
            {/* Soft pulsing aura on each second */}
            <span
              key={timeLeft.seconds}
              className="font-serif text-2xl font-medium text-[#D67D89] transition-transform duration-200"
              id="timer-seconds"
            >
              {pad(timeLeft.seconds)}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#8F662C] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              SECONDS
            </span>
          </div>
        </div>

        {/* Lotus Base Ornament */}
        <div className="mt-5 pt-3.5 flex justify-center border-t border-[#C59A5F]/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#D67D89]/40" />
            <span className="text-xs text-[#D67D89] font-serif tracking-wide">
              ✿ Poruwa Ceremony ✿
            </span>
            <div className="w-8 h-px bg-[#D67D89]/40" />
          </div>
        </div>
      </div>
    </section>
  );
};
