import { NavMenuItem } from "./types/navbar-types";

// ===== CONFIG =====
export const NavigationMenuConfig: NavMenuItem[] = [
  {
    trigger: "Players",
    sections: {
      headerLinks: {
        links: [
          { type: 'description', label: "All Players", href: "/players", description: "Browse all players" },
          { type: 'description', label: "Player Dashboard", href: "/player-Dashboard", description: "View player statistics" }
        ]
      },
      columnSection: {
        title: "Player Tools",
        columns: [
          {
            links: [
              { type: 'description', label: "Buyout Calculator", href: "/buyout-calculator", description: "Calculate Buyout of active nhl players or a custom contract" },
              { type: 'description',  label: "Slide Calculator", href: "/slide-calculator", description: "Calculate slide eligibility & how the contracts looks after a slide"  },
            ]
          },
          {
            links: [
              {type: 'description',  label: "Waivers Calculator", href: "/waivers-calculator", description: "Calculate the waiver status of a player"},
              {type: 'description',  label: "Contract Variability", href: "/contract-variability", description: "Build your own NHL contract, and validate it using league variability rules"},
            ]
          },
        ]
      }
    }
  },
  {
    trigger: "Teams",
    sections: {
      headerLinks: {
        links: [
          { type: 'description',label: "All Teams", href: "/teams", description: "Browse all teams" },
          {type: 'description', label: "Team Rosters", href: "/team-rosters", description: "View team rosters" }
        ]
      },
      columnSection: {
        title: "Teams",
        
        columns: [
          {
            title: "Atlantic",
            links: [
              {type: 'team', label: "Boston Bruins", href: "/boston-bruins" },
              { type: 'team',label: "Buffalo Sabres", href: "/buffalo-sabres" },
              { type: 'team',label: "Detroit Red Wings", href: "/detroit-red-wings" },
              { type: 'team',label: "Florida Panthers", href: "/florida-panthers" },
              { type: 'team',label: "Montreal Canadiens", href: "/montreal-canadiens" },
              {type: 'team', label: "Ottawa Senators", href: "/ottawa-senators" },
              { type: 'team',label: "Tampa Bay Lightning", href: "/tampa-bay-lightning" },
              {type: 'team', label: "Toronto Maple Leafs", href: "/toronto-maple-leafs" },
            ]
          },
          {
            title: "Metropolitan",
            links: [
              {type: 'team', label: "Carolina Hurricanes", href: "/carolina-hurricanes" },
              {type: 'team', label: "Columbus Blue Jackets", href: "/columbus-blue-jackets" },
              {type: 'team', label: "New Jersey Devils", href: "/new-jersey-devils" },
              {type: 'team',label: "New York Islanders", href: "/new-york-islanders" },
              { type: 'team',label: "New York Rangers", href: "/new-york-rangers" },
              {type: 'team', label: "Philadelphia Flyers", href: "/philadelphia-flyers" },
              {type: 'team', label: "Pittsburgh Penguins", href: "/pittsburgh-penguins" },
              { type: 'team',label: "Washington Capitals", href: "/washington-capitals" },
            ]
          },
          {
            title: "Central",
            links: [
              { type: 'team',label: "Arizona Coyotes", href: "/arizona-coyotes" },
              {type: 'team', label: "Chicago Blackhawks", href: "/chicago-blackhawks" },
              { type: 'team',label: "Colorado Avalanche", href: "/colorado-avalanche" },
              {type: 'team', label: "Dallas Stars", href: "/dallas-stars" },
              {type: 'team', label: "Minnesota Wild", href: "/minnesota-wild" },
              { type: 'team', label: "Nashville Predators", href: "/nashville-predators" },
              {type: 'team', label: "St. Louis Blues", href: "/st-louis-blues" },
              { type: 'team',label: "Winnipeg Jets", href: "/winnipeg-jets" },
            ]
          },
          {
            title: "Pacific",
            links: [
              { type: 'team', label: "Anaheim Ducks", href: "/anaheim-ducks" },
              {type: 'team', label: "Calgary Flames", href: "/calgary-flames" },
              {type: 'team', label: "Edmonton Oilers", href: "/edmonton-oilers" },
              {type: 'team', label: "Los Angeles Kings", href: "/los-angeles-kings" },
              { type: 'team',label: "San Jose Sharks", href: "/san-jose-sharks" },
              { type: 'team',label: "Seattle Kraken", href: "/seattle-kraken" },
              {type: 'team', label: "Vancouver Canucks", href: "/vancouver-canucks" },
              {type: 'team', label: "Vegas Golden Knights", href: "/vegas-golden-knights" },
            ]
          },
        ]
      }
    }
  },
  {
    trigger: "Info",
    sections: {
      columnSection: {
        title: "Player Tools",
        columns: [
          {
            links: [
              { type: 'description', label: "CBA", href: "/buyout-calculator", description: "Calculate Buyout of active nhl players or a custom contract" },
              { type: 'description',  label: "Slide Calculator", href: "/slide-calculator", description: "Calculate slide eligibility & how the contracts looks after a slide"  },
            ]
          }
          
        ]
      }
    }
  },
];