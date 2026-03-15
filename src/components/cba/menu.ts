
interface MenuItem {
    label: string;
    href: string;
    description: string;
    subTopics: Omit<MenuItem, "description" | "subTopics">[]
}

export const menuCategories: MenuItem[]= [
    {
        label: "Contracts",
        href: "/contracts",
        description: "",
        subTopics: [
            {
                label: "max-allowed-term",
                href: "#max-allowed-term",
            },
            {
                label: "salary",
                href: "#salary",
            },
            {
                label: "Clause Eligibility",
                href: "#clause-eligibility",
            },
            {
                label: "Contract Types",
                href: "#contract-types",
            },
            {
                label: "Entry Level Contracts (ELC)",
                href: "#contract-types#elc",
            },
            {
                label: "35 Plus (35+)",
                href: "#contract-types#35plus",
            },
            {
                label: "Standard Player Contract (SPC)",
                href: "#contract-types#spc",
            },
            {
                label: "Contract Variability",
                href: "#contract-variability",
            },
            {
                label: "Front Loaded",
                href: "#front-loaded",
            },
            
            {
                label: "Back Loaded",
                href: "#back-loaded",
            },
            
            
        ]
    },
    {
        label: "Players",
        href: "/contracts",
        description: "",
        subTopics: [
            {
                label: "max-allowed-term",
                href: "#max-allowed-term",
            },
            {
                label: "salary",
                href: "#salary",
            },
            
        ]
    }
]