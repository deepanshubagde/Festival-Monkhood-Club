import React, { useState, useEffect, useCallback } from 'react';
import {
  Smartphone,
  Laptop,
  ChevronLeft,
  ChevronRight,
  UploadCloud,
  Home,
  Compass,
  BookOpen,
  MessageSquare,
} from 'lucide-react';
import { DiyaLamp } from './FestiveLightsHeader';

interface AppTab {
  id: string;
  title: string;
  subtitle: string;
  tabName: string;
  fallbackFile: string;
}

const tabs: AppTab[] = [
  {
    id: 'feed',
    title: 'Sangha Community Feed & Live Zoom Sessions',
    subtitle: 'Sunday Live Session (28 likes • 50 comments • 407 views) + Monthly Course Releases',
    tabName: 'Feed',
    fallbackFile: '/assets/1-Ifh3S0Q1.jpeg',
  },
  {
    id: 'courses-1',
    title: 'Mindful Transformation & Meditation Vault',
    subtitle: 'Featuring Rahul Dongre & Deepanshu Bagde Masterclasses',
    tabName: 'Courses (Vol. 1)',
    fallbackFile: '/assets/2-CTUCHkOa.jpeg',
  },
  {
    id: 'courses-2',
    title: 'Sunday Live Vault & Jataka Wisdom',
    subtitle: 'Recorded 10 AM Sessions & Dr. Jasbir Chawala Wisdom Series',
    tabName: 'Courses (Vol. 2)',
    fallbackFile: '/assets/3-MQObgK1L.jpeg',
  },
  {
    id: 'courses-3',
    title: 'Psychosomatic Healing & Mindful Mastery',
    subtitle: 'Deepanshu Bagde & Dr. Sujit Bodhi Ancient Healing Series',
    tabName: 'Courses (Vol. 3)',
    fallbackFile: '/assets/4-CCaxXfLy.jpeg',
  },
  {
    id: 'messages',
    title: 'Real-Time Communities & Live Rooms',
    subtitle: 'Yearly & Monthly Members Sangha with Live Broadcast Alerts',
    tabName: 'Messages',
    fallbackFile: '/assets/5-C2OjgkJp.jpeg',
  },
];

