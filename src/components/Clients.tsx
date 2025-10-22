'use client';

import Image from 'next/image';
import React from 'react';

type SliderItem = {
  id: string;
  img: string;
};

const sliderData: SliderItem[] = [
  { id: crypto.randomUUID(), img: '/images/client/16.png' },
  { id: crypto.randomUUID(), img: '/images/client/18.png' },
  { id: crypto.randomUUID(), img: '/images/client/colour logo-04.png' },
  { id: crypto.randomUUID(), img: '/images/client/colour logo-01.png' },
  { id: crypto.randomUUID(), img: '/images/client/12.png' },
  { id: crypto.randomUUID(), img: '/images/client/colour logo-06.png' },
  { id: crypto.randomUUID(), img: '/images/client/14.png' },
  { id: crypto.randomUUID(), img: '/images/client/11.png' },
  { id: crypto.randomUUID(), img: '/images/client/colour logo-02.png' },
  { id: crypto.randomUUID(), img: '/images/client/colour logo-03.png' },
  { id: crypto.randomUUID(), img: '/images/client/colour logo-07.png' },
  { id: crypto.randomUUID(), img: '/images/client/colour logo-05.png' },
  { id: crypto.randomUUID(), img: '/images/client/10.png' },
  { id: crypto.randomUUID(), img: '/images/client/13.png' },
  { id: crypto.randomUUID(), img: '/images/client/17.png' },
  { id: crypto.randomUUID(), img: '/images/client/8.png' },
  { id: crypto.randomUUID(), img: '/images/client/15.png' },
  { id: crypto.randomUUID(), img: '/images/client/9.png' },
  { id: crypto.randomUUID(), img: '/images/client/27.png' },
  { id: crypto.randomUUID(), img: '/images/client/24.png' },
  { id: crypto.randomUUID(), img: '/images/client/21.png' },
  { id: crypto.randomUUID(), img: '/images/client/20.png' },
  { id: crypto.randomUUID(), img: '/images/client/wb.png' },
  { id: crypto.randomUUID(), img: '/images/client/25.png' },
  { id: crypto.randomUUID(), img: '/images/client/29.png' },
  { id: crypto.randomUUID(), img: '/images/client/22.png' },
  { id: crypto.randomUUID(), img: '/images/client/26.png' },
];

export default function Clients() {
  return (
    <section className="min-h-[40vh] bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-10 mb-20">
      <div className="max-w-7xl mx-auto w-full text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full max-w-9xl gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800">
        {sliderData.map((item) => (
         <div
            key={item.id}
            className="group flex items-center justify-center bg-slate-900 p-6 hover:bg-slate-100 transition-all duration-150"
          >
            <Image
              src={item.img}
              alt="Client Logo"
              width={120}
              height={60}
              className="object-contain opacity-80 filter invert grayscale 
                        group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 
                        transition-all duration-150"
            />
          </div>

        ))}
      </div>
    </section>
  );
}
