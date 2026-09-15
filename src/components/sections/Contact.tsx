import { usePortfolio } from "../../context/PortfolioContext";
import { ExternalLinkIcon } from "../ui/ExternalLinkIcon";
import { PixelLoader } from "../ui/PixelLoader";
import { SectionTitle } from "../ui/SectionTitle";

const SOCIAL_ICONS: Record<string, string> = {
  github: "/img/github.svg",
  linkedin: "/img/linkedin.svg",
  mail: "/img/mail.svg",
};

/** Área Contato — redes sociais e contatos. */
export function Contact({ loading }: { loading: boolean }) {
  const { socialMedia, error } = usePortfolio();

  if (loading) {
    return (
      <section id="contato" className="flex flex-col gap-6 py-16 scroll-mt-20">
        <SectionTitle>Minhas Redes Sociais e Contatos</SectionTitle>
        <div className="w-full h-full flex items-center justify-center">
          <PixelLoader />
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="flex flex-col gap-6 py-16 scroll-mt-20 page-fade-in">
      <SectionTitle>Minhas Redes Sociais e Contatos</SectionTitle>

      {error && <p>{error}</p>}

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {socialMedia.map((social) => (
          <li key={social.id}>
            <a
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 bg-brand-gray border border-neutral-200 shadow-personalized p-3 hover:bg-white/55"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-900 bg-brand-gray shadow-personalized">
                <img src={SOCIAL_ICONS[social.id]} alt="" className="w-6 h-6" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-bold">{social.label}</span>
                <span className="text-neutral-600 text-xs md:text-sm truncate">
                  {social.hint}
                </span>
              </span>
              <ExternalLinkIcon className="ml-auto w-4 h-4 shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
