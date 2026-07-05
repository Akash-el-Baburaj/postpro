// 'use client'
// import React from 'react'

// const people = [
//   {
//     id: crypto.randomUUID(),
//     name: 'Bibin',
//     role: 'Creative Director',
//     imageUrl: '/images/team/1.jpg',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Vibin Babu',
//     role: 'Cinematographer',
//     imageUrl: '/images/team/3.jpg',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Hardy',
//     role: 'Video Editor',
//     imageUrl: '/images/team/4.jpg',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Akash',
//     role: 'VFX Artist',
//     imageUrl: '/images/team/5.jpg',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Gaya Raghu',
//     role: 'Graphic Designer',
//     imageUrl: '/images/team/2.jpg',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Akash',
//     role: 'Web Developer',
//     imageUrl: '/images/team/6.jpg',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Shavin',
//     role: 'DI Colourist',
//     imageUrl: '/images/team/7.jpg',
//   },
//   {
//     id: crypto.randomUUID(),
//     name: 'Aswin Das',
//     role: 'Project Manager',
//     imageUrl: '/images/team/8.jpg',
//   },
// ]

// export default function Teams() {
//   return (
//     <section className="bg-gray-900 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Grid: 1 column on mobile, 3 on large screens */}
//         <div className="grid gap-16 xl:grid-cols-3 xl:gap-20 items-start">
          
//           {/* LEFT COLUMN: Title */}
//           <div>
//             <h2 className="text-4xl font-semibold text-white sm:text-5xl leading-tight">
//               We have a team of <br />
//               <span className="text-indigo-400">creative people</span>
//             </h2>
//             <p className="mt-4 text-gray-400 text-lg max-w-md">
//               Our talented professionals combine creativity and technology to bring your ideas to life.
//             </p>
//           </div>

//           {/* RIGHT SECTION: Team Members */}
//           <ul
//             role="list"
//             className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-2"
//           >
//             {people.map((person) => (
//               <li key={person.id} className="flex items-center gap-x-5">
//                 <img
//                   alt={person.name}
//                   src={person.imageUrl}
//                   className="size-16 rounded-full object-cover ring-1 ring-white/10"
//                 />
//                 <div>
//                   <h3 className="text-white font-semibold text-lg">{person.name}</h3>
//                   <p className="text-indigo-400 text-sm font-medium">{person.role}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'
import React from 'react'
import Image from 'next/image'

const people = [
  {
    id: crypto.randomUUID(),
    name: 'Bibin',
    role: 'Creative Director',
    imageUrl: '/images/team/1.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Vibin Babu',
    role: 'Cinematographer',
    imageUrl: '/images/team/3.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Hardy',
    role: 'Video Editor',
    imageUrl: '/images/team/4.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Akash',
    role: 'VFX Artist',
    imageUrl: '/images/team/5.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Gaya Raghu',
    role: 'Graphic Designer',
    imageUrl: '/images/team/2.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Akash',
    role: 'Web Developer',
    imageUrl: '/images/team/6.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Shavin',
    role: 'DI Colourist',
    imageUrl: '/images/team/7.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Aswin Das',
    role: 'Project Manager',
    imageUrl: '/images/team/8.jpg',
  },
]

export default function Teams() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="eyebrow mb-4 text-center">The people</p><h2 className="section-title mx-auto mb-12 max-w-2xl text-center text-white">
               Small team. Big range.
             </h2>
        {/* Title and Team Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
          {/* Title Block */}
          <div className="flex min-h-28 flex-col justify-center rounded-2xl border border-dashed border-white/15 p-6">
            {/* <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
              We have a team ofcreative people
            </h2> */}
            <p className="text-gray-400 text-base leading-relaxed">
              Our team brings together passion, precision, and creativity to deliver top-notch digital experiences.
            </p>
          </div>

          {/* Team Members */}
          {people.map((person) => (
            <div
              key={`${person.name}-${person.role}`}
              className="glass-card flex items-center rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <Image
                src={person.imageUrl}
                alt={person.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-xl object-cover border border-white/10 grayscale transition duration-300 hover:grayscale-0"
              />
              <div className="ml-3 flex flex-col justify-start h-16">
                <h3 className="text-lg font-semibold text-white">{person.name}</h3>
              <p className="text-sm text-[#ff7952] font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
