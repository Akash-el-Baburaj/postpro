import { RiNumber1, RiNumber2, RiNumber3 } from '@remixicon/react'
import Image from 'next/image'

const features = [
  {
    name: 'Pre Production.',
    description:
      'We develop concepts, scripts, and plan every detail to set a strong foundation for the project.',
    icon: RiNumber1,
  },
  {
    name: 'Production.',
    description: 'We bring ideas to life through filming and creative execution with technical precision.',
    icon: RiNumber2,
  },
  {
    name: 'Post Production.',
    description: 'We refine, edit, and finalize the video, delivering a polished final product ready to launch.',
    icon: RiNumber3,
  },
]

export default function Process() {
  return (
    <section className="section-pad overflow-hidden" id="process">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-16 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-0">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base/7 font-semibold text-indigo-400">Deploy faster</h2> */}
              <p className="eyebrow mb-4">How we work</p><h2 className="section-title text-white">
                The Art of Process
              </h2>
              <p className="mt-4 text-xl font-medium tracking-tight text-white/80 sm:text-2xl">
                A great video doesn&apos;t happen by chance.
              </p>
              <p className="mt-6 text-base/7 text-white/50">
                Our production process is a blend of creative vision and strategic precision, refined over 8+ years and 250+ projects.
              {/* </p>
              <p className="mt-6 text-lg/8 text-gray-300"> */}
                From concept development and scripting to storyboarding, filming, and post production, every stage is driven by collaboration, technical excellence, and a deep understanding of your brand.
              </p>
              <dl className="mt-10 max-w-xl space-y-3 text-sm/6 text-white/45 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="glass-card relative rounded-2xl py-5 pl-16 pr-5 transition-transform hover:translate-x-1">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-5 left-5 size-7 text-[#ff7148]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative"><div className="absolute -inset-6 -z-10 rounded-full bg-[#ff5d35]/10 blur-3xl"/><Image
            alt="Product screenshot"
            src={'/images/process/video-production-01.webp'}
            width={2445}
            height={1442}
            className="w-full rounded-[2rem] shadow-2xl ring-1 ring-white/10"
          /></div>
        </div>
      </div>
    </section>
  )
}
