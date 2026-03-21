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
];


export interface NHLTeamMetaData {
  label: string;
  value: string;
  division: string;
  teamSlug: string;
  primaryColor: string;
  secondColor: string;
  established?: number;
  thirdColor?: string | null 
  basecolor?: string | null 
  affiliates?: { 
      league: string;
      team: string;
      slug: string;
    }[]
}


export const nhlTeams: NHLTeamMetaData[] = [
  {
    label: "Anaheim Ducks",
    value: "ANA",
    division: "Pacific",
    teamSlug: "anaheim-ducks",
    primaryColor: "#CF4520",
    secondColor: "#010101",
    thirdColor: "#89734C",
    affiliates: [],
  },
  {
    label: "Boston Bruins",
    value: "BOS",
    division: "Atlantic",
    teamSlug: "boston-bruins",
    primaryColor: "#010101",
    secondColor: "#FFB81C",
    thirdColor: null,
    affiliates: [],

  },
  {
    label: "Buffalo Sabres",
    value: "BUF",
    division: "Atlantic",
    teamSlug: "buffalo-sabres",
    primaryColor: "#003087",
    secondColor: "#FFB81C",
    thirdColor: "#C8102E",
    affiliates: [],
  },
  {
    label: "Calgary Flames",
    value: "CGY",
    division: "Pacific",
    teamSlug: "calgary-flames",
    primaryColor: "#C8102E",
    secondColor: "#F1BE48",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Carolina Hurricanes",
    value: "CAR",
    division: "Metropolitan",
    teamSlug: "carolina-hurricanes",
    primaryColor: "#C8102E",
    secondColor: "#333F48",
    thirdColor: "#010101",
    affiliates: [],
  },
  {
    label: "Chicago Blackhawks",
    value: "CHI",
    division: "Central",
    teamSlug: "chicago-blackhawks",
    primaryColor: "#C8102E",
    secondColor: "#010101",
    thirdColor: "#CC8A00",
    affiliates: [],
  },
  {
    label: "Colorado Avalanche",
    value: "COL",
    division: "Central",
    teamSlug: "colorado-avalanche",
    primaryColor: "#6F263D",
    secondColor: "#236192",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Columbus Blue Jackets",
    value: "CBJ",
    division: "Metropolitan",
    teamSlug: "columbus-blue-jackets",
    primaryColor: "#041E42",
    secondColor: "#C8102E",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Dallas Stars",
    value: "DAL",
    division: "Central",
    teamSlug: "dallas-stars",
    primaryColor: "#00843D",
    secondColor: "#010101",
    thirdColor: "#A2AAAD",
    affiliates: [],
  },
  {
    label: "Detroit Red Wings",
    value: "DET",
    division: "Atlantic",
    teamSlug: "detroit-red-wings",
    primaryColor: "#C8102E",
    secondColor: "#FFFFFF",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Edmonton Oilers",
    value: "EDM",
    division: "Pacific",
    teamSlug: "edmonton-oilers",
    primaryColor: "#00205B",
    secondColor: "#CF4520",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Florida Panthers",
    value: "FLA",
    division: "Atlantic",
    teamSlug: "florida-panthers",
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
    teamSlug: "los-angeles-kings",
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
    teamSlug: "minnesota-wild",
    primaryColor: "#154734",
    secondColor: "#A6192E",
    thirdColor: "#EAAA00",
    affiliates: [],
  },
  {
    label: "Montreal Canadiens",
    value: "MTL",
    division: "Atlantic",
    teamSlug: "montreal-canadiens",
    primaryColor: "#A6192E",
    secondColor: "#001E62",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Nashville Predators",
    value: "NSH",
    division: "Central",
    teamSlug: "nashville-predators",
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
    teamSlug: "new-jersey-devils",
    primaryColor: "#C8102E",
    secondColor: "#010101",
    thirdColor: "#046A38",
    affiliates: [],
  },
  {
    label: "New York Islanders",
    value: "NYI",
    division: "Metropolitan",
    teamSlug: "new-york-islanders",
    primaryColor: "#003087",
    secondColor: "#FC4C02",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "New York Rangers",
    value: "NYR",
    division: "Metropolitan",
    teamSlug: "new-york-rangers",
    primaryColor: "#0032A0",
    secondColor: "#C8102E",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Ottawa Senators",
    value: "OTT",
    division: "Atlantic",
    teamSlug: "ottawa-senators",
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
  teamSlug: "philadelphia-flyers",
  established: 1967,
  primaryColor: "#CF4520",
  secondColor: "#010101",
  thirdColor: "#ffffff",
  basecolor: "#000000",
  affiliates: [
    { 
      league: 'AHL',
      team: 'LHV',
      slug: 'lehigh-valley-phantoms'
    },
    { 
      league: 'ECHL',
      team: 'REA',
      slug: 'reading-royals'
    },
  ]
},
  {
    label: "Pittsburgh Penguins",
    value: "PIT",
    division: "Metropolitan",
    teamSlug: "pittsburgh-penguins",
    primaryColor: "#FCB514",
    secondColor: "#FFB81C",
    thirdColor: "#FCB514",
    affiliates: [],
  },
  {
    label: "San Jose Sharks",
    value: "SJS",
    division: "Pacific",
    teamSlug: "san-jose-sharks",
    primaryColor: "#006271",
    secondColor: "#010101",
    thirdColor: "#B2B4B2",
    affiliates: [],
  },
  {
    label: "Seattle Kraken",
    value: "SEA",
    division: "Pacific",
    teamSlug: "seattle-kraken",
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
    teamSlug: "st-louis-blues",
    primaryColor: "#003087",
    secondColor: "#FFB81C",
    thirdColor: "#041E42",
    affiliates: [],
  },
  {
    label: "Tampa Bay Lightning",
    value: "TBL",
    division: "Atlantic",
    teamSlug: "tampa-bay-lightning",
    primaryColor: "#00205B",
    secondColor: "#FFFFFF",
    thirdColor: "#010101",
    affiliates: [],
  },
  {
    label: "Toronto Maple Leafs",
    value: "TOR",
    division: "Atlantic",
    teamSlug: "toronto-maple-leafs",
    primaryColor: "#00205B",
    secondColor: "#FFFFFF",
    thirdColor: null,
    affiliates: [],
  },
  {
    label: "Utah Mammoth",
    value: "UTA",
    division: "Central",
    teamSlug: "utah-mammoth",
    primaryColor: "#69B3E7",
    secondColor: "#010101",
    thirdColor: "#FFFFFF",
    affiliates: [],
  },
  {
    label: "Vancouver Canucks",
    value: "VAN",
    division: "Pacific",
    teamSlug: "vancouver-canucks",
    primaryColor: "#00205B",
    secondColor: "#00843D",
    thirdColor: "#051C2C",
    affiliates: [],
  },
  {
    label: "Vegas Golden Knights",
    value: "VGK",
    division: "Pacific",
    teamSlug: "vegas-golden-knights",
    primaryColor: "#B9975B",
    secondColor: "#333F48",
    thirdColor: "#C8102E",
    affiliates: [],
  },
  {
    label: "Washington Capitals",
    value: "WSH",
    division: "Metropolitan",
    teamSlug: "washington-capitals",
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
    teamSlug: "winnipeg-jets",
    primaryColor: "#041E42",
    secondColor: "#53565A",
    thirdColor: "#004C97",
    affiliates: [],
  },
  {
    label: "Atlanta Thrashers",
    value: "ATL",
    division: "Southeast", // Former division before relocation
    teamSlug: "atlanta-thrashers",
    primaryColor: "#041E42",
    secondColor: "#53565A",
    thirdColor: "#004C97",
    affiliates: [],
  }
];



export  const contractTypes = [
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
]