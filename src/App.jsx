import React, { useState, useEffect } from 'react';

function App() {
  // 1. Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date('2026-06-27T19:00:00');
    const difference = +targetDate - +new Date();
    
    if (difference <= 0) {
      return { expired: true };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg py-6 px-4 md:px-8 font-sans selection:bg-brand-gold/30">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* ================= HERO BRANDING PANEL ================= */}
        <section className="bg-white border border-brand-gold/40 rounded-xl p-6 shadow-sm relative overflow-hidden">
          {/* Subtle elegant border accents */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-maroon"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left/Center Text Stack */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div>
                <span className="inline-block bg-brand-maroon/10 text-brand-maroon text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  Graduation Invitation
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-brand-maroon leading-tight">
                  Please join us for Arushi's Graduation Celebration
                </h1>
                <p className="text-brand-gold font-serif text-lg md:text-xl font-medium mt-1">
                  A Class of 2026 Milestone
                </p>
              </div>

              {/* Information Stack */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-brand-gold/20 py-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Date</p>
                    <p className="text-sm font-bold text-gray-800">Saturday, June 27, 2026</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Time</p>
                    <p className="text-sm font-bold text-gray-800">7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Address</p>
                    <p className="text-sm font-bold text-gray-800 leading-snug">
                      Kalam Residence @ 1150 Vintage Cir, Corona, CA 92881
                    </p>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-brand-bg border border-brand-gold/20 rounded-lg p-4 flex flex-col space-y-2">
                <span className="text-xs text-brand-maroon uppercase tracking-widest font-bold text-center md:text-left">
                  Countdown to Celebration
                </span>
                
                {timeLeft.expired ? (
                  <div className="text-xl font-serif font-bold text-brand-maroon py-2 text-center md:text-left">
                    🎉 The Celebration has begun!
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-2 text-center max-w-sm">
                    <div className="bg-white border border-brand-gold/20 rounded p-2">
                      <span className="block text-2xl font-bold text-brand-maroon">{timeLeft.days}</span>
                      <span className="text-[10px] uppercase font-semibold text-gray-500">Days</span>
                    </div>
                    <div className="bg-white border border-brand-gold/20 rounded p-2">
                      <span className="block text-2xl font-bold text-brand-maroon">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-[10px] uppercase font-semibold text-gray-500">Hours</span>
                    </div>
                    <div className="bg-white border border-brand-gold/20 rounded p-2">
                      <span className="block text-2xl font-bold text-brand-maroon">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-[10px] uppercase font-semibold text-gray-500">Mins</span>
                    </div>
                    <div className="bg-white border border-brand-gold/20 rounded p-2">
                      <span className="block text-2xl font-bold text-brand-maroon">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-[10px] uppercase font-semibold text-gray-500">Secs</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Portrait Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-80 md:w-72 md:h-96 relative border-4 border-brand-gold p-1 rounded-xl shadow-lg bg-brand-bg transition-transform hover:scale-[1.01] duration-300">
                <img 
                  src="/arushi-portrait.png" 
                  alt="Arushi's Portrait" 
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to elegant placeholder styling if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-brand-maroon text-brand-gold p-6 text-center rounded-lg space-y-4">
                        <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        <h3 class="font-serif text-lg font-bold">Class of 2026</h3>
                        <p class="text-xs opacity-90">Arushi's Portrait</p>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= EVENING PROGRAM TIMELINE ================= */}
        <section className="bg-white border border-brand-gold/40 rounded-xl p-6 shadow-sm">
          <div className="border-b border-brand-gold/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-brand-maroon">
              Program — Assalamu Alaikum Family & Friends
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              We are delighted to celebrate this special milestone with all of you. Below is the program for the evening:
            </p>
          </div>

          {/* Timeline Graphic Track */}
          <div className="relative border-l border-brand-gold ml-3 md:ml-4 pl-6 md:pl-8 space-y-6">
            
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] w-4 h-4 bg-brand-maroon rounded-full border-4 border-brand-bg"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="text-xs font-bold uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wider whitespace-nowrap self-start">
                  5:30 PM – 7:00 PM
                </span>
                <div className="mt-1 md:mt-0">
                  <h4 className="font-bold text-gray-800">Friends’ Celebration</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Arushi’s childhood and college friends will have their own party in the backyard.
                  </p>
                  <p className="text-xs text-brand-maroon font-medium italic mt-1 bg-brand-maroon/5 px-2 py-1 rounded inline-block">
                    "No adults allowed — let the kids enjoy their time together!"
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] w-4 h-4 bg-brand-maroon rounded-full border-4 border-brand-bg"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="text-xs font-bold uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wider whitespace-nowrap self-start">
                  6:30 PM – 10:30 PM
                </span>
                <div className="mt-1 md:mt-0">
                  <h4 className="font-bold text-gray-800">Mocktail Bar</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    A variety of refreshing non-alcoholic drinks will be served on the front porch.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] w-4 h-4 bg-brand-maroon rounded-full border-4 border-brand-bg"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="text-xs font-bold uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wider whitespace-nowrap self-start">
                  7:00 PM
                </span>
                <div className="mt-1 md:mt-0">
                  <h4 className="font-bold text-gray-800">Appetizers Served</h4>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] w-4 h-4 bg-brand-maroon rounded-full border-4 border-brand-bg"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="text-xs font-bold uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wider whitespace-nowrap self-start">
                  At Sunset
                </span>
                <div className="mt-1 md:mt-0">
                  <h4 className="font-bold text-gray-800">Maghrib Prayer</h4>
                </div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] w-4 h-4 bg-brand-maroon rounded-full border-4 border-brand-bg"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="text-xs font-bold uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wider whitespace-nowrap self-start">
                  Following Maghrib
                </span>
                <div className="mt-1 md:mt-0">
                  <h4 className="font-bold text-gray-800">Official Welcome & Graduation Ceremony</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    All guests will be invited to the backyard for a formal welcome. A few short speeches will be followed by the graduation recognition ceremony honoring Arushi’s achievement.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 6 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] w-4 h-4 bg-brand-maroon rounded-full border-4 border-brand-bg"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="text-xs font-bold uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wider whitespace-nowrap self-start">
                  After Ceremony
                </span>
                <div className="mt-1 md:mt-0">
                  <h4 className="font-bold text-gray-800">Graduation Cake Cutting Ceremony</h4>
                </div>
              </div>
            </div>

            {/* Timeline Item 7 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] w-4 h-4 bg-brand-maroon rounded-full border-4 border-brand-bg"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="text-xs font-bold uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wider whitespace-nowrap self-start">
                  Dinner
                </span>
                <div className="mt-1 md:mt-0">
                  <h4 className="font-bold text-gray-800">Live BBQ & Traditional Desi Cuisine</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Enjoy freshly prepared kabobs, hot naan, and a variety of traditional Desi dishes.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 8 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] w-4 h-4 bg-brand-maroon rounded-full border-4 border-brand-bg"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="text-xs font-bold uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded tracking-wider whitespace-nowrap self-start">
                  After Dinner
                </span>
                <div className="mt-1 md:mt-0">
                  <h4 className="font-bold text-gray-800">Karaoke & Celebration</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    The fun continues with karaoke, laughter, and entertainment until midnight—or as long as everyone is having a great time!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footnote Callout Box */}
          <div className="mt-8 bg-brand-gold/5 border border-brand-gold rounded-lg p-5 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
            <div className="text-brand-gold flex-shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-serif text-center md:text-left">
              "Alhamdulillah, by the grace of Allah, Arushi has graduated with a Bachelor of Science in Nursing from San Diego State University. We are truly grateful to celebrate this proud moment with our family and friends. Your presence means a great deal to us. Please keep Arushi in your duas and bless her with your prayers for continued success, happiness, good health, and prosperity in the years ahead. With Love, The Kalam & Mehta Families."
            </p>
          </div>
        </section>

        {/* ================= CATERING MENU TRACK ================= */}
        <section className="bg-white border border-brand-gold/40 rounded-xl p-6 shadow-sm">
          <div className="border-b border-brand-gold/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-brand-maroon">
              Graduation Party Menu
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Catered by Bawarchi Tandoori — Chef Muzammil | Authentic Flavors. Exceptional Experience.
            </p>
          </div>

          {/* 4-Column Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Appetizers */}
            <div className="bg-brand-bg rounded-lg p-4 border border-brand-gold/10 flex flex-col">
              <div className="flex items-center space-x-2 border-b border-brand-gold/20 pb-2 mb-3">
                <span className="text-lg">🍢</span>
                <h3 className="font-serif font-bold text-brand-maroon uppercase tracking-wider text-sm">
                  Appetizers
                </h3>
              </div>
              <ul className="text-xs md:text-sm text-gray-700 space-y-2 flex-grow">
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Veggie Samosas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Live Fried Fish with Fries</span>
                </li>
              </ul>
            </div>

            {/* Main Course */}
            <div className="bg-brand-bg rounded-lg p-4 border border-brand-gold/10 flex flex-col">
              <div className="flex items-center space-x-2 border-b border-brand-gold/20 pb-2 mb-3">
                <span className="text-lg">🍲</span>
                <h3 className="font-serif font-bold text-brand-maroon uppercase tracking-wider text-sm">
                  Main Course
                </h3>
              </div>
              <ul className="text-xs md:text-sm text-gray-700 space-y-2 flex-grow">
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Goat Kunna Curry</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Chicken Tikka Masala Curry</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Chicken Biryani</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Bagharay Baingan (Eggplant) with Mirchi Curry</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Live Chicken Malai Boti BBQ</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Live Tandoori Garlic Naan</span>
                </li>
              </ul>
            </div>

            {/* Desserts */}
            <div className="bg-brand-bg rounded-lg p-4 border border-brand-gold/10 flex flex-col">
              <div className="flex items-center space-x-2 border-b border-brand-gold/20 pb-2 mb-3">
                <span className="text-lg">🍨</span>
                <h3 className="font-serif font-bold text-brand-maroon uppercase tracking-wider text-sm">
                  Desserts
                </h3>
              </div>
              <ul className="text-xs md:text-sm text-gray-700 space-y-2 flex-grow">
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Khubani ka Meeta</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Gulab Jamun</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Ras Malai</span>
                </li>
              </ul>
            </div>

            {/* Beverages */}
            <div className="bg-brand-bg rounded-lg p-4 border border-brand-gold/10 flex flex-col">
              <div className="flex items-center space-x-2 border-b border-brand-gold/20 pb-2 mb-3">
                <span className="text-lg">🥤</span>
                <h3 className="font-serif font-bold text-brand-maroon uppercase tracking-wider text-sm">
                  Beverages
                </h3>
              </div>
              <ul className="text-xs md:text-sm text-gray-700 space-y-2 flex-grow">
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Mocktails (Non-Alcoholic Drinks)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Soft Drinks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-gold mt-0.5">•</span>
                  <span>Hot Indian Tea</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= PARKING & NEIGHBORHOOD LOGISTICS CARD ================= */}
        <section className="bg-white border border-brand-gold/40 rounded-xl p-6 shadow-sm">
          <div className="border-b border-brand-gold/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-brand-maroon flex items-center space-x-2">
              <span>🚗</span>
              <span>Parking Information & Instructions</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Dear Family & Friends, Since our home is located on a small cul-de-sac with limited parking, we kindly ask all guests to park on Grovedale Street and walk a short distance to the house.
            </p>
          </div>

          {/* 2-Column Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column Box: Infographic Image */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="border border-brand-gold/40 rounded-lg p-1 bg-brand-bg shadow-md">
                <img 
                  src="/parking-instructions.jpg" 
                  alt="Parking Instructions Map" 
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>

            {/* Right Column List: Rules Checklist */}
            <div className="lg:col-span-5 bg-brand-bg rounded-lg p-5 border border-brand-gold/15 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-bold text-brand-maroon text-sm uppercase tracking-wider border-b border-brand-gold/20 pb-1">
                  Key Guidelines
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-gray-700">
                  {/* Rule 1 */}
                  <li className="flex items-start space-x-2.5">
                    <span className="text-emerald-600 mt-0.5 flex-shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Park along Grovedale Street (street parking)</span>
                  </li>

                  {/* Rule 2 */}
                  <li className="flex items-start space-x-2.5">
                    <span className="text-emerald-600 mt-0.5 flex-shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Walk directly into Vintage Circle and proceed to 1150 Vintage Cir</span>
                  </li>

                  {/* Rule 3 */}
                  <li className="flex items-start space-x-2.5">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span className="font-semibold text-gray-800">Please do not block any driveways</span>
                  </li>

                  {/* Rule 4 */}
                  <li className="flex items-start space-x-2.5">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span className="font-semibold text-gray-800">Please do not double park on Vintage Circle</span>
                  </li>

                  {/* Rule 5 */}
                  <li className="flex items-start space-x-2.5">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span>Avoid parking in front of mailboxes, fire hydrants, or areas that restrict traffic flow.</span>
                  </li>

                  {/* Rule 6 */}
                  <li className="flex items-start space-x-2.5">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span>Please help us keep the cul-de-sac clear for residents and emergency access.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4 pt-3 border-t border-brand-gold/15 bg-brand-gold/5 rounded p-3 text-xs text-gray-700 leading-snug font-serif">
                <strong>Walking Route Summary:</strong> From Grovedale St, walk north, turn right onto Vintage Cir and continue to 1150 Vintage Cir (Short 2–3 minute walk).
              </div>
            </div>
          </div>

          {/* Sign-off Footnote */}
          <div className="mt-6 text-center text-xs md:text-sm font-semibold text-brand-maroon pt-4 border-t border-brand-gold/15">
            Thank you for your cooperation and for helping us be respectful of our neighbors. Let's make Arushi's Graduation Celebration enjoyable for everyone. – The Kalam Family ❤️
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
