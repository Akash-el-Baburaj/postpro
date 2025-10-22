// import Image from 'next/image';

// export default function AboutSection() {
//   return (
//     <section className="bg-gray-900 text-white py-16 md:py-24 lg:py-32">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 sm:mt-0 lg:mt-10">
//         {/* Header */}
//         {/* <p className="text-indigo-400 text-sm font-semibold mb-2">About us</p> */}
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
//           We think our story is worth sharing with you
//         </h1>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-6">
//           {/* Left Column: Text */}
//           <div className="space-y-12">
//             {/* Description */}
//             <p className="text-gray-300 text-base leading-relaxed">
//                 Established in 2018, we began as a small but ambitious team. We understood the importance of creative and tech-savvy solutions to help businesses succeed in the ever-changing digital landscape.            
//             </p>

//             {/* Our Mission */}
//             <div>
//               <h2 className="text-xl font-semibold mb-4">Our mission</h2>
//               <p className="text-gray-300 text-sm leading-relaxed mb-6">
//                 Empowering businesses to create impactful and visually stunning brand experiences that captivate audiences and drive success in the digital age.
//               </p>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 Our team consists of experienced designers, developers. We have a wide variety of skills and backgrounds, allowing us to tackle projects of all sizes and complexities. We believe in the power of imagination and innovation.              
//               </p>
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold mb-4">Our main mission</h2>
//               <p className="text-gray-300 text-sm leading-relaxed mb-6">
//                 Our mission is to collaborate with businesses of all sizes, from startups to established brands, to provide innovative and creative design solutions.
//               </p>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 We are committed to creating designs that inspire, connect & our clients in the marketplace. Our focus is on understanding. Our clients' unique needs and delivery designs that not only meet but exceed their expectations.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-14">
//             <div className="col-span-2 ...">
//                 <div className="relative w-100 h-64 sm:h-72 rounded-2xl shadow-lg">
//                 <Image
//                 src="/images/about/image-02.webp"
//                 alt="Top right image"
//                 fill
//                 className="object-cover"
//                 />
//             </div>
//             </div>
//             <div className="col-span-1">
//                 <div className="relative w-100 h-64 sm:h-72 rounded-2xl shadow-lg">
//                 <Image
//                 src="/images/about/image-03.webp"
//                 alt="Bottom left image"
//                 fill
//                 className="object-cover"
//                 />
//             </div>
//             </div>
//             <div className="col-span-1">
//                 <div className="relative w-100 h-64 sm:h-72 rounded-2xl shadow-lg">
//                 <Image
//                 src="/images/about/image-04.webp"
//                 alt="Bottom right image"
//                 fill
//                 className="object-cover"
//                 />
//             </div>
//             </div>
//             <div className="col-span-2">
//                 <div className="relative w-100 h-64 sm:h-72 rounded-2xl shadow-lg">
//                 <Image
//                 src="/images/about/image-01.webp"
//                 alt="Top left image"
//                 fill
//                 className="object-cover"
//                 />
//             </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-10 font-bold mb-12 max-w-4xl">
          We think our story is worth sharing with you
        </h1>

        {/* ==== MAIN GRID ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ---- LEFT: TEXT ---- */}
          <div className="space-y-10 order-first">
            {/* Intro paragraph */}
            <p className="text-gray-300 text-base leading-relaxed">
              Established in 2018, we began as a small but ambitious team. We understood the
              importance of creative and tech-savvy solutions to help businesses succeed in the
              ever-changing digital landscape.
            </p>

            {/* Mission 1 */}
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">Our mission</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Empowering businesses to create impactful and visually stunning brand experiences
                that captivate audiences and drive success in the digital age.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our team consists of experienced designers and developers with a wide variety of
                skills and backgrounds, allowing us to tackle projects of all sizes and
                complexities. We believe in the power of imagination and innovation.
              </p>
            </div>

            {/* Mission 2 */}
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">Our main mission</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Our mission is to collaborate with businesses of all sizes, from startups to
                established brands, to provide innovative and creative design solutions.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                We are committed to creating designs that inspire, connect, and elevate our
                clients in the marketplace. Our focus is on understanding our clients&apos; unique
                needs and delivering designs that not only meet but exceed their expectations.
              </p>
            </div>
          </div>

          {/* ---- RIGHT: IMAGE GRID ---- */}
          <div className="grid grid-cols-5 gap-4 auto-rows-min lg:order-last hidden lg:grid">
            {/* 1. Top-left – spans 2 cols (large) */}
            <div className="col-span-3 lg:col-span-3 row-span-1">
              <div className="relative w-full h-48  lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/image-02.webp"
                  alt="Team brainstorming"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* 2. Top-right – 1 col (small) */}
            <div className="col-span-3 lg:col-span-2 row-span-1">
              <div className="relative w-full h-48 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/image-03.webp"
                  alt="Creative workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* 3. Bottom-left – 1 col (small) */}
            <div className="col-span-3 sm:col-span-2 lg:col-span-2 row-span-1">
              <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/image-04.webp"
                  alt="Design process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>

            {/* 4. Bottom-right – spans 2 cols (large) */}
            <div className="col-span-3 sm:col-span-3 lg:col-span-3 row-span-1">
              <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/image-01.webp"
                  alt="Project delivery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:hidden sm:flex">
            <div className="relative w-full h-48 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/image-02.webp"
                  alt="Team brainstorming"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="relative w-full h-48 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/image-03.webp"
                  alt="Creative workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/image-04.webp"
                  alt="Design process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
               <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/image-01.webp"
                  alt="Project delivery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}