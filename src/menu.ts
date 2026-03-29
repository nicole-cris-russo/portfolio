export const sections = [
    {
        id: "about-me",
        label: "Sobre Mim",
    },
    {
        id: "projects",
        label: "Projetos",
    },
    {
        id: "soft-skills",
        label: "Habilidades",
    },
    {
        id: "social-media",
        label: "Redes Sociais",
    },
] as const;

export type SectionId = "about-me" | "projects" | "soft-skills" | "social-media";
