// 'use client';

// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import FadeContent from './FadeContent';

// // Register GSAP
// gsap.registerPlugin(ScrollTrigger);

// // Service Interface
// interface Service {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
// }

// // ServiceCard Component
// const ServiceCard: React.FC<{ service?: Service; isLast?: boolean; idx: number }> = React.memo(
//   ({ service, isLast = false, idx }) => {
//     const cardRef = useRef<HTMLDivElement>(null);

//     return (
//       <div
//         ref={cardRef}
//         className={`
//           relative w-full max-w-[650px]  aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl
//           ring-1 ring-white/10 service-card transition-all duration-3000
//           ${isLast ? 'bg-gradient-to-br from-purple-600 to-pink-500 p-8 flex flex-col justify-center items-center text-center text-white' : ''}
//         `}
//       >
//         {isLast ? (
//           <>
//             <h2 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-md">
//               That’s our Programs
//             </h2>
//             <p className="text-lg mb-6 opacity-95">Fitnite Studio Private Limited</p>
//             <Link
//               href="/pricing"
//               className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg text-sm md:text-base"
//             >
//               Let’s Start
//             </Link>
//           </>
//         ) : service ? (
//           <Link
//             href={`/program/${encodeURIComponent(service.title)}`}
//             className="relative block w-full h-full group"
//           >
//             <Image
//               src={service.image}
//               alt={service.title}
//               fill
//               priority={idx < 3}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="object-cover brightness-110 contrast-105 transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70" />
//             <div className="absolute bottom-0 left-0 w-full p-5 text-white">
//               <h3 className="text-xl font-bold mb-1 drop-shadow-md">{service.title}</h3>
//               <p className="text-sm opacity-90 line-clamp-2">{service.description}</p>
//             </div>
//           </Link>
//         ) : null}
//       </div>
//     );
//   }
// );

// ServiceCard.displayName = 'ServiceCard';

// // Generate static services with fixed IDs
// const services: Service[] = [
//   { id: 'tvc', title: 'TVC', description: 'Explore commercials crafted to capture attention, drive engagement, and leave a lasting brand impression.', image: '/images/projects/TVC V2.jpg' },
//   { id: 'brand-film', title: 'Brand Film', description: 'Authentic voices, compelling narratives, From concept to post production, Our podcast work showcases powerful conversations and immersive audio design.', image: '/images/projects/BRAND FILMS.webp' },
//   { id: 'editing-di', title: 'Visual Editing & DI', description: 'Polished to perfection. Dive into our post production world where raw footage transforms into vivid stories through precise editing and color grading.', image: '/images/projects/EDITING AND DI.webp' },
//   { id: 'motion-graphics', title: 'Motion Graphics', description: 'Dynamic design in motion. See how we bring ideas to life with animated visuals that educate, excite, and enhance brand storytelling.', image: '/images/projects/MOTION GRAPHIC .webp' },
//   { id: 'graphic-design', title: 'Graphic Design', description: 'Visual communication with impact. Our graphic design portfolio blends strategy and creativity, delivering distinctive visuals across print and digital formats.', image: '/images/projects/GRAPHIC DESIGN.webp' },
//   { id: 'web-design', title: 'Web Design', description: 'Your website is your digital first impression. Post Pro designs and builds beautiful, functional sites that connect with your audience and make your business shine.', image: '/images/projects/DIGITAL MARKETING V2.webp' },
//   { id: 'digital-marketing', title: 'Digital Marketing', description: 'At Post Pro, we help your brand shine online. We connect your unique story with the right audience, turning clicks into conversations. Let\'s grow together!.', image: '/images/projects/WEB DESIGN.webp' },
// ];

// export default function HorizontalScrollAnimation() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Detect desktop
//   useEffect(() => {
//     const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
//     checkDesktop();
//     window.addEventListener('resize', checkDesktop);
//     return () => window.removeEventListener('resize', checkDesktop);
//   }, []);

//   // GSAP Horizontal Scroll
//   useGSAP(() => {
//     if (!isDesktop || !containerRef.current) return;

//     const panels = gsap.utils.toArray<HTMLElement>('.panel');
//     const totalPanels = panels.length;
//     const visiblePanels = 0 ; // Show 3 cards at once
//     const scrollDistance = (totalPanels - visiblePanels) * 100; // %

//     const scrollTween = gsap.to(panels, {
//       // xPercent: -scrollDistance,
//               xPercent: -100 * (totalPanels - 3), // Adjusted to stop when last panel's right edge is at viewport's right edge
//       ease: 'none',
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 0.1,
//         start: 'top top',
//         end: `+=${(totalPanels - visiblePanels) * window.innerWidth * 0.8}`,
//         invalidateOnRefresh: true,
//       },
//     });

