import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function OfferTimer() {
  // start at 18h30m
  const initialSeconds = 18 * 3600 + 30 * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  // format hh:mm:ss
  const hrs = Math.floor(secondsLeft / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;
  const pad = n => String(n).padStart(2, '0');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 px-4 py-3 z-50">
      {/* Message and offer text */}
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span>Limited-Time Express Audit — Offer valid for 48 hrs only</span>
      </div>

      {/* Countdown timer */}
      <div className="flex items-center font-mono text-base sm:text-lg space-x-1 sm:space-x-2">
        <span className="md:offertime">{pad(hrs)}:{pad(mins)}:{pad(secs)}</span>
        <span>left</span>
      </div>

      {/* Action button */}
      <button className="w-full sm:w-auto mt-2 sm:mt-0 bg-white text-black px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition">
        Skip The Line
      </button>
    </div>
  );
}
