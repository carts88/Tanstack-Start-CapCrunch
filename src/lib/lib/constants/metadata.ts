import { number } from "zod";
import { PlayerStatusTypes, TransactionTypes } from "../types/global-hockey-types";

export const seasons = [
  { value: "2025", label: "2025-26" },
  { value: "2024", label: "2024-25" },
  { value: "2023", label: "2023-24" },
  { value: "2022", label: "2022-23" },
  { value: "2021", label: "2021-22" },
  { value: "2020", label: "2020-21" },
  { value: "2019", label: "2019-20" },
  { value: "2018", label: "2018-19" },
  { value: "2017", label: "2017-18" },
  { value: "2016", label: "2016-17" },
  { value: "2015", label: "2015-16" },
  { value: "2014", label: "2014-15" },
  { value: "2013", label: "2013-14" },
  { value: "2012", label: "2012-13" },
  { value: "2011", label: "2011-12" },
  { value: "2010", label: "2010-11" },
  { value: "2009", label: "2009-10" },
  { value: "2008", label: "2008-09" },
  { value: "2007", label: "2007-08" },
  { value: "2006", label: "2006-07" },
  { value: "2005", label: "2005-06" },
  { value: "2004", label: "2004-05" },
] as const;

interface Affiliate {
  league: string;
  team: string;
  slug: string;
}

interface INHLTeamMeta {
  label: string;
  value: string;           // Usually the official tricode (ANA, BOS, etc.)
  division: string;
  teamSlug: string;
  primaryColor: string;
  secondColor: string;
  thirdColor: string | null;
  basecolor?: string;      // Optional - used by some teams
  established?: number;    // Optional
  tricode?: string;        // For legacy cases like Arizona
  affiliates: Affiliate[];
}

