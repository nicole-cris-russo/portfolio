import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { CATEGORY_LABELS } from '../../lib/categories'
import type { Project } from '../../types'
import { ExternalLinkIcon } from './ExternalLinkIcon'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

/** Modal com as informações do projeto selecionado. */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Fecha com a tecla Esc e trava o scroll da página enquanto aberto.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Portal no body para o modal ficar acima do header (que está fora do stacking context do main).
  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-brand-gray border border-neutral-900 shadow-personalized"
      >
        <div className="flex items-center justify-between gap-3 border-b border-neutral-300 p-4">
          <h3 className="font-bold text-xl">{project.name}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="border border-neutral-900 bg-brand-gray px-3 py-1 shadow-personalized"
          >
            ✕
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-4 max-md:text-sm">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs border border-neutral-900 bg-brand-gray px-2 py-1 shadow-personalized">
              {CATEGORY_LABELS[project.category]}
            </span>

            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-neutral-900 bg-brand-gray px-3 py-2 text-sm shadow-personalized"
              >
                Acessar site
                <ExternalLinkIcon />
              </a>
            )}
          </div>

          <img
            src={project.image}
            alt={`Capa do projeto ${project.name}`}
            className="aspect-video w-full object-cover"
          />

          <p>{project.description}</p>

          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border border-neutral-900 bg-brand-gray text-sm px-2 py-1 shadow-personalized"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div
            className="project-html space-y-4"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </div>
    </div>,
    document.body,
  )
}
