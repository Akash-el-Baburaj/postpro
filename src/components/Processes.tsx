import { RiNumber1, RiNumber2, RiNumber3 } from '@remixicon/react'

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
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32" id="process">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-0">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base/7 font-semibold text-indigo-400">Deploy faster</h2> */}
              <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                The Art of Process
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-white sm:text-2xl">
                A great video doesn't happen by chance.
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Our production process is a blend of creative vision and strategic precision, refined over 8+ years and 250+ projects.
              {/* </p>
              <p className="mt-6 text-lg/8 text-gray-300"> */}
                From concept development and scripting to storyboarding, filming, and post production, every stage is driven by collaboration, technical excellence, and a deep understanding of your brand.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={'/images/process/video-production-01.webp'}
            width={2445}
            height={1442}
            className="w-4xl  md:max-w-none rounded-xl shadow-xl ring-1 ring-white/10  md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
