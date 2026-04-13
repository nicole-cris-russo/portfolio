import useData from '@/hooks/useData'
import { ExternalLink } from 'lucide-react'
import { Magnetic } from '../animate-ui/primitives/effects/magnetic'
import Container from '../layout/Container'
import HeaderButtons from '../partials/HeaderButtons'
import { Title } from '../ui/Titles'

export const Projects = () => {
    const { data: projects, loading, error } = useData('projects')
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <Container id="projects">
            <Title text="Projetos" />
            <div className="flex flex-wrap justify-end items-center gap-10 w-full">
                {projects.map(
                    (project: {
                        id: number
                        name: string
                        description: string
                        image: string
                        link: string
                        technologies: string[]
                        status: 'completo' | 'em_desenvolvimento'
                    }) => (
                        <Magnetic key={project.id}>
                            <div className="w-full md:w-[350px] shadow-personalized border border-neutral-200">
                                <HeaderButtons />
                                <div className="p-4 space-y-4 cursor-default select-none">
                                    <div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            <h2 className="shadow-personalized font-bold text-lg bg-brand-gray px-2 py-1 flex items-center justify-between gap-2">
                                                {project.name}
                                                <ExternalLink className="w-4 h-4" />
                                            </h2>
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="aspect-video w-full"
                                        />
                                    </div>
                                    <ul className="flex flex-wrap justify-between items-center gap-2">
                                        {project.technologies.map((technology: string) => (
                                            <li
                                                key={technology}
                                                className="border px-2 py-1 bg-brand-gray text-sm shadow-personalized"
                                            >
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Magnetic>
                    )
                )}
            </div>
        </Container>
    )
}
