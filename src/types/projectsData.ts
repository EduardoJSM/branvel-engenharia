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

export const projectsList: ProductionProject[] = [
  {
    id: '1',
    slug: 'otimizacao-linha-montagem',
    title: 'Otimização de Linha de Montagem',
    subtitle: 'Redução de Lead Time e Balanceamento de Células',
    category: 'Otimização de Processos',
    summary: 'Mapeamento de Fluxo de Valor (VSM) e eliminação de gargalos produtivos em linha de manufatura discreta.',
    heroImageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    impactMetrics: [
      { label: 'Redução de Lead Time', value: '-32%' },
      { label: 'Aumento de Setup (SMED)', value: '+40%' }
    ],
    methodologiesUsed: ['VSM', '5S', 'SMED', 'Kanban']
  },
  {
    id: '2',
    slug: 'implementacao-lean-logistica',
    title: 'Gestão de Estoques & Milk Run',
    subtitle: 'Reestruturação de Cadeia de Suprimentos Interna',
    category: 'Gestão de Cadeia de Suprimentos',
    summary: 'Dimensionamento de estoque de segurança, implementação de giro Kanban e otimização da rotatividade de insumos.',
    heroImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    impactMetrics: [
      { label: 'Redução de Inventory', value: '-25%' },
      { label: 'Acuracidade do Estoque', value: '99.2%' }
    ],
    methodologiesUsed: ['Just-in-Time', 'Milk Run', 'Análise ABC']
  },
  {
    id: '3',
    slug: 'controle-estatistico-qualidade',
    title: 'Controle Estatístico de Processo (CEP)',
    subtitle: 'Redução de Refugo e Variabilidade na Produção',
    category: 'Controle de Qualidade',
    summary: 'Aplicação da metodologia Six Sigma (DMAIC) para identificação de causas raízes de não conformidades operacionais.',
    heroImageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=1200',
    impactMetrics: [
      { label: 'Redução de Refugo', value: '-48%' },
      { label: 'Índice Cp / Cpk', value: '> 1.33' }
    ],
    methodologiesUsed: ['Six Sigma (DMAIC)', 'CEP', 'Ishikawa', 'FMEA']
  }
];