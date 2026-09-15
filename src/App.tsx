import Grainient from "./components/Grainient";
import { Header } from "./components/layout/Header";
import { AboutMe } from "./components/sections/AboutMe";
import { Contact } from "./components/sections/Contact";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext";

function Landing() {
  const { loading } = usePortfolio();

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 z-0">
        <Grainient
          color1="#000000"
          color2="#bebab6"
          color3="#000000"
          timeSpeed={0.5}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={35}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 md:px-8">
          <Home loading={loading} />
          <AboutMe loading={loading} />
          <Projects loading={loading} />
          <Contact loading={loading} />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <PortfolioProvider>
      <Landing />
    </PortfolioProvider>
  );
}

export default App;
