import { ISection } from "./types"

export const contractVariability: ISection = {
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


export const contractTypes: ISection = {
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
            type: "description",
            title: "What is a 35+ Contract?",
            description: "A 35+ contract is a deal signed a player who is 35 years old or older as of June 30th of the y"
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
        },
        {
            type: "table",
            headers: ["Signing Age*", "Max Term"],
            tableData: [
                ["18-21", "3"],
                ["22-23", "2"],
                ["23-25", "1"],
            ],
            caption: "Signing Age is the age of the player on September 15th, of the calendar year that the player was signed. For example: if a player signs on March 23rd, 2025 as a 21 year old, but will be 22 on September 15th, 2025, then his ELC term must be 2 years. "
        },
        {
            type: "link-to-tool",
            name: "Entry Level Contract Length Calculator",
            link: "/calculators/elc-length",
            description: "This tool allows you to see what required ELC length is for NHL prospects currently unsigned. "
        },
    ]
}



export const performanceBonuses: ISection = {
    title: "Performance Bonuses",
    description: "Performance bonuses are bonuses that no not factor into a players day 1 caphit, but if a player achieves",
    subSections: [
        {
            type: "list",
            title: "Players are eligible if they are....",
            items: [
                "...signing an Entry Level Contracts",
                "...signing 1 year contract, that is a 35+ contract.",
                "...signing a 1 year contract, AND has played at least 400 NHL games AND was on IR/LTIR for at least 100 days of the previous season. "
            ]
        },
        {
            type: "grid-section",
            title: "Entry Level Performance Bonuses",
            description: "Entry Level contracts have their own specific bonuses, seperate from regular performance bonuses. The 2 types of ELC bonuses 'A' and 'B' are below. ",
            cols: 1,
            subSection: [
                {
                    type: "description",
                    title: "What are 'A' level Bonuses?",
                    description: "A bonuses account for the first $1,000,000 ($850,000 for ELCs signed pre 6/1/2022) of the Entry Level Contract bonuses. They are split into"
                },
                
                {
                    type: "grid-section",
                    title: "Performance A Bonus Thresholds",
                    description: "Each position has different requirements for 'A' Bonuses. ",
                    cols: 3,
                    subSection: [
                        {
                            type: "list",
                            title:"Forward Thresholds",
                            items: [
                                "20 Goals",
                                "35 Assists",
                                "60 Points",
                                "Top 6 in either total toi, or toi/gm on their teams forwards (Must have played minimum of 42 Games Played)",
                                "Top 3 in +/- among their teams forwards (Must have played minimum of 42 Games Played)",
                                ".73 points-per-game (Must have played minimum of 42 Games Played)",
                     
                            ]
                        },
                        {
                            type: "list",
                            title:"Defenseman Thresholds",
                            items: [
                                "10 Goals",
                                "25 Assists",
                                "40 Points",
                                "Top 4 in either total toi, or toi/gm on their teams defense (Must have played minimum of 42 Games Played)",
                                "Top 3 in +/- among their teams defense (Must have played minimum of 42 Games Played)",
                                ".49 points-per-game (Must have played minimum of 42 Games Played)",
                                "Top 2 among teams defenseman in blocked shots",
                      
                            ]
                        },
                        {
                            type: "list",
                            title:"Goalie Thresholds",
                            items: [
                                "1800 Mins Played",
                                "GAA is less than Median GAA of NHL goalies with 25+ GP ",
                                "Sv% is greater than Median sv% of all NHL goalies with 25+ GP",
                                "20+ win, in games with 30+ mins played",
                                "Shutouts > median total of shutouts of goalies with 25+ GP",
                            ]
                        }
                    ]
                },
                
            
            ]
        },
        {
            type: "list",
            title: "All Positions",
            items: [
                "End Of Season All Rookie Team", 
                "All Star Game Selection",
                "All Start Game MVP"
            ]
        },
        {
            type: "description",
            title: "What are 'B' bonuses?",
            description: "'B' bonuses are worth up $2,500,000 ($2,000,000 for those drafted 2022 and before). They are only present in a contract, if the contract potential bonuses are over $1,000,000 ($850,000 for those drafted in 2022 or before) "
        },
        {
            type: "list",
            title: "Schedule 'B' Bonus Requirements",
            items: [
                "Top 10 in goals, assists, points, or points-per-game in their position group (forwards, or defense) (Min 42 GP)",
                "1st or 2nd Team All Star",
                "Win any of the Hart, Rocket Richard, Selke, Conn Smythe, or the Norris"
            ]
        },
        {
            type: "description",
            title: "How to calculate 'A' bonuses met?",
            description: "The first $1,000,000 million dollars of performance bonuses in a ELC, are 'A' bonuses. Meaning a contract with $1,000,000 in peformance bonuses is not eligible for any 'B' bonuses. Additionally, given that 'A' bonuses are achieved in segments, each segment being worth up to $250,000*, if a contract has only $300,000 in bonuses, then they recieve $250,000 for the first 'A' requirement met, and the remaining $50,000 if they meet another requirement. At that point, they can no longer recieve more performance bonus money in that season."
        },
        {
            type: "description",
            title: "How to calculate 'B' bonuses met?",
            description: "The final $2,500,000 in potential bonuses are considered 'B' bonuses. The player only needs to meet one of the Schedule B bonus requirements in order to recieve all of the potentials bonuses outlined within the contract."
        },
        {
            type: "link-to-tool",
            name: "Performance Bonus Tracker",
            link: "/calculators/p-bonus-tracker",
            description: "This tool tracks what bonuses players are on track to meet, based off their season stats."
        },
        {
            type: "grid-section",
            title: "Other Bonuses (SPC & 35+)",
            description: "Additional performance bonuses available for Standard Player Contracts and 35+ contracts.",
            cols: 1,
            subSection: [
                {
                    type: "description",
                    title: "Max Amount of P. Bonuses",
                    description: "Cannot be greater than 7.5% if the salary cap upper limit."
                },
            ]
        }
    ]
}


