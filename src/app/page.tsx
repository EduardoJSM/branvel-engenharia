'use client';

import { Navbar } from '../components/Navbar';
import { HeroEng } from '../components/HeroEng';
import { ProjectsSection } from '../components/ProjectsSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { 
  TrendingUp, 
  Workflow, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

export default function Home() {
  const steps = [
    {
      num: '01',
      title: 'Mapeamento VSM & Diagnóstico',
      description: 'Análise detalhada do Fluxo de Valor atual para identificação exata de gargalos, desperdícios de movimentação e tempos mortos.'
    },
    {
      num: '02',
      title: 'Dimensionamento & Kaizen',
      description: 'Aplicação de balanceamento de linha, definição de estoque de segurança e redesenho de processos operacionais.'
    },
    {
      num: '03',
      title: 'Padronização & Controle (CEP)',
      description: 'Implementação de gestão visual, quadros Kanban e Controle Estatístico de Processos para mitigar variabilidades.'
    },
    {
      num: '04',
      title: 'Monitoramento & OEE',
      description: 'Estabelecimento de KPIs em tempo real, acompanhamento do OEE global e consolidação dos ganhos financeiros.'
    }
  ];

  const pillars = [
    {
      icon: <Workflow className="w-6 h-6 text-[#77216F]" />,
      title: 'Lean Manufacturing',
      desc: 'Redução drástica de desperdícios (Muda, Muri, Mura) e aumento de fluidez no chão de fábrica.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#77216F]" />,
      title: 'Six Sigma & CEP',
      desc: 'Análise estatística para redução de refugo, estabilização de qualidade e otimização do Cpk.'
    },
    {
      icon: <Layers className="w-6 h-6 text-[#77216F]" />,
      title: 'Supply Chain & Logística',
      desc: 'Gestão de estoques Just-in-Time, curva ABC e otimização da rotatividade de matérias-primas.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#77216F]" />,
      title: 'Indústria 4.0 & Dados',
      desc: 'Automação de relatórios, modelagem de processos e integração de indicadores de desempenho.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFB] text-zinc-900 selection:bg-[#77216F] selection:text-white">
      <Navbar />
      
      <HeroEng />

      <section id="metodologia" className="py-20 bg-white border-y border-stone-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#77216F] uppercase tracking-widest block mb-2">
              Especialidades Técnicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight">
              Engenharia fundamentada em dados e rigor operacional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#FBFBFB] border border-stone-200/80 hover:border-[#77216F]/40 transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-lg font-medium text-zinc-900 mb-2">{p.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />

      <ResourcesSection />

      <section className="py-20 bg-[#F3F3F0] px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-semibold text-[#77216F] uppercase tracking-widest block mb-2">
                Roteiro de Execução
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight">
                Como implementamos melhorias
              </h2>
            </div>
            <p className="text-xs text-zinc-500 max-w-md font-light">
              Abordagem estruturada do diagnóstico à sustentação dos resultados para garantir retorno sobre o investimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 border border-stone-200/80 relative">
                <span className="text-3xl font-light text-[#77216F]/30 block mb-4 font-mono">
                  {step.num}
                </span>
                <h3 className="text-base font-medium text-zinc-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold text-[#77216F] uppercase tracking-widest block">
              Perfil Profissional
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight">
              Foco contínuo na eficiência, custo e previsibilidade
            </h2>
            <p className="text-sm text-zinc-600 font-light leading-relaxed">
              Atuação direcionada à solução de problemas complexos em sistemas de produção. Com base no Mapeamento do Fluxo de Valor e ferramentas Lean, identifico gargalos operacionais e reestruturo processos para elevar a margem de contribuição.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2 text-xs text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#77216F]" />
                <span>Lean & Six Sigma Green/Black Belt</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#77216F]" />
                <span>Gestão de Estoques & Kanban</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#77216F]" />
                <span>Simulação & Otimização de Layout</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#77216F]" />
                <span>Redução Estruturada de Refugo</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FBFBFB] p-8 border border-stone-200">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#77216F]/10 text-[#77216F]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-900">Retorno Financeiro Direto</h4>
                  <p className="text-xs text-zinc-600 font-light mt-1">
                    Cada projeto de otimização visa a redução imediata de custos operacionais e desperdícios de material.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#77216F]/10 text-[#77216F]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-900">Sustentabilidade das Mudanças</h4>
                  <p className="text-xs text-zinc-600 font-light mt-1">
                    Padronização rigorosa para que os ganhos obtidos se mantenham no longo prazo sem regressão.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#77216F]/10 text-[#77216F]">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-900">Implementação Ágil</h4>
                  <p className="text-xs text-zinc-600 font-light mt-1">
                    Uso de ciclos rápidos de melhoria (PDCA/Kaizen) para gerar impacto em curto espaço de tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}