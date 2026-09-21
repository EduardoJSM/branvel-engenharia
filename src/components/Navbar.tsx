'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-[#FBFBFB]/95 backdrop-blur-md border-b-2 border-zinc-900 py-4 shadow-sm'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-none bg-[#77216F] flex items-center justify-center text-white font-black text-xs tracking-widest group-hover:bg-[#5c1957] transition-colors border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]">
            BR
          </div>
          <span className="text-lg sm:text-xl font-black tracking-tighter uppercase text-zinc-900">
            BRANVEL <span className="text-[#77216F]">ENGENHARIA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.25em] text-zinc-900">
          <Link
            href="/#projetos"
            className="hover:text-[#77216F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#77216F] hover:after:w-full after:transition-all"
          >
            Projetos
          </Link>
          <Link
            href="/#metodologia"
            className="hover:text-[#77216F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#77216F] hover:after:w-full after:transition-all"
          >
            Metodologia
          </Link>
          <Link
            href="/#sobre"
            className="hover:text-[#77216F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#77216F] hover:after:w-full after:transition-all"
          >
            Sobre
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#contato"
            className="inline-flex items-center space-x-2 bg-[#77216F] hover:bg-[#5c1957] text-white text-[11px] font-black uppercase tracking-[0.2em] px-7 py-3.5 rounded-none border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(9,9,11,1)] transition-all duration-200"
          >
            <span>Solicitar Consultoria</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Menu"
          className="md:hidden p-2 text-zinc-900 hover:text-[#77216F] focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#FBFBFB] border-b-2 border-zinc-900 px-6 py-8 shadow-xl"
          >
            <div className="flex flex-col space-y-6 text-xs font-black uppercase tracking-[0.25em] text-zinc-900">
              <Link
                href="/#projetos"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#77216F] transition-colors border-b border-zinc-200 pb-2"
              >
                Projetos
              </Link>
              <Link
                href="/#metodologia"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#77216F] transition-colors border-b border-zinc-200 pb-2"
              >
                Metodologia
              </Link>
              <Link
                href="/#sobre"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#77216F] transition-colors border-b border-zinc-200 pb-2"
              >
                Sobre
              </Link>
              <Link
                href="/#contato"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#77216F] text-white py-4 text-xs font-black uppercase tracking-[0.2em] rounded-none border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(9,9,11,1)]"
              >
                Solicitar Consultoria
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}