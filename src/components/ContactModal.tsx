"use client";

import { useRef, useEffect } from "react";
import { RiCloseLine } from "@remixicon/react";

interface ContactDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDropdown({ isOpen, onClose }: ContactDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-3 w-[360px] bg-gray-800 rounded-2xl shadow-xl border border-gray-900 z-50"
    >
      {/* Header with Cancel Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-900">
        <h2 className="text-lg font-semibold text-gray-100">
          Send us a message
        </h2>
          <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <RiCloseLine size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Form */}
      <div className="p-6">
        <form className="space-y-4">
          {/* First + Last name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm text-gray-300 mb-1">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="John"
                className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm text-gray-300 mb-1">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
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
              className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-300 mb-1">
              Phone
            </label>
            <div className="flex gap-2">
              <select
                id="countryCode"
                className="bg-transparent border border-gray-700 rounded-md px-2 py-2 text-gray-200 focus:outline-none focus:border-blue-500"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                id="phone"
                type="text"
                placeholder="123-456-7890"
                className="flex-1 bg-transparent border border-gray-700 rounded-md px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Write your message..."
              className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md font-medium hover:bg-indigo-600 transition"
          >
            Let&apos;s talk
          </button>
        </form>
      </div>
    </div>
  );
}