//     // Animate cards on scroll
//     panels.forEach((panel, i) => {
//       gsap.from(panel, {
//         opacity: 0,
//         y: 0,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: panel,
//           containerAnimation: scrollTween,
//           start: 'left right',
//           toggleActions: 'play none none reverse',
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, [isDesktop]);

//   return (
//     <>
//       {/* Preload first 3 images */}
//       {typeof window !== 'undefined' && (
//         <head>
//           {services.slice(0, 3).map((s) => (
//             <link key={s.id} rel="preload" href={s.image} as="image" />
//           ))}
//         </head>
//       )}

//       <div className="w-full overflow-hidden mt-12" ref={containerRef}>
//         {/* Header */}
//         <div className="mx-auto max-w-2xl text-center mb-16 px-6">
//           <p className="text-base font-semibold text-indigo-400">Programs</p>
//           <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white">
//             Check what we have for you
//           </h2>
//         </div>

//         {/* Desktop: Horizontal Scroll */}
//         {isDesktop ? (
//           <div className="flex h-screen">
//             {services.map((service, idx) => (
//               <section
//                 key={service.id}
//                 className="panel flex-shrink-0 w-screen flex justify-center items-center px-8"
//               >
//                 <ServiceCard service={service} idx={idx} />
//               </section>
//             ))}
//             <section className="panel flex-shrink-0 w-screen flex justify-center items-center px-8">
//               <ServiceCard isLast={true} idx={services.length} />
//             </section>
//           </div>
//         ) : (
//           /* Mobile: Vertical Grid */
//           <div className="grid grid-cols-1 gap-8 px-6 max-w-5xl mx-auto">
//             {services.map((service, idx) => (
//               <FadeContent key={service.id} blur={true} duration={800} initialOpacity={0}>
//                 <ServiceCard service={service} idx={idx} />
//               </FadeContent>
//             ))}
//             <div className="flex justify-center">
//               <ServiceCard isLast={true} idx={services.length} />
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

import Image from 'next/image';
// import { services } from '@/data/services'; // assuming your array is in a file
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ServicesGrid() {
  const services: Service[] = [
    { 
      id: 'tvc', 
      title: 'TVC', 
      description: 'Explore commercials crafted to capture attention, drive engagement, and leave a lasting brand impression.', 
      image: '/images/projects/TVC V2.jpg' 
    },
    { 
      id: 'brand-film', 
      title: 'Brand Film', 
      description: 'Authentic voices, compelling narratives, From concept to post production, Our podcast work showcases powerful conversations and immersive audio design.', 
      image: '/images/projects/BRAND FILMS.webp' 
    },
    { 
      id: 'editing-di', 
      title: 'Visual Editing & DI', 
      description: 'Polished to perfection. Dive into our post production world where raw footage transforms into vivid stories through precise editing and color grading.', 
      image: '/images/projects/EDITING AND DI.webp' 
    },
    { 
      id: 'motion-graphics', 
      title: 'Motion Graphics', 
      description: 'Dynamic design in motion. See how we bring ideas to life with animated visuals that educate, excite, and enhance brand storytelling.', 
      image: '/images/projects/MOTION GRAPHIC .webp' 
    },
    { 
      id: 'graphic-design', 
      title: 'Graphic Design', 
      description: 'Visual communication with impact. Our graphic design portfolio blends strategy and creativity, delivering distinctive visuals across print and digital formats.', 
      image: '/images/projects/GRAPHIC DESIGN.webp' 
    },
    { 
      id: 'web-design', 
      title: 'Web Design', 
      description: 'Your website is your digital first impression. Post Pro designs and builds beautiful, functional sites that connect with your audience and make your business shine.', 
      image: '/images/projects/DIGITAL MARKETING V2.webp' 
    },
    { 
      id: 'digital-marketing', 
      title: 'Digital Marketing', 
      description: 'At Post Pro, we help your brand shine online. We connect your unique story with the right audience, turning clicks into conversations. Let\'s grow together!.', 
      image: '/images/projects/WEB DESIGN.webp' 
    },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="service">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a wide range ofcreative projects.</h2>
        {/* <p className="text-gray-400 mb-6">
            Bold brand stories, scroll stopping reels, we help your business shine through visuals that people remember and love.
        </p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group w-full max-w-[650px]  aspect-[16/9] overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-md">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90 line-clamp-3 drop-shadow">
                {service.description}
              </p>
            </div>

            {/* Hover Reveal (optional enhancement) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
              <p className="text-white text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
        {/* <div className="col-span-2">
          <div
            className="relative group w-full max-w-[650px]  aspect-[16/9] overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            >k</div>
        </div> */}
      </div>
    </section>
  );
}