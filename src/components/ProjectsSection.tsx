'use client';

import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsList, ProductionProject } from '../types/projectsData';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Otimização de Processos', 'Gestão de Cadeia de Suprimentos', 'Controle de Qualidade'];

  const filteredProjects = selectedCategory === 'Todos'
    ? projectsList
    : projectsList.filter((p: ProductionProject) => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-16 sm:py-24 bg-[#FBFBFB] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho Responsivo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <span className="text-xs font-semibold text-[#77216F] uppercase tracking-widest block mb-2">
              Casos de Estudo & Resultados
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight">
              Projetos de Engenharia
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] sm:text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 border whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#77216F] border-[#77216F] text-white shadow-sm'
                    : 'bg-transparent border-stone-300 text-zinc-600 hover:border-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Flexível de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project: ProductionProject) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={(id: string) => console.log('Projeto selecionado:', id)} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};