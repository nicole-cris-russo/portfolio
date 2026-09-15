import type { Category, CategoryFilter } from '../types'

export const CATEGORY_LABELS: Record<Category, string> = {
  web: 'Projetos Web',
  experimental: 'Projetos Experimentais',
  cybersecurity: 'Redes e Cibersegurança',
}

export const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Projetos Web' },
  { id: 'experimental', label: 'Projetos Experimentais' },
  { id: 'cybersecurity', label: 'Redes e Cibersegurança' },
]
