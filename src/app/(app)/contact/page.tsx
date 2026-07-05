'use client';

import Image from 'next/image';
import { RiArrowDownWideLine } from '@remixicon/react'
import FadeContent from '@/components/FadeContent';
import ContactInfo from '@/components/ContactInfo';
import FAQSection from '@/components/FaqSection';


export default function ContactCard() {
  return (
    <section className="overflow-hidden pb-16 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="glass-card grid grid-cols-1 overflow-hidden rounded-[2rem] lg:grid-cols-2 items-stretch">
          {/* ───── LEFT – FORM ───── */}
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="eyebrow mb-4">Let&apos;s make something</p><h1 className="section-title text-white mb-5">
              {/* Let&apos;s work together */}
              Contact us for a personal experience
            </h1>
            <p className="text-white/45 mb-9 max-w-lg leading-7">
              Tell us what you&apos;re imagining. We&apos;ll bring the coffee, the questions, and a practical way forward.
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
                    className="w-full bg-white/[.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff7048] focus:ring-2 focus:ring-[#ff7048]/20 transition"
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
                    className="w-full bg-white/[.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff7048] focus:ring-2 focus:ring-[#ff7048]/20 transition"
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
                  className="w-full bg-white/[.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff7048] focus:ring-2 focus:ring-[#ff7048]/20 transition"
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label htmlFor="phone" className="flex items-center text-sm text-gray-300 mb-1">
                  Phone
                  <span className="ml-2 text-xs text-gray-500">(Optional)</span>
                </label>
                <div className="flex border border-white/10 rounded-xl bg-white/[.04] has-[input:focus-within]:border-[#ff7048] has-[input:focus-within]:ring-2 has-[input:focus-within]:ring-[#ff7048]/20">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        aria-label="Country"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-xl bg-transparent py-3 pr-7 pl-3.5 text-base text-gray-400 focus:outline-none sm:text-sm/6"
                    >
                        <option className='text-black'>+91</option>
                        <option className='text-black'>+1</option>
                        <option className='text-black'>+44</option>
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
                    className="block min-w-0 grow bg-transparent py-3 pr-3 pl-1 text-base text-white placeholder:text-gray-600 focus:outline-none sm:text-sm/6"
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
                  className="w-full bg-white/[.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff7048] focus:ring-2 focus:ring-[#ff7048]/20 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:w-auto px-7 py-3.5 bg-[#ff5d35] text-white font-semibold rounded-full hover:-translate-y-0.5 hover:bg-[#ff7048] focus:outline-none focus:ring-2 focus:ring-[#ff7048] transition"
              >
                Send message
              </button>
            </form>
          </div>

          {/* ───── RIGHT – IMAGE ───── */}
          <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/contact/contactus-02.webp"   // put your own image in public/images/
              alt="Team collaborating"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
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
