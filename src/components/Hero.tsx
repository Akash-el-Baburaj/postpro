"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';



// import bannerVideoDesktop from "/videos/banners/banner-01.mov";
// import bannerVideoMobile from "/videos/banners/banner-02.mov";


export default function Hero() {
      const [videoSource, setVideoSource] = useState('/videos/banners/banner-01.mov');

      useEffect(() => {
    // Function to update video source based on screen width
    const updateVideoSource = () => {
      const isMobile = window.innerWidth <= 768; // Mobile breakpoint
      setVideoSource(isMobile ? "/videos/banners/banner-02.mov" : '/videos/banners/banner-01.mov');
    };

    // Initial check
    updateVideoSource();

    // Add resize event listener
    window.addEventListener("resize", updateVideoSource);

    // Cleanup
    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  return (
    <section className="relative flex min-h-[760px] items-end overflow-hidden sm:min-h-[820px] lg:min-h-screen">
      <div className="absolute inset-0">
        <video
        key={videoSource}
        autoPlay
        loop
        muted
        playsInline  
        className="h-full w-full object-cover"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,13,.94)_0%,rgba(7,9,13,.58)_52%,rgba(7,9,13,.22)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-transparent to-black/25" />
        <div className="noise-overlay" />
      </div>

      {/* Content */}
       <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-4 py-2 z-[100] inset-0 text-xs uppercase tracking-[.14em] text-white/55 ring-1 ring-white/10 hover:ring-white/20">
              Creative production · Since 2018{' '}
              <a href="#process" className="font-semibold text-[#ff7b55]">
                <span aria-hidden="true" className="absolute inset-0 z-55" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="max-w-4xl text-start">
            <h1 className="display-title text-white">
              Ideas with an <span className="text-[#ff6a42]">unskippable</span> first frame.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-xl sm:leading-8">
              From concept to final cut, we combine strategy, craft, and a little beautiful obsession to make work people remember.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-[#ff5d35] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-950/30 hover:-translate-y-0.5 hover:bg-[#ff7048]"
              >
                Start a project <span className="ml-2">↗</span>
              </Link>
              <a href="#service" className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10">
                Explore our work <span className="ml-2" aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
    </section>
  );
}
