"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';



// import bannerVideoDesktop from "/videos/banners/banner-01.mov";
// import bannerVideoMobile from "/videos/banners/banner-02.mov";


export default function Hero() {
      const [videoSource, setVideoSource] = useState('/videos/banners/banner-01.mov');

      useEffect(() => {
    // Log video URLs for debugging
    console.log("Desktop video URL:", '/videos/banners/banner-01.mov');
    console.log("Mobile video URL:", "/videos/banners/banner-02.mov");

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
    <div className="relative min-w-full">
      <div className="absolute z-10 inset-0 w-[100%] px-2">
        <video
        key={videoSource}
        autoPlay
        loop
        muted
        playsInline  
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto", // Use natural height
          // transform: "translate(-50%, -50%)", // Center video
          zIndex: -1,
        }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        {/* <div className="absolute min-h-screen inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/30 to-gray-900/30"></div> */}
      </div>

      {/* Content */}
       <div className="relative z-10 mx-25 max-w-2xl py-32 sm:py-48 lg:py-20 xl:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 z-[100] inset-0 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our full production process.{' '}
              <a href="#process" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0 z-55" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-start">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Welcome to Our Creative Playground
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              We turn ideas into impactful visual experiences. Concept to Result, we blend creativity and strategy to craft unskippable visuals.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </Link>
              <a href="#service" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
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
    </div>
  );
}