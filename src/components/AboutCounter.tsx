import ModalVideo from './ModalVideo';

export default function AboutCounter() {
  return (
    <section className="glass-card my-20 flex flex-col overflow-hidden rounded-[2rem] text-white md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-3">
        {/* <Image
          src="/path-to-your-image.jpg" // Replace with the actual image path
          alt="Creators working"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        /> */}
         <ModalVideo videoId="jbd1cauZzGg?si=YlpyR1vWiRaSN9kI" /> 
      </div>

      {/* Text and Stats Section */}
      <div className="w-full p-7 md:w-1/2 md:p-10 lg:p-14 flex flex-col justify-center ">
        <p className="eyebrow mb-4">Built for impact</p>
        <h2 className="section-title mb-5">We make brands memorable.</h2>
        <p className="text-white/50 mb-9 leading-7">
            Bold brand stories, scroll stopping reels, we help your business shine through visuals that people remember and love.
        </p>
        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
          <div>
            <p className="text-2xl md:text-3xl font-semibold text-[#ff7952]">8+</p>
            <p className="mt-1 text-xs leading-5 text-white/45">Years of experience</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-semibold text-[#ff7952]">250+</p>
            <p className="mt-1 text-xs leading-5 text-white/45">Successful projects</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-semibold text-[#ff7952]">100%</p>
            <p className="mt-1 text-xs leading-5 text-white/45">Client satisfaction</p>
          </div>

        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-5rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div> */}
      </div>
       {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div> */}

        
    </section>
  );
}