// Use const assertion for better type inference
export const nhlTeams = [
  {
    label: "Anaheim Ducks",
    value: "ANA",
    division: "Pacific",
    teamSlug: "ducks",
    primaryColor: "#CF4520",
    secondColor: "#010101",
    thirdColor: "#89734C",
    affiliates: [],
  },
  {
    label: "Boston Bruins",
    value: "BOS",
    division: "Atlantic",
    teamSlug: "bruins",
    primaryColor: "#010101",
    secondColor: "#FFB81C",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Buffalo Sabres",
    value: "BUF",
    division: "Atlantic",
    teamSlug: "sabres",
    primaryColor: "#003087",
    secondColor: "#FFB81C",
    thirdColor: "#C8102E",
    affiliates: [],
  },
  {
    label: "Calgary Flames",
    value: "CGY",
    division: "Pacific",
    teamSlug: "flames",
    primaryColor: "#C8102E",
    secondColor: "#F1BE48",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Carolina Hurricanes",
    value: "CAR",
    division: "Metropolitan",
    teamSlug: "hurricanes",
    primaryColor: "#C8102E",
    secondColor: "#333F48",
    thirdColor: "#010101",
    affiliates: [],
  },
  {
    label: "Chicago Blackhawks",
    value: "CHI",
    division: "Central",
    teamSlug: "blackhawks",
    primaryColor: "#C8102E",
    secondColor: "#010101",
    thirdColor: "#CC8A00",
    affiliates: [],
  },
  {
    label: "Colorado Avalanche",
    value: "COL",
    division: "Central",
    teamSlug: "avalanche",
    primaryColor: "#6F263D",
    secondColor: "#236192",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Columbus Blue Jackets",
    value: "CBJ",
    division: "Metropolitan",
    teamSlug: "bluejackets",
    primaryColor: "#041E42",
    secondColor: "#C8102E",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Dallas Stars",
    value: "DAL",
    division: "Central",
    teamSlug: "stars",
    primaryColor: "#00843D",
    secondColor: "#010101",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Detroit Red Wings",
    value: "DET",
    division: "Atlantic",
    teamSlug: "redwings",
    primaryColor: "#C8102E",
    secondColor: "#FFFFFF",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Edmonton Oilers",
    value: "EDM",
    division: "Pacific",
    teamSlug: "oilers",
    primaryColor: "#00205B",
    secondColor: "#CF4520",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Florida Panthers",
    value: "FLA",
    division: "Atlantic",
    teamSlug: "panthers",
    primaryColor: "#C8102E",
    secondColor: "#041E42",
    thirdColor: "#B9975B",
    basecolor: "#041E42",
    affiliates: [],
  },
  {
    label: "Los Angeles Kings",
    value: "LAK",
    division: "Pacific",
    teamSlug: "kings",
    primaryColor: "#010101",
    secondColor: "#A2AAAD",
    thirdColor: "#868787",
    basecolor: "#868787",
    affiliates: [],
  },
  {
    label: "Minnesota Wild",
    value: "MIN",
    division: "Central",
    teamSlug: "wild",
    primaryColor: "#154734",
    secondColor: "#A6192E",
    thirdColor: "#EAAA00",
    affiliates: [],
  },
  {
    label: "Montreal Canadiens",
    value: "MTL",
    division: "Atlantic",
    teamSlug: "canadiens",
    primaryColor: "#A6192E",
    secondColor: "#001E62",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Nashville Predators",
    value: "NSH",
    division: "Central",
    teamSlug: "predators",
    primaryColor: "#FFB81C",
    secondColor: "#041E42",
    basecolor: "#041E42",
    thirdColor: "#FFFFFF",
    affiliates: [],
  },
  {
    label: "New Jersey Devils",
    value: "NJD",
    division: "Metropolitan",
    teamSlug: "devils",
    primaryColor: "#C8102E",
    secondColor: "#010101",
    thirdColor: "#046A38",
    affiliates: [],
  },
  {
    label: "New York Islanders",
    value: "NYI",
    division: "Metropolitan",
    teamSlug: "islanders",
    primaryColor: "#003087",
    secondColor: "#FC4C02",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "New York Rangers",
    value: "NYR",
    division: "Metropolitan",
    teamSlug: "rangers",
    primaryColor: "#0032A0",
    secondColor: "#C8102E",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Ottawa Senators",
    value: "OTT",
    division: "Atlantic",
    teamSlug: "senators",
    primaryColor: "#010101",
    secondColor: "#C8102E",
    basecolor: "#010101",
    thirdColor: "#B9975B",
    affiliates: [],
  },
  {
    label: "Philadelphia Flyers",
    value: "PHI",
    division: "Metropolitan",
    teamSlug: "flyers",
    established: 1967,
    primaryColor: "#CF4520",
    secondColor: "#010101",
    thirdColor: "#ffffff",
    basecolor: "#000000",
    affiliates: [
      { league: "AHL", team: "LHV", slug: "lehigh-valley-phantoms" },
      { league: "ECHL", team: "REA", slug: "reading-royals" },
    ],
  },
  {
    label: "Pittsburgh Penguins",
    value: "PIT",
    division: "Metropolitan",
    teamSlug: "penguins",
    primaryColor: "#FCB514",
    secondColor: "#FFB81C",
    thirdColor: "#FCB514",
    affiliates: [],
  },
  {
    label: "San Jose Sharks",
    value: "SJS",
    division: "Pacific",
    teamSlug: "sharks",
    primaryColor: "#006271",
    secondColor: "#010101",
    thirdColor: "#B2B4B2",
    affiliates: [],
  },
  {
    label: "Seattle Kraken",
    value: "SEA",
    division: "Pacific",
    teamSlug: "kraken",
    primaryColor: "#9CDBD9",
    secondColor: "#051C2C",
    thirdColor: "#C8102E",
    basecolor: "#355464",
    affiliates: [],
  },
  {
    label: "St. Louis Blues",
    value: "STL",
    division: "Central",
    teamSlug: "blues",
    primaryColor: "#003087",
    secondColor: "#FFB81C",
    thirdColor: "#041E42",
    affiliates: [],
  },
  {
    label: "Tampa Bay Lightning",
    value: "TBL",
    division: "Atlantic",
    teamSlug: "lightning",
    primaryColor: "#00205B",
    secondColor: "#FFFFFF",
    thirdColor: "#010101",
    affiliates: [],
  },
  {
    label: "Toronto Maple Leafs",
    value: "TOR",
    division: "Atlantic",
    teamSlug: "mapleleafs",
    primaryColor: "#00205B",
    secondColor: "#FFFFFF",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Utah Mammoth",
    value: "UTA",
    division: "Central",
    teamSlug: "mammoth",
    primaryColor: "#69B3E7",
    secondColor: "#010101",
    thirdColor: "#FFFFFF",
    affiliates: [],
  },
  {
    label: "Vancouver Canucks",
    value: "VAN",
    division: "Pacific",
    teamSlug: "canucks",
    primaryColor: "#00205B",
    secondColor: "#00843D",
    thirdColor: "#051C2C",
    affiliates: [],
  },
  {
    label: "Vegas Golden Knights",
    value: "VGK",
    division: "Pacific",
    teamSlug: "goldenknights",
    primaryColor: "#B9975B",
    secondColor: "#333F48",
    thirdColor: "#C8102E",
    affiliates: [],
  },
  {
    label: "Washington Capitals",
    value: "WSH",
    division: "Metropolitan",
    teamSlug: "capitals",
    primaryColor: "#C8102E",
    secondColor: "#041E42",
    basecolor: "#041E42",
    thirdColor: "#FFFFFF",
    affiliates: [],
  },
  {
    label: "Winnipeg Jets",
    value: "WPG",
    division: "Central",
    teamSlug: "jets",
    primaryColor: "#041E42",
    secondColor: "#53565A",
    thirdColor: "#004C97",
    affiliates: [],
  },
  // Historical / Legacy teams
  {
    label: "Atlanta Thrashers",
    value: "ATL",
    division: "Southeast",
    teamSlug: "thrashers",
    primaryColor: "#041E42",
    secondColor: "#53565A",
    thirdColor: "#004C97",
    affiliates: [],
  },
  {
    label: "Arizona Coyotes",
    value: "ARI",           // Fixed to standard tricode
    tricode: "ARI",
    division: "Central",
    teamSlug: "coyotes",
    primaryColor: "#8C2633",
    secondColor: "#e2d6b5",
    thirdColor: "#111111",
    affiliates: [],
  },
] as const satisfies INHLTeamMeta[];

