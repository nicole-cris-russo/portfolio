import { useState, type ComponentType } from 'react'
import { SectionId, Sidebar } from './components/layout/Sidebar'
import { AboutMe } from './components/sections/AboutMe'
import { Projects } from './components/sections/Projects'
import { SocialMedia } from './components/sections/SocialMedia'
import { SoftSkills } from './components/sections/SoftSkills'

const sectionComponents: Record<SectionId, ComponentType> = {
    'about-me': AboutMe,
    projects: Projects,
    'soft-skills': SoftSkills,
    'social-media': SocialMedia,
}

export default function App() {
    const [activeId, setActiveId] = useState<SectionId>('projects')

    const ActiveSection = sectionComponents[activeId]

    return (
        <div
            className="min-h-screen grid grid-cols-12 text-neutral-100"
            style={{
                backgroundImage: "url('/img/background.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Sidebar
                activeId={activeId}
                setActiveId={setActiveId}
                className="col-span-2"
            />
            <main className="min-h-screen col-span-10 p-20">
                <div className="mx-auto h-full max-w-4xl flex items-center justify-center">
                    <ActiveSection />
                </div>
            </main>
        </div>
    )
}
