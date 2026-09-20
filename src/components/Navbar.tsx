'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
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
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      {/* Alinhamento Full-Width de extremidade a extremidade */}
      <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo BRANVEL ENGENHARIA */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-full bg-[#77216F] flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm group-hover:bg-[#5E2750] transition-colors">
            BR
          </div>
          <span className="text-base sm:text-lg font-light tracking-tight text-zinc-900">
            BRANVEL <span className="font-semibold text-[#77216F]">ENGENHARIA</span>
          </span>
        </Link>

        {/* Links Principais Centralizados */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
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

        {/* Botão de Ação Alinhado à Direita */}
        <div className="hidden md:block">
          <Link
            href="/#contato"
            className="inline-flex items-center space-x-2 bg-[#77216F] hover:bg-[#5E2750] text-white text-[11px] font-semibold uppercase tracking-[0.15em] px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>Solicitar Consultoria</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Menu"
          className="md:hidden p-2 text-zinc-800 hover:text-[#77216F] focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FBFBFB]/98 backdrop-blur-lg border-b border-stone-200 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4 text-xs font-semibold uppercase tracking-widest text-zinc-800">
              <Link href="/#projetos" onClick={() => setIsOpen(false)} className="hover:text-[#77216F]">Projetos</Link>
              <Link href="/#metodologia" onClick={() => setIsOpen(false)} className="hover:text-[#77216F]">Metodologia</Link>
              <Link href="/#sobre" onClick={() => setIsOpen(false)} className="hover:text-[#77216F]">Sobre</Link>
              <Link
                href="/#contato"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#77216F] text-white py-3.5 text-xs uppercase tracking-widest mt-2"
              >
                Solicitar Consultoria
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};