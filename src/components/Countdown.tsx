import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate = '2026-11-14T09:30:00+05:30',
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="px-5 mb-10" data-purpose="countdown-timer">
      <div className="bg-gradient-to-b from-white/95 to-[#FBECE7]/40 rounded-3xl p-6 border border-[#C59A5F]/25 poruwa-card-shadow text-center relative overflow-hidden">
        {/* Header label */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#8F662C] font-semibold mb-1">
          THE FINAL COUNTDOWN
        </p>
        <h3 className="font-serif italic text-2xl sm:text-3xl text-[#7A1C29] mb-1.5">
          Until We Say "I Do"
        </h3>
        <p className="text-xs text-stone-500 font-serif italic mb-6">
          Time is standing still as we eagerly await the moment our forever begins.
        </p>

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

        {/* Seconds block centered beneath */}
        <div className="w-1/3 mx-auto">
          <div className="countdown-arch py-3 px-2 flex flex-col items-center">
            <span className="font-serif text-2xl font-medium text-[#D67D89]" id="timer-seconds">
              {pad(timeLeft.seconds)}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#8F662C] font-semibold">
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
