'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ShieldCheck, FileText, Lock, Scale, Eye } from 'lucide-react';

export default function TermosEPrivacidade() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] text-zinc-900 selection:bg-[#77216F] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="mb-12 border-b border-stone-200 pb-8">
          <span className="text-xs font-semibold text-[#77216F] uppercase tracking-widest block mb-2">
            Documentação Legal & Regulatória
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight mb-4">
            Termos de uso & Privacidade
          </h1>
          <p className="text-xs text-zinc-500 font-mono">
            Atualizado em conformidade com o CREA-SE e LGPD (Lei nº 13.709/2018)
          </p>
        </div>

        <div className="space-y-10 text-sm text-zinc-700 font-light leading-relaxed">
          
          <div className="p-4 bg-stone-100/60 border border-stone-200 rounded-sm text-xs text-zinc-600 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#77216F] shrink-0 mt-0.5" />
            <p>
              Este documento estabelece as diretrizes de utilização do portal, regulamentação dos serviços de Engenharia de Produção e o compromisso de privacidade dos dados coletados.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-xl font-medium text-zinc-900 border-b border-stone-200 pb-2">
              Parte 1: Termos de Serviço
            </h2>

            <section className="space-y-2">
              <h3 className="text-base font-medium text-zinc-900 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#77216F]" />
                <span>1. Prestação de Serviços Técnicos</span>
              </h3>
              <p>
                Os serviços de consultoria, otimização de processos, mapeamento de fluxo de valor (MFV) e análises de OEE são prestados por Engenheiro de Produção registrado no CREA-SE. Todas as atividades emissores de pareceres cumprem o sistema CONFEA/CREA e normas ABNT aplicáveis, formalizadas via Anotação de Responsabilidade Técnica (ART) quando requerido.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-medium text-zinc-900 flex items-center space-x-2">
                <Scale className="w-4 h-4 text-[#77216F]" />
                <span>2. Propriedade Intelectual</span>
              </h3>
              <p>
                Todo o conteúdo, layout, logotipos e metodologias apresentadas neste site são protegidos pelas leis de Direitos Autorais (Lei nº 9.610/1998) e Propriedade Industrial (Lei nº 9.279/1996).
              </p>
            </section>
          </div>

          <div className="space-y-6 pt-6 border-t border-stone-200">
            <h2 className="text-xl font-medium text-zinc-900 border-b border-stone-200 pb-2">
              Parte 2: Política de Privacidade (LGPD)
            </h2>

            <section className="space-y-2">
              <h3 className="text-base font-medium text-zinc-900 flex items-center space-x-2">
                <Eye className="w-4 h-4 text-[#77216F]" />
                <span>3. Coleta e Finalidade dos Dados</span>
              </h3>
              <p>
                Coletamos apenas informações fornecidas por você (nome, e-mail, empresa e mensagem) com a finalidade exclusiva de responder a solicitações de orçamento e prestar atendimento comercial.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-medium text-zinc-900 flex items-center space-x-2">
                <Lock className="w-4 h-4 text-[#77216F]" />
                <span>4. Sigilo Industrial (NDA)</span>
              </h3>
              <p>
                Informações operacionais, tempos de ciclo e gargalos informados em orçamentos são protegidos por compromisso restrito de confidencialidade industrial. Não comercializamos ou compartilhamos seus dados com terceiros.
              </p>
            </section>
          </div>

          <section className="border-t border-stone-200 pt-8">
            <p className="text-xs text-zinc-500">
              Para dúvidas sobre estes termos ou solicitações referente aos seus dados pessoais, entre em contato via e-mail: <strong className="text-zinc-900 font-medium">eng.eduardojsm@gmail.com</strong>.
            </p>
          </section>

        </div>
      </section>

      <Footer />
    </main>
  );
}