export const CONTRACT_TYPES = [
  {
    label: "SPC (Free agency)",
    value: "SPC-FA"
  },
  {
    label: "SPC (Extension)",
    value: "SPC-EXT"
  },
  {
    label: "Standard Contract",
    value: "SPC"
  },
  {
    label: "Entry Level Contract",
    value: "ELC"
  },
  {
    label: "ELC (Free Agency)",
    value: "ELC-FA"
  },
  {
    label: "35 Plus (Free Agency)",
    value: "35Plus-FA"
  },
  {
    label: "35 Plus (extension)",
    value: "35Plus-EXT"
  },
] as const;



export const nhlTeams2 = [
  {
    label: "Anaheim Ducks",
    value: "ducks",
    tricode: "ANA",
    division: "Pacific",
    primaryColor: "#CF4520",
    secondColor: "#010101",
    thirdColor: "#89734C",
    affiliates: [],
  },
  {
    label: "Boston Bruins",
    value: "bruins",
    tricode: "BOS",
    division: "Atlantic",
    primaryColor: "#010101",
    secondColor: "#FFB81C",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Buffalo Sabres",
    value: "sabres",
    tricode: "BUF",
    division: "Atlantic",
    primaryColor: "#003087",
    secondColor: "#FFB81C",
    thirdColor: "#C8102E",
    affiliates: [],
  },
  {
    label: "Calgary Flames",
    value: "flames",
    tricode: "CGY",
    division: "Pacific",
    primaryColor: "#C8102E",
    secondColor: "#F1BE48",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Carolina Hurricanes",
    value: "hurricanes",
    tricode: "CAR",
    division: "Metropolitan",
    primaryColor: "#C8102E",
    secondColor: "#333F48",
    thirdColor: "#010101",
    affiliates: [],
  },
  {
    label: "Chicago Blackhawks",
    value: "blackhawks",
    tricode: "CHI",
    division: "Central",
    primaryColor: "#C8102E",
    secondColor: "#010101",
    thirdColor: "#CC8A00",
    affiliates: [],
  },
  {
    label: "Colorado Avalanche",
    value: "avalanche",
    tricode: "COL",
    division: "Central",
    primaryColor: "#6F263D",
    secondColor: "#236192",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Columbus Blue Jackets",
    value: "bluejackets",
    tricode: "CBJ",
    division: "Metropolitan",
    primaryColor: "#041E42",
    secondColor: "#C8102E",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Dallas Stars",
    value: "stars",
    tricode: "DAL",
    division: "Central",
    primaryColor: "#00843D",
    secondColor: "#010101",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Detroit Red Wings",
    value: "redwings",
    tricode: "DET",
    division: "Atlantic",
    primaryColor: "#C8102E",
    secondColor: "#FFFFFF",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Edmonton Oilers",
    value: "oilers",
    tricode: "EDM",
    division: "Pacific",
    primaryColor: "#00205B",
    secondColor: "#CF4520",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Florida Panthers",
    value: "panthers",
    tricode: "FLA",
    division: "Atlantic",
    primaryColor: "#C8102E",
    secondColor: "#041E42",
    thirdColor: "#B9975B",
    basecolor: "#041E42",
    affiliates: [],
  },
  {
    label: "Los Angeles Kings",
    value: "kings",
    tricode: "LAK",
    division: "Pacific",
    primaryColor: "#010101",
    secondColor: "#A2AAAD",
    thirdColor: "#868787",
    basecolor: "#868787",
    affiliates: [],
  },
  {
    label: "Minnesota Wild",
    value: "wild",
    tricode: "MIN",
    division: "Central",
    primaryColor: "#154734",
    secondColor: "#A6192E",
    thirdColor: "#EAAA00",
    affiliates: [],
  },
  {
    label: "Montreal Canadiens",
    value: "canadiens",
    tricode: "MTL",
    division: "Atlantic",
    primaryColor: "#A6192E",
    secondColor: "#001E62",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Nashville Predators",
    value: "predators",
    tricode: "NSH",
    division: "Central",
    primaryColor: "#FFB81C",
    secondColor: "#041E42",
    basecolor: "#041E42",
    thirdColor: "#FFFFFF",
    affiliates: [],
  },
  {
    label: "New Jersey Devils",
    value: "devils",
    tricode: "NJD",
    division: "Metropolitan",
    primaryColor: "#C8102E",
    secondColor: "#010101",
    thirdColor: "#046A38",
    affiliates: [],
  },
  {
    label: "New York Islanders",
    value: "islanders",
    tricode: "NYI",
    division: "Metropolitan",
    primaryColor: "#003087",
    secondColor: "#FC4C02",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "New York Rangers",
    value: "rangers",
    tricode: "NYR",
    division: "Metropolitan",
    primaryColor: "#0032A0",
    secondColor: "#C8102E",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Ottawa Senators",
    value: "senators",
    tricode: "OTT",
    division: "Atlantic",
    primaryColor: "#010101",
    secondColor: "#C8102E",
    basecolor: "#010101",
    thirdColor: "#B9975B",
    affiliates: [],
  },
  {
    label: "Philadelphia Flyers",
    value: "flyers",
    tricode: "PHI",
    division: "Metropolitan",
    established: 1967,
    primaryColor: "#CF4520",
    secondColor: "#010101",
    thirdColor: "#ffffff",
    basecolor: "#000000",
    affiliates: [
      {
        league: "AHL",
        team: "LHV",
        slug: "lehigh-valley-phantoms",
      },
      {
        league: "ECHL",
        team: "REA",
        slug: "reading-royals",
      },
    ],
  },
  {
    label: "Pittsburgh Penguins",
    value: "penguins",
    tricode: "PIT",
    division: "Metropolitan",
    primaryColor: "#FCB514",
    secondColor: "#FFB81C",
    thirdColor: "#FCB514",
    affiliates: [],
  },
  {
    label: "San Jose Sharks",
    value: "sharks",
    tricode: "SJS",
    division: "Pacific",
    primaryColor: "#006271",
    secondColor: "#010101",
    thirdColor: "#B2B4B2",
    affiliates: [],
  },
  {
    label: "Seattle Kraken",
    value: "kraken",
    tricode: "SEA",
    division: "Pacific",
    primaryColor: "#9CDBD9",
    secondColor: "#051C2C",
    thirdColor: "#C8102E",
    basecolor: "#355464",
    affiliates: [],
  },
  {
    label: "St. Louis Blues",
    value: "blues",
    tricode: "STL",
    division: "Central",
    primaryColor: "#003087",
    secondColor: "#FFB81C",
    thirdColor: "#041E42",
    affiliates: [],
  },
  {
    label: "Tampa Bay Lightning",
    value: "lightning",
    tricode: "TBL",
    division: "Atlantic",
    primaryColor: "#00205B",
    secondColor: "#FFFFFF",
    thirdColor: "#010101",
    affiliates: [],
  },
  {
    label: "Toronto Maple Leafs",
    value: "mapleleafs",
    tricode: "TOR",
    division: "Atlantic",
    primaryColor: "#00205B",
    secondColor: "#FFFFFF",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Utah Mammoth",
    value: "mammoth",
    tricode: "UTA",
    division: "Central",
    primaryColor: "#69B3E7",
    secondColor: "#010101",
    thirdColor: "#FFFFFF",
    affiliates: [],
  },
  {
    label: "Vancouver Canucks",
    value: "canucks",
    tricode: "VAN",
    division: "Pacific",
    primaryColor: "#00205B",
    secondColor: "#00843D",
    thirdColor: "#051C2C",
    affiliates: [],
  },
  {
    label: "Vegas Golden Knights",
    value: "goldenknights",
    tricode: "VGK",
    division: "Pacific",
    primaryColor: "#B9975B",
    secondColor: "#333F48",
    thirdColor: "#C8102E",
    affiliates: [],
  },
  {
    label: "Washington Capitals",
    value: "capitals",
    tricode: "WSH",
    division: "Metropolitan",
    primaryColor: "#C8102E",
    secondColor: "#041E42",
    basecolor: "#041E42",
    thirdColor: "#FFFFFF",
    affiliates: [],
  },
  {
    label: "Winnipeg Jets",
    value: "jets",
    tricode: "WPG",
    division: "Central",
    primaryColor: "#041E42",
    secondColor: "#53565A",
    thirdColor: "#004C97",
    affiliates: [],
  },
  {
    label: "Atlanta Thrashers",
    value: "thrashers",
    tricode: "ATL",
    division: "Southeast",
    primaryColor: "#041E42",
    secondColor: "#53565A",
    thirdColor: "#004C97",
    affiliates: [],
  },
  {
    label: "Arizona Coyotes",
    value: "coyotes",
    tricode: "ARI",
    division: "Central",
    primaryColor: "#8C2633",
    secondColor: "#e2d6b5",
    thirdColor: "#111111",
    affiliates: [],
  }
] as const; 

