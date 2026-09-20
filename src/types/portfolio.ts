export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface ProductionProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Otimização de Processos' | 'Lean Manufacturing' | 'Gestão de Cadeia de Suprimentos' | 'Controle de Qualidade';
  summary: string;
  heroImageUrl: string;
  impactMetrics: Metric[];
  methodologiesUsed: string[];
}