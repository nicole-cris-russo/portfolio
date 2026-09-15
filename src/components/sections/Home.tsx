import { usePortfolio } from "../../context/PortfolioContext";
import FoldText from "../FoldText";
import { PixelLoader } from "../ui/PixelLoader";

/** Área Início — nome e foto. */
export function Home({ loading }: { loading: boolean }) {
  const { aboutMe } = usePortfolio();

  if (loading) {
    return (
      <section
        id="inicio"
        className="h-[90vh] flex items-center max-md:flex-col justify-center gap-6 py-10"
      >
        <div className="w-full h-full flex items-center justify-center">
          <PixelLoader />
        </div>
      </section>
    );
  }

  return (
    <section
      id="inicio"
      className="h-[90vh] flex items-center justify-center py-10 page-fade-in"
    >
      <div className="flex items-center gap-6 justify-between w-full">
        <div>
          <p className="text-white text-2xl font-bold mb-20">
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
        <img
          src="/img/nicole-moldura-paint.png"
          alt="Nicole Russo"
          width={380}
          className="mb-5"
        />
      </div>
    </section>
  );
}
