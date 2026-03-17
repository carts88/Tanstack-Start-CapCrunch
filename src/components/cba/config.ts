export const contractVariability = {
    title: "Contract Variability / Structure",
    description: "Contract variability is how the salary in a contract is structured. ",
    subSections: [
        {
            type: "block-grid" as const,
            cols: 2,
            blocks: [
                {
                    title: "Front Loaded",
                    description: "Front Loaded contracts are when the total salary within the first half of the contract is greater than the salary in the back half of the contract!"
                },
                {
                    title: "Back Loaded",
                    description: "Back Loaded contracts are when the total salary within the back half of the contract is greater than the salary in the first half of the contract! Contracts where the salary is equal in the front and back half are also considered backloaded. "
                },
            ]

        },
        {
            type: "list" as const,
            title: "Front Loaded Requirements",
            items: [
                "The difference between compensation in any year and the year immediately before or after cannot exceed 20% (25% for contracts signed prior to September 16, 2026) of compensation in Year 1 of the contract",
                "Compensation in any year cannot be less than 71% (60% for contracts signed prior to September 16, 2026) of the highest compensation year"
            ]
        },
        {
            type: "list" as const,
            title: "Back Loaded Requirements",
            items: [
                "The difference between Year 1 and 2 compensation cannot be more than the lower of the 2 years (i.e., the highest compensation permitted in Year 2 is double Year 1)",
                "For all subsequent years, any increase from year to year cannot exceed the lower of the year 1 and year 2 compensation",
                "For all subsequent years, any decrease from year to year cannot exceed 50% of the lower of the year 1 and year 2 compensation"
            ]
        },
        {
            type: "description" as const,
            title: "Allowed Signing Bonus Structure",
            description: "Only 60% of the total salary within the contract is allowed to be signing bonus. However, individual years can exceed the 60% signing bonus limit,. For example: Year 1 of a contract be 90% signing bonus, as long as the sum of signing bonus in all years of the contract do not exceed 60% of the total salary (base salary + signing bonus)."
        },
        {
            type: "link-to-tool",
            name: "Contract Variability Calculator",
            link: "/calculators/contract-variability",
            description: "This tool allows to test different contract structures under the NHL's variability rules.  "
        }
    ]
}


export const contractTypes = {
    title: "Contract Types",
    description: "There are 3 contract types, Entry Level Contracts, 35+, and Standard Player Contracts.",
    subSections: [
        {
            type: "block-grid" as const,
            cols: 3,
            blocks: [
                {
                    title: "Entry Level Contracts | ELC",
                    description: "These are the first contracts that most players sign as long as they're under a certain age before signing them. Player can only sign 1 ELC in their career. "
                },
                {
                    title: "35 Plus | 35+",
                    description: ""
                },
                {
                    title: "Standard Player Contracts | SPC",
                    description: "Any contract that is not a 35+ or ELC is just a Standard Player Contract, with no extra rules. "
                },
            ]
        },
        {
            type: "list",
            title: "Thirty Five Plus Contract Criteria (35+)",
            items: [
                "Total compensation must decrease from year to year",
                "there are no signing bonuses after Year 1"
            ]
        },
        {
            type: "list",
            title: "Why are 35+ beneficial to players?",
            items: [
                "35+ contracts that are bought out do not give buyout relief, and the original caphit becomes cap penalty",
                "Only $100,000 can be buried in the minors, if you send the player down"
            ]
        }
    ]
}