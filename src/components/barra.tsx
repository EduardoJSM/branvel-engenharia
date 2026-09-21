'use client';

import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function KitDoGestor() {
  const materiais = [
    { titulo: 'Guia Prático de Redução de Lead Time', tipo: 'PDF', tamanho: '2.4 MB' },
    { titulo: 'Planilha de Cálculo OEE & Eficiência Fabril', tipo: 'XLSX', tamanho: '1.8 MB' },
    { titulo: 'Template de Mapeamento de Fluxo de Valor (MFV)', tipo: 'PDF', tamanho: '3.1 MB' },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 bg-zinc-900 text-white border-y border-zinc-800">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#77216F] bg-[#77216F]/10 px-3 py-1 rounded-full border border-[#77216F]/20">
            Recursos Operacionais
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            Kit do Gestor Industrial
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed">
            Acesse nossos materiais técnicos, planilhas de cálculo e frameworks de otimização prontos para aplicação no chão de fábrica.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {materiais.map((item, index) => (
            <div 
              key={index} 
              className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between space-y-6 hover:border-[#77216F]/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-[#77216F]">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">
                  {item.tipo}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-[11px] text-zinc-500 mt-2">{item.tamanho}</p>
              </div>

              <button className="inline-flex items-center space-x-2 text-[11px] font-semibold uppercase tracking-wider text-[#77216F] group-hover:text-white transition-colors pt-2 border-t border-zinc-900">
                <span>Download</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}