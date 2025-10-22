// import { RiCodeSSlashFill, RiServerFill, RiDatabase2Fill } from '@remixicon/react';

import { title } from "process";

export default function Features() {
  const features = [
    {
      icon: '/images/services/graphic-design.png',
      title: "Video Production",
		description:
			"We craft bold, story-driven visuals that turn brands into experiences. From concept to final cut, our videos spark emotion, build connection, and bring your brand to life frame by frame.",
		techs: ['Angular', 'React', 'TypeScript'],
    },
    {
      icon: '/images/services/motion-graphic.png',
      title: "Visual Editing & DI",
		description:
		"We turn raw footage into something awesome  smooth edits, perfect colors, cinematic color grading, and just the right vibe. Whether it’s a film, ad, or reel, we give it that final spark to shine.",
		techs: ['Django', 'Flask', 'Express.js'],
    },
    {
      icon: '/images/services/video-production.png',
      title: "Motion Graphics",
		description:
			"Bring your brand to life through animation. We create dynamic motion graphics that add energy and depth to your content, perfect for social media, presentations, explainer videos, and more.",
		techs: ['MongoDB', 'MySQL', 'Jenkins'],
    },{
        icon: '/images/services/visual-editing-di.png',
        title: "Graphic Design",
		description:
			"Visual storytelling with impact.From branding to marketing collateral, we design stunning visuals that speak your brand’slanguage and leave a lasting impression.",
        techs: ['MongoDB', 'MySQL', 'Jenkins'],

    }
  ];

  return (
    <div className="min-h-[40vh] bg-transparent text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center mt-20 mb-20">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I build comprehensive web solutions from frontend interfaces to backend systems, delivering scalable and user-friendly applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-center hover:scale-[1.02]"            >
              {/* <feature.icon className="w-10 h-10 text-indigo-400 mx-auto mb-4" /> */}
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className="w-18 h-18 mx-auto mb-4 object-contain filter invert"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
              {/* <a href="#" className="text-indigo-400 hover:underline text-sm">
                Learn more →
              </a> */}
              <div className="flex flex-wrap justify-center gap-2">
                {/* {feature.techs.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-400 hover:text-indigo-400 cursor-pointer rounded-full text-sm border border-gray-600 hover:border-indigo-400 transition-colors duration-300">
                    {tech}
                    </span>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}