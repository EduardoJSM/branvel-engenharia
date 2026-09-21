'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-zinc-800/80">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#77216F] flex items-center justify-center text-white font-bold text-xs tracking-wider">
                BR
              </div>
              <span className="text-lg font-light tracking-tight text-white">
                BRANVEL <span className="font-semibold text-[#77216F]">ENGENHARIA</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
              Consultoria técnica e serviços em Engenharia de Produção.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-8 text-xs uppercase tracking-widest text-zinc-400 font-medium">
            <a href="/#projetos" className="hover:text-white transition-colors">Projetos</a>
            <a href="/#metodologia" className="hover:text-white transition-colors">Metodologia</a>
            <a href="/#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="/#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-light gap-4">
          <p>© {new Date().getFullYear()} BRANVEL ENGENHARIA. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-2">
            <Link href="/termos" className="hover:text-zinc-300 transition-colors">
              Termos de uso & Privacidade (LGPD)
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};