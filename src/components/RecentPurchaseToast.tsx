import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PurchaseEvent {
  name: string;
  initials: string;
  city: string;
  timeAgo: string;
  tagline: string;
}

const purchasePool: PurchaseEvent[] = [
  { name: 'Abhinav', initials: 'AB', city: 'Mumbai', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Priya', initials: 'PS', city: 'Delhi', timeAgo: '1m ago', tagline: 'Grabbed 20% festive pass' },
  { name: 'Rohan', initials: 'RD', city: 'Bengaluru', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Sneha', initials: 'SK', city: 'Pune', timeAgo: '2m ago', tagline: 'Claimed Yearly Sangha seat' },
  { name: 'Rahul', initials: 'RM', city: 'Hyderabad', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Ananya', initials: 'AG', city: 'Kolkata', timeAgo: '3m ago', tagline: 'Only few seats left' },
  { name: 'Vikram', initials: 'VS', city: 'Ahmedabad', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Neha', initials: 'NJ', city: 'Jaipur', timeAgo: '1m ago', tagline: 'Grabbed 20% festive pass' },
  { name: 'Aditya', initials: 'AC', city: 'Chandigarh', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Pooja', initials: 'PR', city: 'Chennai', timeAgo: '2m ago', tagline: 'Claimed Yearly Sangha seat' },
  { name: 'Kartik', initials: 'KV', city: 'Indore', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Divya', initials: 'DP', city: 'Surat', timeAgo: '1m ago', tagline: 'Only few seats left' },
  { name: 'Arjun', initials: 'AM', city: 'Gurugram', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Meera', initials: 'MN', city: 'Kochi', timeAgo: '3m ago', tagline: 'Grabbed 20% festive pass' },
  { name: 'Siddharth', initials: 'SB', city: 'Noida', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Tanvi', initials: 'TS', city: 'Bhopal', timeAgo: '2m ago', tagline: 'Claimed Yearly Sangha seat' },
  { name: 'Varun', initials: 'VT', city: 'Lucknow', timeAgo: 'just now', tagline: 'Another spot gone' },
  { name: 'Ishita', initials: 'IR', city: 'Dehradun', timeAgo: '1m ago', tagline: 'Only few seats left' },
];

export const RecentPurchaseToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissedByUser, setIsDismissedByUser] = useState(false);

  useEffect(() => {
    if (isDismissedByUser) return;

    // Initial pop-up appears shortly after page load (3 seconds)
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2800);

    // Interval to cycle every 8 seconds (displays for 4.2s, pauses for 3.8s)
    const interval = setInterval(() => {
      // Hide current
      setIsVisible(false);

      // Wait a moment before showing the next name
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % purchasePool.length);
        setIsVisible(true);
      }, 3600);
    }, 8500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissedByUser]);

  if (isDismissedByUser) return null;

  const current = purchasePool[currentIndex];

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-3 sm:bottom-5 left-3 sm:left-6 z-50 transition-all duration-500 ease-out pointer-events-auto max-w-[calc(100vw-24px)] xs:max-w-sm ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <div className="relative flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#150522]/95 border-2 border-amber-400/80 shadow-[0_12px_40px_rgba(0,0,0,0.95),0_0_25px_rgba(245,158,11,0.35)] backdrop-blur-xl">
        {/* Glowing Amber Avatar with Initials */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.6)] border border-yellow-100 select-none">
          {current.initials}
        </div>

        {/* Content Details */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-extrabold text-amber-300 text-xs sm:text-sm truncate">
              {current.name}
            </span>
            <span className="text-white font-medium text-xs sm:text-sm">
              just registered!
            </span>
            <span className="text-[10px] text-amber-200/60 hidden xs:inline">
              • {current.city}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-100 font-medium mt-0.5">
            <span role="img" aria-label="alarm" className="text-[11px]">
              ⏰
            </span>
            <span className="italic font-bold text-yellow-300">
              "{current.tagline}"
            </span>
            <span role="img" aria-label="alarm" className="text-[11px]">
              ⏰
            </span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissedByUser(true)}
          className="text-amber-300/60 hover:text-amber-200 p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