export const entryDraft: ISection = {
    title: "NHL Entry Draft (CBA Article 8)",
    description: "Rules pertaining to NHL entry drafts",
    subSections: [
        {
            type: "description",
            title: "Draft Choices (Article 8.2) (2013 - Present)",
            description: "By default, the entry consists of 7 rounds, where each team original owns 1 draft pick in each round. (Unless a team forfeits draftpicks as punishment, or compensation picks are awarded.)"
        },
        {
            type: "list",
            title: "Compensatory Draft Picks (Article 8.3)",
            items: [
                "Additional draftpicks may be awarded to a team in a draft.",
                "If a team does not sign their first draft round choice before their signing rights expire, then the team shall be awarded a 2nd round draft pick at same numerical spot of the original player picked, just 1 round later. For example, the Flyers did not sign 2019 19th overall pick Jay O'Brien before his signing rights expired. They were then awarded the 19th overall draft pick in the 2024 NHL Draft."
            ]
        },
        {
            type: "list",
            title: "All Players age 18 or older are eligible for claim in the Entry Draft, except (Article 8.4)",
            items: [
                "a Player on the Reserve List of a Club, other than as a try-out.",
                "a Player who has been claimed in two prior Entry Drafts",
                "a Player who previously played in the League and became a Free Agent pursuant to this Agreement.",
                `a Player age 21 or older who: (A) has not been selected in a previous
                Entry Draft and (B) played hockey for at least one season in North
                America when he was age 18, 19, or 20 and shall be eligible to enter the
                League as an Unrestricted Free Agent pursuant to Article 10.1(d)`,
                `a Player age 22 or older who has not been selected in a previous Entry
                Draft and shall be eligible to enter the League as an Unrestricted Free
                Agent pursuant to Article 10.1(d)`
            ]
        },
        {
            type:"list",
            title: "How is the NHL draft order decided?",
            items: [
                "Picks  1-16 | The first 16 picks (or however many teams missed the playoffs) of each round, are determined by the reverse of the NHL standings. The order of the first round of draft is then changed by way of draft lottery. ",
                "Picks 17-28 | The losing teams in the 1st and 2nd round of the NHL playoffs, make up the next picks, and their order is decided by the reverse order of the NHL standings.",
                "Picks 29-30 | The losing teams in the 3rd round of the NHL playoffs, make up the next picks, and their order is decided by the reverse order of the NHL standings.",
                "Picks 31-32 | The Stanley Cup winner recieves the final pick of each round, while the Stanley Cup runner up, recieves the 2nd to last pick of each round."
            ]
        },


    ]
}

