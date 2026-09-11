import { ExternalLink } from 'lucide-react'
import { Magnetic } from '../animate-ui/primitives/effects/magnetic'
import Container from '../layout/Container'
import HeaderButtons from '../partials/HeaderButtons'
import { Title } from '../ui/Titles'

const contactItems = [
    {
        label: 'GitHub',
        hint: '@nicole-cris-russo',
        href: 'https://github.com/nicole-cris-russo',
        icon: '/img/github.svg',
    },
    {
        label: 'LinkedIn',
        hint: 'nicolerusso01',
        href: 'https://www.linkedin.com/in/nicolerusso01/',
        icon: '/img/linkedin.svg',
    },
    {
        label: 'E-mail',
        hint: 'nicolerusso2020@gmail.com',
        href: 'mailto:nicolerusso2020@gmail.com',
        icon: '/img/mail.svg',
    },
] as const

export const Contact = () => {
    return (
        <Container id="contact">
            <Title text="Contato" />
            <div className="flex w-full justify-end">
                <Magnetic>
                    <div className="w-full shadow-personalized border border-neutral-200 backdrop-blur-md">
                        <HeaderButtons />
                        <div className="bg-transparent backdrop-blur-md p-4 md:p-6 space-y-5 cursor-default select-none max-md:text-sm">
                            <div className="border bg-brand-gray border-neutral-200 shadow-inner-personalized px-3 py-2 text-neutral-800">
                                <span>Onde me encontrar - redes sociais, projetos e etc.</span>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {contactItems.map(({ label, hint, href, icon: Icon }) => {
                                    const isMail = href.startsWith('mailto:')
                                    return (
                                        <li
                                            key={label}
                                            className="bg-brand-gray"
                                        >
                                            <a
                                                href={href}
                                                {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                                                className="
                                                group flex items-stretch gap-3 border border-neutral-200 bg-white/30 p-3 shadow-personalized transition-[background-color,transform] duration-150 hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
                                            >
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 bg-brand-gray shadow-personalized">
                                                    <img
                                                        src={Icon}
                                                        alt={label}
                                                    />
                                                </div>
                                                <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
                                                    <span className="font-bold leading-tight">{label}</span>
                                                    <span className="truncate text-neutral-600 text-xs md:text-sm">
                                                        {hint}
                                                    </span>
                                                </div>
                                                <div className="flex shrink-0 items-center">
                                                    <ExternalLink className="h-4 w-4 text-neutral-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-neutral-800" />
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </Magnetic>
            </div>
        </Container>
    )
}
