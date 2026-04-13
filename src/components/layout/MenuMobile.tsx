type SidebarProps = {
    activeId: SectionId
    setActiveId: (id: SectionId) => void
    className?: string
}

export type SectionId = 'about-me' | 'projects' | 'contact'

export const sections = [
    {
        id: 'about-me',
        label: 'Sobre Mim',
        icon: '/img/me.svg',
    },
    {
        id: 'projects',
        label: 'Projetos',
        icon: '/img/web-site.svg',
    },
    {
        id: 'contact',
        label: 'Contato',
        icon: '/img/brain-2.svg',
    },
] as const

export const MenuMobile = ({ activeId, setActiveId, className }: SidebarProps) => {
    return (
        <aside
            className={`sticky top-0 z-50 flex bg-brand-gray shadow-personalized lg:hidden w-full flex-col px-2 py-4 ${className}`}
        >
            <nav
                className="grid grid-cols-3"
                aria-label="Seções do portfólio"
            >
                {/* <Highlight
                    defaultValue={activeId}
                    className="w-full h-fit"
                > */}
                {sections.map(({ id, label, icon }) => {
                    const isActive = id === activeId
                    return (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setActiveId(id)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`border w-[50px] h-[50px] aspect-square mx-auto border-neutral-900 shadow-personalized p-3 text-left text-lg transition-[color,box-shadow,transform] duration-150 ${
                                isActive
                                    ? 'shadow-inner-personalized -translate-x-[3px] translate-y-[3px]'
                                    : 'text-neutral-900'
                            }`}
                        >
                            <img
                                src={icon}
                                alt={label}
                                className="w-6 h-6"
                            />
                        </button>
                    )
                })}
                {/* </Highlight> */}
            </nav>
        </aside>
    )
}
