'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RiArrowDownWideLine } from '@remixicon/react'
import FadeContent from '@/components/FadeContent';
import ContactInfo from '@/components/ContactInfo';
import FAQSection from '@/components/FaqSection';


export default function ContactCard() {
  const [budget, setBudget] = useState<string>('');

  return (
    <section className="bg-gray-950 py-32 md:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* ───── LEFT – FORM ───── */}
          <div className="lg:pr-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {/* Let&apos;s work together */}
              Contact us for a personal experience
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Ready to start a project with us?
            </p>

            <form className="space-y-6">
              {/* First / Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first" className="block text-sm text-gray-300 mb-1">
                    First name
                  </label>
                  <input
                    id="first"
                    type="text"
                    placeholder="John"
                    className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
                  />
                </div>
                <div>
                  <label htmlFor="last" className="block text-sm text-gray-300 mb-1">
                    Last name
                  </label>
                  <input
                    id="last"
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label htmlFor="phone" className="flex items-center text-sm text-gray-300 mb-1">
                  Phone
                  <span className="ml-2 text-xs text-gray-500">(Optional)</span>
                </label>
                <div className="flex border border-gray-700 rounded-lg bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        aria-label="Country"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900/70 py-3 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    >
                        <option className='text-dark'>+91</option>
                        <option className='text-dark'>+1</option>
                        <option className='text-dark'>+921</option>
                    </select>
                    <RiArrowDownWideLine
                        aria-hidden="true"
                        className="pointer-events-none  col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    />
                    </div>
                    <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow bg-gray-900/70  py-3 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                </div>

                {/* <input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
                /> */}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-center text-sm text-gray-300 mb-1">
                  How can we help you?
                  <span className="ml-2 text-xs text-gray-500">Max 500 characters</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us about your project..."
                  className="w-full bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-indigo-600  text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 transition"
              >
                Send message
              </button>
            </form>
          </div>

          {/* ───── RIGHT – IMAGE ───── */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/contact/contactus-02.webp"   // put your own image in public/images/
              alt="Team collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ContactInfo />
        </div>
      </FadeContent>
      <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
        <FAQSection />
      </FadeContent>
    </section>
  );
}