// 
export const nhlTeamSelectData = nhlTeams.map((a) => ({
        value: a.teamSlug,
        label: a.label,
        imagePath: `/logos/nhl/${a.teamSlug}.svg`,
      }))



export const ROSTER_MOVE_TRANSACTIONS_DATA: { value: TransactionTypes; label: string }[] = [
  // Contract Types
  // { value: "ELC", label: "Entry-Level Contract (ELC)" },
  // { value: "ELC-FA", label: "Entry-Level Contract - Free Agent" },
  // { value: "SPC", label: "Standard Player Contract (SPC)" },
  // { value: "SPC-FA", label: "Standard Player Contract - Free Agent" },
  // { value: "SPC-EXT", label: "Standard Player Contract - Extension" },
  // { value: "35Plus-FA", label: "35+ Contract - Free Agent" },
  // { value: "35Plus-EXT", label: "35+ Contract - Extension" },

  // Player Movement
  { value: "TO_NHL", label: "Promoted to NHL" },
  { value: "TO_MINORS", label: "Reassigned to Minors" },
  { value: "EMERGENCY_NHL_LOAN", label: "Emergency NHL Loan" },
  { value: "LOAN_EUROPE", label: "Loaned to Europe" },
  { value: "CONDITIONING_LOAN_MINORS", label: "Conditioning Loan to Minors" },
  { value: "QO_EXTENDED", label: "Recieved Qualifying Offer" },
  { value: "QO_REJECTED", label: "Did not Recieve Qualifying Offer" },

  // Injury List
  { value: "TO_LTIR", label: "Placed on Long-Term Injured Reserve (LTIR)" },
  { value: "TO_IR", label: "Placed on Injured Reserve (IR)" },
  { value: "TO_SOIR", label: "Placed on Short-term Injured Reserve" },
  { value: "TO_SEIR", label: "Placed on Season-Ending Injured Reserve" },
  { value: "ACTIVATED_FROM_LTIR", label: "Activated from LTIR" },
  { value: "ACTIVATED_FROM_IR", label: "Activated from IR" },
  { value: "ACTIVATED_FROM_SOIR", label: "Activated from SOIR" },
  { value: "ACTIVATED_FROM_SEIR", label: "Activated from SEIR" },

  // Waivers
  { value: "WAIVERS", label: "Placed on Waivers" },
  { value: "CLEARED_WAIVERS", label: "Cleared Waivers" },
  { value: "WAIVER_CLAIM", label: "Claimed off Waivers" },

  // Suspensions
  { value: "PAID_SUSPENSION", label: "Suspended With Pay" },
  { value: "UNPAID_SUSPENSION", label: "Suspended Without Pay" },
  { value: "ACTIVATED_FROM_SUSPENSION", label: "Activated from Suspension" },

  // Contract Endings
  { value: "RETIREMENT", label: "Retired" },
  { value: "TERMINATION", label: "Contract Terminated" }, // TO_FA
  // { value: "BUYOUT", label: "Bought Out" },
  { value: "SIGNED_PTO", label: "Signed Professional Tryout (PTO)" },

  // Signings & Offers
  // { value: "ACQUIRED", label: "Acquired / Signed" },
  // { value: "OFFERSHEET", label: "Offer Sheet Signed" },
  // { value: "OFFERSHEET_MATCHED", label: "Offer Sheet Matched" },
  // { value: "OFFERSHEET_NOT_MATCHED", label: "Offer Sheet Not Matched" },

  // NHLPA / Minors specific
  { value: "TO_NHLPAP", label: "To NHLPA Player Assistance Program" },
];

