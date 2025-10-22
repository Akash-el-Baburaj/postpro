'use client';

import { useState } from 'react';

export default function ModalVideo({ videoId }: { videoId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative w-full aspect-video cursor-pointer group"
        onClick={() => {setIsOpen(true); alert('working')}}
      >
        <img
          src={`/images/about/youtube_thumb.webp`}
          alt="Video Thumbnail"
          className="w-full h-full object-cover rounded-lg "
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gray-900/80 relative bg-opacity-80 rounded-full flex items-center justify-center transition transform group-hover:scale-110 hover:scale-[1.05] group-hover:bg-opacity-100">
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
        <div className="fixed inset-0 bg-tranparent backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50 px-4">
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
              className="absolute -top-8 right-0 text-white text-3xl font-bold hover:text-gray-400"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
