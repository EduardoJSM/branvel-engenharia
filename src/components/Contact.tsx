'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, User, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#77216F', '#5E2750', '#2C2C2C'],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const companyText = formData.company.trim() ? ` (${formData.company.trim()})` : '';

    const formattedMessage = 
      `Olá! Me chamo ${formData.name}${companyText}.\n\n` +
      `E-mail: ${formData.email}\n\n` +
      `Mensagem:\n${formData.message.trim()}`;

    const encodedText = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/557998024989?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-[#F3F3F0] px-4 sm:px-6 lg:px-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#77216F]/10 border border-[#77216F]/20 rounded-full">
            <span className="text-[11px] font-semibold text-[#77216F] uppercase tracking-wider">
              Diagnóstico Operacional
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight tracking-tight">
            Vamos otimizar seus processos?
          </h2>

          <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed">
            Preencha os dados ao lado para alinhar metas de eficiência, eliminação de gargalos ou redução de Lead Time.
          </p>

          <div className="space-y-4 pt-4 border-t border-stone-300/60">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#77216F] shrink-0 shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] uppercase text-zinc-400 font-medium">E-mail Profissional</span>
                <span className="font-medium text-zinc-900 text-xs sm:text-sm truncate block">contato@branvelengenharia.com.br</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#77216F] shrink-0 shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-zinc-400 font-medium">WhatsApp Direct</span>
                <span className="font-medium text-zinc-900 text-xs sm:text-sm">+55 (79) 9802-4989</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#77216F] shrink-0 shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-zinc-400 font-medium">Atuação</span>
                <span className="font-medium text-zinc-900 text-xs sm:text-sm">Projetos Presenciais e Remotos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-stone-200 shadow-sm rounded-none">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-zinc-600 mb-1.5 font-medium flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-[#77216F]" />
                <span>Seu Nome Completo *</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#FBFBFB] border border-stone-200 text-zinc-900 focus:outline-none focus:border-[#77216F] focus:bg-white text-sm transition-all"
                placeholder="Ex: Eduardo Silva"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-600 mb-1.5 font-medium flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#77216F]" />
                  <span>Seu E-mail *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FBFBFB] border border-stone-200 text-zinc-900 focus:outline-none focus:border-[#77216F] focus:bg-white text-sm transition-all"
                  placeholder="contato@empresa.com"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-600 mb-1.5 font-medium flex items-center space-x-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#77216F]" />
                  <span>Empresa / Instituição</span>
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FBFBFB] border border-stone-200 text-zinc-900 focus:outline-none focus:border-[#77216F] focus:bg-white text-sm transition-all"
                  placeholder="Ex: Empresa"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-zinc-600 mb-1.5 font-medium flex items-center space-x-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#77216F]" />
                <span>Resumo da Necessidade *</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#FBFBFB] border border-stone-200 text-zinc-900 focus:outline-none focus:border-[#77216F] focus:bg-white text-sm resize-none transition-all"
                placeholder="Descreva brevemente seus gargalos produtivos ou metas de projeto..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all duration-300 shadow-sm ${
                isSent
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#77216F] hover:bg-[#5E2750] text-white hover:shadow-md'
              }`}
            >
              {isSubmitting ? (
                <span>Processando Envio...</span>
              ) : isSent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Redirecionando para o WhatsApp...</span>
                </>
              ) : (
                <>
                  <span>Enviar via WhatsApp Direct</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};