import useData from '@/hooks/useData'
import { Magnetic } from '../animate-ui/primitives/effects/magnetic'
import Container from '../layout/Container'
import HeaderButtons from '../partials/HeaderButtons'
import { Title } from '../ui/Titles'

export const AboutMe = () => {
    const { data: aboutMe, loading, error } = useData('about-me')
    const { data: me, loading: meLoading, error: meError } = useData('me')
    if (loading && meLoading) return <div>Loading...</div>
    if (error || meError) return <div>Error: {error?.message || meError?.message}</div>

    return (
        <Container id="about-me">
            <Title text="Sobre mim ʕ•́ᴥ•̀ʔっ" />
            <Magnetic>
                <div className="flex flex-col shadow-personalized backdrop-blur-md border border-neutral-200 relative">
                    <HeaderButtons />
                    <div className="md:m-4 bg-brand-gray md:rounded-md p-4 grid grid-cols-1 md:grid-cols-5 gap-5 cursor-default select-none max-md:text-sm">
                        <img
                            src="/img/pc.webp"
                            alt="PC"
                            width={150}
                            height={150}
                            className="col-span-1 p-2 mx-auto"
                        />
                        <div className="md:col-span-4 space-y-5">
                            {aboutMe.slice(0, 3).map((item: { id: number; text: string }) => (
                                <p key={item.id}>{item.text}</p>
                            ))}
                        </div>
                        {aboutMe.slice(3).map((item: { id: number; text: string }) => (
                            <p
                                key={item.id}
                                className="md:col-span-5"
                            >
                                {item.text}
                            </p>
                        ))}
                        <div className="md:col-span-5">
                            <ul className="list-disc list-inside">
                                <li>Nome: {me?.name}</li>
                                <li>Email: {me?.email}</li>
                                <li>Telefone: {me?.phone}</li>
                                <li>
                                    Localização: {me?.city} - {me?.state} - {me?.country}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Magnetic>
        </Container>
    )
}
