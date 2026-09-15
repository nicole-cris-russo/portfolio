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
import type { AboutArticle } from "../../types";
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

function NewspaperArticle({ article }: { article: AboutArticle }) {
  const image = (
    <figure className="md:col-span-2">
      <img
        src={article.image}
        alt={article.imageAlt}
        className="w-full h-full max-h-80 md:max-h-none object-cover"
      />
    </figure>
  );

  const copy = (
    <div className="md:col-span-3 flex flex-col gap-3 max-md:text-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
        {article.kicker}
      </p>
      <h3 className="font-bold text-2xl md:text-3xl leading-tight">
        {article.title}
      </h3>
      <div className="h-px w-16 bg-neutral-900" />
      {article.paragraphs.map((paragraph, index) => (
        <p
          key={paragraph}
          className={
            index === 0
              ? "first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none"
              : undefined
          }
        >
          {paragraph}
        </p>
      ))}
    </div>
  );

  return (
    <article className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
      {article.imageSide === "left" ? (
        <>
          {image}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {image}
        </>
      )}
    </article>
  );
}

/** Área Sobre Mim — layout de jornal antigo. */
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

  const frontend = aboutMe?.articles.find(
    (article) => article.id === "frontend",
  );
  const cybersecurity = aboutMe?.articles.find(
    (article) => article.id === "cybersecurity",
  );

  return (
    <section
      id="sobre-mim"
      className="flex flex-col gap-6 py-16 scroll-mt-20 page-fade-in"
    >
      <SectionTitle>Sobre Mim</SectionTitle>

      {error && <p>{error}</p>}

      {aboutMe && frontend && cybersecurity && (
        <div className="bg-brand-gray shadow-personalized p-5 md:p-8">
          <NewspaperArticle article={frontend} />

          <div className="border-y-2 border-neutral-900/50 my-8 pb-6 pt-8 overflow-hidden">
            <LogoLoop
              // @ts-expect-error logos aceita nós React no componente JS
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

          <NewspaperArticle article={cybersecurity} />
        </div>
      )}
    </section>
  );
}
