"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import localfont from "next/font/local";
import Link from "next/link";

const gothamBold = localfont({
  src: "../public/fonts/GothamBold.otf",
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${gothamBold.className} header-scrolled`}>
      <nav className={`mx-8 z-100 duration-300 ${scrolled ? "py-0" : "py-4"}`}>
        <ul className="flex flex-row items-center justify-between">
          {/* Brand / Logo */}
          <li className="HomeButton z-50">
            <Link href="/" onClick={closeMenu}>
              <span className="nara">nara</span>230
            </Link>
          </li>

          {/* Mobile Hamburger / Close Toggle Button */}
          <li className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="btn btn-ghost btn-circle text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? (
                /* Close (X) Icon when open */
                <svg
                  className="inline-block h-6 w-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Icon when closed */
                <svg
                  className="inline-block h-6 w-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </li>

          {/* Fullscreen Mobile Overlay Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 h-screen w-screen bg-black/90 z-40 flex flex-col items-center justify-center md:hidden"
                onClick={closeMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                exit={{ opacity: 0 }}
              >
                <motion.ul
                  className="flex flex-col items-center gap-10 text-center"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ease: "easeOut", duration:0.3}}
                >
                  <li>
                    <Link className="list text-xl" href="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="list text-xl"
                      href="/gallery"
                      onClick={closeMenu}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="list text-xl"
                      href="/aboutme"
                      onClick={closeMenu}
                    >
                      About Me
                    </Link>
                  </li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation Links */}
          <li className="hidden md:flex flex-row gap-10 text-center">
            <Link className="list text-lg" href="/">
              Home
            </Link>
            <Link className="list text-lg" href="/gallery">
              Gallery
            </Link>
            <Link className="list text-lg" href="/aboutme">
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
