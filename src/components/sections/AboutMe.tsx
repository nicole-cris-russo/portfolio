import { BsTypescript } from "react-icons/bs";
import {
  FaDocker,
  FaFigma,
  FaLinux,
  FaNode,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAstro, SiMysql, SiPrismic } from "react-icons/si";
import { usePortfolio } from "../../context/PortfolioContext";
import { LogoLoop } from "../LogoLoop";
import { PixelLoader } from "../ui/PixelLoader";
import { SectionTitle } from "../ui/SectionTitle";

const techLogos = [
  { node: <FaReact />, title: "React", href: "https://react.dev" },
  { node: <RiNextjsFill />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <BsTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <RiTailwindCssFill />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <FaDocker />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <SiPrismic />,
    title: "Prismic",
    href: "https://prismic.io",
  },
  {
    node: <FaLinux />,
    title: "Linux",
    href: "https://www.linux.org",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <FaNode />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiAstro />,
    title: "Astro",
    href: "https://astro.build",
  },
  {
    node: <FaVuejs />,
    title: "Vue.js",
    href: "https://vuejs.org",
  },
  {
    node: <FaFigma />,
    title: "Figma",
    href: "https://figma.com",
  },
];

/** Área Sobre Mim — texto sobre mim e foto. */
export function AboutMe({ loading }: { loading: boolean }) {
  const { aboutMe, error } = usePortfolio();

  if (loading) {
    return (
      <section
        id="sobre-mim"
        className="flex flex-col gap-6 py-16 scroll-mt-20"
      >
        <SectionTitle>Sobre Mim</SectionTitle>
        <div className="w-full h-full flex items-center justify-center">
          <PixelLoader />
        </div>
      </section>
    );
  }

  return (
    <section
      id="sobre-mim"
      className="flex flex-col gap-6 py-16 scroll-mt-20 page-fade-in"
    >
      <SectionTitle>Sobre Mim</SectionTitle>

      {error && <p>{error}</p>}

      {aboutMe && (
        <div className="bg-brand-gray border border-neutral-200 shadow-personalized p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
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
          <div className="w-full overflow-hidden py-14">
            <LogoLoop
              // @ts-ignore
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              showTitleOnHover={true}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Tecnologias que eu uso"
            />
          </div>
        </div>
      )}
    </section>
  );
}
