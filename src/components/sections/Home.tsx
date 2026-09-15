import { usePortfolio } from "../../context/PortfolioContext";
import FoldText from "../FoldText";

/** Área Início — nome e foto. */
export function Home() {
  const { aboutMe } = usePortfolio();

  return (
    <section
      id="inicio"
      className="h-[90vh] flex items-center max-md:flex-col justify-center gap-6 py-10"
    >
      <div>
        <p className="text-white text-2xl text-end font-bold mb-20">
          Seja bem-vindo(a) ao meu portfólio!
        </p>
        <p className="text-white mb-2">Eu me chamo</p>
        <FoldText
          text={aboutMe?.info.name}
          splitBy="char"
          hinge="top"
          trigger="mount"
          duration={0.65}
          stagger={0.045}
          ease="power3.out"
          perspective={1000}
          creaseShading={0.55}
          fontSize={100}
          fontWeight={800}
          color="#f7f2e8"
        />
        <p className="text-white mt-2">Sou Desenvolvedora Frontend</p>
      </div>
    </section>
  );
}
