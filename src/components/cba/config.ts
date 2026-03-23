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
        {
            type: "rich-list",
            title: "Types of Expiration Statuses",
            items: [
                {
                    label: "Group 3 Unrestricted Free Agent (UFA)",
                    subList: [
                        {
                           label: "Eligbility Requirements",
                           description:"In order to become a Group 3 UFA, the player must have 7 accrued seasons OR be 27 years old, on June 30th, of the year the Free Agency occurs."
                        },
                        {
                            label: "Meaning:",
                            description: "Group 3 UFAs are free to negotiate with any team, and free to be negotiated with by any team. "
                        }
                    ]
                },
                {
                    label: "Group 5 Unrestricted Free Agent (UFA G5)",
                    subList: [
                        {
                           label: "Eligbility Requirements",
                           description:"Has completed 10 or more professional seasons*, did not earn more than the League Average Salary in the final year of his deal, AND the player has not elected to become an UFA persuant to the terms of Section 10.1(b)(ii)"
                        },
                        {
                            label: "Meaning:",
                            description: "Group 5 UFAs are free to negotiate with any team"
                        },
                        {
                            label: "What is Section 10.1(b)(ii)?",
                            description: "This section says, any group 5 player may elect to become an unrestricted free agent by notifying the league in writing at the expiration of their Standard Player Contract (SPC)."
                        }
                    ]
                },
                 {
                    label: "Group 6 Unrestricted Free Agent (UFA G5)",
                    subList: [
                        {
                           label: "Eligbility Requirements",
                           description:"Is Age 25 or older, has completed 3 or more professional seasons*, AND has played less than 80 NHL games if they are a skater, or 28 NHL games as a goalie. (Goalies must have played 30 minutes or more, in order to register as a game played)"
                        },
                        {
                            label: "Meaning:",
                            description: "Group 6 UFAs are free to negotiate with any team, and free to be negotiated with by any team. "
                        },
                    ]
                },
                {
                    label: "Draft Related Free Agents",
                    subList: [
                        {
                           label: "Eligbility Requirements",
                           description: "Not eligible for claim in any future NHL Entry Draft, and not on any NHL teams reserve list OR the Player is eligible for a future entry draft, but has went undrafted in his first time around."
                        },
                    ]
                },
                {
                    label: "Group 2 Restricted Free Agent (RFA)",
                    subList: [
                        {
                            label: "Eligibility Requirements",
                            description: "NOT a Group 1, or 4 FA, not an Unrestricted Free Agent of any sort, AND meets the pro experience requirements based off their first contract signing age."
                        }
                        /***
                         * Figure out a way to put a table here biotch
                         */
                    ]
                },
                {
                    label: "10.2(c) Restricted Free Agent (RFA)",
                    description: "Any player that has fewer than the require professional years of experience to become a G2 RFA, becomes a 10.2(c). This makes it so the team that owns the players rights is the only team allowed to negotiate with the player. If the team does not extend the qualifying offer to the player, then the player becomes an unrestricted free agent.",
                }
            ]
        },
       {
        type: "table",
        title: "RFA Pro Experience Requirements",
        headers:[ "Sept 15 Signing Age", "Pro Experience Required"],
        tableData: [
            ["18-21", "3 yrs"],
            ["22-23", "3 yrs"],
            ["24+", "1 yrs"]
        ]
       },
       {
        type: "rich-list",
        title: "Offersheets",
        items: [
            {
                label: "Who is eligble to recieve an offersheet?",
                description: "Non 10.2(c) Restricted Free Agents that have been extended the qualifying offer by their team."
            },
            {
                label: "What is an offersheet?",
                description: "An offersheet is when team agrees to contract terms with another teams . In these cases, the team offersheeting the RFA is required to give the other team compensation based on scale, unless the rfa original team matches the contract and therefore keeps the player at the offersheet price."
            },
            {
                label: "What is an offersheet?",
                description: "An offersheet is when team agrees to contract terms with another teams restricted free agent. In these cases, the team offersheeting the RFA is required to give the other team compensation based on scale, unless the rfa original team matches the contract and therefore keeps the player at the offersheet price."
            },
        ]
       }
       
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
            title: "Expiration Status Terms",
            items: [
                {
                    question: "Accrued Season",
                    answer: "Skaters must be on the active for 40 regular season games, Goalies must be on the roster for 30 regular season games. Games missed due to hockey related injury count toward the required threshold."
                },
                {
                    question: "Professional Seasons",
                    answer: "18 & 19 year olds accrue a pro season if they play in at least 11 games in any pro league. 20 year olds and above, only have to play 1 game. The player must also be under an NHL contract.",
                    note: "Pro Leagues: NHL, AHL, ECHL, European Pro leagues"

                },
                {
                    question: "Professional Experience",
                    answer: "For players over the age of 20, 10or more games played in any professional league.",
                    note: "Pro Leagues: NHL, AHL, ECHL, European Pro leagues"
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

export const buyoutCba: ISection = {
    title:"Contract Buyouts",
    description: "Buyouts allow a team to end a contract to a player on their team, for a cap penalty.",
    subSections: [
        {
            type: "rich-list",
            title: "When can you buyout a player? Buyout Windows",
            items: [
                {
                    label: "There are 2 chances for teams to buyout players",
                    subList: [
                        {
                            label: "Later of June 15th or 48 hours after last Stanley Cup Final Game.",
                            description: "This buyout window applies to every team, and any player is eligible. "
                        },
                        {
                            label: "An additional buyouts window opens if the following apply:",
                            description: "1.) A player on the team file for arbitration, and it is settled. 2.) The player being bought out has a $4,000,000 caphit or higher. 3.) The player being bought was on the team he's being bought out during the previous trade deadline."
                            
                        }
                    ]    
                }
            ]
        },
        {
            type: "grid-section",
            title: "Buyout Terms",
            description: "The terminology associated with buyouts!",
            cols: 1,
            subSection: [
                {
                    type: "block-grid",
                    cols: 2,
                    title: "Buyout Ratio",
                    description: "The ratio required in order to calculate the buyout cost. The ratio based on the players age on the day of the buyout.",
                    blocks: [
                        {title: "Younger than 26 years old", description: "1/3 buyout ratio",},
                        {title: "Older than 26 years old", description: "2/3 buyout ratio"}

                    ]
                },
                {
                    type: "definition",
                    items: [
                        {
                            question: "Buyout Length",
                            answer: "The total term remaining in the contract multiplied by 2."
                        },
                        {
                            question: "Total Buyout Cost",
                            answer: "This is the total dead salary team will pay over the course of the buyout. It calculated by: Multiplying the total base salary remaining within the deal with the buyout ratio."
                        },
                        {
                            question: "Annual Buyout Cost",
                            answer: "This is calculated by dividing the Total Buyout Cost by the buyout length."
                        },
                        {
                            question: "Cap Savings",
                            answer: "This is the money on the salary cap being saved by buying out the player."
                        },
                        {
                            question: "Cap Penalty",
                            answer: "This is the dead cap hit that will replace the original caphit of the player. It cannot be traded to another team, the team is stuck with it."
                        }
                    ]
                }
            ]
        },
        {
            type: "list",
            title: "How to calculate a buyout?",
            items: [
                "Once you have the variables from above calculated...",
                "To calculate Cap Savings of a specific season, take the Annual Buyout Cost (calculated above), and subtract it by the player salary in that season.",
                "To calculate the Cap Penalty of a specific season, take Cap Savings that you just calculated, and subtract it from the Total Average Annual value (base salary + bonuse)",
                "Please note, that buyout penalties and savings are calculated year to year."
            ]
        },
        {
            type: "grid-section",
            title: "Buyout Calulation Example",
            cols: 1,
            subSection: [
                {
                    type: "stat-callout",
                    cols: 3,
                    stats: [
                        {
                            label: "Buyout Length",
                            value: "2 x 2 = 4"
                        },
                        {
                            label: "Buyout Cost",
                            value: "$6M * 1/3"
                        },
                        {
                            label: "Annual Buyout Cost",
                            value: "$2M/4 = $500,000"
                        },

                    ]
                },
                {
                    type: "table",
                    headers: [
                        "Season", "Caphit", "Base Salary", "Signing Bonus", "Cap Savings", "Cap Penalty"
                    ],
                    tableData: [
                        ["25-26", "$5,000,000 ", "$3,000,000", "$1,000,000", "$2,500,000", "$2,500,000"],
                        ["26-27", "$5,000,000", "$3,000,000", "$0", "$2,500,000", "$2,500,000"],
                        ["27-28", "-","-","-","-$500,000", "$500,000"],
                        ["28-29","-","-","-","-$500,000", "$500,000"],
                    ],
                    footers: [
                        "TOTALS", "$10,000,000", "$6,000,000", "$1,000,000","$4,000,000","$6,000,000", 
                    ]
                },
                {
                    type: "description",
                    title: "How does contract structure effect buyouts?",
                    description: "Signing bonuses in a contract are fully guaranteed money. Meaning the player recieves that money even if they're bought out. Contracts that are signing bonus heavy tend to be 'buyout proof', in other words the team buying out the player recieves very little cap savings. In the 2026 CBA world, where there is a signing bonus cap on contracts at 60%, teams will likely try to front load that signing bonus so buying out the contract becomes easier toward the end of the deal."
                }
            ]
        },
        {
            type: "link-to-tool",
            name: "Buyout Calculator",
            description: "This allows you to calculate for any NHL player in the league, aswell as a custom contract inputted by the user.",
            link: "calculators/buyout"
        }

    ]
}