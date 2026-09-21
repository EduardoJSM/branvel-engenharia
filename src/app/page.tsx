'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, BarChart3, Layers, Settings2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] text-zinc-900 antialiased selection:bg-[#77216F] selection:text-white">
      <Navbar />
      <Hero />

      <section id="metodologia" className="py-24 px-6 sm:px-10 lg:px-16 border-b-2 border-zinc-900 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-zinc-900 pb-8">
            <div>
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#77216F]">
                Engenharia de Alta Precisão
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-900 mt-2">
                Pilares de Atuação
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-600 max-w-md">
              Metodologia proprietária desenhada para diagnosticar, reestruturar e escalar processos fabris e operacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#FBFBFB] p-8 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#77216F] text-white flex items-center justify-center border-2 border-zinc-900">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900">
                  Mapeamento VSM
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-600 leading-relaxed">
                  Mapeamento do Fluxo de Valor completo para identificar desperdícios, tempos mortos e assincronias de produção.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-300 flex items-center justify-between text-xs font-black uppercase">
                <span>Etapa 01</span>
                <CheckCircle2 className="w-4 h-4 text-[#77216F]" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#FBFBFB] p-8 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center border-2 border-zinc-900">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900">
                  Lean Manufacturing
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-600 leading-relaxed">
                  Implementação de sistema puxado, redução de WIP (Work in Progress), layout celular e padronização de trabalho.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-300 flex items-center justify-between text-xs font-black uppercase">
                <span>Etapa 02</span>
                <CheckCircle2 className="w-4 h-4 text-zinc-900" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#FBFBFB] p-8 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(9,9,11,1)] flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#77216F] text-white flex items-center justify-center border-2 border-zinc-900">
                  <Settings2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900">
                  Six Sigma & OEE
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-600 leading-relaxed">
                  Controle estatístico de processos para eliminação de variabilidade, maximização da disponibilidade e qualidade.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-300 flex items-center justify-between text-xs font-black uppercase">
                <span>Etapa 03</span>
                <CheckCircle2 className="w-4 h-4 text-[#77216F]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 px-6 sm:px-10 lg:px-16 bg-[#77216F] text-white">
        <div className="max-w-5xl mx-auto border-2 border-zinc-900 bg-zinc-900 p-8 sm:p-14 lg:p-20 shadow-[10px_10px_0px_0px_rgba(251,251,251,1)] space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-[#77216F] bg-white px-3 py-1 inline-block">
              Diagnóstico Inicial
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              Pronto para otimizar seus processos?
            </h2>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400 max-w-xl">
              Agende uma análise prévia sem custo com nossos engenheiros especialistas para identificar oportunidades imediatas.
            </p>
          </div>

          <div className="pt-6">
            <a 
              href="https://wa.me/5588999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#77216F] hover:bg-[#5c1957] text-white text-xs sm:text-sm font-black uppercase tracking-[0.25em] px-8 py-5 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-200"
            >
              <span>Falar com Engenheiro Especialista</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 sm:px-10 border-t-2 border-zinc-900 bg-[#FBFBFB] text-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-xs font-black uppercase tracking-wider">
            BRANVEL ENGENHARIA © {new Date().getFullYear()} — TODOS OS DIREITOS RESERVADOS.
          </div>
          <div className="text-xs font-black uppercase tracking-wider text-[#77216F]">
            LEAN MANUFACTURING & SIX SIGMA
          </div>
        </div>
      </footer>
    </main>
  );
}