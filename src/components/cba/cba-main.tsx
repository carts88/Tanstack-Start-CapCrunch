import { contractVariability, contractTypes, entryDraft, freeAgency, expirationStatus, buyoutCba } from "./config";
import { ISection } from "./types";
import { CBANavigator } from "./reusable/cba-navigator";

interface ICBASection {
  trigger: string;
  sections: ISection[];
}

export const CBA_SECTIONS: ICBASection[] = [
  {
    trigger: "Contracts",
    sections: [
      contractVariability,
      contractTypes
      /**
       * 
       */
    ]
  },
  {
    trigger: "Players",
    sections: [
      expirationStatus,
      freeAgency
      /**
       * Trade Clauses - types, eligibility
       * define accruedSeason, proSeason, etc
       * Expiration Status
       * arbitration
       * Player Representation
       * tryouts pto/ato
       * */
    ],
  },
  
  {
    trigger: "Entry Draft",
    sections: [
      entryDraft
    ]
  },
  
  {
    trigger: "Roster Moves / Transactions",
    sections: [
      buyoutCba
      /**
       * buyouts, contract terminations
       * roster designations -- minors, nhl, ir, ltir, seir, soir, buried,
       * what is a reserve list
       * waivers
       * post trade deadline rules
       */
    ]
  },
  {
    trigger: "Roster Accounting / Salary Cap",
    sections: [
      /***
       * upper & lower limit, retained Salary limit, 
       * playoff salary cap,
       * long term injured reserve cap implications
       * bonuses / overages
       * how is the salary cap calculated
       * unique caphit calculations
       */
    ]
  }
]

const CbaMain = () => {
  return (
    <div className="p-4 max-w-6xl h-screen mx-auto space-y-10">
      
      <CBANavigator sections={CBA_SECTIONS}/>
    </div>
  );
};

export default CbaMain;