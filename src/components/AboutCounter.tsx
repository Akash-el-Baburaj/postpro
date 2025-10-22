import Image from 'next/image';
import ModalVideo from './ModalVideo';

export default function AboutCounter() {
  return (
    <div className="flex flex-col md:flex-row rounded rounded-lg text-white bg-gray-800 backdrop-blur-md py-16 mt-10">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4 md:p-2">
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
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">We make brand memorable.</h2>
        <p className="text-gray-400 mb-6">
            Bold brand stories, scroll stopping reels, we help your business shine through visuals that people remember and love.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl md:text-3xl font-semibold">8+</p>
            <p className="text-gray-400">Years of experience</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-semibold">250+</p>
            <p className="text-gray-400">Successful projects</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-semibold">100%</p>
            <p className="text-gray-400">Client satisfaction rate</p>
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

        
    </div>
  );
}