export const players: ISection = {
    title: "Players",
    description: "",
    subSections: [
        /**
         * Player Age
         * Player Representation
         */
    ]
}


export const freeAgency: ISection = {
    title: "NHL Free Agency",
    description: "",
    subSections: [
        
        /**
         * Expiration Status
         * Arbitration
         * Offersheets
         * 
         */
    ]
}

export const expirationStatus: ISection = {
    title: "Expiration Status",
    subSections: [
        {
            type: "list",
            title: "Types of Expiration Status'",
            items: [
                "UFA G6",
                "UFA G6",
                "UFA G4",
                "RFA"
            ]
        },
        {
            type: "comparison",
            leftLabel: "Restricted Free Agent (RFA/ARB)",
            leftItems: [
                {text: ""},
                {text: "Player's rights are still owned by an NHL team"},
                {text: "In order to sign with a different team, player must accept an offersheet, then the team that owns the players rights have 7 days to match."}

            ],
            rightLabel: "Unrestricted Free Agent (UFA)",
            rightItems: [
                {text: "Player's rights are not owned by a team, and is free to sign anywhere."},
                {text: "Player's rights are still owned by an NHL team"}

            ],
            
        },
        {
            type: "definition",
            title: "Definitions",
            items: [
                {   
                    question: "What is an Accrued Season?",
                    answer: "Skaters - 40 + games played, Goalies 35+ Games played",
                    note: ""
                },
                {   
                    question: "What is an Pro Experience?",
                    answer: "Skaters - 40 + games played, Goalies 35+ Games played",
                    note: ""
                },
                {   
                    question: "What is a Pro Season?",
                    answer: "Skaters - 40 + games played, Goalies 35+ Games played",
                    note: ""
                }
            ]
        },
        {
            type: "rich-list",
            title: "Types of Expiration Status",
            items: [
                {
                    label: "Restricted Free Agent (RFA)",
                    description: "Player whose rights are retained by their current team.",
                    badge: "RFA G3",
                    // badgeVariant: "blue",
                    subList: [
                        {
                        label: "Requires Qualifying Offer",
                        description: "Team must tender a QO by the deadline to retain the players rights.",
                        },
                        {
                        label: "IS Offer sheet eligible",
                        description: "RFAs are eligible for offersheets, where if they accept contract offer, their original team has 7 days to match.",
                        },
                        
                    ]
                },
                {
                    label: "10.2(c) RFA",
                    description: "These are RFA aged players who did not play enough games to be considered regular RFA's.",
                    badge: "10.2(c)",
                    // badgeVariant: "blue",
                    subList: [
                        {
                        label: "Requires Qualifying Offer",
                        description: "Team must tender a QO by the deadline to retain the players rights.",
                        },
                        {
                        label: "NOT Offer sheet eligible",
                        description: "10.2(c) RFA are not eligible for an offersheet, meaning if they're are qualified by their team the only way they play for another team is via trade. ",
                        },
                        
                    ]
                }
            ]
            }
    ]
}

export const postTDLRules: ISection ={
    title: "Post Trade Deadline Rules",
    subSections: [
        {
            type: "description",
            title: "Max Allowed Recalls post Trade Deadline",
            description: "Teams have 5 total recalls after the trade deadline, only 4 of these players can be on the clubs Active Roster at once. "
        }
    ]
}