import aboutMeJson from '../data/about-me.json'
import socialMediaJson from '../data/social-media.json'
import projectsJson from '../data/projects.json'
import type { AboutMe, Project, SocialMedia } from '../types'

const SIMULATED_DELAY = 500

/** Simula uma chamada de API retornando os dados dos arquivos JSON. */
function simulateRequest<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), SIMULATED_DELAY)
  })
}

export function getAboutMe(): Promise<AboutMe> {
  return simulateRequest(aboutMeJson as AboutMe)
}

export function getSocialMedia(): Promise<SocialMedia[]> {
  return simulateRequest(socialMediaJson as SocialMedia[])
}

export function getProjects(): Promise<Project[]> {
  return simulateRequest(projectsJson as Project[])
}