export const AppShowcaseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [customScreenshots, setCustomScreenshots] = useState<Record<number, string>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const count = tabs.length;

  useEffect(() => {
    tabs.forEach(tab => {
      const img = new Image();
      img.src = tab.fallbackFile;
    });
  }, []);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 3500);
    return () => clearTimeout(timer);
  }, [notification]);

  const goNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + count) % count);
  }, [count]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const diff = touchStartX - touchEndX;
    if (diff > 40) goNext();
    if (diff < -40) goPrev();
  };

  const handleDrop = (files: FileList) => {
    if (files.length === 0) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    setCustomScreenshots(prev => ({ ...prev, [activeIndex]: url }));
    setNotification(`✓ Screenshot for "${tabs[activeIndex].tabName}" loaded!`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % count);
    }, 7000);
    return () => clearInterval(timer);
  }, [count]);

  const currentImg = customScreenshots[activeIndex] || tabs[activeIndex].fallbackFile;

  return (
    <section
      id="app-showcase-section"
      className="pt-10 sm:pt-16 pb-6 sm:pb-10 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative overflow-hidden scroll-mt-6"
      aria-label="Monkhood Club Mobile App Showcase"
    >
      {notification && (
        <div className="fixed top-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs shadow-2xl border border-yellow-200">
          {notification}
        </div>
      )}

      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 className="font-cinzel text-2xl sm:text-4xl font-black tracking-wide text-white mb-2 sm:mb-3 gold-text-gradient drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Get the Monkhood Club App
        </h2>
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-400/25 to-amber-500/20 border border-amber-400/40 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.25)] mb-3 backdrop-blur-md">
          <Smartphone className="w-3.5 h-3.5 text-amber-400" />
          <span>Android, iOS & Web</span>
          <Laptop className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <p className="text-xs sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
          Access your digital sangha, live Sunday community sessions, meditation vault, and mastercourses across Android, iOS, and Web platforms.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-6">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold tap-instant cursor-pointer transition-all ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-yellow-300 to-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.6)] font-bold scale-105 border border-yellow-100'
                  : 'bg-[#1e0730]/90 border border-amber-500/30 text-slate-300 hover:border-amber-400/60 hover:text-amber-200'
              }`}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        {/* Mockup with Next/Prev Arrows */}
        <div className="relative flex items-center justify-center my-3 sm:my-6 px-1 sm:px-14">
          <button
            id="carousel-prev-btn"
            onClick={goPrev}
            aria-label="Previous App Screen"
            className="absolute -left-1 sm:-left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#200833]/90 border border-amber-400/60 hover:border-yellow-300 text-amber-300 hover:text-amber-100 flex items-center justify-center backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_25px_rgba(245,158,11,0.3)] tap-instant group cursor-pointer"
            title="Previous Screen (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            id="carousel-next-btn"
            onClick={goNext}
            aria-label="Next App Screen"
            className="absolute -right-1 sm:-right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#200833]/90 border border-amber-400/60 hover:border-yellow-300 text-amber-300 hover:text-amber-100 flex items-center justify-center backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_25px_rgba(245,158,11,0.3)] tap-instant group cursor-pointer"
            title="Next Screen (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Smartphone Hardware Frame */}
          <div className="relative mx-auto w-full max-w-[310px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[390px] select-none">
            {/* Volume Buttons Left */}
            <div className="absolute -left-[3.5px] top-[95px] w-[3.5px] h-[22px] bg-gradient-to-r from-[#2a2833] to-[#454350] rounded-l-[2px] shadow-sm z-10" />
            <div className="absolute -left-[3.5px] top-[135px] w-[3.5px] h-[46px] bg-gradient-to-r from-[#2a2833] to-[#454350] rounded-l-[2px] shadow-sm z-10" />
            <div className="absolute -left-[3.5px] top-[195px] w-[3.5px] h-[46px] bg-gradient-to-r from-[#2a2833] to-[#454350] rounded-l-[2px] shadow-sm z-10" />
            {/* Power Button Right */}
            <div className="absolute -right-[3.5px] top-[140px] w-[3.5px] h-[64px] bg-gradient-to-l from-[#2a2833] to-[#454350] rounded-r-[2px] shadow-sm z-10" />
            <div className="absolute -right-[3px] top-[230px] w-[3px] h-[46px] bg-gradient-to-l from-[#201e28] to-[#363442] rounded-r-[2px] shadow-sm z-10 ring-[0.5px] ring-white/10" />

            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDragOver={e => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={e => {
                e.preventDefault();
                setIsDragging(false);
                if (e.dataTransfer.files) handleDrop(e.dataTransfer.files);
              }}
              className={`relative rounded-[44px] xs:rounded-[50px] sm:rounded-[56px] p-[3px] sm:p-[4px] bg-gradient-to-b from-[#6b4226] via-[#3d1a45] to-[#592c1d] shadow-[0_20px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(245,158,11,0.25)] transition-all ${
                isDragging ? 'ring-4 ring-amber-400 scale-[1.01]' : 'ring-1 ring-amber-400/40'
              }`}
            >
              <div className="absolute inset-0 rounded-[44px] xs:rounded-[50px] sm:rounded-[56px] pointer-events-none ring-1 ring-inset ring-amber-400/30" />
              <div className="relative rounded-[41px] xs:rounded-[47px] sm:rounded-[52px] p-[5px] sm:p-[7px] bg-[#000000]">
                {/* Speaker Grill */}
                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-10 sm:w-14 h-[3px] bg-[#1a1924] rounded-full z-30 pointer-events-none" />

                {/* Display Screen */}
                <div className="relative rounded-[36px] xs:rounded-[41px] sm:rounded-[46px] overflow-hidden bg-[#0a0714] min-h-[500px] xs:min-h-[580px] sm:min-h-[640px] aspect-[9/19.5] flex flex-col justify-start shadow-inner">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-[90px] sm:w-[110px] h-[24px] sm:h-[28px] bg-black rounded-full flex items-center justify-between px-3 shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-none ring-1 ring-white/[0.08]">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#090f1d] ring-1 ring-[#1b253c]/70 relative flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#18284e]/60" />
                    </div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#050508] ring-1 ring-[#111118]" />
                  </div>

                  {/* Glass Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.035] to-transparent pointer-events-none z-20" />

                  {isDragging && (
                    <div className="absolute inset-0 z-40 bg-slate-950/95 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-amber-400 rounded-[36px] sm:rounded-[46px] backdrop-blur-sm">
                      <UploadCloud className="w-10 h-10 text-amber-400 animate-bounce mb-2" />
                      <p className="text-sm font-bold text-amber-200">Drop screenshot here</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Will attach to {tabs[activeIndex].tabName}
                      </p>
                    </div>
                  )}

                  {currentImg && !imageErrors[activeIndex] ? (
                    <div className="w-full min-h-[500px] xs:min-h-[580px] sm:min-h-[640px] aspect-[9/19.5] bg-black relative flex items-center justify-center overflow-hidden">
                      <img
                        src={currentImg}
                        alt={tabs[activeIndex].title}
                        onError={() => setImageErrors(prev => ({ ...prev, [activeIndex]: true }))}
                        className="w-full h-full object-cover object-top block select-none"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    /* Fallback UI if asset image fails */
                    <div className="bg-white text-slate-900 overflow-hidden relative flex flex-col font-sans h-full">
                      <div className="px-4 pt-10 pb-2 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-black">
                          Feed
                        </h2>
                        <div className="flex items-center space-x-3.5 text-slate-800">
                          <span className="text-xl sm:text-2xl font-light cursor-pointer leading-none">
                            +
                          </span>
                          <span className="text-base sm:text-lg">🔔</span>
                        </div>
                      </div>
                      <div className="p-4 flex-1 overflow-y-auto space-y-4">
                        <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                          <div className="flex items-center space-x-2 text-xs font-bold text-amber-900 mb-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Sunday Live Community Session</span>
                          </div>
                          <p className="text-xs text-slate-600">
                            ⏱ 01:27:06 • Hosted by Rahul Dongre
                          </p>
                          <p className="text-xs text-slate-800 mt-2 font-medium">
                            💬 "Great experience thank you Sirji! Amazing feeling... Feeling like internal cleaning."
                          </p>
                          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                            <span>28 likes • 50 comments</span>
                            <span className="text-amber-700 font-semibold">407 views</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-slate-200 px-4 py-2.5 flex items-center justify-around text-slate-500 text-[11px] bg-white">
                        <div className="flex flex-col items-center text-amber-600 font-bold">
                          <Home className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5" />
                          <span>Feed</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Compass className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 text-slate-400" />
                          <span>Workshops</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 text-slate-400" />
                          <span>Courses</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 text-slate-400" />
                          <span>Sangha</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Home Bar */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-[4px] bg-white/70 rounded-full z-30 pointer-events-none shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption & Carousel Details */}
        <div className="mt-4 sm:mt-6 text-center max-w-lg mx-auto px-3 sm:px-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-semibold mb-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Screen {activeIndex + 1} of {count} • {tabs[activeIndex].tabName}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
            {tabs[activeIndex].title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {tabs[activeIndex].subtitle}
          </p>
        </div>

        {/* Carousel Dots & Controls */}
        <div className="flex items-center justify-center space-x-3 mt-4 mb-2">
          <button
            onClick={goPrev}
            className="px-3.5 py-1.5 rounded-xl bg-[#220738] hover:bg-[#320a52] border border-amber-500/30 text-amber-200 text-xs font-semibold flex items-center space-x-1.5 tap-instant shadow-sm cursor-pointer"
            title="Previous Screen (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4 text-amber-400" />
            <span>Prev</span>
          </button>

          <div className="flex items-center space-x-2 px-1">
            {tabs.map((_, idx) => (
              <button
                key={idx}
                id={`carousel-dot-${idx}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 sm:w-7 bg-gradient-to-r from-yellow-300 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                    : 'w-2 bg-amber-400/25 hover:bg-amber-400/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="px-3.5 py-1.5 rounded-xl bg-[#220738] hover:bg-[#320a52] border border-amber-500/30 text-amber-200 text-xs font-semibold flex items-center space-x-1.5 tap-instant shadow-sm cursor-pointer"
            title="Next Screen (Right Arrow)"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
