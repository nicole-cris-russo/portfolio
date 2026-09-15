const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre-mim", label: "Sobre Mim" },
  { href: "#projetos", label: "Meus Projetos" },
  { href: "#contato", label: "Contato" },
];

/** Header tradicional: logo à esquerda e links de navegação para as áreas. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-gray shadow-personalized">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src="/nicole-square.png"
            alt="Logo Nicole Russo"
            className="h-9 w-9"
          />
          <span className="font-bold max-md:hidden">Nicole Russo</span>
        </a>

        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center gap-2 md:gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-2 py-1 text-sm md:text-base hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
