import { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { CATEGORY_LABELS } from "../../lib/categories";
import type { Project } from "../../types";
import { PixelLoader } from "../ui/PixelLoader";
import { ProjectModal } from "../ui/ProjectModal";
import { SectionTitle } from "../ui/SectionTitle";

/** Área Meus Projetos — listagem; clicar num projeto abre o modal. */
export function Projects({ loading }: { loading: boolean }) {
  const { projects, error } = usePortfolio();
  const [selected, setSelected] = useState<Project | null>(null);

  if (loading) {
    return (
      <section id="projetos" className="flex flex-col gap-6 py-16 scroll-mt-20">
        <SectionTitle>Meus Projetos</SectionTitle>
        <div className="w-full h-full flex items-center justify-center">
          <PixelLoader />
        </div>
      </section>
    );
  }

  return (
    <section
      id="projetos"
      className="flex flex-col gap-6 py-16 scroll-mt-20 page-fade-in"
    >
      <SectionTitle>Meus Projetos</SectionTitle>

      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            className="flex flex-col text-left border border-neutral-200 bg-brand-gray shadow-personalized hover:-translate-y-1 transition-transform"
          >
            <img
              src={project.image}
              alt={`Capa do projeto ${project.name}`}
              className="aspect-video w-full object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <span className="self-start text-xs border border-neutral-900 bg-brand-gray px-2 py-1 shadow-personalized">
                {CATEGORY_LABELS[project.category]}
              </span>
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p className="text-sm text-neutral-700 line-clamp-3">
                {project.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
