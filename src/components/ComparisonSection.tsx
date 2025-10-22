'use client'; // Required for client-side effects

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLDivElement>(null);
  const afterImageImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !afterImageRef.current || !afterImageImgRef.current) {
      console.error('One or more DOM elements not found');
      return;
    }

    let ctx: gsap.Context;
    const initAnimation = () => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center center',
            end: () => `+=${sectionRef.current?.offsetWidth || 0}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => console.log('Scroll progress:', self.progress), // Debug
          },
          defaults: { ease: 'none' },
        });

        tl.fromTo(
          afterImageRef.current,
          { xPercent: 100, x: 0 },
          { xPercent: 0 }
        ).fromTo(
          afterImageImgRef.current,
          { xPercent: -100, x: 0 },
          { xPercent: 0 },
          0
        );

        console.log('ScrollTriggers:', ScrollTrigger.getAll());
      }, sectionRef);

      return ctx;
    };

    // Delay initialization to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const context = initAnimation();
      if (context) ctx = context;
    }, 0);

    // Cleanup
    return () => {
      clearTimeout(timeoutId); // Clear timeout if component unmounts early
      if (ctx) ctx.revert(); // Revert GSAP context only if it exists
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="comparisonSection relative pb-[56.25%]">
        <div className="comparisonImage beforeImage w-full h-full">
          {/* <div className='absolute bottom-80 right-25 z-10 w-[350px]'>
            <h1 className="text-5xl">Green Screen</h1>
            <p className="mt-1 text-sm sm:text-base leading-snug drop-shadow-sm">
              <strong>Before:</strong> The raw footage is captured against a green screen in a controlled studio environment. This stage contains all the original elements such as actors, props, and basic lighting, serving as the foundation for post-production.
            </p>
          </div> */}
          <img
            src="/images/comparison/before.webp"
            alt="before"
            className="w-full h-full object-cover absolute top-0"
            onError={(e) => console.error('Image load error:', e)}
            style={{
            // imageRendering: 'high-quality',
            filter: 'contrast(1.05) brightness(1.02)',
            transform: 'translateZ(0)', // GPU rendering boost
            willChange: 'transform',
          }}
          />
        </div>
        <div ref={afterImageRef} className="comparisonImage afterImage w-full h-full absolute overflow-hidden top-0 transform translate-x-full">
          <div className='absolute bottom-80 left-25 z-10 w-[350px]'>
            <h1 className="text-5xl">VFX</h1>
            <p className="mt-1 text-sm sm:text-base leading-snug drop-shadow-sm">
              <strong>After:</strong> The footage is transformed with visual effects, digital backgrounds, and color grading. The final composite creates a polished scene, combining CGI, lighting adjustments, and motion effects to produce a professional cinematic result.
            </p>
          </div>
          <img
            ref={afterImageImgRef}
            src="/images/comparison/after.webp"
            alt="after"
            className="w-full h-full object-cover absolute top-0 transform -translate-x-full"
            onError={(e) => console.error('Image load error:', e)}
            style={{
            // imageRendering: 'high-quality',
            filter: 'contrast(1.05) brightness(1.02)',
            transform: 'translateZ(0)', // GPU rendering boost
            willChange: 'transform',
          }}
          />
        </div>
      </section>
    </>
  );
}