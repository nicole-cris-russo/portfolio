interface SectionTitleProps {
  children: React.ReactNode;
}

/** Título de área da landing page. */
export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-bold text-2xl md:text-4xl max-md:text-center text-brand-gray">
      {children}
    </h2>
  );
}
