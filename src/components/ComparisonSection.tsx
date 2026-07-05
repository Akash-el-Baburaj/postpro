'use client'; // Required for client-side effects

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !afterImageRef.current) {
      console.error('One or more DOM elements not found');
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: () => `+=${sectionRef.current?.offsetWidth || 0}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: 'none' },
      });

      tl.fromTo(
        afterImageRef.current,
        { clipPath: 'inset(0 0 0 100%)' },
        { clipPath: 'inset(0 0 0 0%)' }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="comparisonSection relative min-h-[70vh] overflow-hidden bg-black lg:min-h-screen">
        <div className="comparisonImage beforeImage absolute inset-0 z-0 h-full w-full">
          <div className="absolute left-5 top-24 z-20 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-white backdrop-blur-md sm:left-8">Before / Raw plate</div>
          {/* <div className='absolute bottom-80 right-25 z-10 w-[350px]'>
            <h1 className="text-5xl">Green Screen</h1>
            <p className="mt-1 text-sm sm:text-base leading-snug drop-shadow-sm">
              <strong>Before:</strong> The raw footage is captured against a green screen in a controlled studio environment. This stage contains all the original elements such as actors, props, and basic lighting, serving as the foundation for post-production.
            </p>
          </div> */}
          <Image
            src="/images/comparison/before.webp"
            alt="Raw footage before visual effects"
            fill
            className="w-full h-full object-cover absolute top-0"
            onError={(e) => console.error('Image load error:', e)}
            style={{
            // imageRendering: 'high-quality',
            filter: 'contrast(1.05) brightness(1.02)',
            willChange: 'transform',
          }}
          />
        </div>
        <div
          ref={afterImageRef}
          className="comparisonImage afterImage absolute inset-0 z-10 h-full w-full overflow-hidden"
          style={{ clipPath: 'inset(0 0 0 100%)', willChange: 'clip-path' }}
        >
          <div className="absolute left-5 top-24 z-20 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-white backdrop-blur-md sm:left-8">After / Final composite</div>
          <div className='absolute bottom-8 left-5 z-10 max-w-md rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur-md sm:bottom-10 sm:left-8 sm:p-7'>
            <p className="eyebrow mb-2">The transformation</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">VFX, invisible by design.</h2>
            <p className="mt-3 hidden text-sm leading-6 text-white/65 sm:block">
              <strong>After:</strong> The footage is transformed with visual effects, digital backgrounds, and color grading. The final composite creates a polished scene, combining CGI, lighting adjustments, and motion effects to produce a professional cinematic result.
            </p>
          </div>
          <Image
            src="/images/comparison/after.webp"
            alt="Final shot after visual effects and color grading"
            fill
            className="absolute top-0 h-full w-full object-cover"
            onError={(e) => console.error('Image load error:', e)}
            style={{
            // imageRendering: 'high-quality',
            filter: 'contrast(1.05) brightness(1.02)',
            willChange: 'transform',
          }}
          />
        </div>
      </section>
    </>
  );
}
