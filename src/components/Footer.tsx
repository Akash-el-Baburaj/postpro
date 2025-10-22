'use client';

import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from '@remixicon/react';
import Image from 'next/image';
import Contact from './ContactForm';

const currentYear = new Date().getFullYear();

const footerData = {
  logo: {
    title: 'Lets start project together',
    text: 'We truly listen to you to grasp your vision and who you want to reach. Then, we roll up our sleeves and use all our creative talents from making stunning videos to crafting compelling designs and building powerful online strategies to deliver solutions that genuinely connect with your audience and make your brand shine.',
    href: '#',
  },
  columns: [
   
    {
      title: 'Company',
      links: ['Home', 'About', 'Contact'],
    },
    {
      title: 'Support',
      links: ['(+91) 790 737 7514', 'Info@postproglobal.com',],
    },
  ],
  social: [
    { icon: RiFacebookFill, label: 'Facebook', href: '#' },
    { icon: RiInstagramFill, label: 'Instagram', href: '#' },
    { icon: RiTwitterFill, label: 'Twitter', href: '#' },
    { icon: RiLinkedinFill, label: 'LinkedIn', href: '#' },
    { icon: RiYoutubeFill, label: 'YouTube', href: '#' },
  ],
  copyright: `© ${currentYear} Your Company, Inc. All rights reserved.`,
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-600">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo + Description + Social */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"> */}
                {/* <span className="text-white text-lg font-bold">V</span> */}
                <Image
                      src="/images/logo-white.png"
                      alt="Logo"
                      width={100}
                      height={50}
                      className="opacity-80"
                    />
              {/* </div> */}
            </div>

            {/* Description */}
            <p className="text-2xl text-white max-w-xs">
              {footerData.logo.title}
            </p>
            <p className="text-sm text-gray-400 max-w-xs">
              {footerData.logo.text}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {footerData.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Columns */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1">
              {footerData.columns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-semibold text-white mb-4">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
                <Contact />
            </div>
        </div>

        {/* Bottom Divider + Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}