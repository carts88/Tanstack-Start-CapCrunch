import { Settings } from 'lucide-react'
import type { NavigationConfigType } from './navigation-types';

export const navigationConfig = [
    {
      trigger: "Teams",
      width: "w-[750px]",
      sections: [
        {
          title: 'Team Overviews',
          layout: 'grid',
          columns: 2,
          items: [
            {
              name: "Team Dashboard",
              description: "Comprehensive team comparison table",
              href: "/teams/dashboard",
              type: "featured"
            },
            {
              name: "Team Staff",
              description: "Comprehensive team staff comparison table",
              href: "/teams/staff",
              type: "featured"
            }
          ]
        },
        {
          layout: 'grid',
          columns: 4,
          isTeamColumns: true,
          items: [
            [
              {
                label: "Pacific",
                type: "title"
              },
              {
                label: "Anaheim Ducks",
                href: "/anaheim-ducks",
                type: "team"
              },
              {
                label: "Calgary Flames",
                href: "/calgary-flames",
                type: "team"
              },
              {
                label: "Edmonton Oilers",
                href: "/edmonton-oilers",
                type: "team"
              },
              {
                label: "Los Angeles Kings",
                href: "/los-angeles-kings",
                type: "team"
              },
              {
                label: "San Jose Sharks",
                href: "/san-jose-sharks",
                type: "team"
              },
              {
                label: "Seattle Kraken",
                href: "/seattle-kraken",
                type: "team"
              },
              {
                label: "Vancouver Canucks",
                href: "/vancouver-canucks",
                type: "team"
              },
              {
                label: "Vegas Golden Knights",
                href: "/vegas-golden-knights",
                type: "team"
              },
            ],
            [
              {
                label: "Central",
                type: "title"
              },
              {
                label: "Arizona Coyotes",
                href: "/arizona-coyotes",
                type: "team"
              },
              {
                label: "Chicago Blackhawks",
                href: "/chicago-blackhawks",
                type: "team"
              },
              {
                label: "Colorado Avalanche",
                href: "/colorado-avalanche",
                type: "team"
              },
              {
                label: "Dallas Stars",
                href: "/dallas-stars",
                type: "team"
              },
              {
                label: "Minnesota Wild",
                href: "/minnesota-wild",
                type: "team"
              },
              {
                label: "Nashville Predators",
                href: "/nashville-predators",
                type: "team"
              },
              {
                label: "St. Louis Blues",
                href: "/st-louis-blues",
                type: "team"
              },
              {
                label: "Winnipeg Jets",
                href: "/winnipeg-jets",
                type: "team"
              },
            ],
            [
              {
                label: "Metropolitan",
                type: "title"
              },
              {
                label: "Carolina Hurricanes",
                href: "/carolina-hurricanes",
                type: "team"
              },
              {
                label: "Columbus Blue Jackets",
                href: "/columbus-blue-jackets",
                type: "team"
              },
              {
                label: "New Jersey Devils",
                href: "/new-jersey-devils",
                type: "team"
              },
              {
                label: "New York Islanders",
                href: "/new-york-islanders",
                type: "team"
              },
              {
                label: "New York Rangers",
                href: "/new-york-rangers",
                type: "team"
              },
              {
                label: "Philadelphia Flyers",
                href: "/philadelphia-flyers",
                type: "team"
              },
              {
                label: "Pittsburgh Penguins",
                href: "/pittsburgh-penguins",
                type: "team"
              },
              {
                label: "Washington Capitals",
                href: "/washington-capitals",
                type: "team"
              },
            ],
            [
              {
                label: "Atlantic",
                type: "title"
              },
              {
                label: "Boston Bruins",
                href: "/boston-bruins",
                type: "team"
              },
              {
                label: "Buffalo Sabres",
                href: "/buffalo-sabres",
                type: "team"
              },
              {
                label: "Detroit Red Wings",
                href: "/detroit-red-wings",
                type: "team"
              },
              {
                label: "Florida Panthers",
                href: "/florida-panthers",
                type: "team"
              },
              {
                label: "Montreal Canadiens",
                href: "/montreal-canadiens",
                type: "team"
              },
              {
                label: "Ottawa Senators",
                href: "/ottawa-senators",
                type: "team"
              },
              {
                label: "Tampa Bay Lightning",
                href: "/tampa-bay-lightning",
                type: "team"
              },
              {
                label: "Toronto Maple Leafs",
                href: "/toronto-maple-leafs",
                type: "team"
              },
            ]
          ]
        }
      ]
    },
    {
      trigger: "Players",
      width: "w-[600px]",
      sections: [
        {
          title: "Quick Access",
          layout: "list",
          items: [
            {
              name: "Player Dashboard",
              description: "Comprehensive player stats and management",
              href: "/players/dashboard",
              type: "featured"
            },
            
          ]
        },
        {
          title: "Calculators",
          layout: "grid",
          columns: 2,
          items: [
            // {
            //   name: "Slide Calculator",
            //   description: "Determine entry-level sliding scale values",
            //   href: "/calculators/slide",
            //   type: "grid"
            // },
            // {
            //   name: "Waivers Calculator",
            //   description: "Calculate waiver priorities and claims",
            //   href: "/calculators/waivers",
            //   type: "grid"
            // },
            {
              name: "Contract Variability Calculator",
              description: "Analyze contract variance and performance bonuses",
              href: "/calculators/contract-variability",
              type: "description"
            },
            // {
            //   name: "Qualifying Offer Calculator",
            //   description: "Calculate qualifying offer amounts and implications",
            //   href: "/calculators/qualifying-offer",
            //   type: "grid"
            // },
            // {
            //   name: "Offersheet Calculator",
            //   description: "Calculate required offersheet compensation",
            //   href: "/calculators/offersheet-calculator",
            //   type: "grid"
            // },
            {
              name: "Buyout Calculator",
              description: "Calculate contract buyout costs with custom options",
              href: "/calculators/buyout",
              type: "side",
              buttons: [
                {
                  label: "Custom",
                  href: "/calculators/buyout/custom",
                  icon: Settings
                }
              ]
            },
            
          ]
        }
      ]
    },
    // {
    //   trigger: "Interactive",
    //   width: "w-[350px]",
    //   sections: [
    //     {
    //       items: [
    //         {
    //           name: "Trade Builder",
    //           href: "/trade-builder",
    //           type: "side",
    //           description: 'Build and propose a mock trade',
    //           buttons: [
    //             {
    //               label: "Create",
    //               href: "/trade-builder/create",
    //               icon: CreateIcon
    //             },
    //             {
    //               label: "Drafts",
    //               href: "/trade-builder/drafts",
    //               icon: DraftsIcon
    //             }
    //           ]
    //         },
    //         {
    //           name: "Rank Machine",
    //           href: "/rank-machine",
    //           type: "side",
    //           description: 'Intuitive rankings tool for active players, prospects, and draft eligibles.',
    //           buttons: [
    //             {
    //               label: "Create",
    //               href: "/rank-machine/create",
    //               icon: CreateIcon
    //             },
    //             {
    //               label: "Drafts",
    //               href: "/rank-machine/drafts",
    //               icon: DraftsIcon
    //             }
    //           ]
    //         },
    //         {
    //           name: "Roster Builder",
    //           href: "/roster-builder",
    //           type: "side",
    //           description: 'Intuitive roster building tool, that allows you to play pretend GM and share your ideas.',
    //           buttons: [
    //             {
    //               label: "Create",
    //               href: "/roster-builder/create",
    //               icon: CreateIcon
    //             },
    //             {
    //               label: "Drafts",
    //               href: "/roster-builder/drafts",
    //               icon: DraftsIcon
    //             }
    //           ]
    //         },
    //       ]
    //     }
    //   ]
    // },
    {
      trigger: "Transactions",
      width: "w-[250px]",
      sections: [
        {
          items: [
            {
              name: "Trades",
              href: "/trades",
              type: "description",
              description: 'View, and filter through league trades'
            },
            {
              name: "Signings",
              href: "/signings",
              type: "description",
              description: 'View, and filter through league signings'
            },
            {
              name: "Roster Moves",
              href: "/transactions",
              type: "description",
              description: 'View, and filter day to day roster-moves'
            },
            {
              name: "Drafts",
              href: "/drafts/2025",
              type: "description",
              description: 'View, and filter through league drafts by year'
            },
          ]
        }
      ]
    },
    {
      trigger: "League",
      width: "w-[250px]",
      sections: [
        {
          items: [
            {
              name: "CBA / faqs",
              href: "/cba",
              type: "description",
              description: 'Read about the collective bargaining agreement and frequently asked questions'
            },
            {
              name: "League Schedule",
              href: "/league-schedule",
              type: "description",
              description: 'See the full league important dates, for current and previous seasons'
            },
          ]
        }
      ]
    }
  ] as NavigationConfigType;