/**
 * 
 * @param transactionType 
 * @returns 
 */
export const getStatusForRosterMove = (transactionType: TransactionTypes): PlayerStatusTypes => {
  switch (transactionType) {
    case "TO_NHL":
    case "CLEARED_WAIVERS":
    case "WAIVER_CLAIM":
    case "EMERGENCY_NHL_LOAN":
    case "ACTIVATED_FROM_LTIR":
    case "ACTIVATED_FROM_IR":
    case "ACTIVATED_FROM_SOIR":
    case "ACTIVATED_FROM_SEIR":
    case "ACTIVATED_FROM_SUSPENSION":
      return "NHL";

    case "TO_MINORS":
    case "CONDITIONING_LOAN_MINORS":
    case "LOAN_EUROPE":
      return "AHL";

    case "TO_LTIR":
      return "LTIR";
    case "TO_IR":
      return "IR";
    case "TO_SOIR":
      return "SOIR";
    case "TO_SEIR":
      return "SEIR";

    case "WAIVERS":
      return "WAIVERS";

    case "PAID_SUSPENSION":
      return "PAID_SUSPENSION";
    case "UNPAID_SUSPENSION":
      return "UNPAID_SUSPENSION";

    case "RETIREMENT":
      return "RETIRED";

    case "QO_REJECTED":
    case "TERMINATION":
      return "FA";

    case "SIGNED_PTO":
      return "PTO";

    case "TO_NHLPAP":
      return "NHLPAP";

    default:
      return "UNKNOWN";
  }
};



