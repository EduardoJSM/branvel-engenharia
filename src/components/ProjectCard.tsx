import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ProductionProject, Metric } from '../types/projectsData';

interface ProjectCardProps {
  project: ProductionProject;
  onSelect: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(project.id)}
      className="group cursor-pointer bg-white border border-stone-200/80 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
          <Image
            src={project.heroImageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-3 left-3 bg-[#77216F]/90 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 font-medium shadow-sm">
            {project.category}
          </div>

          <div className="absolute bottom-3 right-3 bg-white text-zinc-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-[#77216F]" />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-light text-zinc-900 mb-2 group-hover:text-[#77216F] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-600 font-light mb-6 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs text-zinc-700 bg-stone-50/50 p-3 rounded-sm">
          {project.impactMetrics.map((m: Metric, idx: number) => (
            <div key={idx}>
              <span className="block text-base font-semibold text-[#77216F]">{m.value}</span>
              <span className="text-zinc-500 text-[10px] uppercase tracking-wider">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};