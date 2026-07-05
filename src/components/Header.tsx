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
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ContactDropdown from './ContactModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

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
  className="fixed inset-x-0 top-0 z-50 px-3 pt-3 text-white sm:px-5 sm:pt-4 pointer-events-none"
>
  <nav
    className={`mx-auto max-w-7xl rounded-2xl border px-4 py-3 flex justify-between items-center pointer-events-auto transition-all duration-500 ${
      isScrolled
        ? 'backdrop-blur-xl bg-[#0b0d12]/90 border-white/10 shadow-2xl shadow-black/20'
        : 'bg-transparent border-transparent'
    }`}
  >
    {/* Hamburger Menu for Mobile */}
    <div className="md:hidden">
      <button
        onClick={toggleMobileMenu}
        className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white focus:outline-none"
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
      alt="PostPro"
      width={112}
      height={50}
      className="h-8 w-auto object-contain"
    />

    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[.04] p-1">
      <Link href="/" className={`rounded-full px-4 py-2 text-sm font-medium ${pathname === '/' ? 'bg-white text-black' : 'text-white/65 hover:text-white'}`}>Home</Link>
      <Link href="/about" className={`rounded-full px-4 py-2 text-sm font-medium ${pathname === '/about' ? 'bg-white text-black' : 'text-white/65 hover:text-white'}`}>About</Link>
      <Link href="/contact" className={`rounded-full px-4 py-2 text-sm font-medium ${pathname === '/contact' ? 'bg-white text-black' : 'text-white/65 hover:text-white'}`}>Contact</Link>
      {/* <Link href="/company" className="hover:text-blue-400">Company</Link> */}
    </div>

    {/* Login */}
    <div className="hidden md:flex items-center">
       <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="rounded-full bg-[#ff5d35] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/30 hover:-translate-y-0.5 hover:bg-[#ff7048]"
          >
            Start a project <span className="ml-1">↗</span>
          </button>

          <ContactDropdown
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
          />
        </div>
    </div>

    {/* Mobile Drawer */}
    {isMobileMenuOpen && (
      <div className="md:hidden absolute top-16 left-0 w-full rounded-2xl border border-white/10 bg-[#0b0d12]/95 p-4 flex flex-col backdrop-blur-xl shadow-2xl space-y-2">
        <Link href="/" className="rounded-xl px-3 py-2 hover:bg-white/10" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link href="/about" className="rounded-xl px-3 py-2 hover:bg-white/10" onClick={toggleMobileMenu}>
          About
        </Link>
        <Link href="/contact" className="rounded-xl px-3 py-2 hover:bg-white/10" onClick={toggleMobileMenu}>
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
