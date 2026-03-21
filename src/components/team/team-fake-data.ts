
export const teamData = {
  "pageProps": {
    "team": "philadelphia_flyers",
    "teamName": "Philadelphia Flyers",
    "teamInfo": {
      "teamName": "Philadelphia Flyers",
      "teamSlug": "philadelphia-flyers",
      "tricode": "PHI",
      "shortName": "flyers",
      "label": "Philadelphia Flyers",
      "value": "philadelphia-flyers",
      "primary_color": "#F74902",
      "secondary_color": "#000000",
      "division": "Metropolitan",
      "conference": "Eastern",
      "city": "Philadelphia"
    },
    "capOutlook": [
        {
            "season": "2025-26",
            "upperLimit": 95500000,
            "lowerLimit": 80000000,
            "caphit" : 91940000,
            "projPlayoffCaphit": 91940000,
            "dailyCaphit": 91940000 * 1/190,
            "roster23": 23,
            "roster50": 48,
            "roster90": 71,
            "avgAge": 27.3,
            "avgHeight": [],
            "avgWeight": [],
            "totalSPCExempt": 3,
            "totalWaiverExempt": 10,
            "yearlyOutlook": [
                {
                    "group": "forwards",
                    total: 14,
                    caphit: 52000000,
                    capPercentage: 52.4,
                    avgCaphit: 54522424,
                    avgTerm: 4,
                    handedness: {
                      L: 6,
                      R: 8
                    },
                    positions: [
                      {
                        position: "C",
                        total: 5,
                        avgCaphit: 54522424,
                        avgTerm: 4,
                        avgHeight: ["6'0'", 182],
                        avgWeight: [201,91.1721]
                      },
                      {
                        position: "RW",
                        total: 5,
                        avgCaphit: 6200000,
                        avgTerm: 3,
                        avgHeight: ["6'0'", 182],
                        avgWeight: [201,91.1721]
                      },
                      {
                        position: "LW",
                        total: 4,
                        avgCaphit: 4690000,
                        avgTerm: 4,
                        avgHeight: ["6'0'", 182],
                        avgWeight: [201,91.1721]
                      }
                    ]

                    // continue for defense, goalies, injured Reserve, long term IR,
                },
            ],
            deadcap: [
              {
                type: "RS",
                players: [
                  {
                    fullName: "Scott Laughton",
                    pos: "RD",
                    caphit: 1500000,
                    termRemaining: 1,
                    transactionId: "2025-03-06-TOR-PHI",
                    note: "The Flyers traded Scott Laughton on March 3rd, 2025 to the Toronto Maple Leafs at 50% retention."

                  }
                ]
              },
              {
                type: "BUYOUT",
                players: [
                  {
                    fullName: "Cam Atkinson",
                    caphit: 1666667,
                    termRemaining: 2,
                    transactionId: "2024-07-01-BUYOUT-PHI-1",
                    note: "Cam Atkinson was boughout with a 2/3 buyout on July 1st, 2024, at an annual buyout cost of $1,666,667!"
                  }
                ]
              },
              {
                type: "BONUS_OVERAGES",
                players: [
                  {
                    fullName: "Matvei Michkov",
                    caphit: 1000000,
                    note: "Matvei Michkov reached all of his schedule 'A' bonuses, and Philadelphia did not have the space to put them on the previous years cap, therefore they overraged. "
                  },
                  {
                    fullName: "Tyson Foerster",
                    caphit: 500000,
                    note: "Tyson reached 2  of his schedule 'A' bonuses, and Philadelphia did not have the space to put them on the previous years cap, therefore they overraged. "
                  }
                ]
              }
            ]

        },
        {
        "season": "2026-27",
        "upperLimit": 98500000,
        "lowerLimit": 83000000,
        "caphit": 88750000,
        "projPlayoffCaphit": 88750000,
        "dailyCaphit": 88750000 * 1/190,
        "roster23": 22,
        "roster50": 46,
        "roster90": 68,
        "avgAge": 27.8,
        "avgHeight": [],
        "avgWeight": [],
        "totalSPCExempt": 2,
        "totalWaiverExempt": 9,
        "expirationBreakdown": [
          {
            "expiry": "UFA",
            "total": 5,
            "onRoster23": 3,
            "caphit" : 17700000
          },
          {
            expiry: "RFA",
            total: 7,
            onRoster23: 2,
            caphit: 4200400
          },
          {
            expiry: "UNSIGNED",
            total: 6,
            onRoster: 0,
            caphit: 0
          },
          {
            expiry: "ARB",
            total: 2,
            onRoster23: 2,
            caphit: 4000000
          }
        ],
        "yearlyOutlook": [
            {
                "group": "forwards",
                total: 13,
                caphit: 49500000,
                capPercentage: 55.8,
                avgCaphit: 3807692,
                avgTerm: 3,
                handedness: {
                    L: 5,
                    R: 8
                },
                positions: [
                    {
                        position: "C",
                        total: 4,
                        avgCaphit: 5200000,
                        avgTerm: 3,
                        avgHeight: ["6'1\"", 185],
                        avgWeight: [203, 92.0]
                    },
                    {
                        position: "RW",
                        total: 5,
                        avgCaphit: 4100000,
                        avgTerm: 3,
                        avgHeight: ["6'0\"", 182],
                        avgWeight: [199, 90.3]
                    },
                    {
                        position: "LW",
                        total: 4,
                        avgCaphit: 3750000,
                        avgTerm: 3,
                        avgHeight: ["6'0\"", 182],
                        avgWeight: [197, 89.4]
                    }
                ]
            },
            {
                "group": "defense",
                total: 7,
                caphit: 28500000,
                capPercentage: 32.1,
                avgCaphit: 4071428,
                avgTerm: 3,
                handedness: {
                    L: 4,
                    R: 3
                },
                positions: [
                    {
                        position: "LD",
                        total: 4,
                        avgCaphit: 4500000,
                        avgTerm: 3,
                        avgHeight: ["6'2\"", 188],
                        avgWeight: [210, 95.3]
                    },
                    {
                        position: "RD",
                        total: 3,
                        avgCaphit: 3450000,
                        avgTerm: 3,
                        avgHeight: ["6'1\"", 185],
                        avgWeight: [205, 93.0]
                    }
                ]
            },
            {
                "group": "goalies",
                total: 2,
                caphit: 7250000,
                capPercentage: 8.2,
                avgCaphit: 3625000,
                avgTerm: 2,
                handedness: {
                    L: 1,
                    R: 1
                },
                positions: [
                    {
                        position: "G",
                        total: 2,
                        avgCaphit: 3625000,
                        avgTerm: 2,
                        avgHeight: ["6'2\"", 188],
                        avgWeight: [195, 88.5]
                    }
                ]
            },
            {
                "group": "injuredReserve",
                total: 1,
                caphit: 2500000,
                capPercentage: 2.8,
                avgCaphit: 2500000,
                avgTerm: 2,
                handedness: {
                    L: 1,
                    R: 0
                },
                positions: [
                    {
                        position: "LW",
                        total: 1,
                        avgCaphit: 2500000,
                        avgTerm: 2,
                        avgHeight: ["6'0\"", 182],
                        avgWeight: [195, 88.5]
                    }
                ]
            },
            {
                "group": "longTermIR",
                total: 1,
                caphit: 1000000,
                capPercentage: 1.1,
                avgCaphit: 1000000,
                avgTerm: 1,
                handedness: {
                    L: 0,
                    R: 1
                },
                positions: [
                    {
                        position: "RD",
                        total: 1,
                        avgCaphit: 1000000,
                        avgTerm: 1,
                        avgHeight: ["6'3\"", 190],
                        avgWeight: [215, 97.5]
                    }
                ]
            }
        ],
        deadcap: [
            {
                type: "RS",
                players: [
                    {
                        fullName: "Sean Couturier",
                        pos: "C",
                        caphit: 3750000,
                        termRemaining: 1,
                        transactionId: "2026-03-01-BOS-PHI",
                        note: "The Flyers traded Sean Couturier on March 1st, 2026 to the Boston Bruins at 50% retention."
                    }
                ]
            },
            {
                type: "BUYOUT",
                players: [
                    {
                        fullName: "Cam Atkinson",
                        caphit: 1666667,
                        termRemaining: 1,
                        transactionId: "2024-07-01-BUYOUT-PHI-1",
                        note: "Year 2 of Cam Atkinson's 2/3 buyout at an annual buyout cost of $1,666,667."
                    },
                    {
                        fullName: "Ryan Poehling",
                        caphit: 416667,
                        termRemaining: 2,
                        transactionId: "2026-07-01-BUYOUT-PHI-2",
                        note: "Ryan Poehling was bought out on July 1st, 2026, at an annual buyout cost of $416,667."
                    }
                ]
            },
            {
                type: "BONUS_OVERAGES",
                players: [
                    {
                        fullName: "Matvei Michkov",
                        caphit: 750000,
                        note: "Matvei Michkov reached 3 of his schedule 'A' bonuses; Philadelphia carried over a portion as a cap overage."
                    }
                ]
            }
        ]
    },
    {
        "season": "2027-28",
        "upperLimit": 102000000,
        "lowerLimit": 86500000,
        "caphit": 94200000,
        "projPlayoffCaphit": 94200000,
        "dailyCaphit": 94200000 * 1/190,
        "roster23": 23,
        "roster50": 47,
        "roster90": 70,
        "avgAge": 28.1,
        "avgHeight": [],
        "avgWeight": [],
        "totalSPCExempt": 1,
        "totalWaiverExempt": 8,
        "yearlyOutlook": [
            {
                "group": "forwards",
                total: 14,
                caphit: 53000000,
                capPercentage: 56.3,
                avgCaphit: 3785714,
                avgTerm: 4,
                handedness: {
                    L: 6,
                    R: 8
                },
                positions: [
                    {
                        position: "C",
                        total: 5,
                        avgCaphit: 5500000,
                        avgTerm: 4,
                        avgHeight: ["6'1\"", 185],
                        avgWeight: [204, 92.5]
                    },
                    {
                        position: "RW",
                        total: 5,
                        avgCaphit: 3900000,
                        avgTerm: 3,
                        avgHeight: ["6'0\"", 182],
                        avgWeight: [200, 90.7]
                    },
                    {
                        position: "LW",
                        total: 4,
                        avgCaphit: 3200000,
                        avgTerm: 4,
                        avgHeight: ["6'1\"", 185],
                        avgWeight: [198, 89.8]
                    }
                ]
            },
            {
                "group": "defense",
                total: 7,
                caphit: 30000000,
                capPercentage: 31.9,
                avgCaphit: 4285714,
                avgTerm: 4,
                handedness: {
                    L: 4,
                    R: 3
                },
                positions: [
                    {
                        position: "LD",
                        total: 4,
                        avgCaphit: 4800000,
                        avgTerm: 4,
                        avgHeight: ["6'2\"", 188],
                        avgWeight: [211, 95.7]
                    },
                    {
                        position: "RD",
                        total: 3,
                        avgCaphit: 3600000,
                        avgTerm: 3,
                        avgHeight: ["6'1\"", 185],
                        avgWeight: [207, 93.9]
                    }
                ]
            },
            {
                "group": "goalies",
                total: 2,
                caphit: 8500000,
                capPercentage: 9.0,
                avgCaphit: 4250000,
                avgTerm: 3,
                handedness: {
                    L: 2,
                    R: 0
                },
                positions: [
                    {
                        position: "G",
                        total: 2,
                        avgCaphit: 4250000,
                        avgTerm: 3,
                        avgHeight: ["6'3\"", 190],
                        avgWeight: [198, 89.8]
                    }
                ]
            },
            {
                "group": "injuredReserve",
                total: 0,
                caphit: 0,
                capPercentage: 0,
                avgCaphit: 0,
                avgTerm: 0,
                handedness: {
                    L: 0,
                    R: 0
                },
                positions: []
            },
            {
                "group": "longTermIR",
                total: 1,
                caphit: 2700000,
                capPercentage: 2.9,
                avgCaphit: 2700000,
                avgTerm: 2,
                handedness: {
                    L: 1,
                    R: 0
                },
                positions: [
                    {
                        position: "C",
                        total: 1,
                        avgCaphit: 2700000,
                        avgTerm: 2,
                        avgHeight: ["6'0\"", 182],
                        avgWeight: [193, 87.5]
                    }
                ]
            }
        ],
        deadcap: [
            {
                type: "RS",
                players: []
            },
            {
                type: "BUYOUT",
                players: [
                    {
                        fullName: "Ryan Poehling",
                        caphit: 416667,
                        termRemaining: 1,
                        transactionId: "2026-07-01-BUYOUT-PHI-2",
                        note: "Year 2 of Ryan Poehling's buyout at an annual cost of $416,667."
                    },
                    {
                        fullName: "Travis Konecny",
                        caphit: 2916667,
                        termRemaining: 3,
                        transactionId: "2027-07-01-BUYOUT-PHI-3",
                        note: "Travis Konecny was bought out on July 1st, 2027, at an annual buyout cost of $2,916,667."
                    }
                ]
            },
            {
                type: "BONUS_OVERAGES",
                players: []
            }
        ]
    },
    {
        "season": "2028-29",
        "upperLimit": 106000000,
        "lowerLimit": 90000000,
        "caphit": 99800000,
        "projPlayoffCaphit": 99800000,
        "dailyCaphit": 99800000 * 1/190,
        "roster23": 23,
        "roster50": 49,
        "roster90": 72,
        "avgAge": 27.5,
        "avgHeight": [],
        "avgWeight": [],
        "totalSPCExempt": 2,
        "totalWaiverExempt": 11,
        "yearlyOutlook": [
            {
                "group": "forwards",
                total: 14,
                caphit: 56500000,
                capPercentage: 56.6,
                avgCaphit: 4035714,
                avgTerm: 4,
                handedness: {
                    L: 7,
                    R: 7
                },
                positions: [
                    {
                        position: "C",
                        total: 5,
                        avgCaphit: 6100000,
                        avgTerm: 5,
                        avgHeight: ["6'1\"", 185],
                        avgWeight: [205, 93.0]
                    },
                    {
                        position: "RW",
                        total: 5,
                        avgCaphit: 4200000,
                        avgTerm: 3,
                        avgHeight: ["6'0\"", 182],
                        avgWeight: [201, 91.2]
                    },
                    {
                        position: "LW",
                        total: 4,
                        avgCaphit: 3350000,
                        avgTerm: 4,
                        avgHeight: ["6'1\"", 185],
                        avgWeight: [199, 90.3]
                    }
                ]
            },
            {
                "group": "defense",
                total: 8,
                caphit: 31500000,
                capPercentage: 31.6,
                avgCaphit: 3937500,
                avgTerm: 3,
                handedness: {
                    L: 5,
                    R: 3
                },
                positions: [
                    {
                        position: "LD",
                        total: 5,
                        avgCaphit: 4200000,
                        avgTerm: 3,
                        avgHeight: ["6'2\"", 188],
                        avgWeight: [212, 96.2]
                    },
                    {
                        position: "RD",
                        total: 3,
                        avgCaphit: 3500000,
                        avgTerm: 3,
                        avgHeight: ["6'1\"", 185],
                        avgWeight: [208, 94.3]
                    }
                ]
            },
            {
                "group": "goalies",
                total: 2,
                caphit: 9500000,
                capPercentage: 9.5,
                avgCaphit: 4750000,
                avgTerm: 4,
                handedness: {
                    L: 1,
                    R: 1
                },
                positions: [
                    {
                        position: "G",
                        total: 2,
                        avgCaphit: 4750000,
                        avgTerm: 4,
                        avgHeight: ["6'3\"", 190],
                        avgWeight: [200, 90.7]
                    }
                ]
            },
            {
                "group": "injuredReserve",
                total: 1,
                caphit: 1500000,
                capPercentage: 1.5,
                avgCaphit: 1500000,
                avgTerm: 1,
                handedness: {
                    L: 0,
                    R: 1
                },
                positions: [
                    {
                        position: "RW",
                        total: 1,
                        avgCaphit: 1500000,
                        avgTerm: 1,
                        avgHeight: ["5'11\"", 180],
                        avgWeight: [190, 86.2]
                    }
                ]
            },
            {
                "group": "longTermIR",
                total: 0,
                caphit: 0,
                capPercentage: 0,
                avgCaphit: 0,
                avgTerm: 0,
                handedness: {
                    L: 0,
                    R: 0
                },
                positions: []
            }
        ],
        deadcap: [
            {
                type: "RS",
                players: [
                    {
                        fullName: "Morgan Frost",
                        pos: "C",
                        caphit: 1750000,
                        termRemaining: 1,
                        transactionId: "2028-02-28-VGK-PHI",
                        note: "The Flyers traded Morgan Frost on Feb 28th, 2028 to the Vegas Golden Knights at 50% retention."
                    }
                ]
            },
            {
                type: "BUYOUT",
                players: [
                    {
                        fullName: "Travis Konecny",
                        caphit: 2916667,
                        termRemaining: 2,
                        transactionId: "2027-07-01-BUYOUT-PHI-3",
                        note: "Year 2 of Travis Konecny's buyout at an annual cost of $2,916,667."
                    }
                ]
            },
            {
                type: "BONUS_OVERAGES",
                players: [
                    {
                        fullName: "Jett Luchanko",
                        caphit: 850000,
                        note: "Jett Luchanko reached all of his schedule 'A' bonuses; Philadelphia carried over the overage from the prior season's cap."
                    }
                ]
            }
        ]
    }
],
    "teamStaff": {
      "poho": ["Keith Jones", "keith-jones"],
      "gm": ["Daniel Brière", "daniel-briere"],
      "agm": ["Brent Flahr", "brent-flahr"],
      "hc": ["Rick Tocchet", "rick-tocchet"],
      "associate": ["Jogi Svejkovsky", "jogi-svejkovsky"],
      "assistant": ["Jay Varady", "jay-varady"]
    },
    "teamCaptains": {
       captain: {
        name: "Sean Couturier",
        since: "2024-03-21",
       },
       alternates: [
        {
            name: "Travis Konecny",
            since: "2024-03-21"
        },
        {
            name: "Travis Sanheim",
            since: "2025-10-04"
        },
        {
            name: "Christian Dvorak",
            since: "2026-03-12"
        },
        
       ],
       
    },
    "data": {
      "roster": {
        "forwards": [
          {
            "name": "Konecny, Travis",
            "slug": "travis-konecny",
            "note": "\"A\"",
            "terms": "",
            "termsDetails": "14 Team No Trade List starting in 2031-32",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RW, LW",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2015 Round 1, #24 Overall",
            "born": "Mar. 11, 1997",
            "draft_year": 2015,
            "contracts": [
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "clauseDetails": "14 Team No Trade List starting in 2031-32",
                "details": [
                  {
                    "season": "2025-26",
                    "clause": "M-NMC",
                    "capHit": "$8,750,000",
                    "aav": "$8,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$9,000,000",
                    "baseSalary": "$2,000,000",
                    "totalSalary": "$11,000,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "M-NMC",
                    "capHit": "$8,750,000",
                    "aav": "$8,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$3,000,000",
                    "baseSalary": "$5,250,000",
                    "totalSalary": "$8,250,000"
                  },
                  {
                    "season": "2027-28",
                    "clause": "M-NMC",
                    "capHit": "$8,750,000",
                    "aav": "$8,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$7,500,000",
                    "baseSalary": "$3,500,000",
                    "totalSalary": "$11,000,000"
                  },
                  {
                    "season": "2028-29",
                    "clause": "M-NMC",
                    "capHit": "$8,750,000",
                    "aav": "$8,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$6,000,000",
                    "baseSalary": "$4,600,000",
                    "totalSalary": "$10,600,000"
                  },
                  {
                    "season": "2029-30",
                    "clause": "M-NMC",
                    "capHit": "$8,750,000",
                    "aav": "$8,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$5,000,000",
                    "baseSalary": "$4,350,000",
                    "totalSalary": "$9,350,000"
                  },
                  {
                    "season": "2030-31",
                    "clause": "M-NMC",
                    "capHit": "$8,750,000",
                    "aav": "$8,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$4,500,000",
                    "baseSalary": "$2,100,000",
                    "totalSalary": "$6,600,000"
                  },
                  {
                    "season": "2031-32",
                    "clause": "M-NTC",
                    "capHit": "$8,750,000",
                    "aav": "$8,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$6,600,000",
                    "totalSalary": "$6,600,000"
                  },
                  {
                    "season": "2032-33",
                    "clause": "M-NTC",
                    "capHit": "$8,750,000",
                    "aav": "$8,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$6,600,000",
                    "totalSalary": "$6,600,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$5,500,000",
                    "aav": "$5,500,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$3,000,000",
                    "baseSalary": "$4,000,000",
                    "totalSalary": "$7,000,000",
                    "minorsSalary": "$7,000,000"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 586,
            "careerSeasonsPlayed": 8,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RW": 73,
              "LW": 10
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.377Z"
            },
            "epId": 205148,
            "epSlug": "travis-konecny",
            "officialPosition": "RW"
          },
          {
            "name": "Couturier, Sean",
            "slug": "sean-couturier",
            "note": "\"C\"",
            "terms": "NMC",
            "termsDetails": "2029-30: 10 team trade list",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2011 Round 1, #8 Overall",
            "born": "Dec. 7, 1992",
            "draft_year": 2011,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "clauseDetails": "2029-30: 10 team trade list",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "NMC",
                    "capHit": "$7,750,000",
                    "aav": "$7,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$5,000,000",
                    "baseSalary": "$4,000,000",
                    "totalSalary": "$9,000,000",
                    "minorsSalary": "$9,000,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "NMC",
                    "capHit": "$7,750,000",
                    "aav": "$7,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$5,000,000",
                    "baseSalary": "$4,000,000",
                    "totalSalary": "$9,000,000",
                    "minorsSalary": "$9,000,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "NMC",
                    "capHit": "$7,750,000",
                    "aav": "$7,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$6,000,000",
                    "baseSalary": "$1,750,000",
                    "totalSalary": "$7,750,000",
                    "minorsSalary": "$7,750,000"
                  },
                  {
                    "season": "2027-28",
                    "clause": "NMC",
                    "capHit": "$7,750,000",
                    "aav": "$7,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$5,000,000",
                    "baseSalary": "$1,500,000",
                    "totalSalary": "$6,500,000",
                    "minorsSalary": "$6,500,000"
                  },
                  {
                    "season": "2028-29",
                    "clause": "NMC",
                    "capHit": "$7,750,000",
                    "aav": "$7,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$5,000,000",
                    "baseSalary": "$1,500,000",
                    "totalSalary": "$6,500,000",
                    "minorsSalary": "$6,500,000"
                  },
                  {
                    "season": "2029-30",
                    "clause": "M-NTC",
                    "capHit": "$7,750,000",
                    "aav": "$7,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$5,000,000",
                    "baseSalary": "$1,500,000",
                    "totalSalary": "$6,500,000",
                    "minorsSalary": "$6,500,000"
                  }
                ]
              },
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "careerGamesPlayed": 834,
            "careerSeasonsPlayed": 12,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "C": 87,
              "LW": 1
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.340Z"
            },
            "epId": 32885,
            "epSlug": "sean-couturier",
            "officialPosition": "C"
          },
          {
            "name": "Tippett, Owen",
            "slug": "owen-tippett",
            "note": "",
            "terms": "",
            "termsDetails": "2026-27 to 2029-30: 10 team no-trade list",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RW, LW",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "Traded from Florida Panthers Mar. 19, 2022",
            "born": "Feb. 16, 1999",
            "draft_year": 2017,
            "contracts": [
              {
                "type": "Two-Way Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "clauseDetails": "2026-27 to 2029-30: 10 team no-trade list",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$6,200,000",
                    "aav": "$6,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$5,000,000",
                    "baseSalary": "$1,000,000",
                    "totalSalary": "$6,000,000",
                    "minorsSalary": "$6,000,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$6,200,000",
                    "aav": "$6,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$5,000,000",
                    "baseSalary": "$2,500,000",
                    "totalSalary": "$7,500,000",
                    "minorsSalary": "$7,500,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "M-NTC",
                    "capHit": "$6,200,000",
                    "aav": "$6,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$4,500,000",
                    "totalSalary": "$4,500,000",
                    "minorsSalary": "$4,500,000"
                  },
                  {
                    "season": "2027-28",
                    "clause": "M-NTC",
                    "capHit": "$6,200,000",
                    "aav": "$6,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$3,000,000",
                    "baseSalary": "$3,500,000",
                    "totalSalary": "$6,500,000",
                    "minorsSalary": "$6,500,000"
                  },
                  {
                    "season": "2028-29",
                    "clause": "M-NTC",
                    "capHit": "$6,200,000",
                    "aav": "$6,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$3,000,000",
                    "baseSalary": "$5,000,000",
                    "totalSalary": "$8,000,000",
                    "minorsSalary": "$8,000,000"
                  },
                  {
                    "season": "2029-30",
                    "clause": "M-NTC",
                    "capHit": "$6,200,000",
                    "aav": "$6,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$7,500,000",
                    "totalSalary": "$7,500,000",
                    "minorsSalary": "$7,500,000"
                  },
                  {
                    "season": "2030-31",
                    "clause": "",
                    "capHit": "$6,200,000",
                    "aav": "$6,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$5,100,000",
                    "totalSalary": "$5,100,000",
                    "minorsSalary": "$5,100,000"
                  },
                  {
                    "season": "2031-32",
                    "clause": "",
                    "capHit": "$6,200,000",
                    "aav": "$6,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$4,500,000",
                    "totalSalary": "$4,500,000",
                    "minorsSalary": "$4,500,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": []
              }
            ],
            "careerGamesPlayed": 276,
            "careerSeasonsPlayed": 5,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RW": 72,
              "LW": 17
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.301Z"
            },
            "acquisitionTradeId": "2022-03-19-PHI-FLA",
            "epId": 201664,
            "epSlug": "owen-tippett",
            "officialPosition": "RW"
          },
          {
            "name": "Zegras, Trevor",
            "slug": "trevor-zegras",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LW, C",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "The Philadelphia Flyers have acquired forward Trevor Zegras from the Anaheim Ducks in exchange for forward Ryan Poehling, Columbus’ 2025 second-round pick, and Philadelphia’s 2026 fourth-round pick. on Jun. 23 2025",
            "born": "Mar. 20, 2001",
            "draft_year": 2019,
            "contracts": [
              {
                "type": "Standard Contract",
                "signingTeam": "Anaheim Ducks",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$5,750,000",
                    "aav": "$5,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$5,750,000",
                    "totalSalary": "$5,750,000",
                    "minorsSalary": "$5,750,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$5,750,000",
                    "aav": "$5,750,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$5,750,000",
                    "totalSalary": "$5,750,000",
                    "minorsSalary": "$5,750,000"
                  }
                ]
              },
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Anaheim Ducks",
                "expiryStatus": "RFA",
                "details": []
              }
            ],
            "arbitrationEligible": true,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 4,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "LW": 63,
              "C": 19,
              "RW": 7
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.381Z"
            },
            "epId": 424453,
            "epSlug": "trevor-zegras",
            "acquisitionTradeId": "2025-06-23-PHI-ANA",
            "officialPosition": "C"
          },
          {
            "name": "Dvorak, Christian",
            "slug": "christian-dvorak",
            "note": "",
            "terms": "M-NTC",
            "termsDetails": "Modified No-Trade Clause - (Player submits a 8 team no trade list)",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "Traded from Utah Hockey Club Sep. 4, 2021",
            "born": "Feb. 2, 1996",
            "draft_year": 2014,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "clauseDetails": "No-Trade Clause through the 2027-28 league year; converts to a Modified No-Trade Clause with a 20-team no-trade list for 2028-29 and a 5-team no-trade list for 2029-30.",
                "details": [
                  {
                    "season": "2026-27",
                    "capHit": "$5,150,000",
                    "baseSalary": "$3,000,000",
                    "signingBonuses": "$3,000,000",
                    "totalSalary": "$6,000,000",
                    "clause": "NTC",
                    "aav": "$5,150,000"
                  },
                  {
                    "season": "2027-28",
                    "capHit": "$5,150,000",
                    "baseSalary": "$2,500,000",
                    "signingBonuses": "$3,000,000",
                    "totalSalary": "$5,500,000",
                    "clause": "NTC",
                    "aav": "$5,150,000"
                  },
                  {
                    "season": "2028-29",
                    "capHit": "$5,150,000",
                    "baseSalary": "$3,000,000",
                    "signingBonuses": "$2,000,000",
                    "totalSalary": "$5,000,000",
                    "clause": "M-NTC",
                    "aav": "$5,150,000"
                  },
                  {
                    "season": "2029-30",
                    "capHit": "$5,150,000",
                    "baseSalary": "$4,750,000",
                    "totalSalary": "$4,750,000",
                    "clause": "M-NTC",
                    "aav": "$5,150,000"
                  },
                  {
                    "season": "2030-31",
                    "capHit": "$5,150,000",
                    "baseSalary": "$4,500,000",
                    "totalSalary": "$4,500,000",
                    "aav": "$5,150,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$4,000,000",
                    "signingBonuses": "$1,400,000",
                    "capHit": "$5,400,000",
                    "totalSalary": "$5,400,000",
                    "aav": "$5,400,000"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 461,
            "careerSeasonsPlayed": 8,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "C": 81,
              "LW": 6
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:51.998Z"
            },
            "acquisitionTradeId": "2021-09-04-MTL-UTA",
            "epId": 194889,
            "epSlug": "christian-dvorak",
            "officialPosition": "C"
          },
          {
            "name": "Cates, Noah",
            "slug": "noah-cates",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C, LW",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2017 Round 5, #137 Overall",
            "born": "Feb. 5, 1999",
            "draft_year": 2017,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$3,750,000",
                    "signingBonuses": "$1,250,000",
                    "capHit": "$4,000,000",
                    "totalSalary": "$5,000,000",
                    "aav": "$4,000,000"
                  },
                  {
                    "season": "2026-27",
                    "baseSalary": "$3,000,000",
                    "signingBonuses": "$1,000,000",
                    "capHit": "$4,000,000",
                    "totalSalary": "$4,000,000",
                    "aav": "$4,000,000"
                  },
                  {
                    "season": "2027-28",
                    "baseSalary": "$4,000,000",
                    "capHit": "$4,000,000",
                    "totalSalary": "$4,000,000",
                    "aav": "$4,000,000"
                  },
                  {
                    "season": "2028-29",
                    "baseSalary": "$3,000,000",
                    "capHit": "$4,000,000",
                    "totalSalary": "$3,000,000",
                    "aav": "$4,000,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$2,625,000",
                    "aav": "$2,625,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,625,000",
                    "totalSalary": "$2,625,000",
                    "minorsSalary": "$2,625,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": true,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 3,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "C": 89
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.293Z"
            },
            "epId": 201517,
            "epSlug": "noah-cates",
            "officialPosition": "LW"
          },
          {
            "name": "Foerster, Tyson",
            "slug": "tyson-foerster",
            "note": "",
            "terms": "ELC",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LW, RW",
            "status": "IR",
            "acquired": "Draft",
            "acquisitionDetails": "2020 Round 1, #23 Overall",
            "born": "Jan. 18, 2002",
            "draft_year": 2020,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$3,500,000",
                    "capHit": "$3,750,000",
                    "totalSalary": "$3,500,000",
                    "aav": "$3,750,000"
                  },
                  {
                    "season": "2026-27",
                    "baseSalary": "$4,000,000",
                    "capHit": "$3,750,000",
                    "totalSalary": "$4,000,000",
                    "aav": "$3,750,000"
                  }
                ]
              },
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$863,333",
                    "aav": "$863,333",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$832,500",
                    "totalSalary": "$832,500",
                    "minorsSalary": "$80,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 1,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "LW": 30
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.388Z"
            },
            "epId": 201934,
            "epSlug": "tyson-foerster",
            "injury": {
              "type": "Upper Body",
              "updated_at": "December 02, 2025",
              "returnDate": "February 03, 2025"
            },
            "officialPosition": "RW"
          },
          {
            "name": "Hathaway, Garnet",
            "slug": "garnet-hathaway",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RW",
            "status": "NHL",
            "acquired": "Signed",
            "acquisitionDetails": "Undrafted",
            "born": "Nov. 23, 1991",
            "draft_year": "Undrafted",
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$2,400,000",
                    "aav": "$2,400,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$1,500,000",
                    "baseSalary": "$1,200,000",
                    "totalSalary": "$2,700,000",
                    "minorsSalary": "$2,700,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$2,400,000",
                    "aav": "$2,400,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,100,000",
                    "totalSalary": "$2,100,000",
                    "minorsSalary": "$2,100,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$2,375,000",
                    "aav": "$2,375,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,050,000",
                    "totalSalary": "$2,050,000",
                    "minorsSalary": "$2,050,000"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 570,
            "careerSeasonsPlayed": 10,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RW": 71,
              "LW": 2,
              "C": 1
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.100Z"
            },
            "epId": 75018,
            "epSlug": "garnet-hathaway",
            "officialPosition": "RW"
          },
          {
            "name": "Grundstrom, Carl",
            "slug": "carl-grundstrom",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LW, RW, C",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "San Jose Sharks acquire Ryan Ellis and a 2026 sixth-round pick from the Philadelphia Flyers in exchange for Carl Grundstrom and Artem Guryev. on Oct. 05 2025",
            "born": "Dec. 1, 1997",
            "draft_year": 2016,
            "contracts": [
              {
                "type": "Standard Contract",
                "signingTeam": "San Jose Sharks",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$1,800,000",
                    "aav": "$1,800,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$1,800,000",
                    "totalSalary": "$1,800,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$1,800,000",
                    "aav": "$1,800,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$1,800,000",
                    "totalSalary": "$1,800,000"
                  }
                ]
              },
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Los Angeles Kings",
                "expiryStatus": "RFA (Arb)",
                "details": []
              }
            ],
            "arbitrationEligible": true,
            "careerGamesPlayed": 253,
            "careerSeasonsPlayed": 6,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "LW": 26,
              "RW": 12,
              "C": 7
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:51.979Z"
            },
            "acquisitionTradeId": "2025-10-05-SJS-PHI",
            "epId": 113516,
            "epSlug": "carl-grundstrom",
            "officialPosition": "RW"
          },
          {
            "name": "Michkov, Matvei",
            "slug": "matvei-michkov",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $3,300,000, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LW, RW",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2023 Round 1, #7 Overall",
            "born": "Dec. 9, 2004",
            "draft_year": 2023,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$950,000",
                    "aav": "$4,250,000",
                    "performanceBonuses": "$3,300,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$950,000",
                    "aav": "$4,250,000",
                    "performanceBonuses": "$3,300,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$950,000",
                    "aav": "$4,250,000",
                    "performanceBonuses": "$3,300,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.254Z"
            },
            "epId": 699375,
            "epSlug": "matvei-michkov",
            "positions": {
              "LW": 58,
              "RW": 30
            },
            "officialPosition": "RW"
          },
          {
            "name": "Bump, Alex",
            "slug": "alex-bump",
            "pos": "LW, RW",
            "born": "Nov. 20, 2003",
            "draft_year": 2022,
            "acquisitionDetails": "2022 Round 5, #133 overall",
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$855,000",
                    "signingBonuses": "$95,000",
                    "minorsSalary": "$82,500",
                    "capHit": "$950,000",
                    "totalSalary": "$950,000",
                    "aav": "$1,450,000"
                  },
                  {
                    "season": "2026-27",
                    "baseSalary": "$855,000",
                    "signingBonuses": "$95,000",
                    "minorsSalary": "$82,500",
                    "capHit": "$950,000",
                    "performanceBonuses": "$500,000",
                    "performanceBonusNote": "Individual 'A' bonuses (max earnable $500,000 – Ice-Time, Goals, Assists, Points, Pts/G, Plus/Minus, All-Rookie Team)",
                    "totalSalary": "$950,000",
                    "aav": "$1,450,000"
                  },
                  {
                    "season": "2027-28",
                    "baseSalary": "$855,000",
                    "signingBonuses": "$95,000",
                    "minorsSalary": "$82,500",
                    "capHit": "$950,000",
                    "performanceBonuses": "$1,000,000",
                    "performanceBonusNote": "Individual 'A' bonuses (max earnable $1,000,000 – Ice-Time, Goals, Assists, Points, Pts/G, Plus/Minus, All-Rookie Team)",
                    "totalSalary": "$950,000",
                    "aav": "$1,450,000"
                  }
                ]
              }
            ],
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "status": "NHL",
            "epId": 623782,
            "epSlug": "alex-bump",
            "acquired": "Draft",
            "terms": "ELC",
            "termsSlideCandidate": false,
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "note": "",
            "officialPosition": "LW",
            "positions": {
              "LW": 6,
              "RW": 1
            }
          },
          {
            "name": "Barkey, Denver",
            "slug": "denver-barkey",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $80,000, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LW, C",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2023 Round 3, #95 Overall",
            "born": "Apr. 27, 2005",
            "draft_year": 2023,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$913,333",
                    "aav": "$950,000",
                    "signingBonuses": "$95,000",
                    "performanceBonuses": "-",
                    "baseSalary": "ENTRY-LEVEL SLIDE"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$881,667",
                    "aav": "$918,333",
                    "performanceBonuses": "$80,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$870,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$881,667",
                    "aav": "$918,333",
                    "performanceBonuses": "$30,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$825,000",
                    "totalSalary": "$920,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2027-28",
                    "clause": "",
                    "capHit": "$881,667",
                    "aav": "$918,333",
                    "performanceBonuses": "$0",
                    "signingBonuses": 0,
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 723026,
            "epSlug": "denver-barkey",
            "entryLevelSlide": {
              "isEligible": true,
              "slideCount": 1,
              "reasons": [
                "Slide #1: played 0 NHL games in 2024-25 (\u003C10)."
              ],
              "gp": [
                {
                  "season": "2024-25",
                  "games": 0
                }
              ]
            },
            "positions": {
              "LW": 40,
              "RW": 3
            },
            "officialPosition": "C"
          },
          {
            "name": "Grebenkin, Nikita",
            "slug": "nikita-grebenkin",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LW, RW",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "The Toronto Maple Leafs have acquired forward Scott Laughton (50% salary retained), along with a 2025 fourth-round and sixth-round pick from the Philadelphia Flyers, in exchange for prospect Nikita Grebenkin and a 2025 first-round pick. on Mar. 07 2025",
            "born": "May. 2, 2003",
            "draft_year": 2022,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Toronto Maple Leafs",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$875,000",
                    "aav": "$875,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$87,500",
                    "baseSalary": "$787,500",
                    "totalSalary": "$875,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$875,000",
                    "aav": "$875,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$87,500",
                    "baseSalary": "$787,500",
                    "totalSalary": "$875,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "acquisitionTradeId": "2025-03-07-TOR-PHI",
            "epId": 652832,
            "epSlug": "nikita-grebyonkin",
            "positions": {
              "LW": 62,
              "RW": 10
            },
            "officialPosition": "RW"
          },
          {
            "name": "Abols, Rodrigo",
            "slug": "rodrigo-abols",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C",
            "status": "IR",
            "acquired": "Signed",
            "acquisitionDetails": "2016 Round 7, #184 Overall",
            "born": "Jan. 5, 1996",
            "draft_year": 2016,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$800,000",
                    "capHit": "$800,000",
                    "totalSalary": "$800,000",
                    "aav": "$800,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$775,000",
                    "aav": "$775,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$450,000"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 154962,
            "epSlug": "rodrigo-abols",
            "positions": {
              "C": 53,
              "LW": 2
            },
            "injury": {
              "type": "Lower Body",
              "updated_at": "2026-01-18T14:35:51.474159-05:00",
              "returnDate": "January 26, 2026"
            },
            "officialPosition": "C"
          },
          {
            "name": "Glendening, Luke",
            "slug": "luke-glendening",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C, RW",
            "status": "NHL",
            "acquired": "Waivers",
            "acquisitionDetails": "Claimed off waivers from NJD 2026-03-06",
            "born": "Apr. 28, 1989",
            "draft_year": "Undrafted",
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "New Jersey Devils",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "capHit": "$775,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "aav": "$775,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Tampa Bay Lightning",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$800,000",
                    "aav": "$800,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$800,000",
                    "totalSalary": "$800,000",
                    "minorsSalary": "$800,000"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 832,
            "careerSeasonsPlayed": 11,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "C": 69,
              "RW": 8,
              "LW": 1
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.222Z"
            },
            "epId": 38233,
            "epSlug": "luke-glendening",
            "officialPosition": "C"
          },
          {
            "name": "Wilson, Garrett",
            "slug": "garrett-wilson",
            "pos": "LW",
            "status": "NHL",
            "acquisitionDetails": "2009 Round 4, #107 Overall",
            "born": "Mar. 16, 1991",
            "draft_year": 2009,
            "careerGamesPlayed": 94,
            "contracts": [
              {
                "type": "Two-Way Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "capHit": "$775,000",
                    "baseSalary": "$775,000",
                    "minorsSalary": "$500,000",
                    "totalSalary": "$775,000",
                    "aav": "$775,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Toronto Maple Leafs",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "acquired": "Signed",
            "termsWaiversExempt": false,
            "termsDetails": "",
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "note": "",
            "officialPosition": "LW",
            "positions": {

            }
          }
        ],
        "defense": [
          {
            "name": "Sanheim, Travis",
            "slug": "travis-sanheim",
            "note": "\"A\"",
            "terms": "NTC",
            "termsDetails": "Years 1 - 4: Full NTC | Years 5 - 8: 12 team no-trade list",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD, LD",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2014 Round 1, #17 Overall",
            "born": "Mar. 29, 1996",
            "draft_year": 2014,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "clauseDetails": "Years 1 - 4: Full NTC | Years 5 - 8: 12 team no-trade list",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "NTC",
                    "capHit": "$6,250,000",
                    "aav": "$6,250,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$3,000,000",
                    "baseSalary": "$5,125,000",
                    "totalSalary": "$8,125,000",
                    "minorsSalary": "$8,125,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "NTC",
                    "capHit": "$6,250,000",
                    "aav": "$6,250,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$3,000,000",
                    "baseSalary": "$5,125,000",
                    "totalSalary": "$8,125,000",
                    "minorsSalary": "$8,125,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "NTC",
                    "capHit": "$6,250,000",
                    "aav": "$6,250,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$6,125,000",
                    "totalSalary": "$6,125,000",
                    "minorsSalary": "$6,125,000"
                  },
                  {
                    "season": "2027-28",
                    "clause": "M-NTC",
                    "capHit": "$6,250,000",
                    "aav": "$6,250,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$3,000,000",
                    "baseSalary": "$1,875,000",
                    "totalSalary": "$4,875,000",
                    "minorsSalary": "$4,875,000"
                  },
                  {
                    "season": "2028-29",
                    "clause": "M-NTC",
                    "capHit": "$6,250,000",
                    "aav": "$6,250,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$3,000,000",
                    "baseSalary": "$1,875,000",
                    "totalSalary": "$4,875,000",
                    "minorsSalary": "$4,875,000"
                  },
                  {
                    "season": "2029-30",
                    "clause": "M-NTC",
                    "capHit": "$6,250,000",
                    "aav": "$6,250,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$4,875,000",
                    "totalSalary": "$4,875,000",
                    "minorsSalary": "$4,875,000"
                  },
                  {
                    "season": "2030-31",
                    "clause": "M-NTC",
                    "capHit": "$6,250,000",
                    "aav": "$6,250,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$4,875,000",
                    "totalSalary": "$4,875,000",
                    "minorsSalary": "$4,875,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "careerGamesPlayed": 517,
            "careerSeasonsPlayed": 7,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RD": 57,
              "LD": 32
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.377Z"
            },
            "epId": 120938,
            "epSlug": "travis-sanheim",
            "officialPosition": "D"
          },
          {
            "name": "York, Cam",
            "slug": "cam-york",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LD, RD",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2019 Round 1, #14 Overall",
            "born": "Jan. 5, 2001",
            "draft_year": 2019,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "capHit": "$5,150,000",
                    "baseSalary": "$3,150,000",
                    "signingBonuses": "$2,000,000",
                    "totalSalary": "$5,150,000",
                    "aav": "$5,150,000"
                  },
                  {
                    "season": "2026-27",
                    "capHit": "$5,150,000",
                    "baseSalary": "$3,150,000",
                    "signingBonuses": "$2,000,000",
                    "totalSalary": "$5,150,000",
                    "aav": "$5,150,000"
                  },
                  {
                    "season": "2027-28",
                    "capHit": "$5,150,000",
                    "baseSalary": "$5,150,000",
                    "totalSalary": "$5,150,000",
                    "aav": "$5,150,000"
                  },
                  {
                    "season": "2028-29",
                    "capHit": "$5,150,000",
                    "baseSalary": "$5,150,000",
                    "totalSalary": "$5,150,000",
                    "aav": "$5,150,000"
                  },
                  {
                    "season": "2029-30",
                    "capHit": "$5,150,000",
                    "baseSalary": "$5,150,000",
                    "totalSalary": "$5,150,000",
                    "aav": "$5,150,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$1,600,000",
                    "aav": "$1,600,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$1,600,000",
                    "totalSalary": "$1,600,000",
                    "minorsSalary": "$1,600,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 3,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "LD": 69,
              "RD": 11
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:51.978Z"
            },
            "epId": 290129,
            "epSlug": "cam-york",
            "officialPosition": "D"
          },
          {
            "name": "Ristolainen, Rasmus",
            "slug": "rasmus-ristolainen",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "Traded from Buffalo Sabres Jul. 23, 2021",
            "born": "Oct. 27, 1994",
            "draft_year": 2013,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$5,100,000",
                    "aav": "$5,100,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$6,500,000",
                    "totalSalary": "$6,500,000",
                    "minorsSalary": "$6,500,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$5,100,000",
                    "aav": "$5,100,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$5,500,000",
                    "totalSalary": "$5,500,000",
                    "minorsSalary": "$5,500,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$5,100,000",
                    "aav": "$5,100,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$4,000,000",
                    "totalSalary": "$4,000,000",
                    "minorsSalary": "$4,000,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Buffalo Sabres",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 11,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RD": 36
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.318Z"
            },
            "acquisitionTradeId": "2021-07-23-PHI-BUF",
            "epId": 43497,
            "epSlug": "rasmus-ristolainen",
            "officialPosition": "D"
          },
          {
            "name": "Seeler, Nick",
            "slug": "nick-seeler",
            "note": "",
            "terms": "NTC",
            "termsDetails": "NTC",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LD",
            "status": "NHL",
            "acquired": "Signed",
            "acquisitionDetails": "2011 Round 5, #131 Overall",
            "born": "Jun. 3, 1993",
            "draft_year": 2011,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "NTC",
                    "capHit": "$2,700,000",
                    "aav": "$2,700,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$1,500,000",
                    "baseSalary": "$1,200,000",
                    "totalSalary": "$2,700,000",
                    "minorsSalary": "$2,700,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "NTC",
                    "capHit": "$2,700,000",
                    "aav": "$2,700,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$1,000,000",
                    "baseSalary": "$1,700,000",
                    "totalSalary": "$2,700,000",
                    "minorsSalary": "$2,700,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$2,700,000",
                    "aav": "$2,700,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,700,000",
                    "totalSalary": "$2,700,000",
                    "minorsSalary": "$2,700,000"
                  },
                  {
                    "season": "2027-28",
                    "clause": "",
                    "capHit": "$2,700,000",
                    "aav": "$2,700,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,700,000",
                    "totalSalary": "$2,700,000",
                    "minorsSalary": "$2,700,000"
                  }
                ]
              },
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "careerGamesPlayed": 301,
            "careerSeasonsPlayed": 5,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "LD": 84,
              "RD": 2
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.287Z"
            },
            "epId": 107099,
            "epSlug": "nick-seeler",
            "officialPosition": "D"
          },
          {
            "name": "Drysdale, Jamie",
            "slug": "jamie-drysdale",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "Traded from Anaheim Ducks Jan. 8, 2024",
            "born": "Apr. 8, 2002",
            "draft_year": 2020,
            "contracts": [
              {
                "type": "Standard Contract",
                "signingTeam": "Anaheim Ducks",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$2,300,000",
                    "aav": "$2,300,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,300,000",
                    "totalSalary": "$2,300,000",
                    "minorsSalary": "$2,300,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$2,300,000",
                    "aav": "$2,300,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,300,000",
                    "totalSalary": "$2,300,000",
                    "minorsSalary": "$2,300,000"
                  }
                ]
              },
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Anaheim Ducks",
                "expiryStatus": "10.2(c)",
                "details": []
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 3,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RD": 83,
              "LD": 2
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.130Z"
            },
            "acquisitionTradeId": "2024-01-08-PHI-ANA",
            "epId": 201868,
            "epSlug": "jamie-drysdale",
            "officialPosition": "D"
          },
          {
            "name": "Andrae, Emil",
            "slug": "emil-andrae",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LD, RD",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2020 Round 2, #54 Overall",
            "born": "Feb. 23, 2002",
            "draft_year": 2020,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$903,333",
                    "aav": "$925,000",
                    "performanceBonuses": "$32,500",
                    "signingBonuses": "$92,500",
                    "baseSalary": "$800,000",
                    "totalSalary": "$892,500",
                    "minorsSalary": "$80,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$903,333",
                    "aav": "$925,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$92,500",
                    "baseSalary": "$832,500",
                    "totalSalary": "$925,000",
                    "minorsSalary": "$80,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "LD": 55,
              "RD": 8
            },
            "epId": 394716,
            "epSlug": "emil-andrae",
            "officialPosition": "D"
          },
          {
            "name": "Juulsen, Noah",
            "slug": "noah-juulsen",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "Traded from Florida Panthers Oct. 10, 2021",
            "born": "Apr. 2, 1997",
            "draft_year": 2015,
            "contracts": [
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$900,000",
                    "capHit": "$900,000",
                    "totalSalary": "$900,000",
                    "aav": "$900,000"
                  }
                ]
              },
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Vancouver Canucks",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$775,000",
                    "aav": "$775,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$475,000"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 124,
            "careerSeasonsPlayed": 4,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RD": 65
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.295Z"
            },
            "acquisitionTradeId": "2021-10-10-VAN-FLA",
            "injury": {
              "type": "Undisclosed",
              "returnDate": "2025-03-05"
            },
            "epId": 199905,
            "epSlug": "noah-juulsen",
            "officialPosition": "D"
          }
        ],
        "goalies": [
          {
            "name": "Vladar, Dan",
            "slug": "dan-vladar",
            "note": "",
            "terms": "",
            "termsDetails": "Modified No Trade Clause – 8-team list",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "G",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "Traded from Boston Bruins Jul. 28, 2021",
            "born": "Aug. 20, 1997",
            "draft_year": 2015,
            "contracts": [
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "clauseDetails": "Modified No Trade Clause – 8-team list",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$3,000,000",
                    "signingBonuses": "$600,000",
                    "capHit": "$3,350,000",
                    "totalSalary": "$3,600,000",
                    "clause": "M-NTC",
                    "aav": "$3,350,000"
                  },
                  {
                    "season": "2026-27",
                    "baseSalary": "$3,100,000",
                    "signingBonuses": "$0",
                    "capHit": "$3,350,000",
                    "totalSalary": "$3,100,000",
                    "clause": "M-NTC",
                    "aav": "$3,350,000"
                  }
                ]
              },
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Calgary Flames",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$2,200,000",
                    "aav": "$2,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,200,000",
                    "totalSalary": "$2,200,000",
                    "minorsSalary": "$2,200,000"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 77,
            "careerSeasonsPlayed": 3,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.028Z"
            },
            "acquisitionTradeId": "2021-07-28-BOS-CGY",
            "epId": 215223,
            "epSlug": "dan-vladař",
            "positions": {
              "G": 80
            },
            "officialPosition": "G"
          },
          {
            "name": "Ersson, Samuel",
            "slug": "samuel-ersson",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "G",
            "status": "NHL",
            "acquired": "Draft",
            "acquisitionDetails": "2018 Round 5, #143 Overall",
            "born": "Oct. 20, 1999",
            "draft_year": 2018,
            "contracts": [
              {
                "type": "Two-Way Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$1,450,000",
                    "aav": "$1,450,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$300,000",
                    "baseSalary": "$1,000,000",
                    "totalSalary": "$1,300,000",
                    "minorsSalary": "$1,300,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$1,450,000",
                    "aav": "$1,450,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$1,600,000",
                    "totalSalary": "$1,600,000",
                    "minorsSalary": "$1,600,000"
                  }
                ]
              },
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": []
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 2,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.336Z"
            },
            "epId": 292581,
            "epSlug": "samuel-ersson",
            "positions": {
              "G": 83
            },
            "officialPosition": "G"
          }
        ],
        "long-term injured reserve": []
      },
      "inactive": {

      },
      "dead cap": {
        "retained salary": [
          {
            "name": "Hayes, Kevin",
            "slug": "kevin-hayes",
            "note": "",
            "terms": "",
            "termsDetails": "Player submits a 12 team no trade list.",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C, LW, RW",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "Traded from Winnipeg Jets Jun. 3, 2019",
            "born": "May. 8, 1992",
            "draft_year": 2010,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "clauseDetails": "Player submits a 12 team no trade list.",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "M-NTC",
                    "capHit": "$7,142,857",
                    "aav": "$7,142,857",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$1,250,000",
                    "baseSalary": "$4,000,000",
                    "totalSalary": "$5,250,000",
                    "minorsSalary": "$5,250,000",
                    "retention": {
                      "Pittsburgh Penguins": {
                        "capHit": "$3,571,429",
                        "retention": "50.00%"
                      },
                      "Philadelphia Flyers": {
                        "capHit": "$3,571,428",
                        "retention": "50.00%"
                      }
                    }
                  },
                  {
                    "season": "2025-26",
                    "clause": "M-NTC",
                    "capHit": "$7,142,857",
                    "aav": "$7,142,857",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$1,250,000",
                    "baseSalary": "$4,000,000",
                    "totalSalary": "$5,250,000",
                    "minorsSalary": "$5,250,000",
                    "retention": {
                      "Pittsburgh Penguins": {
                        "capHit": "$3,571,429",
                        "retention": "50.00%"
                      },
                      "Philadelphia Flyers": {
                        "capHit": "$3,571,428",
                        "retention": "50.00%"
                      }
                    }
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "New York Rangers",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "careerGamesPlayed": 769,
            "careerSeasonsPlayed": 11,
            "currentTeam": "Pittsburgh Penguins",
            "currentTeamTricode": "PIT",
            "currentTeamSlug": "pittsburgh_penguins",
            "positions": {
              "C": 22,
              "LW": 12
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.208Z"
            },
            "acquisitionTradeId": "2019-06-03-PHI-WPG",
            "officialPosition": "RW"
          },
          {
            "name": "Laughton, Scott",
            "slug": "scott-laughton",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C",
            "status": "NHL",
            "acquired": "Trade",
            "acquisitionDetails": "Toronto Maple Leafs acquire a 2026 3rd-round draft pick (LAK) from the Los Angeles Kings for Scott Laughton. on Mar. 06 2026",
            "born": "May. 30, 1994",
            "draft_year": 2012,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$3,000,000",
                    "aav": "$3,000,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$3,625,000",
                    "totalSalary": "$3,625,000",
                    "minorsSalary": "$3,625,000",
                    "retention": {
                      "Philadelphia Flyers": {
                        "capHit": "$1,500,000",
                        "retention": "50.00%"
                      },
                      "*": {
                        "capHit": "$1,500,000",
                        "retention": "50.00%"
                      }
                    }
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$3,000,000",
                    "aav": "$3,000,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$2,500,000",
                    "totalSalary": "$2,500,000",
                    "minorsSalary": "$2,500,000",
                    "retention": {
                      "Philadelphia Flyers": {
                        "capHit": "$1,500,000",
                        "retention": "50.00%"
                      },
                      "*": {
                        "capHit": "$1,500,000",
                        "retention": "50.00%"
                      }
                    }
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "careerGamesPlayed": 625,
            "careerSeasonsPlayed": 9,
            "currentTeam": "Los Angeles Kings",
            "currentTeamTricode": "LAK",
            "currentTeamSlug": "los_angeles_kings",
            "positions": {
              "C": 68,
              "LW": 1
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.338Z"
            },
            "acquisitionTradeId": "2026-03-06-TOR-LAK",
            "epId": 76690,
            "epSlug": "scott-laughton",
            "officialPosition": "C"
          }
        ],
        "buyout history": [
          {
            "name": "Atkinson, Cam",
            "slug": "cam-atkinson",
            "pos": "RW, LW",
            "acquired": "Signed",
            "acquisitionDetails": "2008 Round 6, #157 Overall",
            "status": "Inactive",
            "born": "Jun. 5, 1989",
            "draft_year": 2008,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Columbus Blue Jackets",
                "expiryStatus": "UFA",
                "clauseDetails": "Player submits a 10 team no-trade list (from June 15, 2020 until contract expiry)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "M-NTC",
                    "capHit": "$5,875,000",
                    "aav": "$5,875,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$5,275,000",
                    "totalSalary": "$5,275,000",
                    "minorsSalary": "$5,275,000",
                    "buyout": {
                      "teamName": "Philadelphia Flyers",
                      "cost": "$1,758,333",
                      "earning": "$1,758,333",
                      "savings": "$3,516,667",
                      "capHit": "$2,358,333"
                    }
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "",
                    "aav": "",
                    "performanceBonuses": "",
                    "signingBonuses": "",
                    "baseSalary": "",
                    "totalSalary": "",
                    "minorsSalary": "",
                    "buyout": {
                      "teamName": "Philadelphia Flyers",
                      "cost": "$1,758,333",
                      "earning": "$1,758,333",
                      "savings": "-$1,758,333",
                      "capHit": "$1,758,333"
                    }
                  }
                ],
                "buyout": "This contract was bought out (Philadelphia Flyers - Jun 28, 2024)"
              }
            ],
            "careerGamesPlayed": 805,
            "careerSeasonsPlayed": 12,
            "currentTeam": "",
            "currentTeamTricode": "",
            "currentTeamSlug": "",
            "positions": {
              "RW": 9378,
              "LW": 2355
            },
            "note": "",
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:51.976Z"
            },
            "epId": 19166,
            "epSlug": "cam-atkinson"
          }
        ]
      },
      "non-roster": {
        "forwards": [
          {
            "name": "Dorwart, Karsen",
            "slug": "karsen-dorwart",
            "pos": "LW",
            "born": "Sep 17 2002",
            "draft_year": [],
            "status": "Minor",
            "acquired": "Signed",
            "acquisitionDetails": "Signed by the Philadelphia Flyers as a college free agent.",
            "terms": "ELC",
            "termsSlideCandidate": false,
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$975,000",
                    "aav": "$975,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$97,500",
                    "baseSalary": "$877,500",
                    "totalSalary": "$975,000",
                    "minorsSalary": "$85,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$975,000",
                    "aav": "$975,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$97,500",
                    "baseSalary": "$877,500",
                    "totalSalary": "$975,000",
                    "minorsSalary": "$85,000"
                  }
                ]
              }
            ],
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 561422,
            "epSlug": "karsen-dorwart",
            "note": "",
            "positions": {
              "C": 2012
            },
            "officialPosition": "LW"
          },
          {
            "name": "Luchanko, Jett",
            "slug": "jett-luchanko",
            "pos": "C, LW",
            "born": "Aug. 21, 2006",
            "draft_year": 2024,
            "acquisitionDetails": "2024 Round 1, #13 overall",
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$975,000",
                    "aav": "$1,475,000",
                    "signingBonuses": "$97,500",
                    "performanceBonuses": "-",
                    "baseSalary": "ENTRY-LEVEL SLIDE"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$942,500",
                    "aav": "$1,442,500",
                    "performanceBonuses": "$400,000",
                    "signingBonuses": "$97,500",
                    "baseSalary": "$877,500",
                    "totalSalary": "$975,000",
                    "minorsSalary": "$85,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$942,500",
                    "aav": "$1,442,500",
                    "performanceBonuses": "$500,000",
                    "signingBonuses": "$97,500",
                    "baseSalary": "$877,500",
                    "totalSalary": "$975,000",
                    "minorsSalary": "$85,000"
                  },
                  {
                    "season": "2027-28",
                    "clause": "",
                    "capHit": "$942,500",
                    "aav": "$1,442,500",
                    "performanceBonuses": "$600,000",
                    "signingBonuses": 0,
                    "baseSalary": "$877,500",
                    "totalSalary": "$975,000",
                    "minorsSalary": "$85,000"
                  }
                ]
              }
            ],
            "terms": "ELC",
            "termsSlideCandidate": true,
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $400,000, Waivers Exempt, Slide Candidate",
            "termsWaiversExempt": true,
            "status": "Junior",
            "acquired": "Draft",
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.150Z"
            },
            "note": "",
            "epId": 879166,
            "epSlug": "jett-luchanko",
            "entryLevelSlide": {
              "didSlide": true,
              "slideCount": 2,
              "isEligible": true,
              "reasons": [
                "Slide #1: played 4 NHL games in 2024-25 (\u003C10).",
                "Slide #2: played 0 NHL games in 2025-26 (\u003C10) – isEligible for now."
              ],
              "gp": [
                {
                  "season": "2024-25",
                  "games": 4,
                  "isEligible": false
                },
                {
                  "season": "2025-26",
                  "games": 0,
                  "isEligible": true
                }
              ]
            },
            "termsSPCExempt": false,
            "positions": {
              "C": 5,
              "LW": 1
            },
            "officialPosition": "C"
          },
          {
            "name": "Kaplan, Devin",
            "slug": "devin-kaplan",
            "pos": "RW",
            "born": "Jan. 10, 2004",
            "draft_year": 2022,
            "acquisitionDetails": "2022 Round 3, #69 overall",
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "baseSalary": "$855,000",
                    "signingBonuses": "$95,000",
                    "minorsSalary": "$82,500",
                    "capHit": "$921,667",
                    "totalSalary": "$950,000",
                    "aav": "$921,667"
                  },
                  {
                    "season": "2025-26",
                    "baseSalary": "$800,000",
                    "signingBonuses": "$95,000",
                    "minorsSalary": "$82,500",
                    "capHit": "$921,667",
                    "totalSalary": "$895,000",
                    "aav": "$921,667"
                  },
                  {
                    "season": "2026-27",
                    "baseSalary": "$825,000",
                    "signingBonuses": "$95,000",
                    "minorsSalary": "$82,500",
                    "capHit": "$921,667",
                    "totalSalary": "$920,000",
                    "aav": "$921,667"
                  }
                ]
              }
            ],
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "status": "Minor",
            "epId": 526063,
            "epSlug": "devin-kaplan",
            "acquired": "Draft",
            "terms": "ELC",
            "termsSlideCandidate": false,
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "note": "",
            "positions": {
              "LW": 640
            },
            "officialPosition": "RW"
          },
          {
            "name": "Gaucher, Jacob",
            "slug": "jacob-gaucher",
            "pos": "C, LW",
            "status": "Minor",
            "acquisitionDetails": "Undrafted",
            "born": "Mar. 9, 2001",
            "draft_year": "Undrafted",
            "careerGamesPlayed": 0,
            "acquired": "Signed",
            "terms": "ELC",
            "termsSlideCandidate": false,
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $15,000, Waivers Exempt",
            "termsWaiversExempt": true,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$872,500",
                    "aav": "$880,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$80,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$855,000",
                    "minorsSalary": "$85,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$872,500",
                    "aav": "$880,000",
                    "performanceBonuses": "$15,000",
                    "signingBonuses": "$90,000",
                    "baseSalary": "$800,000",
                    "totalSalary": "$890,000",
                    "minorsSalary": "$85,000"
                  }
                ]
              }
            ],
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "note": "",
            "epId": 290162,
            "epSlug": "jacob-gaucher",
            "positions": {
              "C": 3,
              "LW": 2
            },
            "officialPosition": "C"
          },
          {
            "name": "Robertson, Tucker",
            "slug": "tucker-robertson",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $80,000, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "Seattle Kraken acquire Jon-Randall Avon from the Philadelphia Flyers in exchange for Tucker Robertson. on Sep. 04 2025",
            "born": "Jun. 22, 2003",
            "draft_year": 2022,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Seattle Kraken",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$870,000",
                    "aav": "$950,000",
                    "performanceBonuses": "$80,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$870,000",
                    "minorsSalary": "$80,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$870,000",
                    "aav": "$950,000",
                    "performanceBonuses": "$80,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$870,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 619190,
            "epSlug": "tucker-robertson",
            "acquisitionTradeId": "2025-09-04-SEA-PHI",
            "officialPosition": "C",
            "positions": {

            }
          },
          {
            "name": "Harrison, Brett",
            "slug": "brett-harrison",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $57,500, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "Philadelphia Flyers acquire Brett Harrison and Jackson Edward from the Boston Bruins for Alexis Gendron and Massimo Rizzo. on Mar. 06 2026",
            "born": "Jun. 7, 2003",
            "draft_year": 2021,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Boston Bruins",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$836,667",
                    "aav": "$902,500",
                    "performanceBonuses": "$57,500",
                    "signingBonuses": "$92,500",
                    "baseSalary": "$775,000",
                    "totalSalary": "$867,500",
                    "minorsSalary": "$80,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$836,667",
                    "aav": "$902,500",
                    "performanceBonuses": "$57,500",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$80,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 529247,
            "epSlug": "brett-harrison",
            "officialPosition": "C",
            "acquisitionTradeId": "2026-03-06-PHI-BOS",
            "positions": {

            }
          },
          {
            "name": "Eklind, Oscar",
            "slug": "oscar-eklind",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Waivers Exempt, Waivers Exempt, Waivers Exempt",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LW",
            "status": "Minor",
            "acquired": "Signed",
            "acquisitionDetails": "Undrafted",
            "born": "Jul. 14, 1998",
            "draft_year": "Undrafted",
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$800,000",
                    "capHit": "$800,000",
                    "totalSalary": "$800,000",
                    "aav": "$800,000"
                  }
                ]
              },
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$950,000",
                    "aav": "$950,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$950,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$950,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 233155,
            "epSlug": "oscar-eklind",
            "officialPosition": "LW",
            "positions": {

            }
          },
          {
            "name": "Richard, Anthony",
            "slug": "anthony-richard",
            "pos": "C",
            "acquired": "Signed",
            "acquisitionDetails": "2015 Round 4, #100 Overall",
            "status": "Minor",
            "born": "Dec. 20, 1996",
            "draft_year": 2015,
            "contracts": [
              {
                "type": "Two-Way Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$775,000",
                    "aav": "$775,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$500,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$775,000",
                    "aav": "$775,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$500,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Boston Bruins",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 1,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "LW": 4264
            },
            "note": "",
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:51.893Z"
            },
            "epId": 155661,
            "epSlug": "anthony-richard",
            "officialPosition": "C"
          },
          {
            "name": "Pederson, Lane",
            "slug": "lane-pederson",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "C",
            "status": "Minor",
            "acquired": "Signed",
            "acquisitionDetails": "Undrafted",
            "born": "Aug. 4, 1997",
            "draft_year": "Undrafted",
            "contracts": [
              {
                "type": "Two-Way Contract ",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$775,000",
                    "minorsSalary": "$500,000",
                    "guarantee": "$525,000",
                    "capHit": "$775,000",
                    "totalSalary": "$775,000",
                    "aav": "$775,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Edmonton Oilers",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$775,000",
                    "aav": "$775,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$775,000"
                  }
                ]
              }
            ],
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 3,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 199918,
            "epSlug": "lane-pederson",
            "positions": {
              "C": 8
            },
            "officialPosition": "C"
          },
          {
            "name": "Katchouk, Boris",
            "slug": "boris-katchouk",
            "pos": "C, LW",
            "status": "Minor",
            "born": "Jun. 18, 1998",
            "draft_year": 2016,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 5,
            "contracts": [
              {
                "type": "Two-Way Contract ",
                "signingTeam": "Tampa Bay Lightning",
                "expiryStatus": "UFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$775,000",
                    "minorsSalary": "$250,000",
                    "guarantee": "$350,000",
                    "capHit": "$775,000",
                    "totalSalary": "$775,000",
                    "aav": "$775,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Tampa Bay Lightning",
                "expiryStatus": "UFA",
                "details": []
              }
            ],
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "C": 3,
              "LW": 1
            },
            "acquired": "Trade",
            "acquisitionDetails": "Minnesota Wild acquire Roman Schmidt from the Philadelphia Flyers for Boris Katchouk. on Mar. 02 2026",
            "currentTeam": "Philadelphia Flyers",
            "note": "",
            "termsWaiversExempt": false,
            "acquisitionTradeId": "2026-03-02-MIN-PHI",
            "officialPosition": "LW"
          },
          {
            "name": "Tomasino, Philip",
            "slug": "philip-tomasino",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RW",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "Philadelphia Flyers acquire Philip Tomasino (RW) from the Pittsburgh Penguins in exchange for Egor Zamula (LD). on Dec. 31 2025",
            "born": "Jul. 28, 2001",
            "draft_year": 2019,
            "contracts": [
              {
                "type": "Standard Contract (Extension)",
                "signingTeam": "Pittsburgh Penguins",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$1,750,000",
                    "capHit": "$1,750,000",
                    "totalSalary": "$1,750,000",
                    "aav": "$1,750,000",
                    "burriedPenalty": "$600,000"
                  }
                ]
              },
              {
                "type": "Standard Contract",
                "signingTeam": "Nashville Predators",
                "expiryStatus": "UFA (No QO)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$825,000",
                    "aav": "$825,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$825,000",
                    "totalSalary": "$825,000",
                    "minorsSalary": "$0"
                  }
                ]
              }
            ],
            "arbitrationEligible": true,
            "careerGamesPlayed": 151,
            "careerSeasonsPlayed": 3,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RW": 15,
              "LW": 1
            },
            "acquisitionTradeId": "2025-12-31-PHI-PIT",
            "epId": 418531,
            "epSlug": "philip-tomasino",
            "officialPosition": "RW"
          },
          {
            "name": "Powell, Noah",
            "slug": "noah-powell",
            "pos": "RW",
            "born": "Feb. 2, 2005",
            "draft_year": 2024,
            "acquisitionDetails": "2024 Round 5, #148 overall",
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2026-27",
                    "capHit": "$985,000",
                    "baseSalary": "$850,000",
                    "signingBonuses": "$85,000",
                    "minorsSalary": "$85,000",
                    "totalSalary": "$935,000",
                    "aav": "$985,000"
                  },
                  {
                    "season": "2027-28",
                    "capHit": "$985,000",
                    "baseSalary": "$900,000",
                    "signingBonuses": "$85,000",
                    "minorsSalary": "$85,000",
                    "totalSalary": "$985,000",
                    "aav": "$985,000"
                  },
                  {
                    "season": "2028-29",
                    "capHit": "$985,000",
                    "baseSalary": "$950,000",
                    "signingBonuses": "$85,000",
                    "minorsSalary": "$85,000",
                    "totalSalary": "$1,035,000",
                    "aav": "$985,000"
                  }
                ]
              }
            ],
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "status": "Minor",
            "epId": 674718,
            "epSlug": "noah-powell",
            "note": "",
            "officialPosition": "RW",
            "acquired": "Draft",
            "terms": "ELC",
            "termsSlideCandidate": false,
            "termsDetails": "Entry-Level Contract, , Waivers Exempt",
            "termsWaiversExempt": true,
            "positions": {

            }
          },
          {
            "name": "Knuble, Cole",
            "slug": "cole-knuble",
            "pos": "RW",
            "born": "Jul. 1, 2004",
            "draft_year": 2023,
            "acquisitionDetails": "2023 Round 4, #103 overall",
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2026-27",
                    "capHit": "$980,000",
                    "baseSalary": "$850,000",
                    "signingBonuses": "$102,500",
                    "minorsSalary": "$82,500",
                    "totalSalary": "$952,500",
                    "aav": "$980,000"
                  },
                  {
                    "season": "2027-28",
                    "capHit": "$980,000",
                    "baseSalary": "$900,000",
                    "signingBonuses": "$107,500",
                    "minorsSalary": "$82,500",
                    "totalSalary": "$1,007,500",
                    "aav": "$980,000"
                  }
                ]
              }
            ],
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "status": "Minor",
            "epId": 566424,
            "epSlug": "cole-knuble",
            "note": "",
            "officialPosition": "RW",
            "acquired": "Draft",
            "terms": "ELC",
            "termsSlideCandidate": false,
            "termsDetails": "Entry-Level Contract, , Waivers Exempt",
            "termsWaiversExempt": true,
            "positions": {

            }
          }
        ],
        "defense": [
          {
            "name": "McDonald, Hunter",
            "slug": "hunter-mcdonald",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $500,000, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LD",
            "status": "Minor",
            "acquired": "Draft",
            "acquisitionDetails": "2022 Round 6, #165 Overall",
            "born": "May. 11, 2002",
            "draft_year": 2022,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$950,000",
                    "aav": "$1,200,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$950,000",
                    "aav": "$1,200,000",
                    "performanceBonuses": "$500,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 508274,
            "epSlug": "hunter-mcdonald",
            "positions": {
              "LD": 1
            },
            "officialPosition": "D"
          },
          {
            "name": "Jiricek, David",
            "slug": "david-jiricek",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $1,000,000, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "Philadelphia Flyers acquire David Jiricek from the Minnesota Wild; Minnesota Wild acquire Bobby Brink from the Philadelphia Flyers. on Mar. 06 2026",
            "born": "Nov. 28, 2003",
            "draft_year": 2022,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Columbus Blue Jackets",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$918,333",
                    "aav": "$1,918,333",
                    "performanceBonuses": "$1,000,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$918,333",
                    "aav": "$1,918,333",
                    "performanceBonuses": "$1,000,000",
                    "signingBonuses": "$0",
                    "baseSalary": "$855,000",
                    "totalSalary": "$855,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 1,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "RD": 34
            },
            "nhlDays": {
              "2024-25": 12,
              "lastUpdated": "2024-10-09T13:45:52.048Z"
            },
            "acquisitionTradeId": "2026-03-06-PHI-MIN",
            "epId": 559522,
            "epSlug": "david-jiricek",
            "officialPosition": "D"
          },
          {
            "name": "Gill, Spencer",
            "slug": "spencer-gill",
            "pos": "RD",
            "born": "Aug. 17, 2006",
            "draft_year": 2024,
            "acquisitionDetails": "2024 Round 2, #59 overall",
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$922,500",
                    "aav": "$975,000",
                    "signingBonuses": "$97,500",
                    "performanceBonuses": "-",
                    "baseSalary": "ENTRY-LEVEL SLIDE"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$890,000",
                    "aav": "$942,500",
                    "performanceBonuses": "$102,500",
                    "signingBonuses": "$97,500",
                    "baseSalary": "$775,000",
                    "totalSalary": "$872,500",
                    "minorsSalary": "$85,000"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$890,000",
                    "aav": "$942,500",
                    "performanceBonuses": "$52,500",
                    "signingBonuses": "$97,500",
                    "baseSalary": "$825,000",
                    "totalSalary": "$922,500",
                    "minorsSalary": "$85,000"
                  },
                  {
                    "season": "2027-28",
                    "clause": "",
                    "capHit": "$890,000",
                    "aav": "$942,500",
                    "performanceBonuses": "$2,500",
                    "signingBonuses": 0,
                    "baseSalary": "$875,000",
                    "totalSalary": "$972,500",
                    "minorsSalary": "$85,000"
                  }
                ]
              }
            ],
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "status": "Junior",
            "acquired": "Draft",
            "terms": "ELC",
            "termsSlideCandidate": true,
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $102,500, Waivers Exempt, Slide Candidate, Player is exempt from the 50 Standard Player Contract limit",
            "termsWaiversExempt": true,
            "note": "",
            "epId": 716274,
            "epSlug": "spencer-gill",
            "entryLevelSlide": {
              "didSlide": true,
              "slideCount": 2,
              "isEligible": true,
              "reasons": [
                "Slide #1: played 0 NHL games in 2024-25 (\u003C10).",
                "Slide #2: played 0 NHL games in 2025-26 (\u003C10) – isEligible for now."
              ],
              "gp": [
                {
                  "season": "2024-25",
                  "games": 0,
                  "isEligible": false
                },
                {
                  "season": "2025-26",
                  "games": 0,
                  "isEligible": true
                }
              ]
            },
            "termsSPCExempt": true,
            "officialPosition": "D",
            "positions": {

            }
          },
          {
            "name": "Bonk, Oliver",
            "slug": "oliver-bonk",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD",
            "status": "Minor",
            "acquired": "Draft",
            "acquisitionDetails": "2023 Round 1, #22 Overall",
            "born": "Jan. 9, 2005",
            "draft_year": 2023,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$918,333",
                    "aav": "$1,168,333",
                    "signingBonuses": "$95,000",
                    "performanceBonuses": "-",
                    "baseSalary": "ENTRY-LEVEL SLIDE"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$886,667",
                    "aav": "$1,136,667",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$886,667",
                    "aav": "$1,136,667",
                    "performanceBonuses": "$250,000",
                    "signingBonuses": 0,
                    "baseSalary": "$855,000",
                    "totalSalary": "$950,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2027-28",
                    "clause": "",
                    "capHit": "$886,667",
                    "aav": "$1,136,667",
                    "performanceBonuses": "$500,000",
                    "signingBonuses": "$0",
                    "baseSalary": "$855,000",
                    "totalSalary": "$855,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 590255,
            "epSlug": "oliver-bonk",
            "entryLevelSlide": {
              "isEligible": true,
              "slideCount": 2,
              "reasons": [
                "Slide #1: played 0 NHL games in 2023-24 (\u003C10).",
                "Slide #2: played 0 NHL games in 2024-25 (\u003C10)."
              ],
              "gp": [
                {
                  "season": "2023-24",
                  "games": 0
                },
                {
                  "season": "2024-25",
                  "games": 0
                }
              ]
            },
            "officialPosition": "D",
            "positions": {

            }
          },
          {
            "name": "Kyrou, Christian",
            "slug": "christian-kyrou",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $55,000, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "Dallas Stars acquire Samu Tuomaala from the Philadelphia Flyers in exchange for Christian Kyrou. on Oct. 30 2025",
            "born": "Sep. 16, 2003",
            "draft_year": 2022,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Dallas Stars",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$878,333",
                    "aav": "$950,000",
                    "performanceBonuses": "$80,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$870,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$878,333",
                    "aav": "$950,000",
                    "performanceBonuses": "$55,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$800,000",
                    "totalSalary": "$895,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 582653,
            "epSlug": "christian-kyrou",
            "acquisitionTradeId": "2025-10-30-DAL-PHI",
            "officialPosition": "D",
            "positions": {

            }
          },
          {
            "name": "Guryev, Artem",
            "slug": "artem-guryev",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LD",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "San Jose Sharks acquire Ryan Ellis and a 2026 sixth-round pick from the Philadelphia Flyers in exchange for Carl Grundstrom and Artem Guryev. on Oct. 05 2025",
            "born": "May. 17, 2003",
            "draft_year": 2021,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "San Jose Sharks",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$860,000",
                    "aav": "$860,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$85,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$860,000",
                    "minorsSalary": "$80,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$860,000",
                    "aav": "$860,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$85,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$860,000",
                    "minorsSalary": "$80,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 617884,
            "epSlug": "artyom-guryev",
            "acquisitionTradeId": "2025-10-05-SJS-PHI",
            "officialPosition": "D",
            "positions": {

            }
          },
          {
            "name": "Murchison, Ty",
            "slug": "ty-murchison",
            "pos": "LD",
            "born": "Feb. 2, 2003",
            "draft_year": 2021,
            "acquisitionDetails": "2021 Round 5, #158 overall",
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$775,000",
                    "signingBonuses": "$85,000",
                    "capHit": "$860,000",
                    "totalSalary": "$860,000",
                    "minorsSalary": "$80,000",
                    "aav": "$860,000"
                  },
                  {
                    "season": "2026-27",
                    "baseSalary": "$775,000",
                    "signingBonuses": "$85,000",
                    "capHit": "$860,000",
                    "totalSalary": "$860,000",
                    "minorsSalary": "$80,000",
                    "aav": "$860,000"
                  }
                ]
              }
            ],
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "status": "Minor",
            "acquired": "Draft",
            "terms": "ELC",
            "termsSlideCandidate": false,
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "note": "",
            "epId": 512190,
            "epSlug": "ty-murchison",
            "positions": {
              "LD": 2
            },
            "officialPosition": "D"
          },
          {
            "name": "Edward, Jackson",
            "slug": "jackson-edward",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LD",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "Philadelphia Flyers acquire Brett Harrison and Jackson Edward from the Boston Bruins for Alexis Gendron and Massimo Rizzo. on Mar. 06 2026",
            "born": "Feb. 27, 2004",
            "draft_year": 2022,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Boston Bruins",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$831,667",
                    "aav": "$831,667",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$85,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$860,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$831,667",
                    "aav": "$831,667",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$85,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$860,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$831,667",
                    "aav": "$831,667",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 672923,
            "epSlug": "jackson-edward",
            "officialPosition": "D",
            "acquisitionTradeId": "2026-03-06-PHI-BOS",
            "positions": {

            }
          },
          {
            "name": "Grans, Helge",
            "slug": "helge-grans",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Waivers Exempt, Waivers Exempt, Waivers Exempt",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "Traded from Los Angeles Kings Jun. 6, 2023",
            "born": "May. 10, 2002",
            "draft_year": 2020,
            "contracts": [
              {
                "type": "Two-Way Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2025-26",
                    "baseSalary": "$775,000",
                    "minorsSalary": "$200,000",
                    "guarantee": "$275,000",
                    "capHit": "$787,500",
                    "totalSalary": "$775,000",
                    "aav": "$787,500"
                  },
                  {
                    "season": "2026-27",
                    "baseSalary": "$800,000",
                    "capHit": "$787,500",
                    "totalSalary": "$800,000",
                    "aav": "$787,500"
                  }
                ]
              },
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Los Angeles Kings",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$847,500",
                    "aav": "$902,500",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$832,500",
                    "totalSalary": "$832,500",
                    "minorsSalary": "$80,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "acquisitionTradeId": "2023-06-06-LAK-PHI-CBJ",
            "epId": 395302,
            "epSlug": "helge-grans",
            "positions": {
              "RD": 4200
            },
            "officialPosition": "D"
          },
          {
            "name": "Ginning, Adam",
            "slug": "adam-ginning",
            "note": "",
            "terms": "",
            "termsDetails": "",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "LD",
            "status": "Minor",
            "acquired": "Draft",
            "acquisitionDetails": "2018 Round 2, #50 Overall",
            "born": "Jan. 13, 2000",
            "draft_year": 2018,
            "contracts": [
              {
                "type": "Two-Way Contract (Extension)",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA (Group 6)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$787,500",
                    "aav": "$787,500",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$200,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$787,500",
                    "aav": "$787,500",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$800,000",
                    "totalSalary": "$800,000",
                    "minorsSalary": "$800,000"
                  }
                ]
              },
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": []
              }
            ],
            "arbitrationEligible": true,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {
              "LD": 9
            },
            "epId": 281968,
            "epSlug": "adam-ginning",
            "officialPosition": "D"
          },
          {
            "name": "Guenette, Maxence",
            "slug": "maxence-guenette",
            "note": "",
            "terms": "",
            "termsDetails": "The contract details displayed have not yet been confirmed and are subject to change",
            "termsWaiversExempt": false,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "RD",
            "status": "Minor",
            "acquired": "Trade",
            "acquisitionDetails": "Ottawa Senators acquire Dennis Gilbert from Philadelphia Flyers in exchange for Maxence Guenette. on Nov. 17 2025",
            "born": "Apr. 28, 2001",
            "draft_year": 2019,
            "contracts": [
              {
                "type": "Standard Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "UFA (Group 6)",
                "details": [
                  {
                    "season": "2025-26",
                    "capHit": "$775,000",
                    "baseSalary": "$775,000",
                    "minorsSalary": "$225,000",
                    "totalSalary": "$775,000",
                    "aav": "$775,000"
                  }
                ]
              },
              {
                "type": "Two-Way Contract (Extension)",
                "signingTeam": "Ottawa Senators",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$775,000",
                    "aav": "$775,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$775,000",
                    "totalSalary": "$775,000",
                    "minorsSalary": "$120,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "positions": {

            },
            "epId": 410616,
            "epSlug": "maxence-guenette",
            "acquisitionTradeId": "2025-11-17-OTT-PHI",
            "officialPosition": "D"
          }
        ],
        "goalies": [
          {
            "name": "Kolosov, Aleksei",
            "slug": "aleksei-kolosov",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "G",
            "status": "Minor",
            "acquired": "Draft",
            "acquisitionDetails": "2021 Round 3, #78 Overall",
            "born": "Jan. 4, 2002",
            "draft_year": 2021,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA (Arb)",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$925,000",
                    "aav": "$925,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$92,500",
                    "baseSalary": "$832,500",
                    "totalSalary": "$925,000",
                    "minorsSalary": "$80,000"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$925,000",
                    "aav": "$925,000",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$92,500",
                    "baseSalary": "$832,500",
                    "totalSalary": "$925,000",
                    "minorsSalary": "$80,000"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 568347,
            "epSlug": "aleksei-kolosov",
            "positions": {
              "G": 15
            },
            "officialPosition": "G"
          },
          {
            "name": "Bjarnason, Carson",
            "slug": "carson-bjarnason",
            "note": "",
            "terms": "ELC",
            "termsDetails": "Entry-Level Contract, Maximum Potential Performance Bonuses: $80,000, Waivers Exempt",
            "termsWaiversExempt": true,
            "termsSlideCandidate": false,
            "termsSPCExempt": false,
            "pos": "G",
            "status": "Minor",
            "acquired": "Draft",
            "acquisitionDetails": "2023 Round 2, #51 Overall",
            "born": "Jun. 30, 2005",
            "draft_year": 2023,
            "contracts": [
              {
                "type": "Entry-Level Contract",
                "signingTeam": "Philadelphia Flyers",
                "expiryStatus": "RFA",
                "details": [
                  {
                    "season": "2024-25",
                    "clause": "",
                    "capHit": "$881,667",
                    "aav": "$918,333",
                    "signingBonuses": "$95,000",
                    "performanceBonuses": "-",
                    "baseSalary": "ENTRY-LEVEL SLIDE"
                  },
                  {
                    "season": "2025-26",
                    "clause": "",
                    "capHit": "$850,000",
                    "aav": "$886,667",
                    "performanceBonuses": "$80,000",
                    "signingBonuses": "$95,000",
                    "baseSalary": "$775,000",
                    "totalSalary": "$870,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2026-27",
                    "clause": "",
                    "capHit": "$850,000",
                    "aav": "$886,667",
                    "performanceBonuses": "$30,000",
                    "signingBonuses": 0,
                    "baseSalary": "$825,000",
                    "totalSalary": "$920,000",
                    "minorsSalary": "$82,500"
                  },
                  {
                    "season": "2027-28",
                    "clause": "",
                    "capHit": "$850,000",
                    "aav": "$886,667",
                    "performanceBonuses": "$0",
                    "signingBonuses": "$0",
                    "baseSalary": "$855,000",
                    "totalSalary": "$855,000",
                    "minorsSalary": "$82,500"
                  }
                ]
              }
            ],
            "arbitrationEligible": false,
            "careerGamesPlayed": 0,
            "careerSeasonsPlayed": 0,
            "currentTeam": "Philadelphia Flyers",
            "currentTeamTricode": "PHI",
            "currentTeamSlug": "philadelphia_flyers",
            "epId": 646947,
            "epSlug": "carson-bjarnason",
            "entryLevelSlide": {
              "isEligible": true,
              "slideCount": 2,
              "reasons": [
                "Slide #1: played 0 NHL games in 2023-24 (\u003C10).",
                "Slide #2: played 0 NHL games in 2024-25 (\u003C10)."
              ],
              "gp": [
                {
                  "season": "2023-24",
                  "games": 0
                },
                {
                  "season": "2024-25",
                  "games": 0
                }
              ]
            },
            "officialPosition": "G",
            "positions": {

            }
          }
        ]
      }
    },
    "teamSummary": {
      "capHit": {
        "total": 86739761,
        "forwards": 0,
        "defense": 0,
        "goalies": 0,
        "deadCap": 6829761
      },
      "capSpace": 8760239,
      "playoffCap": 72783094,
      "ltir": 0,
      "roster": 23,
      "totalContracts": 47,
      "carryover": 0,
      "upperLimit": 95500000,
      "lowerLimit": 70600000,
      "positions": {
        "forwards": 16,
        "defense": 7,
        "goalies": 2
      },
      "acsl": null,
      "daysLeft": 28,
      "daysAfterDeadline": 42,
      "accruedCap": 4953522.77000001,
      "projectedCapSpace": 5855536.79083334,
      "lastCapSpace": 6185239,
      "deadlineCapSpace": 26768168.1866667
    },
    "draftPicks": [
      {
        "year": "2026",
        "round": 1,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2026",
        "round": 2,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2026",
        "round": 3,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2026",
        "round": 4,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": true,
        "tradedDate": "Jun. 23 2025",
        "tradeDetails": "The Philadelphia Flyers have acquired forward Trevor Zegras from the Anaheim Ducks in exchange for forward Ryan Poehling, Columbus’ 2025 second-round pick, and Philadelphia’s 2026 fourth-round pick.",
        "tradeId": "2025-06-23-PHI-ANA"
      },
      {
        "year": "2026",
        "round": 5,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": true,
        "tradedDate": "Mar. 6, 2024",
        "tradeId": "2024-03-06-PHI-COL",
        "tradeDetails": "Traded to Colorado Avalanche Mar. 6, 2024"
      },
      {
        "year": "2026",
        "round": 6,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": true,
        "tradedDate": "Oct. 05 2025",
        "tradeDetails": "San Jose Sharks acquire Ryan Ellis and a 2026 sixth-round pick from the Philadelphia Flyers in exchange for Carl Grundstrom and Artem Guryev.",
        "tradeId": "2025-10-05-SJS-PHI"
      },
      {
        "year": "2026",
        "round": 7,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2027",
        "round": 1,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2027",
        "round": 2,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2027",
        "round": 3,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2027",
        "round": 4,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2027",
        "round": 5,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2027",
        "round": 6,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": true,
        "tradedDate": "Mar. 07 2025",
        "tradeId": "2025-03-07-TOR-PHI",
        "tradeDetails": "The Toronto Maple Leafs have acquired forward Scott Laughton (50% salary retained), along with a 2025 fourth-round and sixth-round pick from the Philadelphia Flyers, in exchange for prospect Nikita Grebenkin and a 2025 first-round pick."
      },
      {
        "year": "2027",
        "round": 7,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2028",
        "round": 1,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2028",
        "round": 2,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2028",
        "round": 3,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2028",
        "round": 4,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2028",
        "round": 5,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2028",
        "round": 6,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2028",
        "round": 7,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2028",
        "round": 7,
        "team": "Calgary Flames",
        "conditions": [],
        "tradedDate": "Jan. 30 2025",
        "tradeId": "2025-01-30-PHI-CGY",
        "tradeDetails": "The Philadelphia Flyers have acquired forwards Andrei Kuzmenko and Jakob Pelletier, along with a 2025 second-round pick and a 2025 seventh-round pick, from the Calgary Flames in exchange for forwards Joel Farabee and Morgan Frost."
      },
      {
        "year": "2027",
        "round": 3,
        "team": "Los Angeles Kings",
        "tradedDate": "Mar. 07 2025",
        "tradeId": "2025-03-07-LAK-PHI",
        "tradeDetails": "The Los Angeles Kings have acquired forward Andrei Kuzmenko (50% salary retained) from the Philadelphia Flyers in exchange for a 2027 third-round draft pick."
      },
      {
        "year": "2027",
        "round": 1,
        "team": "Toronto Maple Leafs",
        "conditions": "Top-10 protected",
        "tradedDate": "Mar. 07 2025",
        "tradeId": "2025-03-07-TOR-PHI",
        "tradeDetails": "The Toronto Maple Leafs have acquired forward Scott Laughton (50% salary retained), along with a 2025 fourth-round and sixth-round pick from the Philadelphia Flyers, in exchange for prospect Nikita Grebenkin and a 2025 first-round pick."
      },
      {
        "year": "2029",
        "round": 1,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2029",
        "round": 2,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2029",
        "round": 3,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2029",
        "round": 4,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2029",
        "round": 5,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2029",
        "round": 6,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2029",
        "round": 7,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2026",
        "round": 6,
        "team": "Columbus Blue Jackets",
        "conditions": null,
        "tradedDate": "Sep. 15 2025",
        "tradeId": "2025-09-15-PHI-CBJ",
        "tradeDetails": "Philadelphia Flyers acquire a 2026 sixth-round draft pick (originally Columbus) from the Columbus Blue Jackets in exchange for Ivan Fedotov."
      },
      {
        "year": "2030",
        "round": 1,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2030",
        "round": 2,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2030",
        "round": 3,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2030",
        "round": 4,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2030",
        "round": 5,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2030",
        "round": 6,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2030",
        "round": 7,
        "team": "Philadelphia Flyers",
        "conditions": [],
        "isTradedAway": false,
        "tradedDate": null
      },
      {
        "year": "2027",
        "round": 7,
        "team": "Carolina Hurricanes",
        "conditions": "conditional 7th-round pick in the 2027 NHL Draft",
        "tradedDate": "Mar. 06 2026",
        "tradeId": "2026-03-06-PHI-CAR",
        "tradeDetails": "Philadelphia Flyers acquire a 2027 7th-round pick (CAR) from the Carolina Hurricanes; Carolina Hurricanes acquire Nicolas Deslauriers from the Philadelphia Flyers."
      }
    ],
    "reserves": [
      {
        "name": "Berglund, Jack",
        "slug": "jack-berglund",
        "born": "Apr. 10, 2006",
        "pos": "C",
        "draftedBy": "PHI",
        "draftYear": 2024,
        "round": 2,
        "overall": 51,
        "mustSignBy": "Jun. 1, 2028"
      },
      {
        "name": "Ciernik, Alex",
        "slug": "alex-ciernik",
        "born": "Oct. 8, 2004",
        "pos": "LW",
        "draftedBy": "PHI",
        "draftYear": 2023,
        "round": 4,
        "overall": 120,
        "mustSignBy": "Jun. 1, 2027"
      },
      {
        "name": "MacPherson, Ryan",
        "slug": "ryan-macpherson",
        "born": "Mar. 2, 2005",
        "pos": "C",
        "draftedBy": "PHI",
        "draftYear": 2023,
        "round": 6,
        "overall": 172,
        "mustSignBy": "Aug. 15, 2028"
      },
      {
        "name": "McLaughlin, Owen",
        "slug": "owen-mclaughlin",
        "born": "Mar. 25, 2003",
        "pos": "C",
        "draftedBy": "PHI",
        "draftYear": 2021,
        "round": 7,
        "overall": 206,
        "mustSignBy": "Aug. 15, 2026"
      },
      {
        "name": "Moline, Austin",
        "slug": "austin-moline",
        "born": "Nov. 21, 2005",
        "pos": "RD",
        "draftedBy": "PHI",
        "draftYear": 2024,
        "round": 7,
        "overall": 205,
        "mustSignBy": "Aug. 15, 2029"
      },
      {
        "name": "Pautov, Ilya",
        "slug": "ilya-pautov",
        "born": "May. 3, 2006",
        "pos": "RW",
        "draftedBy": "PHI",
        "draftYear": 2024,
        "round": 6,
        "overall": 173,
        "mustSignBy": "-"
      },
      {
        "name": "Ruohonen, Heikki",
        "slug": "heikki-ruohonen",
        "born": "Jun. 19, 2006",
        "pos": "C",
        "draftedBy": "PHI",
        "draftYear": 2024,
        "round": 4,
        "overall": 107,
        "mustSignBy": "Jun. 1, 2028"
      },
      {
        "name": "Sulku, Santeri",
        "slug": "santeri-sulku",
        "born": "Jun. 13, 2004",
        "pos": "LW",
        "draftedBy": "PHI",
        "draftYear": 2022,
        "round": 7,
        "overall": 197,
        "mustSignBy": "Jun. 1, 2026"
      },
      {
        "name": "Tomek, Matej",
        "slug": "matej-tomek",
        "born": "May. 24, 1997",
        "pos": "G",
        "draftedBy": "PHI",
        "draftYear": 2015,
        "round": 3,
        "overall": 90,
        "mustSignBy": "-"
      },
      {
        "name": "Zavragin, Egor",
        "slug": "egor-zavragin",
        "born": "Aug. 23, 2005",
        "pos": "G",
        "draftedBy": "PHI",
        "draftYear": 2023,
        "round": 3,
        "overall": 87,
        "mustSignBy": "-"
      },
      {
        "name": "Martone, Porter",
        "slug": "porter-martone",
        "born": "Oct. 26, 2006",
        "pos": "RW",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 1,
        "overall": 6,
        "mustSignBy": "Jun. 1, 2027"
      },
      {
        "name": "Nesbitt, Jack",
        "slug": "jack-nesbitt",
        "born": "Jan. 12, 2007",
        "pos": "C",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 1,
        "overall": 12,
        "mustSignBy": "Jun. 1, 2027"
      },
      {
        "name": "Amico, Carter",
        "slug": "carter-amico",
        "born": "Mar. 15, 2007",
        "pos": "RD",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 2,
        "overall": 38,
        "mustSignBy": "Aug. 15, 2029"
      },
      {
        "name": "Murtagh, Jack",
        "slug": "jack-murtagh",
        "born": "Aug. 22, 2007",
        "pos": "LW",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 2,
        "overall": 40,
        "mustSignBy": "Aug. 15, 2029"
      },
      {
        "name": "Vansaghi, Shane",
        "slug": "shane-vansaghi",
        "born": "Oct. 11, 2006",
        "pos": "RW",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 2,
        "overall": 48,
        "mustSignBy": "Aug. 15, 2029"
      },
      {
        "name": "Gard, Matthew",
        "slug": "matthew-gard",
        "born": "Apr. 7, 2007",
        "pos": "C",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 2,
        "overall": 57,
        "mustSignBy": "Jun. 1, 2027"
      },
      {
        "name": "Westergård, Max",
        "slug": "max-westergard",
        "born": "Sep. 03, 2007",
        "pos": "LW",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 5,
        "overall": 132,
        "mustSignBy": "Jun. 1, 2029"
      },
      {
        "name": "Vlooswyk, Luke",
        "slug": "luke-vlooswyk",
        "born": "Jan. 09, 2007",
        "pos": "D",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 5,
        "overall": 157,
        "mustSignBy": "Jun. 1, 2027"
      },
      {
        "name": "Quinn, Nathan",
        "slug": "nathan-quinn",
        "born": "Aug. 29, 2007",
        "pos": "C",
        "draftedBy": "PHI",
        "draftYear": 2025,
        "round": 6,
        "overall": 164,
        "mustSignBy": "Jun. 1, 2027"
      }
    ],
    "projections": [
      {
        "slug": "rodrigo-abols",
        "name": "Abols, Rodrigo",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "noel-acciari",
        "name": "Acciari, Noel",
        "team": "PIT",
        "projectedLength": "2",
        "projectedCapHit": "$2,276,444",
        "projectedCapHitPercentage": "0.0219",
        "projectedTotalValue": "$4,552,888",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "andrew-agozzino",
        "name": "Agozzino, Andrew",
        "team": "UTAH",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jack-ahcan",
        "name": "Ahcan, Jack",
        "team": "COL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "artur-akhtyamov",
        "name": "Akhtyamov, Artur",
        "team": "TOR",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "nils-aman",
        "name": "Aman, Nils",
        "team": "VAN",
        "projectedLength": "1",
        "projectedCapHit": "$918,750",
        "projectedCapHitPercentage": "0.0088",
        "projectedTotalValue": "$918,750",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "frederik-andersen",
        "name": "Andersen, Frederik",
        "team": "CAR",
        "projectedLength": "1",
        "projectedCapHit": "$1,821,485",
        "projectedCapHitPercentage": "0.0175",
        "projectedTotalValue": "$1,821,485",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "rasmus-andersson",
        "name": "Andersson, Rasmus",
        "team": "VGK",
        "projectedLength": "7",
        "projectedCapHit": "$9,021,527",
        "projectedCapHitPercentage": "0.0867",
        "projectedTotalValue": "$63,150,690",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "emil-andrae",
        "name": "Andrae, Emil",
        "team": "PHI",
        "projectedLength": "2",
        "projectedCapHit": "$3,288,133",
        "projectedCapHitPercentage": "0.0316",
        "projectedTotalValue": "$6,576,266",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "justus-annunen",
        "name": "Annunen, Justus",
        "team": "NSH",
        "projectedLength": "1",
        "projectedCapHit": "$1,284,400",
        "projectedCapHitPercentage": "0.0124",
        "projectedTotalValue": "$1,284,400",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "viktor-arvidsson",
        "name": "Arvidsson, Viktor",
        "team": "BOS",
        "projectedLength": "2",
        "projectedCapHit": "$4,225,866",
        "projectedCapHitPercentage": "0.0406",
        "projectedTotalValue": "$8,451,733",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "zach-aston-reese",
        "name": "Aston-Reese, Zach",
        "team": "CBJ",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nicolas-aube-kubel",
        "name": "Aube-Kubel, Nicolas",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "zakhar-bardakov",
        "name": "Bardakov, Zakhar",
        "team": "COL",
        "projectedLength": "2",
        "projectedCapHit": "$1,056,900",
        "projectedCapHitPercentage": "0.0102",
        "projectedTotalValue": "$2,113,800",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "justin-barron",
        "name": "Barron, Justin",
        "team": "NSH",
        "projectedLength": "2",
        "projectedCapHit": "$2,210,577",
        "projectedCapHitPercentage": "0.0213",
        "projectedTotalValue": "$4,421,155",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "nathan-bastian",
        "name": "Bastian, Nathan",
        "team": "DAL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jake-bean",
        "name": "Bean, Jake",
        "team": "CGY",
        "projectedLength": "2",
        "projectedCapHit": "$2,252,800",
        "projectedCapHitPercentage": "0.0217",
        "projectedTotalValue": "$4,505,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "connor-bedard",
        "name": "Bedard, Connor",
        "team": "CHI",
        "projectedLength": "8",
        "projectedCapHit": "$13,212,160",
        "projectedCapHitPercentage": "0.127",
        "projectedTotalValue": "$105,697,280",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "john-beecher",
        "name": "Beecher, John",
        "team": "CGY",
        "projectedLength": "1",
        "projectedCapHit": "$945,000",
        "projectedCapHitPercentage": "0.0091",
        "projectedTotalValue": "$945,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jamie-benn",
        "name": "Benn, Jamie",
        "team": "DAL",
        "projectedLength": "1",
        "projectedCapHit": "$1,092,000",
        "projectedCapHitPercentage": "0.0105",
        "projectedTotalValue": "$1,092,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "zach-benson",
        "name": "Benson, Zach (LT)",
        "team": "BUF",
        "projectedLength": "7",
        "projectedCapHit": "$6,852,300",
        "projectedCapHitPercentage": "0.0659",
        "projectedTotalValue": "$47,966,100",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "zach-benson",
        "name": "Benson, Zach (ST)",
        "team": "BUF",
        "projectedLength": "2",
        "projectedCapHit": "$4,112,160",
        "projectedCapHitPercentage": "0.0395",
        "projectedTotalValue": "$8,224,320",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "brett-berard",
        "name": "Berard, Brett",
        "team": "NYR",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jonatan-berggren",
        "name": "Berggren, Jonatan",
        "team": "STL",
        "projectedLength": "1",
        "projectedCapHit": "$1,825,000",
        "projectedCapHitPercentage": "0.0175",
        "projectedTotalValue": "$1,825,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jacob-bernard-docker",
        "name": "Bernard-Docker, Jacob",
        "team": "DET",
        "projectedLength": "1",
        "projectedCapHit": "$918,750",
        "projectedCapHitPercentage": "0.0088",
        "projectedTotalValue": "$918,750",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "oliver-bjorkstrand",
        "name": "Bjorkstrand, Oliver",
        "team": "TBL",
        "projectedLength": "3",
        "projectedCapHit": "$5,565,155",
        "projectedCapHitPercentage": "0.0535",
        "projectedTotalValue": "$16,695,466",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "sammy-blais",
        "name": "Blais, Sammy",
        "team": "MTL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nick-blankenburg",
        "name": "Blankenburg, Nick",
        "team": "NSH",
        "projectedLength": "3",
        "projectedCapHit": "$4,405,142",
        "projectedCapHitPercentage": "0.0424",
        "projectedTotalValue": "$13,215,428",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "teddy-blueger",
        "name": "Blueger, Teddy",
        "team": "VAN",
        "projectedLength": "INSUFFICIENT DATA",
        "projectedCapHit": "$0",
        "projectedCapHitPercentage": "",
        "projectedTotalValue": "$0",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "matej-blumel",
        "name": "Blumel, Matej",
        "team": "BOS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "sergei-bobrovsky",
        "name": "Bobrovsky, Sergei",
        "team": "FLA",
        "projectedLength": "2",
        "projectedCapHit": "$5,491,200",
        "projectedCapHitPercentage": "0.0528",
        "projectedTotalValue": "$10,982,400",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "zach-bogosian",
        "name": "Bogosian, Zach",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$1,022,320",
        "projectedCapHitPercentage": "0.0098",
        "projectedTotalValue": "$1,022,320",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "zack-bolduc",
        "name": "Bolduc, Zack (LT)",
        "team": "MTL",
        "projectedLength": "6",
        "projectedCapHit": "$5,983,466",
        "projectedCapHitPercentage": "0.0575",
        "projectedTotalValue": "$35,900,799",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "zack-bolduc",
        "name": "Bolduc, Zack (ST)",
        "team": "MTL",
        "projectedLength": "2",
        "projectedCapHit": "$3,588,945",
        "projectedCapHitPercentage": "0.0345",
        "projectedTotalValue": "$7,177,890",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "adam-boqvist",
        "name": "Boqvist, Adam",
        "team": "NYI",
        "projectedLength": "1",
        "projectedCapHit": "$892,500",
        "projectedCapHitPercentage": "0.0086",
        "projectedTotalValue": "$892,500",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "xavier-bourgault",
        "name": "Bourgault, Xavier",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "mavrik-bourque",
        "name": "Bourque, Mavrik",
        "team": "DAL",
        "projectedLength": "2",
        "projectedCapHit": "$1,984,320",
        "projectedCapHitPercentage": "0.0191",
        "projectedTotalValue": "$3,968,640",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "bobby-brink",
        "name": "Brink, Bobby",
        "team": "PHI",
        "projectedLength": "2",
        "projectedCapHit": "$4,408,857",
        "projectedCapHitPercentage": "0.0424",
        "projectedTotalValue": "$8,817,714",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jonny-brodzinski",
        "name": "Brodzinski, Jonny",
        "team": "NYR",
        "projectedLength": "1",
        "projectedCapHit": "$1,017,714",
        "projectedCapHitPercentage": "0.0098",
        "projectedTotalValue": "$1,017,714",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jacob-bryson",
        "name": "Bryson, Jacob",
        "team": "BUF",
        "projectedLength": "1",
        "projectedCapHit": "$977,600",
        "projectedCapHitPercentage": "0.009399999999999999",
        "projectedTotalValue": "$977,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "michael-bunting",
        "name": "Bunting, Michael",
        "team": "NSH",
        "projectedLength": "3",
        "projectedCapHit": "$5,737,333",
        "projectedCapHitPercentage": "0.0552",
        "projectedTotalValue": "$17,212,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "brent-burns",
        "name": "Burns, Brent",
        "team": "COL",
        "projectedLength": "1",
        "projectedCapHit": "$1,092,000",
        "projectedCapHitPercentage": "0.0105",
        "projectedTotalValue": "$1,092,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "brandon-bussi",
        "name": "Bussi, Brandon",
        "team": "CAR",
        "projectedLength": "3",
        "projectedCapHit": "$4,009,942",
        "projectedCapHitPercentage": "0.038599999999999995",
        "projectedTotalValue": "$12,029,828",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "vyacheslav-buteyets",
        "name": "Buteyets, Vyacheslav",
        "team": "ANA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "michael-callahan",
        "name": "Callahan, Michael",
        "team": "BOS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "kyle-capobianco",
        "name": "Capobianco, Kyle",
        "team": "DAL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "michael-carcone",
        "name": "Carcone, Michael",
        "team": "UTAH",
        "projectedLength": "2",
        "projectedCapHit": "$1,837,333",
        "projectedCapHitPercentage": "0.0177",
        "projectedTotalValue": "$3,674,666",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ethan-cardwell",
        "name": "Cardwell, Ethan",
        "team": "SJS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "declan-carlile",
        "name": "Carlile, Declan",
        "team": "TBL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "john-carlson",
        "name": "Carlson, John",
        "team": "WSH",
        "projectedLength": "3",
        "projectedCapHit": "$6,154,200",
        "projectedCapHitPercentage": "0.0592",
        "projectedTotalValue": "$18,462,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "leo-carlsson",
        "name": "Carlsson, Leo",
        "team": "ANA",
        "projectedLength": "8",
        "projectedCapHit": "$10,926,240",
        "projectedCapHitPercentage": "0.1051",
        "projectedTotalValue": "$87,409,920",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "mitchell-chaffee",
        "name": "Chaffee, Mitchell",
        "team": "TBL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "yegor-chinakhov",
        "name": "Chinakhov, Yegor",
        "team": "PIT",
        "projectedLength": "1",
        "projectedCapHit": "$2,100,000",
        "projectedCapHitPercentage": "0.0202",
        "projectedTotalValue": "$2,100,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "dennis-cholowski",
        "name": "Cholowski, Dennis",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "brandt-clarke",
        "name": "Clarke, Brandt (LT)",
        "team": "LAK",
        "projectedLength": "7",
        "projectedCapHit": "$7,940,872",
        "projectedCapHitPercentage": "0.0764",
        "projectedTotalValue": "$55,586,108",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "brandt-clarke",
        "name": "Clarke, Brandt (ST)",
        "team": "LAK",
        "projectedLength": "2",
        "projectedCapHit": "$5,051,800",
        "projectedCapHitPercentage": "0.048600000000000004",
        "projectedTotalValue": "$10,103,600",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "connor-clifton",
        "name": "Clifton, Connor",
        "team": "PIT",
        "projectedLength": "1",
        "projectedCapHit": "$1,390,133",
        "projectedCapHitPercentage": "0.0134",
        "projectedTotalValue": "$1,390,133",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ian-cole",
        "name": "Cole, Ian",
        "team": "UTAH",
        "projectedLength": "1",
        "projectedCapHit": "$3,354,000",
        "projectedCapHitPercentage": "0.0323",
        "projectedTotalValue": "$3,354,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "eric-comrie",
        "name": "Comrie, Eric",
        "team": "WPG",
        "projectedLength": "2",
        "projectedCapHit": "$1,251,900",
        "projectedCapHitPercentage": "0.012",
        "projectedTotalValue": "$2,503,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "pheonix-copley",
        "name": "Copley, Pheonix",
        "team": "LAK",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "paul-cotter",
        "name": "Cotter, Paul",
        "team": "NJD",
        "projectedLength": "2",
        "projectedCapHit": "$2,502,399",
        "projectedCapHitPercentage": "0.0241",
        "projectedTotalValue": "$5,004,799",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "nick-cousins",
        "name": "Cousins, Nick",
        "team": "OTT",
        "projectedLength": "2",
        "projectedCapHit": "$1,113,704",
        "projectedCapHitPercentage": "0.010700000000000001",
        "projectedTotalValue": "$2,227,408",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "charlie-coyle",
        "name": "Coyle, Charlie",
        "team": "CBJ",
        "projectedLength": "3",
        "projectedCapHit": "$5,803,200",
        "projectedCapHitPercentage": "0.0558",
        "projectedTotalValue": "$17,409,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "colton-dach",
        "name": "Dach, Colton",
        "team": "CHI",
        "projectedLength": "2",
        "projectedCapHit": "$1,020,933",
        "projectedCapHitPercentage": "0.0098",
        "projectedTotalValue": "$2,041,866",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "kirby-dach",
        "name": "Dach, Kirby",
        "team": "MTL",
        "projectedLength": "1",
        "projectedCapHit": "$4,000,000",
        "projectedCapHitPercentage": "0.0385",
        "projectedTotalValue": "$4,000,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "evgenii-dadonov",
        "name": "Dadonov, Evgenii",
        "team": "NJD",
        "projectedLength": "INSUFFICIENT DATA",
        "projectedCapHit": "$0",
        "projectedCapHitPercentage": "",
        "projectedTotalValue": "$0",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jared-davidson",
        "name": "Davidson, Jared",
        "team": "MTL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "nico-daws",
        "name": "Daws, Nico",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$892,500",
        "projectedCapHitPercentage": "0.0086",
        "projectedTotalValue": "$892,500",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "tony-deangelo",
        "name": "DeAngelo, Tony",
        "team": "NYI",
        "projectedLength": "1",
        "projectedCapHit": "$2,132,000",
        "projectedCapHitPercentage": "0.020499999999999997",
        "projectedTotalValue": "$2,132,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ethan-del-mastro",
        "name": "Del Mastro, Ethan",
        "team": "CHI",
        "projectedLength": "1",
        "projectedCapHit": "$874,125",
        "projectedCapHitPercentage": "0.0084",
        "projectedTotalValue": "$874,125",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "ty-dellandrea",
        "name": "Dellandrea, Ty",
        "team": "SJS",
        "projectedLength": "1",
        "projectedCapHit": "$2,064,400",
        "projectedCapHitPercentage": "0.0199",
        "projectedTotalValue": "$2,064,400",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "vincent-desharnais",
        "name": "Desharnais, Vincent",
        "team": "SJS",
        "projectedLength": "2",
        "projectedCapHit": "$1,716,000",
        "projectedCapHitPercentage": "0.0165",
        "projectedTotalValue": "$3,432,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nick-desimone",
        "name": "DeSimone, Nick",
        "team": "UTAH",
        "projectedLength": "2",
        "projectedCapHit": "$1,002,560",
        "projectedCapHitPercentage": "0.0096",
        "projectedTotalValue": "$2,005,120",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nicolas-deslauriers",
        "name": "Deslauriers, Nicolas",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$915,200",
        "projectedCapHitPercentage": "0.0088",
        "projectedTotalValue": "$915,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "connor-dewar",
        "name": "Dewar, Connor",
        "team": "PIT",
        "projectedLength": "2",
        "projectedCapHit": "$2,200,177",
        "projectedCapHitPercentage": "0.0212",
        "projectedTotalValue": "$4,400,355",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jason-dickinson",
        "name": "Dickinson, Jason",
        "team": "CHI",
        "projectedLength": "2",
        "projectedCapHit": "$3,108,213",
        "projectedCapHitPercentage": "0.029900000000000003",
        "projectedTotalValue": "$6,216,426",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "pavel-dorofeyev",
        "name": "Dorofeyev, Pavel (LT)",
        "team": "VGK",
        "projectedLength": "6",
        "projectedCapHit": "$8,465,600",
        "projectedCapHitPercentage": "0.0814",
        "projectedTotalValue": "$50,793,600",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "pavel-dorofeyev",
        "name": "Dorofeyev, Pavel (ST)",
        "team": "VGK",
        "projectedLength": "2",
        "projectedCapHit": "$5,649,280",
        "projectedCapHitPercentage": "0.054299999999999994",
        "projectedTotalValue": "$11,298,560",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "curtis-douglas",
        "name": "Douglas, Curtis",
        "team": "TBL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "jack-drury",
        "name": "Drury, Jack",
        "team": "COL",
        "projectedLength": "3",
        "projectedCapHit": "$2,735,200",
        "projectedCapHitPercentage": "0.0263",
        "projectedTotalValue": "$8,205,600",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jamie-drysdale",
        "name": "Drysdale, Jamie (LT)",
        "team": "PHI",
        "projectedLength": "6",
        "projectedCapHit": "$6,721,600",
        "projectedCapHitPercentage": "0.0646",
        "projectedTotalValue": "$40,329,600",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jamie-drysdale",
        "name": "Drysdale, Jamie (ST)",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$4,383,600",
        "projectedCapHitPercentage": "0.042199999999999994",
        "projectedTotalValue": "$4,383,600",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "brandon-duhaime",
        "name": "Duhaime, Brandon",
        "team": "WSH",
        "projectedLength": "2",
        "projectedCapHit": "$1,648,400",
        "projectedCapHitPercentage": "0.0159",
        "projectedTotalValue": "$3,296,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "mathew-dumba",
        "name": "Dumba, Mathew",
        "team": "PIT",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "josh-dunne",
        "name": "Dunne, Josh",
        "team": "BUF",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jordan-eberle",
        "name": "Eberle, Jordan",
        "team": "SEA",
        "projectedLength": "1",
        "projectedCapHit": "$4,469,400",
        "projectedCapHitPercentage": "0.043",
        "projectedTotalValue": "$4,469,400",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "simon-edvinsson",
        "name": "Edvinsson, Simon (LT)",
        "team": "DET",
        "projectedLength": "7",
        "projectedCapHit": "$8,863,400",
        "projectedCapHitPercentage": "0.0852",
        "projectedTotalValue": "$62,043,800",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "simon-edvinsson",
        "name": "Edvinsson, Simon (ST)",
        "team": "DET",
        "projectedLength": "3",
        "projectedCapHit": "$5,720,000",
        "projectedCapHitPercentage": "0.055",
        "projectedTotalValue": "$17,160,000",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "lars-eller",
        "name": "Eller, Lars",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$1,242,800",
        "projectedCapHitPercentage": "0.012",
        "projectedTotalValue": "$1,242,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "adam-erne",
        "name": "Erne, Adam",
        "team": "DAL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "samuel-ersson",
        "name": "Ersson, Samuel",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$1,600,000",
        "projectedCapHitPercentage": "0.0154",
        "projectedTotalValue": "$1,600,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "robby-fabbri",
        "name": "Fabbri, Robby",
        "team": "STL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "adam-fantilli",
        "name": "Fantilli, Adam",
        "team": "CBJ",
        "projectedLength": "8",
        "projectedCapHit": "$9,937,777",
        "projectedCapHitPercentage": "0.0956",
        "projectedTotalValue": "$79,502,222",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "mario-ferraro",
        "name": "Ferraro, Mario",
        "team": "SJS",
        "projectedLength": "4",
        "projectedCapHit": "$5,015,920",
        "projectedCapHitPercentage": "0.0482",
        "projectedTotalValue": "$20,063,680",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nick-foligno",
        "name": "Foligno, Nick",
        "team": "CHI",
        "projectedLength": "1",
        "projectedCapHit": "$3,055,000",
        "projectedCapHitPercentage": "0.0294",
        "projectedTotalValue": "$3,055,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "derek-forbort",
        "name": "Forbort, Derek",
        "team": "VAN",
        "projectedLength": "1",
        "projectedCapHit": "$1,973,005",
        "projectedCapHitPercentage": "0.019",
        "projectedTotalValue": "$1,973,005",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ethen-frank",
        "name": "Frank, Ethen",
        "team": "WSH",
        "projectedLength": "1",
        "projectedCapHit": "$1,580,800",
        "projectedCapHitPercentage": "0.0152",
        "projectedTotalValue": "$1,580,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "marc-gatcomb",
        "name": "Gatcomb, Marc",
        "team": "NYI",
        "projectedLength": "1",
        "projectedCapHit": "$945,000",
        "projectedCapHitPercentage": "0.0091",
        "projectedTotalValue": "$945,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jacob-gaucher",
        "name": "Gaucher, Jacob",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "brendan-gaunce",
        "name": "Gaunce, Brendan",
        "team": "CBJ",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "cutter-gauthier",
        "name": "Gauthier, Cutter (LT)",
        "team": "ANA",
        "projectedLength": "7",
        "projectedCapHit": "$8,537,706",
        "projectedCapHitPercentage": "0.0821",
        "projectedTotalValue": "$59,763,946",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "cutter-gauthier",
        "name": "Gauthier, Cutter (ST)",
        "team": "ANA",
        "projectedLength": "3",
        "projectedCapHit": "$6,321,599",
        "projectedCapHitPercentage": "0.0608",
        "projectedTotalValue": "$18,964,799",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "dennis-gilbert",
        "name": "Gilbert, Dennis",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "patrick-giles",
        "name": "Giles, Patrick",
        "team": "SJS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "adam-ginning",
        "name": "Ginning, Adam",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "claude-giroux",
        "name": "Giroux, Claude",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$2,173,600",
        "projectedCapHitPercentage": "0.0209",
        "projectedTotalValue": "$2,173,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "luke-glendening",
        "name": "Glendening, Luke",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "collin-graf",
        "name": "Graf, Collin",
        "team": "SJS",
        "projectedLength": "3",
        "projectedCapHit": "$3,218,057",
        "projectedCapHitPercentage": "0.030899999999999997",
        "projectedTotalValue": "$9,654,171",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "jet-greaves",
        "name": "Greaves, Jet (LT)",
        "team": "CBJ",
        "projectedLength": "4",
        "projectedCapHit": "$5,792,800",
        "projectedCapHitPercentage": "0.0557",
        "projectedTotalValue": "$23,171,200",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jet-greaves",
        "name": "Greaves, Jet (ST)",
        "team": "CBJ",
        "projectedLength": "1",
        "projectedCapHit": "$3,203,200",
        "projectedCapHitPercentage": "0.0308",
        "projectedTotalValue": "$3,203,200",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "nikita-grebenkin",
        "name": "Grebenkin, Nikita",
        "team": "PHI",
        "projectedLength": "2",
        "projectedCapHit": "$2,559,266",
        "projectedCapHitPercentage": "0.0246",
        "projectedTotalValue": "$5,118,533",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "a-j-greer",
        "name": "Greer, A.J.",
        "team": "FLA",
        "projectedLength": "2",
        "projectedCapHit": "$1,148,044",
        "projectedCapHitPercentage": "0.011000000000000001",
        "projectedTotalValue": "$2,296,088",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "noah-gregor",
        "name": "Gregor, Noah",
        "team": "FLA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "arseni-gritsyuk",
        "name": "Gritsyuk, Arseny (LT)",
        "team": "NJD",
        "projectedLength": "5",
        "projectedCapHit": "$6,583,200",
        "projectedCapHitPercentage": "0.0633",
        "projectedTotalValue": "$32,916,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "arseni-gritsyuk",
        "name": "Gritsyuk, Arseny (ST)",
        "team": "NJD",
        "projectedLength": "2",
        "projectedCapHit": "$3,551,600",
        "projectedCapHitPercentage": "0.0342",
        "projectedTotalValue": "$7,103,200",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "maxim-groshev",
        "name": "Groshev, Maxim",
        "team": "TBL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "carl-grundstrom",
        "name": "Grundstrom, Carl",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$1,085,482",
        "projectedCapHitPercentage": "0.010437333",
        "projectedTotalValue": "$1,085,482",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "matt-grzelcyk",
        "name": "Grzelcyk, Matt",
        "team": "CHI",
        "projectedLength": "2",
        "projectedCapHit": "$2,836,888",
        "projectedCapHitPercentage": "0.0273",
        "projectedTotalValue": "$5,673,777",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "radko-gudas",
        "name": "Gudas, Radko",
        "team": "ANA",
        "projectedLength": "1",
        "projectedCapHit": "$3,584,533",
        "projectedCapHitPercentage": "0.0345",
        "projectedTotalValue": "$3,584,533",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "erik-gudbranson",
        "name": "Gudbranson, Erik",
        "team": "CBJ",
        "projectedLength": "1",
        "projectedCapHit": "$2,012,400",
        "projectedCapHitPercentage": "0.0194",
        "projectedTotalValue": "$2,012,400",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "erik-gustafsson",
        "name": "Gustafsson, Erik",
        "team": "DET",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "stephen-halliday",
        "name": "Halliday, Stephen",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$897,750",
        "projectedCapHitPercentage": "0.0086",
        "projectedTotalValue": "$897,750",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "brian-halonen",
        "name": "Halonen, Brian",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "brandon-halverson",
        "name": "Halverson, Brandon",
        "team": "TBL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "travis-hamonic",
        "name": "Hamonic, Travis",
        "team": "DET",
        "projectedLength": "1",
        "projectedCapHit": "$1,003,600",
        "projectedCapHitPercentage": "0.0097",
        "projectedTotalValue": "$1,003,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jansen-harkins",
        "name": "Harkins, Jansen",
        "team": "ANA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jordan-harris",
        "name": "Harris, Jordan",
        "team": "BOS",
        "projectedLength": "1",
        "projectedCapHit": "$866,250",
        "projectedCapHitPercentage": "0.0083",
        "projectedTotalValue": "$866,250",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "erik-haula",
        "name": "Haula, Erik",
        "team": "NSH",
        "projectedLength": "2",
        "projectedCapHit": "$3,472,654",
        "projectedCapHitPercentage": "0.0334",
        "projectedTotalValue": "$6,945,309",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "kevin-hayes",
        "name": "Hayes, Kevin",
        "team": "PIT",
        "projectedLength": "2",
        "projectedCapHit": "$2,451,800",
        "projectedCapHitPercentage": "0.0236",
        "projectedTotalValue": "$4,903,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "barrett-hayton",
        "name": "Hayton, Barrett",
        "team": "UTAH",
        "projectedLength": "4",
        "projectedCapHit": "$5,976,533",
        "projectedCapHitPercentage": "0.0575",
        "projectedTotalValue": "$23,906,133",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "danton-heinen",
        "name": "Heinen, Danton",
        "team": "CBJ",
        "projectedLength": "2",
        "projectedCapHit": "$1,754,711",
        "projectedCapHitPercentage": "0.0169",
        "projectedTotalValue": "$3,509,422",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "adam-henrique",
        "name": "Henrique, Adam",
        "team": "EDM",
        "projectedLength": "1",
        "projectedCapHit": "$2,394,080",
        "projectedCapHitPercentage": "0.023",
        "projectedTotalValue": "$2,394,080",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "vinnie-hinostroza",
        "name": "Hinostroza, Vinnie",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$963,485",
        "projectedCapHitPercentage": "0.009300000000000001",
        "projectedTotalValue": "$963,485",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "dylan-holloway",
        "name": "Holloway, Dylan",
        "team": "STL",
        "projectedLength": "5",
        "projectedCapHit": "$7,199,771",
        "projectedCapHitPercentage": "0.0692",
        "projectedTotalValue": "$35,998,856",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "daemon-hunt",
        "name": "Hunt, Daemon",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "ben-hutton",
        "name": "Hutton, Ben",
        "team": "VGK",
        "projectedLength": "2",
        "projectedCapHit": "$1,427,400",
        "projectedCapHitPercentage": "0.0137",
        "projectedTotalValue": "$2,854,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "bokondji-imama",
        "name": "Imama, Bokondji",
        "team": "PIT",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "connor-ingram",
        "name": "Ingram, Connor",
        "team": "EDM",
        "projectedLength": "2",
        "projectedCapHit": "$2,964,000",
        "projectedCapHitPercentage": "0.0285",
        "projectedTotalValue": "$5,928,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "vincent-iorio",
        "name": "Iorio, Vincent",
        "team": "SJS",
        "projectedLength": "2",
        "projectedCapHit": "$1,106,800",
        "projectedCapHitPercentage": "0.0106",
        "projectedTotalValue": "$2,213,600",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "ivan-ivan",
        "name": "Ivan, Ivan",
        "team": "COL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "mark-jankowski",
        "name": "Jankowski, Mark",
        "team": "CAR",
        "projectedLength": "1",
        "projectedCapHit": "$1,036,533",
        "projectedCapHitPercentage": "0.01",
        "projectedTotalValue": "$1,036,533",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "calle-jarnkrok",
        "name": "Jarnkrok, Calle",
        "team": "TOR",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "boone-jenner",
        "name": "Jenner, Boone",
        "team": "CBJ",
        "projectedLength": "3",
        "projectedCapHit": "$5,226,000",
        "projectedCapHitPercentage": "0.050300000000000004",
        "projectedTotalValue": "$15,678,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nick-jensen",
        "name": "Jensen, Nick",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$3,575,000",
        "projectedCapHitPercentage": "0.0344",
        "projectedTotalValue": "$3,575,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "david-jiricek",
        "name": "Jiricek, David",
        "team": "MIN",
        "projectedLength": "2",
        "projectedCapHit": "$1,714,776",
        "projectedCapHitPercentage": "0.0165",
        "projectedTotalValue": "$3,429,552",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "marcus-johansson",
        "name": "Johansson, Marcus",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$2,308,800",
        "projectedCapHitPercentage": "0.0222",
        "projectedTotalValue": "$2,308,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ross-johnston",
        "name": "Johnston, Ross",
        "team": "ANA",
        "projectedLength": "1",
        "projectedCapHit": "$1,075,360",
        "projectedCapHitPercentage": "0.0103",
        "projectedTotalValue": "$1,075,360",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ben-jones",
        "name": "Jones, Ben",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "max-jones",
        "name": "Jones, Max",
        "team": "EDM",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "mathieu-joseph",
        "name": "Joseph, Mathieu",
        "team": "STL",
        "projectedLength": "2",
        "projectedCapHit": "$2,424,685",
        "projectedCapHitPercentage": "0.023314286",
        "projectedTotalValue": "$4,849,371",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "pierre-olivier-joseph",
        "name": "Joseph, P.O",
        "team": "VAN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "tyson-jost",
        "name": "Jost, Tyson",
        "team": "NSH",
        "projectedLength": "1",
        "projectedCapHit": "$1,033,716",
        "projectedCapHitPercentage": "0.009939583",
        "projectedTotalValue": "$1,033,716",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "noah-juulsen",
        "name": "Juulsen, Noah",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "arthur-kaliyev",
        "name": "Kaliyev, Arthur",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "david-kampf",
        "name": "Kampf, David",
        "team": "VAN",
        "projectedLength": "1",
        "projectedCapHit": "$1,415,885",
        "projectedCapHitPercentage": "0.013600000000000001",
        "projectedTotalValue": "$1,415,885",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "evander-kane",
        "name": "Kane, Evander",
        "team": "VAN",
        "projectedLength": "2",
        "projectedCapHit": "$3,875,733",
        "projectedCapHitPercentage": "0.0373",
        "projectedTotalValue": "$7,751,466",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "patrick-kane",
        "name": "Kane, Patrick",
        "team": "DET",
        "projectedLength": "1",
        "projectedCapHit": "$3,311,100",
        "projectedCapHitPercentage": "0.0318",
        "projectedTotalValue": "$3,311,100",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "kasperi-kapanen",
        "name": "Kapanen, Kasperi",
        "team": "EDM",
        "projectedLength": "INSUFFICIENT DATA",
        "projectedCapHit": "$0",
        "projectedCapHitPercentage": "",
        "projectedTotalValue": "$0",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "boris-katchouk",
        "name": "Katchouk, Boris",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "alex-kerfoot",
        "name": "Kerfoot, Alexander",
        "team": "UTAH",
        "projectedLength": "INSUFFICIENT DATA",
        "projectedCapHit": "$0",
        "projectedCapHitPercentage": "",
        "projectedTotalValue": "$0",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "rory-kerins",
        "name": "Kerins, Rory",
        "team": "CGY",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "matthew-kessel",
        "name": "Kessel, Matthew",
        "team": "STL",
        "projectedLength": "2",
        "projectedCapHit": "$1,172,600",
        "projectedCapHitPercentage": "0.0113",
        "projectedTotalValue": "$2,345,200",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "michael-kesselring",
        "name": "Kesselring, Michael",
        "team": "BUF",
        "projectedLength": "2",
        "projectedCapHit": "$3,412,685",
        "projectedCapHitPercentage": "0.032799999999999996",
        "projectedTotalValue": "$6,825,371",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "justin-kirkland",
        "name": "Kirkland, Justin",
        "team": "CGY",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "joel-kiviranta",
        "name": "Kiviranta, Joel",
        "team": "COL",
        "projectedLength": "1",
        "projectedCapHit": "$1,405,223",
        "projectedCapHitPercentage": "0.013500000000000002",
        "projectedTotalValue": "$1,405,223",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "john-klingberg",
        "name": "Klingberg, John",
        "team": "SJS",
        "projectedLength": "2",
        "projectedCapHit": "$4,391,400",
        "projectedCapHitPercentage": "0.042199999999999994",
        "projectedTotalValue": "$8,782,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "cole-koepke",
        "name": "Koepke, Cole",
        "team": "WPG",
        "projectedLength": "1",
        "projectedCapHit": "$1,059,644",
        "projectedCapHitPercentage": "0.010188889",
        "projectedTotalValue": "$1,059,644",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ville-koivunen",
        "name": "Koivunen, Ville",
        "team": "PIT",
        "projectedLength": "2",
        "projectedCapHit": "$1,807,288",
        "projectedCapHitPercentage": "0.0174",
        "projectedTotalValue": "$3,614,577",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "aleksei-kolosov",
        "name": "Kolosov, Alexei",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$874,125",
        "projectedCapHitPercentage": "0.0084",
        "projectedTotalValue": "$874,125",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "vladislav-kolyachonok",
        "name": "Kolyachonok, Vladislav",
        "team": "BOS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "anze-kopitar",
        "name": "Kopitar, Anze",
        "team": "LAK",
        "projectedLength": "1",
        "projectedCapHit": "$4,790,400",
        "projectedCapHitPercentage": "0.0461",
        "projectedTotalValue": "$4,790,400",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "joona-koppanen",
        "name": "Koppanen, Joona",
        "team": "PIT",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "peyton-krebs",
        "name": "Krebs, Peyton",
        "team": "BUF",
        "projectedLength": "2",
        "projectedCapHit": "$2,347,800",
        "projectedCapHitPercentage": "0.0226",
        "projectedTotalValue": "$4,695,600",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "brett-kulak",
        "name": "Kulak, Brett",
        "team": "PIT",
        "projectedLength": "3",
        "projectedCapHit": "$3,627,520",
        "projectedCapHitPercentage": "0.0349",
        "projectedTotalValue": "$10,882,560",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "luke-kunin",
        "name": "Kunin, Luke",
        "team": "FLA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "trevor-kuntar",
        "name": "Kuntar, Trevor",
        "team": "BUF",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "philipp-kurashev",
        "name": "Kurashev, Philipp",
        "team": "SJS",
        "projectedLength": "2",
        "projectedCapHit": "$4,686,240",
        "projectedCapHitPercentage": "0.0451",
        "projectedTotalValue": "$9,372,480",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "andrei-kuzmenko",
        "name": "Kuzmenko, Andrei",
        "team": "LAK",
        "projectedLength": "1",
        "projectedCapHit": "$3,671,200",
        "projectedCapHitPercentage": "0.0353",
        "projectedTotalValue": "$3,671,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "joseph-labate",
        "name": "Labate, Joseph",
        "team": "VAN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "sam-lafferty",
        "name": "Lafferty, Sam",
        "team": "CHI",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "patrik-laine",
        "name": "Laine, Patrik",
        "team": "MTL",
        "projectedLength": "INSUFFICIENT DATA",
        "projectedCapHit": "$0",
        "projectedCapHitPercentage": "",
        "projectedTotalValue": "$0",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "carson-lambos",
        "name": "Lambos, Carson",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$874,125",
        "projectedCapHitPercentage": "0.0084",
        "projectedTotalValue": "$874,125",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "juho-lammikko",
        "name": "Lammikko, Juho",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "hendrix-lapierre",
        "name": "Lapierre, Hendrix",
        "team": "WSH",
        "projectedLength": "2",
        "projectedCapHit": "$1,204,666",
        "projectedCapHitPercentage": "0.0116",
        "projectedTotalValue": "$2,409,333",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "scott-laughton",
        "name": "Laughton, Scott",
        "team": "TOR",
        "projectedLength": "2",
        "projectedCapHit": "$3,038,533",
        "projectedCapHitPercentage": "0.0292",
        "projectedTotalValue": "$6,077,066",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jeremy-lauzon",
        "name": "Lauzon, Jeremy",
        "team": "VGK",
        "projectedLength": "2",
        "projectedCapHit": "$3,054,628",
        "projectedCapHitPercentage": "0.0294",
        "projectedTotalValue": "$6,109,257",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "curtis-lazar",
        "name": "Lazar, Curtis",
        "team": "EDM",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nick-leddy",
        "name": "Leddy, Nick",
        "team": "SJS",
        "projectedLength": "1",
        "projectedCapHit": "$1,268,800",
        "projectedCapHitPercentage": "0.012199999999999999",
        "projectedTotalValue": "$1,268,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "anders-lee",
        "name": "Lee, Anders",
        "team": "NYI",
        "projectedLength": "2",
        "projectedCapHit": "$6,406,400",
        "projectedCapHitPercentage": "0.0616",
        "projectedTotalValue": "$12,812,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nathan-legare",
        "name": "Legare, Nathan",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "john-leonard",
        "name": "Leonard, John",
        "team": "DET",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "timothy-liljegren",
        "name": "Liljegren, Timothy",
        "team": "SJS",
        "projectedLength": "3",
        "projectedCapHit": "$3,330,080",
        "projectedCapHitPercentage": "0.032",
        "projectedTotalValue": "$9,990,240",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "carl-lindbom",
        "name": "Lindbom, Carl",
        "team": "VGK",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "ryan-lomberg",
        "name": "Lomberg, Ryan",
        "team": "CGY",
        "projectedLength": "2",
        "projectedCapHit": "$1,164,800",
        "projectedCapHitPercentage": "0.011200000000000002",
        "projectedTotalValue": "$2,329,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "matt-luff",
        "name": "Luff, Matt",
        "team": "STL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nils-lundkvist",
        "name": "Lundkvist, Nils",
        "team": "DAL",
        "projectedLength": "1",
        "projectedCapHit": "$1,721,777",
        "projectedCapHitPercentage": "0.0166",
        "projectedTotalValue": "$1,721,777",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "olle-lycksell",
        "name": "Lycksell, Olle",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "matias-maccelli",
        "name": "Maccelli, Matias",
        "team": "TOR",
        "projectedLength": "2",
        "projectedCapHit": "$2,821,419",
        "projectedCapHitPercentage": "0.0271",
        "projectedTotalValue": "$5,642,838",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "zack-macewen",
        "name": "MacEwen, Zack",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "taylor-makar",
        "name": "Makar, Taylor",
        "team": "COL",
        "projectedLength": "1",
        "projectedCapHit": "$874,125",
        "projectedCapHitPercentage": "0.0084",
        "projectedTotalValue": "$874,125",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "beck-malenstyn",
        "name": "Malenstyn, Beck",
        "team": "BUF",
        "projectedLength": "3",
        "projectedCapHit": "$2,556,210",
        "projectedCapHitPercentage": "0.0246",
        "projectedTotalValue": "$7,668,631",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "evgeni-malkin",
        "name": "Malkin, Evgeni",
        "team": "PIT",
        "projectedLength": "1",
        "projectedCapHit": "$6,739,200",
        "projectedCapHitPercentage": "0.06480000000000001",
        "projectedTotalValue": "$6,739,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jeff-malott",
        "name": "Malott, Jeff",
        "team": "LAK",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "victor-mancini",
        "name": "Mancini, Victor",
        "team": "VAN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "anthony-mantha",
        "name": "Mantha, Anthony",
        "team": "PIT",
        "projectedLength": "2",
        "projectedCapHit": "$3,989,266",
        "projectedCapHitPercentage": "0.0384",
        "projectedTotalValue": "$7,978,533",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "mason-marchment",
        "name": "Marchment, Mason",
        "team": "CBJ",
        "projectedLength": "3",
        "projectedCapHit": "$5,340,400",
        "projectedCapHitPercentage": "0.051399999999999994",
        "projectedTotalValue": "$16,021,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "dysin-mayo",
        "name": "Mayo, Dysin",
        "team": "CBJ",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "michael-mccarron",
        "name": "McCarron, Michael",
        "team": "NSH",
        "projectedLength": "3",
        "projectedCapHit": "$2,038,400",
        "projectedCapHitPercentage": "0.0196",
        "projectedTotalValue": "$6,115,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "hugh-mcging",
        "name": "McGing, Hugh",
        "team": "STL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "bobby-mcmann",
        "name": "McMann, Bobby",
        "team": "TOR",
        "projectedLength": "3",
        "projectedCapHit": "$3,637,688",
        "projectedCapHitPercentage": "0.035",
        "projectedTotalValue": "$10,913,066",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "connor-mcmichael",
        "name": "McMichael, Connor (LT)",
        "team": "WSH",
        "projectedLength": "4",
        "projectedCapHit": "$6,398,971",
        "projectedCapHitPercentage": "0.061500000000000006",
        "projectedTotalValue": "$25,595,885",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "connor-mcmichael",
        "name": "McMichael, Connor (ST)",
        "team": "WSH",
        "projectedLength": "2",
        "projectedCapHit": "$4,675,377",
        "projectedCapHitPercentage": "0.045",
        "projectedTotalValue": "$9,350,755",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jacob-melanson",
        "name": "Melanson, Jacob",
        "team": "SEA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "leevi-merilainen",
        "name": "Merilainen, Leevi",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$1,050,000",
        "projectedCapHitPercentage": "0.0101",
        "projectedTotalValue": "$1,050,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "georgii-merkulov",
        "name": "Merkulov, Georgii",
        "team": "BOS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "ben-meyers",
        "name": "Meyers, Ben",
        "team": "SEA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ilya-mikheyev",
        "name": "Mikheyev, Ilya",
        "team": "CHI",
        "projectedLength": "3",
        "projectedCapHit": "$3,706,181",
        "projectedCapHitPercentage": "0.0356",
        "projectedTotalValue": "$11,118,545",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "sonny-milano",
        "name": "Milano, Sonny",
        "team": "WSH",
        "projectedLength": "1",
        "projectedCapHit": "$951,600",
        "projectedCapHitPercentage": "0.0092",
        "projectedTotalValue": "$951,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "colin-miller",
        "name": "Miller, Colin",
        "team": "WPG",
        "projectedLength": "1",
        "projectedCapHit": "$907,400",
        "projectedCapHitPercentage": "0.0087",
        "projectedTotalValue": "$907,400",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "pavel-mintyukov",
        "name": "Mintyukov, Pavel (LT)",
        "team": "ANA",
        "projectedLength": "5",
        "projectedCapHit": "$5,590,000",
        "projectedCapHitPercentage": "0.0538",
        "projectedTotalValue": "$27,950,000",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "pavel-mintyukov",
        "name": "Mintyukov, Pavel (ST)",
        "team": "ANA",
        "projectedLength": "2",
        "projectedCapHit": "$3,213,600",
        "projectedCapHitPercentage": "0.030899999999999997",
        "projectedTotalValue": "$6,427,200",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "daniil-miromanov",
        "name": "Miromanov, Daniil",
        "team": "CGY",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "travis-mitchell",
        "name": "Mitchell, Travis",
        "team": "NYI",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "ian-moore",
        "name": "Moore, Ian",
        "team": "ANA",
        "projectedLength": "2",
        "projectedCapHit": "$1,671,999",
        "projectedCapHitPercentage": "0.0161",
        "projectedTotalValue": "$3,343,999",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "scott-morrow",
        "name": "Morrow, Scott",
        "team": "NYR",
        "projectedLength": "2",
        "projectedCapHit": "$1,850,105",
        "projectedCapHitPercentage": "0.0178",
        "projectedTotalValue": "$3,700,210",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "sam-morton",
        "name": "Morton, Sam",
        "team": "CGY",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jacob-moverare",
        "name": "Moverare, Jacob",
        "team": "LAK",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "petr-mrazek",
        "name": "Mrazek, Petr",
        "team": "ANA",
        "projectedLength": "1",
        "projectedCapHit": "$1,196,000",
        "projectedCapHitPercentage": "0.0115",
        "projectedTotalValue": "$1,196,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "shakir-mukhamadullin",
        "name": "Mukhamadullin, Shakir",
        "team": "SJS",
        "projectedLength": "2",
        "projectedCapHit": "$1,929,777",
        "projectedCapHitPercentage": "0.018600000000000002",
        "projectedTotalValue": "$3,859,555",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "connor-murphy",
        "name": "Murphy, Connor",
        "team": "CHI",
        "projectedLength": "2",
        "projectedCapHit": "$3,640,000",
        "projectedCapHitPercentage": "0.035",
        "projectedTotalValue": "$7,280,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "matt-murray",
        "name": "Murray, Matt",
        "team": "SEA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "alex-nedeljkovic",
        "name": "Nedeljkovic, Alex",
        "team": "SJS",
        "projectedLength": "2",
        "projectedCapHit": "$2,783,733",
        "projectedCapHitPercentage": "0.0268",
        "projectedTotalValue": "$5,567,466",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "simon-nemec",
        "name": "Nemec, Simon (LT)",
        "team": "NJD",
        "projectedLength": "7",
        "projectedCapHit": "$8,301,280",
        "projectedCapHitPercentage": "0.07980000000000001",
        "projectedTotalValue": "$58,108,960",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "simon-nemec",
        "name": "Nemec, Simon (ST)",
        "team": "NJD",
        "projectedLength": "2",
        "projectedCapHit": "$4,309,066",
        "projectedCapHitPercentage": "0.0414",
        "projectedTotalValue": "$8,618,133",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "alexander-nikishin",
        "name": "Nikishin, Alexander (LT)",
        "team": "CAR",
        "projectedLength": "5",
        "projectedCapHit": "$6,277,440",
        "projectedCapHitPercentage": "0.0604",
        "projectedTotalValue": "$31,387,200",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "alexander-nikishin",
        "name": "Nikishin, Alexander (ST)",
        "team": "CAR",
        "projectedLength": "2",
        "projectedCapHit": "$3,427,542",
        "projectedCapHitPercentage": "0.033",
        "projectedTotalValue": "$6,855,085",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "tomas-nosek",
        "name": "Nosek, Tomas",
        "team": "FLA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "gustav-nyquist",
        "name": "Nyquist, Gustav",
        "team": "WPG",
        "projectedLength": "1",
        "projectedCapHit": "$2,662,400",
        "projectedCapHitPercentage": "0.0256",
        "projectedTotalValue": "$2,662,400",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jamie-oleksiak",
        "name": "Oleksiak, Jamie",
        "team": "SEA",
        "projectedLength": "3",
        "projectedCapHit": "$3,941,600",
        "projectedCapHitPercentage": "0.0379",
        "projectedTotalValue": "$11,824,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "victor-olofsson",
        "name": "Olofsson, Victor",
        "team": "COL",
        "projectedLength": "2",
        "projectedCapHit": "$4,147,288",
        "projectedCapHitPercentage": "0.039900000000000005",
        "projectedTotalValue": "$8,294,577",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "zack-ostapchuk",
        "name": "Ostapchuk, Zack",
        "team": "SJS",
        "projectedLength": "1",
        "projectedCapHit": "$874,125",
        "projectedCapHitPercentage": "0.0084",
        "projectedTotalValue": "$874,125",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "brennan-othmann",
        "name": "Othmann, Brennan",
        "team": "NYR",
        "projectedLength": "1",
        "projectedCapHit": "$874,125",
        "projectedCapHitPercentage": "0.0084",
        "projectedTotalValue": "$874,125",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "alex-ovechkin",
        "name": "Ovechkin, Alex",
        "team": "WSH",
        "projectedLength": "1",
        "projectedCapHit": "$9,068,800",
        "projectedCapHitPercentage": "0.0872",
        "projectedTotalValue": "$9,068,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jean-gabriel-pageau",
        "name": "Pageau, Jean-Gabriel",
        "team": "NYI",
        "projectedLength": "3",
        "projectedCapHit": "$4,886,400",
        "projectedCapHitPercentage": "0.047",
        "projectedTotalValue": "$14,659,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "artemi-panarin",
        "name": "Panarin, Artemi",
        "team": "NYR",
        "projectedLength": "4",
        "projectedCapHit": "$10,790,000",
        "projectedCapHitPercentage": "0.1038",
        "projectedTotalValue": "$43,160,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "xavier-parent",
        "name": "Parent, Xavier",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jiri-patera",
        "name": "Patera, Jiri",
        "team": "VAN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "tanner-pearson",
        "name": "Pearson, Tanner",
        "team": "WPG",
        "projectedLength": "1",
        "projectedCapHit": "$976,444",
        "projectedCapHitPercentage": "0.009399999999999999",
        "projectedTotalValue": "$976,444",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "andrew-peeke",
        "name": "Peeke, Andrew",
        "team": "BOS",
        "projectedLength": "4",
        "projectedCapHit": "$4,024,800",
        "projectedCapHitPercentage": "0.0387",
        "projectedTotalValue": "$16,099,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "cole-perfetti",
        "name": "Perfetti, Cole (LT)",
        "team": "WPG",
        "projectedLength": "4",
        "projectedCapHit": "$5,780,320",
        "projectedCapHitPercentage": "0.0556",
        "projectedTotalValue": "$23,121,280",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "cole-perfetti",
        "name": "Perfetti, Cole (ST)",
        "team": "WPG",
        "projectedLength": "1",
        "projectedCapHit": "$4,258,150",
        "projectedCapHitPercentage": "0.0409",
        "projectedTotalValue": "$4,258,150",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "david-perron",
        "name": "Perron, David",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$3,278,600",
        "projectedCapHitPercentage": "0.0315",
        "projectedTotalValue": "$3,278,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "corey-perry",
        "name": "Perry, Corey",
        "team": "LAK",
        "projectedLength": "1",
        "projectedCapHit": "$2,173,600",
        "projectedCapHitPercentage": "0.0209",
        "projectedTotalValue": "$2,173,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "alexander-petrovic",
        "name": "Petrovic, Alex",
        "team": "DAL",
        "projectedLength": "2",
        "projectedCapHit": "$1,190,800",
        "projectedCapHitPercentage": "0.0115",
        "projectedTotalValue": "$2,381,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jeff-petry",
        "name": "Petry, Jeff",
        "team": "FLA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "noah-philp",
        "name": "Philp, Noah",
        "team": "CAR",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "calvin-pickard",
        "name": "Pickard, Calvin",
        "team": "EDM",
        "projectedLength": "2",
        "projectedCapHit": "$1,283,360",
        "projectedCapHitPercentage": "0.0123",
        "projectedTotalValue": "$2,566,720",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ryan-poehling",
        "name": "Poehling, Ryan",
        "team": "ANA",
        "projectedLength": "3",
        "projectedCapHit": "$3,083,600",
        "projectedCapHitPercentage": "0.0297",
        "projectedTotalValue": "$9,250,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jason-polin",
        "name": "Polin, Jason",
        "team": "COL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "sam-poulin",
        "name": "Poulin, Sam",
        "team": "EDM",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "cayden-primeau",
        "name": "Primeau, Cayden",
        "team": "CAR",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jonathan-quick",
        "name": "Quick, Jonathan",
        "team": "NYR",
        "projectedLength": "1",
        "projectedCapHit": "$1,596,400",
        "projectedCapHitPercentage": "0.0154",
        "projectedTotalValue": "$1,596,400",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jacob-quillan",
        "name": "Quillan, Jacob",
        "team": "TOR",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "darren-raddysh",
        "name": "Raddysh, Darren",
        "team": "TBL",
        "projectedLength": "4",
        "projectedCapHit": "$5,327,771",
        "projectedCapHitPercentage": "0.0512",
        "projectedTotalValue": "$21,311,085",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ryan-reaves",
        "name": "Reaves, Ryan",
        "team": "SJS",
        "projectedLength": "1",
        "projectedCapHit": "$904,800",
        "projectedCapHitPercentage": "0.0087",
        "projectedTotalValue": "$904,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "pavol-regenda",
        "name": "Regenda, Pavel",
        "team": "SJS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "lukas-reichel",
        "name": "Reichel, Lukas",
        "team": "VAN",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "mike-reilly",
        "name": "Reilly, Mike",
        "team": "CAR",
        "projectedLength": "2",
        "projectedCapHit": "$1,482,000",
        "projectedCapHitPercentage": "0.0143",
        "projectedTotalValue": "$2,964,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "david-rittich",
        "name": "Rittich, David",
        "team": "NYI",
        "projectedLength": "1",
        "projectedCapHit": "$1,621,360",
        "projectedCapHitPercentage": "0.015600000000000001",
        "projectedTotalValue": "$1,621,360",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jason-robertson",
        "name": "Robertson, Jason",
        "team": "DAL",
        "projectedLength": "8",
        "projectedCapHit": "$11,941,800",
        "projectedCapHitPercentage": "0.1148",
        "projectedTotalValue": "$95,534,400",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "nicholas-robertson",
        "name": "Robertson, Nicholas",
        "team": "TOR",
        "projectedLength": "2",
        "projectedCapHit": "$2,995,720",
        "projectedCapHitPercentage": "0.0288",
        "projectedTotalValue": "$5,991,440",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "kevin-rooney",
        "name": "Rooney, Kevin",
        "team": "UTAH",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "isak-rosen",
        "name": "Rosen, Isak",
        "team": "BUF",
        "projectedLength": "1",
        "projectedCapHit": "$874,125",
        "projectedCapHitPercentage": "0.0084",
        "projectedTotalValue": "$874,125",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "jack-roslovic",
        "name": "Roslovic, Jack",
        "team": "EDM",
        "projectedLength": "4",
        "projectedCapHit": "$4,432,763",
        "projectedCapHitPercentage": "0.0426",
        "projectedTotalValue": "$17,731,054",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "joshua-roy",
        "name": "Roy, Joshua",
        "team": "MTL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "brandon-saad",
        "name": "Saad, Brandon",
        "team": "VGK",
        "projectedLength": "1",
        "projectedCapHit": "$2,149,333",
        "projectedCapHitPercentage": "0.0207",
        "projectedTotalValue": "$2,149,333",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "scott-sabourin",
        "name": "Sabourin, Scott",
        "team": "TBL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "mackie-samoskevich",
        "name": "Samoskevich, Mackie",
        "team": "FLA",
        "projectedLength": "2",
        "projectedCapHit": "$3,139,933",
        "projectedCapHitPercentage": "0.0302",
        "projectedTotalValue": "$6,279,866",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "luke-schenn",
        "name": "Schenn, Luke",
        "team": "WPG",
        "projectedLength": "1",
        "projectedCapHit": "$1,218,880",
        "projectedCapHitPercentage": "0.011699999999999999",
        "projectedTotalValue": "$1,218,880",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "nick-schmaltz",
        "name": "Schmaltz, Nick",
        "team": "UTAH",
        "projectedLength": "6",
        "projectedCapHit": "$8,314,800",
        "projectedCapHitPercentage": "0.08",
        "projectedTotalValue": "$49,888,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "akira-schmid",
        "name": "Schmid, Akira",
        "team": "VGK",
        "projectedLength": "2",
        "projectedCapHit": "$2,783,733",
        "projectedCapHitPercentage": "0.0268",
        "projectedTotalValue": "$5,567,466",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "braden-schneider",
        "name": "Schneider, Braden (LT)",
        "team": "NYR",
        "projectedLength": "6",
        "projectedCapHit": "$5,557,760",
        "projectedCapHitPercentage": "0.053399999999999996",
        "projectedTotalValue": "$33,346,560",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "braden-schneider",
        "name": "Schneider, Braden (ST)",
        "team": "NYR",
        "projectedLength": "1",
        "projectedCapHit": "$3,913,236",
        "projectedCapHitPercentage": "0.037599999999999995",
        "projectedTotalValue": "$3,913,236",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jaden-schwartz",
        "name": "Schwartz, Jaden",
        "team": "SEA",
        "projectedLength": "2",
        "projectedCapHit": "$5,597,800",
        "projectedCapHitPercentage": "0.0538",
        "projectedTotalValue": "$11,195,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "cole-schwindt",
        "name": "Schwindt, Cole",
        "team": "FLA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "donovan-sebrango",
        "name": "Sebrango, Donovan",
        "team": "FLA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "maxim-shabanov",
        "name": "Shabanov, Max",
        "team": "NYI",
        "projectedLength": "1",
        "projectedCapHit": "$2,947,100",
        "projectedCapHitPercentage": "0.028300000000000002",
        "projectedTotalValue": "$2,947,100",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "ryan-shea",
        "name": "Shea, Ryan",
        "team": "PIT",
        "projectedLength": "3",
        "projectedCapHit": "$3,426,453",
        "projectedCapHitPercentage": "0.0329",
        "projectedTotalValue": "$10,279,360",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "conor-sheary",
        "name": "Sheary, Conor",
        "team": "NYR",
        "projectedLength": "1",
        "projectedCapHit": "$1,107,600",
        "projectedCapHitPercentage": "0.010700000000000001",
        "projectedTotalValue": "$1,107,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "kiefer-sherwood",
        "name": "Sherwood, Kiefer",
        "team": "SJS",
        "projectedLength": "5",
        "projectedCapHit": "$5,744,266",
        "projectedCapHitPercentage": "0.0552",
        "projectedTotalValue": "$28,721,333",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "cole-sillinger",
        "name": "Sillinger, Cole (LT)",
        "team": "CBJ",
        "projectedLength": "5",
        "projectedCapHit": "$6,329,142",
        "projectedCapHitPercentage": "0.060899999999999996",
        "projectedTotalValue": "$31,645,714",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "cole-sillinger",
        "name": "Sillinger, Cole (ST)",
        "team": "CBJ",
        "projectedLength": "2",
        "projectedCapHit": "$4,196,400",
        "projectedCapHitPercentage": "0.0404",
        "projectedTotalValue": "$8,392,800",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "arturs-silovs",
        "name": "Silovs, Arturs",
        "team": "PIT",
        "projectedLength": "1",
        "projectedCapHit": "$2,033,200",
        "projectedCapHitPercentage": "0.0196",
        "projectedTotalValue": "$2,033,200",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "colton-sissons",
        "name": "Sissons, Colton",
        "team": "VGK",
        "projectedLength": "2",
        "projectedCapHit": "$1,988,480",
        "projectedCapHitPercentage": "0.0191",
        "projectedTotalValue": "$3,976,960",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jeff-skinner",
        "name": "Skinner, Jeff",
        "team": "SJS",
        "projectedLength": "1",
        "projectedCapHit": "$2,995,200",
        "projectedCapHitPercentage": "0.0288",
        "projectedTotalValue": "$2,995,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "stuart-skinner",
        "name": "Skinner, Stuart",
        "team": "PIT",
        "projectedLength": "2",
        "projectedCapHit": "$3,861,866",
        "projectedCapHitPercentage": "0.0371",
        "projectedTotalValue": "$7,723,733",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "brendan-smith",
        "name": "Smith, Brendan",
        "team": "CBJ",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "cole-smith",
        "name": "Smith, Cole",
        "team": "NSH",
        "projectedLength": "1",
        "projectedCapHit": "$1,388,400",
        "projectedCapHitPercentage": "0.0134",
        "projectedTotalValue": "$1,388,400",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "reilly-smith",
        "name": "Smith, Reilly",
        "team": "VGK",
        "projectedLength": "1",
        "projectedCapHit": "$2,022,800",
        "projectedCapHitPercentage": "0.0195",
        "projectedTotalValue": "$2,022,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "victor-soderstrom",
        "name": "Soderstrom, Victor",
        "team": "BOS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ilya-solovyov",
        "name": "Solovyov, Ilya",
        "team": "COL",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA G6",
        "arb": ""
      },
      {
        "slug": "carson-soucy",
        "name": "Soucy, Carson",
        "team": "NYR",
        "projectedLength": "1",
        "projectedCapHit": "$1,723,428",
        "projectedCapHitPercentage": "0.0166",
        "projectedTotalValue": "$1,723,428",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jordan-spence",
        "name": "Spence, Jordan (LT)",
        "team": "OTT",
        "projectedLength": "4",
        "projectedCapHit": "$4,942,600",
        "projectedCapHitPercentage": "0.0475",
        "projectedTotalValue": "$19,770,400",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jordan-spence",
        "name": "Spence, Jordan (ST)",
        "team": "OTT",
        "projectedLength": "1",
        "projectedCapHit": "$1,700,000",
        "projectedCapHitPercentage": "0.0163",
        "projectedTotalValue": "$1,700,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "logan-stanley",
        "name": "Stanley, Logan",
        "team": "WPG",
        "projectedLength": "2",
        "projectedCapHit": "$1,733,333",
        "projectedCapHitPercentage": "0.0167",
        "projectedTotalValue": "$3,466,666",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "spencer-stastney",
        "name": "Stastney, Spencer",
        "team": "EDM",
        "projectedLength": "2",
        "projectedCapHit": "$2,512,072",
        "projectedCapHitPercentage": "0.0242",
        "projectedTotalValue": "$5,024,145",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "troy-stecher",
        "name": "Stecher, Troy",
        "team": "TOR",
        "projectedLength": "1",
        "projectedCapHit": "$1,204,800",
        "projectedCapHitPercentage": "0.0116",
        "projectedTotalValue": "$1,204,800",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "kevin-stenlund",
        "name": "Stenlund, Kevin",
        "team": "UTAH",
        "projectedLength": "1",
        "projectedCapHit": "$1,065,037",
        "projectedCapHitPercentage": "0.010240741",
        "projectedTotalValue": "$1,065,037",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "jack-studnicka",
        "name": "Studnicka, Jack",
        "team": "FLA",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "oskar-sundqvist",
        "name": "Sundqvist, Oskar",
        "team": "STL",
        "projectedLength": "1",
        "projectedCapHit": "$1,484,600",
        "projectedCapHitPercentage": "0.0143",
        "projectedTotalValue": "$1,484,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "fedor-svechkov",
        "name": "Svechkov, Fedor",
        "team": "NSH",
        "projectedLength": "2",
        "projectedCapHit": "$1,908,400",
        "projectedCapHitPercentage": "0.0184",
        "projectedTotalValue": "$3,816,800",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "cam-talbot",
        "name": "Talbot, Cam",
        "team": "DET",
        "projectedLength": "1",
        "projectedCapHit": "$2,059,200",
        "projectedCapHitPercentage": "0.019799999999999998",
        "projectedTotalValue": "$2,059,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "vladimir-tarasenko",
        "name": "Tarasenko, Vladimir",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$3,068,000",
        "projectedCapHitPercentage": "0.029500000000000002",
        "projectedTotalValue": "$3,068,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "daniil-tarasov",
        "name": "Tarasov, Daniil",
        "team": "FLA",
        "projectedLength": "1",
        "projectedCapHit": "$1,593,280",
        "projectedCapHitPercentage": "0.015300000000000001",
        "projectedTotalValue": "$1,593,280",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "henry-thrun",
        "name": "Thrun, Henry",
        "team": "TOR",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jonathan-toews",
        "name": "Toews, Jonathan",
        "team": "WPG",
        "projectedLength": "1",
        "projectedCapHit": "$1,451,377",
        "projectedCapHitPercentage": "0.013999999999999999",
        "projectedTotalValue": "$1,451,377",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "eeli-tolvanen",
        "name": "Tolvanen, Eeli",
        "team": "SEA",
        "projectedLength": "4",
        "projectedCapHit": "$3,954,400",
        "projectedCapHitPercentage": "0.038",
        "projectedTotalValue": "$15,817,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "philip-tomasino",
        "name": "Tomasino, Philip",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jacob-trouba",
        "name": "Trouba, Jacob",
        "team": "ANA",
        "projectedLength": "4",
        "projectedCapHit": "$6,505,672",
        "projectedCapHitPercentage": "0.0626",
        "projectedTotalValue": "$26,022,690",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "alex-tuch",
        "name": "Tuch, Alex",
        "team": "BUF",
        "projectedLength": "8",
        "projectedCapHit": "$10,631,400",
        "projectedCapHitPercentage": "0.10220000000000001",
        "projectedTotalValue": "$85,051,200",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "riley-tufte",
        "name": "Tufte, Riley",
        "team": "BOS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "james-van-riemsdyk",
        "name": "van Riemsdyk, James",
        "team": "DET",
        "projectedLength": "1",
        "projectedCapHit": "$1,086,150",
        "projectedCapHitPercentage": "0.0104",
        "projectedTotalValue": "$1,086,150",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "trevor-van-riemsdyk",
        "name": "van Riemsdyk, Trevor",
        "team": "WSH",
        "projectedLength": "2",
        "projectedCapHit": "$2,587,000",
        "projectedCapHitPercentage": "0.024900000000000002",
        "projectedTotalValue": "$5,174,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "vitek-vanecek",
        "name": "Vanecek, Vitek",
        "team": "UTAH",
        "projectedLength": "1",
        "projectedCapHit": "$1,003,600",
        "projectedCapHitPercentage": "0.0097",
        "projectedTotalValue": "$1,003,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "joe-veleno",
        "name": "Veleno, Joe",
        "team": "MTL",
        "projectedLength": "1",
        "projectedCapHit": "$975,000",
        "projectedCapHitPercentage": "0.009399999999999999",
        "projectedTotalValue": "$975,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "jeffrey-viel",
        "name": "Viel, Jeffrey",
        "team": "BOS",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "marshall-warren",
        "name": "Warren, Marshall",
        "team": "NYI",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "colton-white",
        "name": "White, Colton",
        "team": "NJD",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "ryan-winterton",
        "name": "Winterton, Ryan",
        "team": "SEA",
        "projectedLength": "2",
        "projectedCapHit": "$1,127,437",
        "projectedCapHitPercentage": "0.0108",
        "projectedTotalValue": "$2,254,874",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "arber-xhekaj",
        "name": "Xhekaj, Arber",
        "team": "MTL",
        "projectedLength": "1",
        "projectedCapHit": "$1,478,533",
        "projectedCapHitPercentage": "0.014199999999999999",
        "projectedTotalValue": "$1,478,533",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "kailer-yamamoto",
        "name": "Yamamoto, Kailer",
        "team": "UTAH",
        "projectedLength": "2",
        "projectedCapHit": "$1,229,800",
        "projectedCapHitPercentage": "0.0118",
        "projectedTotalValue": "$2,459,600",
        "status": "UFA",
        "arb": ""
      },
      {
        "slug": "egor-zamula",
        "name": "Zamula, Egor",
        "team": "PIT",
        "projectedLength": "1",
        "projectedCapHit": "$850,000",
        "projectedCapHitPercentage": "0.008199999999999999",
        "projectedTotalValue": "$850,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "trevor-zegras",
        "name": "Zegras, Trevor (LT)",
        "team": "PHI",
        "projectedLength": "6",
        "projectedCapHit": "$8,455,200",
        "projectedCapHitPercentage": "0.08130000000000001",
        "projectedTotalValue": "$50,731,200",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "trevor-zegras",
        "name": "Zegras, Trevor (ST)",
        "team": "PHI",
        "projectedLength": "1",
        "projectedCapHit": "$5,876,000",
        "projectedCapHitPercentage": "0.0565",
        "projectedTotalValue": "$5,876,000",
        "status": "RFA",
        "arb": "ARB"
      },
      {
        "slug": "olen-zellweger",
        "name": "Zellweger, Olen (LT)",
        "team": "ANA",
        "projectedLength": "7",
        "projectedCapHit": "$7,287,800",
        "projectedCapHitPercentage": "0.0701",
        "projectedTotalValue": "$51,014,600",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "olen-zellweger",
        "name": "Zellweger, Olen (ST)",
        "team": "ANA",
        "projectedLength": "2",
        "projectedCapHit": "$4,085,466",
        "projectedCapHitPercentage": "0.0393",
        "projectedTotalValue": "$8,170,933",
        "status": "RFA",
        "arb": ""
      },
      {
        "slug": "mats-zuccarello",
        "name": "Zuccarello, Mats",
        "team": "MIN",
        "projectedLength": "1",
        "projectedCapHit": "$3,881,280",
        "projectedCapHitPercentage": "0.0373",
        "projectedTotalValue": "$3,881,280",
        "status": "UFA",
        "arb": ""
      }
    ],
    "seasons": [
      {
        "season": "2034-35",
        "salaryCap": "$169,800,000"
      },
      {
        "season": "2033-34",
        "salaryCap": "$161,700,000"
      },
      {
        "season": "2032-33",
        "salaryCap": "$154,000,000"
      },
      {
        "season": "2031-32",
        "salaryCap": "$146,700,000"
      },
      {
        "season": "2030-31",
        "salaryCap": "$139,100,000"
      },
      {
        "season": "2029-30",
        "salaryCap": "$131,200,000"
      },
      {
        "season": "2028-29",
        "salaryCap": "$122,600,000"
      },
      {
        "season": "2027-28",
        "salaryCap": "$113,500,000"
      },
      {
        "season": "2026-27",
        "salaryCap": "$104,000,000"
      },
      {
        "season": "2025-26",
        "salaryCap": "$95,500,000"
      }
    ],
    "nextGame": {
      "gameId": 2025021103,
      "startTimeUTC": "2026-03-21T20:00:00Z",
      "awayTeam": {
        "tricode": "PHI",
        "slug": "philadelphia_flyers",
        "name": "Philadelphia Flyers",
        "record": "33-23-12"
      },
      "homeTeam": {
        "tricode": "SJS",
        "slug": "san_jose_sharks",
        "name": "San Jose Sharks",
        "record": "32-29-6"
      }
    }
  },
  "__N_SSG": true
}