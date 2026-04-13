'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1100] focus:bg-brand-green focus:text-white focus:px-4 focus:py-2 focus:rounded-pill focus:text-sm focus:font-body"
    >
      Saltar al contenido principal
    </a>
    <header
      className={`fixed top-0 w-full z-[1000] transition-shadow duration-300 border-b border-border backdrop-blur-[10px] bg-bg-cream/92 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 min-h-[44px]">
          <Image
            src="/logo/logo.png"
            alt="Arte y Terapia Salud"
            width={52}
            height={52}
            className="h-[52px] w-auto object-contain"
          />
          <span className="font-bold text-brand-deep tracking-wide font-body hidden sm:inline">
            Arte y Terapia Salud
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 px-4 py-2.5 rounded-pill bg-brand-lavender/[0.18] border border-brand-lavender/[0.35]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-deep font-medium font-body text-sm hover:text-brand-water transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contacto"
          className="hidden md:inline-flex bg-brand-green text-white px-5 py-2.5 rounded-pill font-semibold text-sm font-body hover:opacity-90 transition-opacity"
        >
          Reservar
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 min-h-[44px] min-w-[44px] items-center justify-center"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-brand-deep transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-brand-deep transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-brand-deep transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-brand-deep font-medium font-body text-base py-3 px-4 rounded-xl hover:bg-brand-lavender/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-brand-green text-white px-5 py-3 rounded-pill font-semibold text-sm font-body text-center hover:opacity-90 transition-opacity"
          >
            Reservar
          </Link>
        </nav>
      </div>
    </header>
    </>
  );
}
