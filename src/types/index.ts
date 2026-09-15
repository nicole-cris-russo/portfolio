export type Category = 'web' | 'experimental' | 'cybersecurity'

export type CategoryFilter = 'all' | Category

export interface Project {
  id: number
  slug: string
  name: string
  description: string
  image: string
  category: Category
  siteUrl: string | null
  technologies: string[]
  status: 'completo' | 'em_desenvolvimento'
  content: string
}

export interface AboutMe {
  paragraphs: string[]
  info: {
    name: string
    email: string
    phone: string
    location: string
  }
}

export interface SocialMedia {
  id: string
  label: string
  hint: string
  href: string
  external: boolean
}