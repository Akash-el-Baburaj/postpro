'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

const cards = [
//   {
//     title: 'Digital Marketing',
//     description:
//       'At Post Pro, we help your brand shine online. We connect your unique story with the right audience, turning clicks into conversations. Let’s grow together!',
//     duration: 'Duration:',
//     image: '/images/digital-marketing.jpg',
//   },
  {
    id: crypto.randomUUID(),
    title: 'TVC',
    description: 'Explore commercials crafted to capture attention, drive engagement, and leave a lasting brand impression.',
    image: '/images/projects/TVC V2.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Brand Film',
    description: 'Authentic voices, compelling narratives, From concept to post production, Our podcast work showcases powerful conversations and immersive audio design.',
    image: '/images/projects/BRAND FILMS.webp',
  },
  {
    id: crypto.randomUUID(),
    title: 'Visual Editing & DI',
    description: 'Polished to perfection. Dive into our post production world where raw footage transforms into vivid stories through precise editing and color grading.',
    image: '/images/projects/EDITING AND DI.webp',
  },
  {
    id: crypto.randomUUID(),
    title: 'Motion Graphics',
    description: 'Dynamic design in motion. See how we bring ideas to life with animated visuals that educate, excite, and enhance brand storytelling.',
    image: '/images/projects/MOTION GRAPHIC .webp',
  },
  {
    id: crypto.randomUUID(),
    title: 'Graphic Design',
    description: 'Visual communication with impact. Our graphic design portfolio blends strategy and creativity, delivering distinctive visuals across print and digital formats.',
    image: '/images/projects/GRAPHIC DESIGN.webp',
  },
  {
    id: crypto.randomUUID(),
    title: 'Web Design',
    description: 'Your website is your digital first impression. Post Pro designs and builds beautiful, functional sites that connect with your audience and make your business shine.',
    image: '/images/projects/DIGITAL MARKETING V2.webp',
  },
  {
    id: crypto.randomUUID(),
    title: 'Digital Marketing',
    description: 'At Post Pro, we help your brand shine online. We connect your unique story with the right audience, turning clicks into conversations. Let\'s grow together!.',
    image: '/images/projects/WEB DESIGN.webp',
  },
];

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [canScrollPage, setCanScrollPage] = useState(false);

  /* ---- 1. Detect when we are at the end of the horizontal area ---- */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const atEnd = Math.abs(scrollLeft + clientWidth - scrollWidth) < 5; // tolerance
      setCanScrollPage(atEnd);
    };

    container.addEventListener('scroll', onScroll);
    onScroll(); // initial check
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  /* ---- 2. Allow page scroll only when we are at the end ---- */
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // when sentinel becomes visible → we are at the end → enable page scroll
        if (entry.isIntersecting) {
          document.body.style.overflowY = 'auto';
        } else {
          // otherwise lock page scroll (horizontal scroll takes priority)
          document.body.style.overflowY = 'hidden';
        }
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  /* ---- 3. Arrow navigation (optional) ---- */
  const scrollBy = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.querySelector('div.snap-center')?.clientWidth ?? 0;
    const offset = direction === 'left' ? -cardWidth * 0.9 : cardWidth * 0.9;
    containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <>
      {/* -------------------------------------------------
          HORIZONTAL SECTION
          ------------------------------------------------- */}
      <section className="relative bg-gray-950 py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Services
          </h2>

          {/* Scroll container */}
          <div
            ref={containerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-full md:w-[80%] lg:w-[60%] xl:w-[50%]"
              >
                <div className="relative h-96 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover brightness-75 group-hover:brightness-50 transition-all duration-500"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                      <span className="text-orange-500">• </span>
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-200 mb-4 max-w-md line-clamp-3">
                      {card.description}
                    </p>
                    {/* <p className="text-xs md:text-sm text-gray-400 font-medium">
                      {card.duration}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}

            {/* Sentinel – invisible element that tells us we are at the end */}
            <div ref={sentinelRef} className="shrink-0 w-1" />
          </div>

          {/* Arrow buttons (desktop only) */}
          <button
            onClick={() => scrollBy('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition"
            aria-label="Scroll left"
          >
            <RiArrowLeftSLine size={24} className="text-white" />
          </button>
          <button
            onClick={() => scrollBy('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition"
            aria-label="Scroll right"
          >
            <RiArrowRightSLine size={24} className="text-white" />
          </button>
        </div>
      </section>

      {/* -------------------------------------------------
          NEXT SECTION (example)
          ------------------------------------------------- */}
      <section className="bg-gray-100 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to start?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch and let’s bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}