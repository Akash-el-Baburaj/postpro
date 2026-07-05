'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ModalVideo({ videoId }: { videoId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative w-full aspect-video cursor-pointer group overflow-hidden rounded-[1.4rem]"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={`/images/about/youtube_thumb.webp`}
          alt="Video Thumbnail"
          fill
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border border-white/20 bg-[#ff5d35]/90 relative rounded-full flex items-center justify-center shadow-2xl transition transform group-hover:scale-110">
            <svg
              className="w-8 h-8 text-white-600 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-[100] px-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-6xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white text-2xl hover:bg-white/20"
              aria-label="Close video"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