export const TRANSACTION_TYPES = [
  "SPC-FA",
  "SPC-EXT",
  "SPC",
  "ELC",
  "ELC-FA",
  "35Plus-FA",
  "35Plus-EXT",
  "BUYOUT",
  "WAIVERS",
  "PAID_SUSPENSION",
  "UNPAID_SUSPENSION",
  "TO_NHL",
  "TO_MINORS",
  "TO_LTIR",
  "TO_IR",
  "TO_SOIR",
  "TO_SEIR",
  "TO_NHLPAP",
  "LOAN_EUROPE",
  "CONDITIONING_LOAN_MINORS",
  "RETIREMENT",
  "TERMINATION",
  "ACQUIRED",
  "ACTIVATED_FROM_LTIR",
  "ACTIVATED_FROM_IR",
  "ACTIVATED_FROM_SOIR",
  "ACTIVATED_FROM_SEIR",
  "EMERGENCY_NHL_LOAN",
  "CLEARED_WAIVERS",
  "WAIVER_CLAIM",
  "ACTIVATED_FROM_SUSPENSION",
  "OFFERSHEET",
  "OFFERSHEET_MATCHED",
  "OFFERSHEET_NOT_MATCHED",
  "SIGNED_PTO",
  "QO_EXTENDED",
  "QO_REJECTED",
] as const;


export const TEAM_SLUGS = [
  "ducks",
  "bruins",
  "sabres",
  "flames",
  "hurricanes",
  "blackhawks",
  "avalanche",
  "bluejackets",
  "stars",
  "redwings",
  "oilers",
  "panthers",
  "kings",
  "wild",
  "canadiens",
  "predators",
  "devils",
  "islanders",
  "rangers",
  "senators",
  "flyers",
  "penguins",
  "sharks",
  "kraken",
  "blues",
  "lightning",
  "mapleleafs",
  "mammoth",
  "canucks",
  "goldenknights",
  "capitals",
  "jets",
  "thrashers",
  "coyotes",
] as const;
