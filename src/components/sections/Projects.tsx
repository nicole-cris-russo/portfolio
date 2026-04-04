import useData from '@/hooks/useData'
import Container from '../layout/Container'
import { Title } from '../ui/Titles'

export const Projects = () => {
    const { data: projects, loading, error } = useData('projects')

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (
        <Container id="projects">
            <Title>Projects</Title>
            <div className="flex flex-wrap justify-end items-center gap-10 w-full">
                {projects.map(
                    (project: {
                        id: number
                        name: string
                        description: string
                        image: string
                        link: string
                        technologies: string[]
                    }) => (
                        <div
                            key={project.id}
                            className="text-center w-[350px] bg-neutral-900/80 border rounded-4xl border-neutral-900 shadow-xl shadow-black/30 px-6 py-4 space-y-4"
                        >
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="aspect-video w-full rounded-lg"
                            />
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.link}
                            </a>
                            <ul className="flex flex-wrap justify-center items-center gap-2">
                                {project.technologies.map((technology: string) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                            </ul>
                        </div>
                    )
                )}
            </div>
        </Container>
    )
}
