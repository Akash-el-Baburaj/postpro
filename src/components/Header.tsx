// import Link from 'next/link';
import Image from 'next/image';

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-opacity-90/0 bg-gray-900/0 text-white z-10">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Image
//           src="/images/logo-white.png" // Replace with your background image or video
//           alt="Background"
//           width={100}
//           height={50}
//         //   style={{ objectFit: 'cover' }}
//           className="opacity-50"
//         />
//         <div className="flex space-x-6">
//           <Link href="/" className="hover:text-blue-400">Home</Link>
//           <Link href="/about" className="hover:text-blue-400">about</Link>
//           <Link href="/contact" className="hover:text-blue-400">contact</Link>
//           <Link href="/company" className="hover:text-blue-400">Company</Link>
//         </div>
//         <div>
//           <Link href="/login" className="hover:text-blue-400">Log in</Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ContactDropdown from './ContactModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
  className={`fixed top-0 left-0 w-full text-white z-50 transition-all duration-300 pointer-events-none`}
>
  <nav
    className={`container mx-auto px-4 py-4 flex justify-between items-center pointer-events-auto ${
      isScrolled
        ? 'backdrop-blur-md bg-gray-900/60'
        : 'bg-transparent'
    }`}
  >
    {/* Hamburger Menu for Mobile */}
    <div className="md:hidden">
      <button
        onClick={toggleMobileMenu}
        className="text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isMobileMenuOpen
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16m-7 6h7'
            }
          />
        </svg>
      </button>
    </div>

    {/* Logo */}
    <Image
      src="/images/logo-white.png"
      alt="Logo"
      width={100}
      height={50}
      className="opacity-80"
    />

    {/* Desktop Links */}
    <div className="hidden md:flex space-x-6">
      <Link href="/" className="hover:text-blue-400">Home</Link>
      <Link href="/about" className="hover:text-blue-400">About</Link>
      <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      {/* <Link href="/company" className="hover:text-blue-400">Company</Link> */}
    </div>

    {/* Login */}
    <div className="hidden md:flex items-center">
       <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-white text-gray-900 font-medium rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Contact Now
          </button>

          <ContactDropdown
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
          />
        </div>
    </div>

    {/* Mobile Drawer */}
    {isMobileMenuOpen && (
      <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 bg-opacity-95 p-4 flex flex-col backdrop-blur-sm bg-opacity-80 space-y-4">
        <Link href="/" className="hover:text-blue-400" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400" onClick={toggleMobileMenu}>
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-400" onClick={toggleMobileMenu}>
          Contact
        </Link>
        {/* <Link href="/company" className="hover:text-blue-400" onClick={toggleMobileMenu}>
          Company
        </Link> */}
      </div>
    )}
  </nav>
</header>

  );
}