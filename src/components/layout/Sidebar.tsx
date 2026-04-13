import { Highlight } from '../animate-ui/primitives/effects/highlight'

type SidebarProps = {
    activeId: SectionId
    setActiveId: (id: SectionId) => void
    className?: string
}

export type SectionId = 'about-me' | 'projects' | 'soft-skills'

export const sections = [
    {
        id: 'about-me',
        label: 'Sobre Mim',
    },
    {
        id: 'soft-skills',
        label: 'Habilidades',
    },
    {
        id: 'projects',
        label: 'Projetos',
    },
] as const

export const Sidebar = ({ activeId, setActiveId, className }: SidebarProps) => {
    return (
        <aside className={`z-10 flex max-lg:hidden col-span-2 h-screen w-64 px-2 flex-col ${className}`}>
            <nav
                className="flex flex-1 flex-col justify-center gap-5 p-10"
                aria-label="Seções do portfólio"
            >
                <Highlight defaultValue={activeId}>
                    {sections.map(({ id, label }) => {
                        const isActive = id === activeId
                        return (
                            <button
                                type="button"
                                onClick={() => setActiveId(id)}
                                aria-current={isActive ? 'page' : undefined}
                                className={`border w-full text-base backdrop-blur-md border-neutral-900 shadow-personalized px-4 py-3 text-left transition-all duration-150 cursor-pointer ${
                                    isActive
                                        ? 'shadow-inner-personalized -translate-x-[3px] translate-y-[3px]'
                                        : 'text-neutral-900 hover:scale-105'
                                }`}
                            >
                                {label}
                            </button>
                        )
                    })}
                </Highlight>
            </nav>
        </aside>
    )
}
