type SidebarProps = {
    activeId: SectionId
    setActiveId: (id: SectionId) => void
    className?: string
}

export type SectionId = 'about-me' | 'projects' | 'soft-skills' | 'social-media'

export const sections = [
    {
        id: 'about-me',
        label: 'Sobre Mim',
    },
    {
        id: 'projects',
        label: 'Projetos',
    },
    {
        id: 'soft-skills',
        label: 'Habilidades',
    },
    {
        id: 'social-media',
        label: 'Redes Sociais',
    },
] as const

export const Sidebar = ({ activeId, setActiveId, className }: SidebarProps) => {
    return (
        <aside className={`z-10 flex h-screen w-64 flex-col shadow-md ${className}`}>
            <nav
                className="flex flex-1 flex-col justify-center gap-1 p-10"
                aria-label="Seções do portfólio"
            >
                {sections.map(({ id, label }) => {
                    const isActive = id === activeId
                    return (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setActiveId(id)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`rounded-lg px-4 py-3 text-left text-xl transition-colors ${
                                isActive
                                    ? 'bg-red-500/15 text-red-500 ring-1 ring-red-500/40'
                                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                            }`}
                        >
                            {label}
                        </button>
                    )
                })}
            </nav>
        </aside>
    )
}
