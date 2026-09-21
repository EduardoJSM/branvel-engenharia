'use client';

import React, { useState, useRef } from 'react';
import { FileText, FileSpreadsheet, FileCode, Download, FileCheck, Upload, Trash2 } from 'lucide-react';

export interface MaterialItem {
  id: string;
  title: string;
  filename: string;
  sizeInBytes: number;
  url?: string;
}

const initialMateriais: MaterialItem[] = [
  {
    id: '1',
    title: 'Guia Prático de Redução de Lead Time',
    filename: 'guia_reducao_lead_time_v2.pdf',
    sizeInBytes: 2516582,
  },
  {
    id: '2',
    title: 'Planilha de Cálculo OEE & Eficiência Fabril',
    filename: 'calculadora_oee_matriz.xlsx',
    sizeInBytes: 1887436,
  },
];

function formatBytes(bytes: number): string {
  if (!bytes || bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

function getFileMetadata(filename: string) {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  switch (ext) {
    case 'pdf':
      return {
        ext: 'PDF',
        badgeClass: 'bg-red-50 text-red-700 border-red-200/80',
        icon: FileText,
      };
    case 'xlsx':
    case 'xls':
    case 'csv':
      return {
        ext: ext.toUpperCase(),
        badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
        icon: FileSpreadsheet,
      };
    case 'doc':
    case 'docx':
      return {
        ext: ext.toUpperCase(),
        badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/80',
        icon: FileCode,
      };
    default:
      return {
        ext: ext.toUpperCase() || 'DOC',
        badgeClass: 'bg-[#77216F]/10 text-[#77216F] border-[#77216F]/20',
        icon: FileCheck,
      };
  }
}

export function ResourcesSection() {
  const [materiais, setMateriais] = useState<MaterialItem[]>(initialMateriais);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const newMaterial: MaterialItem = {
      id: Date.now().toString(),
      title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
      filename: file.name,
      sizeInBytes: file.size,
      url: URL.createObjectURL(file),
    };

    setMateriais((prev) => [newMaterial, ...prev]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemove = (id: string) => {
    setMateriais((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-semibold text-[#77216F] uppercase tracking-widest block mb-1">
              Recursos Operacionais
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight">
              Kit do Gestor Industrial
            </h2>
            <p className="text-xs text-zinc-600 font-light leading-relaxed max-w-md mt-2">
              Acesse nossos materiais técnicos, planilhas de cálculo e frameworks de otimização dimensionados para aplicação imediata no chão de fábrica.
            </p>
          </div>

          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.xlsx,.xls,.doc,.docx,.csv"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center space-x-2 bg-[#77216F] hover:bg-[#5E2750] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-lg transition-colors shadow-sm"
            >
              <Upload className="w-4 h-4" />
              <span>Anexar Novo Documento</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materiais.map((item) => {
            const meta = getFileMetadata(item.filename);
            const IconComponent = meta.icon;
            const formattedSize = formatBytes(item.sizeInBytes);

            return (
              <div
                key={item.id}
                className="bg-[#FBFBFB] p-6 border border-stone-200/80 hover:border-[#77216F]/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between space-y-6 group rounded-xl relative"
              >
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-white border border-stone-200/80 text-[#77216F] rounded-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded border ${meta.badgeClass}`}>
                      {meta.ext}
                    </span>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors p-1"
                      title="Remover arquivo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-900 group-hover:text-[#77216F] transition-colors leading-snug capitalize">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-mono mt-2">
                    {formattedSize}
                  </p>
                </div>

                <a
                  href={item.url || '#'}
                  download={item.filename}
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#77216F] hover:text-[#5E2750] transition-colors pt-3 border-t border-stone-200/80"
                >
                  <span>Download</span>
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}