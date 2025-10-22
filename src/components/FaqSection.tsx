'use client';

import { RiQuestionLine } from '@remixicon/react';

const faqData = {
  title: 'These FAQs helpclients learn about us',
  description:
    'Have a different question and can’t find the answer you’re looking for? Reach out to our support team by sending us an email and we’ll get back to you as soon as we can.',
  items: [
    	{
			id: crypto.randomUUID(),
			question: "What services do you offer?",
			answer: "We offer a complete range of creative services from stunning brand films, motion graphics, and visual editing & DI to graphic design and social media content. We make your brand shine at every touchpoint..",
		},
		{
			id: crypto.randomUUID(),
			question: "How do you ensure the final output matches my vision?",
			answer: "We involve you throughout each stage, gather feedback actively, and make refinements to ensure the final result aligns with your brand’s personality and goals.",
		},
		{
			id: crypto.randomUUID(),
			question: "Can we see your previous work?",
			answer: "Absolutely. You can explore our portfolio on the website to see the diverse range of projects we’ve delivered successfully.",
		},
		{
			id: crypto.randomUUID(),
			question: "How much do your services cost?",
			answer: "Our pricing is customized based on your specific needs and project scope. After understanding your goals, we provide transparent, tailored quotes.",
		},
		{
			id: crypto.randomUUID(),
			question: "What is your process like?",
			answer: "Our process is collaborative and detail-driven: from pre-production and planning, to shooting and editing, all the way to final delivery. We focus on strategy, storytelling, and flawless execution.",
		},
		{
			id: crypto.randomUUID(),
			question: "What makes Postpro different from other agencies?",
			answer: "We blend artistic passion with strategic thinking, delivering visuals that evoke emotion and build brand connection. Our dedicated team brings creative ideas to life with a distinct style.",
		},
		{
			id: crypto.randomUUID(),
			question: "Can you work with tight deadlines?",
			answer: "Yes! We thrive under deadlines and can adapt our process to meet your project timeline without compromising quality.",
		},
		{
			id: crypto.randomUUID(),
			question: "What industries do you work with?",
			answer: "We work with brands across various industries from entertainment and advertising to startups and corporate organizations, adapting our approach to each unique story.",
		},
  ],
};

export default function FAQSection() {
  return (
    <section className="bg-gray-950 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl text-center lg:text-5xl font-bold text-white mb-4">
          {faqData.title}
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-7xl px-25">
          {faqData.description}
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqData.items.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl  hover:bg-gray-800/70 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <RiQuestionLine
                  size={24}
                  className="text-indigo-500 flex-shrink-0 mt-1 group-hover:text-indigo-400 transition"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}