import useData from '@/hooks/useData'
import { Title } from '../ui/Titles'
import Container from '../layout/Container'

export const AboutMe = () => {
    const { data: aboutMe, loading, error } = useData('about-me')
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <Container id="about-me">
            <Title>Sobre Mim</Title>
            {aboutMe.map((item: { id: number; text: string }) => (
                <p key={item.id}>{item.text}</p>
            ))}
        </Container>
    )
}
