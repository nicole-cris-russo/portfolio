import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { getAboutMe, getProjects, getSocialMedia } from '../services/api'
import type { AboutMe, Project, SocialMedia } from '../types'

const MIN_LOADING_MS = 500

interface PortfolioContextValue {
  aboutMe: AboutMe | null
  projects: Project[]
  socialMedia: SocialMedia[]
  loading: boolean
  error: string | null
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null)

/** Carrega todos os JSON da “API” em paralelo, com tempo mínimo de loading. */
export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [aboutMe, setAboutMe] = useState<AboutMe | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const startedAt = Date.now()
    let active = true

    Promise.all([getAboutMe(), getProjects(), getSocialMedia()])
      .then(([about, projectList, social]) => {
        if (!active) return
        setAboutMe(about)
        setProjects(projectList)
        setSocialMedia(social)
      })
      .catch(() => {
        if (active) setError('Não foi possível carregar os dados.')
      })
      .finally(() => {
        const remaining = Math.max(0, MIN_LOADING_MS - (Date.now() - startedAt))
        window.setTimeout(() => {
          if (active) setLoading(false)
        }, remaining)
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <PortfolioContext.Provider
      value={{ aboutMe, projects, socialMedia, loading, error }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio deve ser usado dentro de PortfolioProvider')
  }
  return context
}
