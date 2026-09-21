'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Search, Activity, Cpu, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="pt-20 min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#FBFBFB] border-b-2 border-zinc-900 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-[#77216F] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-r-0 lg:border-r-2 border-zinc-900 relative z-10"
      >
        <div className="space-y-8 pt-6 lg:pt-10">
          <div className="inline-flex items-center gap-2 border-b-2 border-white pb-2">
            <Activity className="w-4 h-4 text-white" />
            <span className="text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-white">
              Otimização Operacional & Lean Manufacturing
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.88] text-white">
            REDUÇÃO DE <br />
            LEAD TIME <br />
            <span className="bg-white text-zinc-900 px-3 py-1 inline-block mt-2 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] font-black italic">
              ATÉ 40%
            </span>
          </h1>
        </div>

        <div className="space-y-8 my-10">
          <p className="text-xs sm:text-sm lg:text-base font-bold tracking-wider uppercase text-white/95 max-w-lg leading-relaxed">
            Consultoria e engenharia de processos focada na eliminação de gargalos industriais, gestão de estoques, VSM e Six Sigma.
          </p>

          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-0 max-w-xl border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] bg-white"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="DIGITE SEU GARGALO OPERACIONAL..."
                className="w-full h-16 pl-5 pr-12 text-zinc-900 text-xs sm:text-sm font-black tracking-wider uppercase focus:outline-none placeholder:text-zinc-400 placeholder:font-bold"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-900 w-5 h-5" />
            </div>
            <button 
              type="submit"
              className="h-16 px-8 bg-zinc-900 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 border-t-2 sm:border-t-0 sm:border-l-2 border-zinc-900"
            >
              <span>Analisar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t-2 border-white/30 pt-8">
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">OEE +25%</p>
            <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 mt-1">Eficiência Global</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">ZERO</p>
            <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 mt-1">Desperdício VSM</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">ROI 10X</p>
            <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 mt-1">Retorno Médio</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative min-h-[500px] lg:min-h-full bg-zinc-900 overflow-hidden flex flex-col justify-between p-8 sm:p-12"
      >
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
          alt="Planta Industrial de Alta Performance"
          fill
          priority
          className="object-cover opacity-50 mix-blend-luminosity hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        <div className="relative z-10 flex justify-between items-start">
          <div className="bg-zinc-900/90 backdrop-blur-md border-2 border-white p-3 inline-flex items-center gap-2">
            <Cpu className="w-4 h-4 text-white" />
            <span className="text-[10px] font-black tracking-widest uppercase text-white">Sistemas Autônomos</span>
          </div>
          <div className="bg-zinc-900/90 backdrop-blur-md border-2 border-white p-3 inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="text-[10px] font-black tracking-widest uppercase text-white">Certificação Six Sigma</span>
          </div>
        </div>

        <div className="relative z-10 w-full pt-20">
          <h2 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[11rem] font-black text-white tracking-tighter uppercase leading-none opacity-90 select-none drop-shadow-2xl">
            BRANVEL
          </h2>
        </div>
      </motion.div>
    </section>
  );
}