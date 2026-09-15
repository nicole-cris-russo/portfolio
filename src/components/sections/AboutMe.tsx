import { usePortfolio } from '../../context/PortfolioContext'
import { SectionTitle } from '../ui/SectionTitle'

/** Área Sobre Mim — texto sobre mim e foto. */
export function AboutMe() {
  const { aboutMe, error } = usePortfolio()

  return (
    <section id="sobre-mim" className="flex flex-col gap-6 py-16 scroll-mt-20">
      <SectionTitle>Sobre Mim</SectionTitle>

      {error && <p>{error}</p>}

      {aboutMe && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-brand-gray border border-neutral-200 shadow-personalized p-6">
          <img
            src="/nicole-4x5.png"
            alt="Foto de Nicole Russo"
            className="mx-auto w-full max-w-60 border border-neutral-900 shadow-personalized object-cover"
          />

          <div className="md:col-span-2 flex flex-col gap-4 max-md:text-sm">
            {aboutMe.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
