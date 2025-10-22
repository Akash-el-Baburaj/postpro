'use client';

import { RiPhoneLine, RiMailLine, RiMapPinLine } from '@remixicon/react';

const contactData = {
  title: 'Contact Information',
  spark: true, // show spark icon
  items: [
    {
      icon: RiPhoneLine,
      label: 'Call us',
      value: '+91-790-737-7514',
      href: 'tel:+917907377514',
    },
    {
      icon: RiMailLine,
      label: 'Email us',
      value: 'info@postproglobal.com',
      href: 'mailto:info@postproglobal.com',
    },
    {
      icon: RiMapPinLine,
      label: 'Office address',
      value:
        'Level 2, Venture Arcade, Mavoor Rd, above Croma, Thondayad, Kozhikode, Kerala 673016',
      href: 'https://maps.google.com/?q=Level+2,+Venture+Arcade,+Mavoor+Rd,+Kozhikode',
    },
  ],
};

export default function ContactInfo() {
  return (
    <section className="bg-tranparent py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-200 flex items-center justify-center gap-3 mb-12">
          {contactData.title}
          {/* {contactData.spark && (
            <span className="text-4xl text-lime-500 animate-pulse">Spark</span>
          )} */}
        </h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {contactData.items.map((item, index) => {
        const Icon = item.icon;
        const isAddress = item.icon === RiMapPinLine;
        const isFullWidth = index === 2; // Make 3rd item span full on md+

        return (
          <a
            key={index}
            href={item.href}
            target={isAddress ? '_blank' : undefined}
            rel={isAddress ? 'noopener noreferrer' : undefined}
            className={`
              group block bg-gray-900 text-gray-300 p-6 rounded-2xl
              transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
              hover:bg-gray-800
              ${isFullWidth ? 'md:col-span-2' : ''}
            `}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition">
                <Icon size={24} className="text-gray-400 group-hover:text-white" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1">{item.label}</h3>
                <p className="text-sm text-gray-400 break-all">{item.value}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
      </div>
    </section>
  );
}