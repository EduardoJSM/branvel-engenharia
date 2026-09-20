'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';

export const HeroEng: React.FC = () => {
  return (
    <section className="pt-20 bg-[#FBFBFB] w-full overflow-hidden">
      <div className="w-full min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-12 border-b border-stone-200">
        
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 bg-[#77216F] text-white p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/10 pointer-events-none" />

          <div className="relative z-10 space-y-6 my-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white">
                Engenharia de Produção & Lean
              </span>
            </div>

            {/* Título com escala fluida */}
            <h1 className="text-[clamp(2rem,4.2vw,4.2rem)] font-light leading-[1.05] tracking-tight text-white">
              EFICIÊNCIA <br />
              <span className="font-extrabold uppercase text-stone-100">OPERACIONAL</span> <br />
              AUMENTA ATÉ <span className="underline decoration-white/40 font-mono">35%</span>
            </h1>

            <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed max-w-lg">
              Otimização contínua de linhas de montagem, eliminação sistemática de gargalos e gestão de processos fundamentada em dados.
            </p>

            {/* Ações */}
            <div className="pt-6 space-y-6 border-t border-white/15">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/#contato"
                  className="bg-white text-zinc-900 hover:bg-stone-100 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-xl"
                >
                  <span>Solicitar Consultoria</span>
                  <ArrowUpRight className="w-4 h-4 text-[#77216F]" />
                </Link>

                <Link
                  href="/#projetos"
                  className="border border-white/40 hover:border-white text-white px-8 py-4 text-xs font-medium uppercase tracking-widest transition-colors flex items-center justify-center"
                >
                  Ver Cases
                </Link>
              </div>

              {/* Badges de autoridade */}
              <div className="flex flex-wrap items-center gap-6 text-[11px] text-stone-200 font-light pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Registro CREA-SE
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Six Sigma Belt
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coluna Direita: Imagem Industrial sem margens extras */}
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6 relative min-h-[400px] lg:min-h-full bg-stone-900 overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400"
            alt="Linha de produção otimizada"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />

          {/* Sombreamento sutil para leitura das métricas */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />

          {/* Card Flutuante Superior (Média de Ganhos) */}
          <div className="absolute top-6 right-6 z-10 bg-white/95 backdrop-blur-md p-3.5 border border-stone-200 shadow-xl max-w-[240px]">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#77216F]/10 text-[#77216F]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] uppercase text-zinc-400 font-semibold block tracking-wider">Média de Ganhos</span>
                <span className="text-xs font-bold text-zinc-900">+22% em Eficiência OEE</span>
              </div>
            </div>
          </div>

          {/* Métricas Inferiores coladas na borda inferior */}
          <div className="absolute bottom-0 inset-x-0 z-10 grid grid-cols-3 bg-black/60 backdrop-blur-md border-t border-white/15 text-white divide-x divide-white/10">
            <div className="p-4 sm:p-5 text-center">
              <span className="block text-lg sm:text-2xl font-light text-white font-mono">-35%</span>
              <span className="text-[9px] sm:text-[10px] uppercase text-stone-300 tracking-wider">Lead Time</span>
            </div>
            <div className="p-4 sm:p-5 text-center">
              <span className="block text-lg sm:text-2xl font-light text-white font-mono">Zero</span>
              <span className="text-[9px] sm:text-[10px] uppercase text-stone-300 tracking-wider">Gargalos</span>
            </div>
            <div className="p-4 sm:p-5 text-center">
              <span className="block text-lg sm:text-2xl font-light text-white font-mono">100%</span>
              <span className="text-[9px] sm:text-[10px] uppercase text-stone-300 tracking-wider">Foco em Dados</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};