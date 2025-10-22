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
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl text-center font-semibold text-white sm:text-5xl mb-6 leading-tight">
               We have a team of <br /> creative people
             </h2>
        {/* Title and Team Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {/* Title Block */}
          <div className="flex flex-col justify-center ">
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
              key={person.id}
              className="flex flex-wrap items-center bg-gray-800 px-5 py-4 pb-0  backdrop-blur-sm rounded-2xl shadow-lg hover:bg-gray-800/70 hover:scale-[1.02] transition duration-300"
            >
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border border-gray-700"
              />
              <div className="ml-3 flex flex-col justify-start h-16">
                <h3 className="text-lg font-semibold text-white">{person.name}</h3>
              <p className="text-sm text-indigo-400 font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
