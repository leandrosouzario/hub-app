export const APPS = [
  {
    id: 'painel-corporativo',
    name: 'Painel Corporativo',
    shortDescription:
      'Ambiente autenticado para acesso a sistemas, dashboards e módulos corporativos.',
    longDescription:
      'Plataforma autenticada com Supabase Auth, perfil de usuário e módulos demonstrativos para gestão operacional, documentos, indicadores e administração corporativa.',
    status: 'available',
    statusLabel: 'Disponível',
    url: 'https://pc.leandrosouza.info',
    icon: '🏢',
    featured: true,
  },
  {
    id: 'gym-app',
    name: 'Gym App',
    shortDescription: 'Acompanhamento de treinos, exercícios e evolução física.',
    status: 'in_development',
    statusLabel: 'Em desenvolvimento',
    url: 'https://gym.leandrosouza.info',
    icon: '💪',
    featured: false,
  },
  {
    id: 'simulador-financeiro',
    name: 'Simulador Financeiro',
    shortDescription: 'Simulações de empréstimos, parcelas e cenários financeiros.',
    status: 'in_development',
    statusLabel: 'Em desenvolvimento',
    url: 'https://fin.leandrosouza.info',
    icon: '📈',
    featured: false,
  },
  {
    id: 'hub-ia',
    name: 'Hub de IA',
    shortDescription: 'Ferramentas e experimentos com inteligência artificial.',
    status: 'planned',
    statusLabel: 'Planejado',
    url: 'https://ai.leandrosouza.info',
    icon: '🤖',
    featured: false,
  },
  {
    id: 'central-documentos',
    name: 'Central de Documentos',
    shortDescription: 'Organização e consulta de documentos digitais.',
    status: 'planned',
    statusLabel: 'Planejado',
    url: 'https://docs.leandrosouza.info',
    icon: '📁',
    featured: false,
  },
  {
    id: 'laboratorio-automacoes',
    name: 'Laboratório de Automações',
    shortDescription: 'Experimentos com integrações e fluxos automatizados.',
    status: 'planned',
    statusLabel: 'Planejado',
    url: 'https://auto.leandrosouza.info',
    icon: '⚡',
    featured: false,
  },
]

export const FEATURED_APP = APPS.find((app) => app.featured)

export const UPCOMING_APPS = APPS.filter((app) => !app.featured)

export const TECH_CHIPS = [
  'Next.js',
  'React',
  'Supabase',
  'PostgreSQL',
  'Docker',
  'Cloudflare',
  'IA Generativa',
]
