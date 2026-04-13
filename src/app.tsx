import { useState, type ComponentType } from 'react'
import { Effect } from './components/animate-ui/primitives/effects/effect'
import { MenuMobile } from './components/layout/MenuMobile'
import { SectionId, Sidebar } from './components/layout/Sidebar'
import { AboutMe } from './components/sections/AboutMe'
import { Projects } from './components/sections/Projects'
import { SoftSkills } from './components/sections/SoftSkills'

const sectionComponents: Record<SectionId, ComponentType> = {
    'about-me': AboutMe,
    projects: Projects,
    'soft-skills': SoftSkills,
}

export default function App() {
    const [activeId, setActiveId] = useState<SectionId>('about-me')

    const ActiveSection = sectionComponents[activeId]

    return (
        <div className="min-h-screen content-app-container grid grid-cols-1 lg:grid-cols-12 bg-cover bg-center max-w-7xl mx-auto">
            <Sidebar
                activeId={activeId}
                setActiveId={setActiveId}
            />
            <MenuMobile
                activeId={activeId}
                setActiveId={setActiveId}
            />
            <main className="min-h-screen col-span-12 lg:col-span-10 p-5 lg:p-20 z-10">
                <div className="mx-auto h-full max-w-4xl flex items-center justify-center">
                    <Effect
                        key={activeId}
                        slide={{ direction: 'left' }}
                        fade={{ initialOpacity: 0, opacity: 1 }}
                        blur={{ initialBlur: 5, blur: 0 }}
                    >
                        <ActiveSection />
                    </Effect>
                </div>
            </main>
        </div>
    )
}
