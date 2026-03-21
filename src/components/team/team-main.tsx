
import { getTeamMetaData } from "@/lib/utils/meta.utils"
import { teamData } from "./team-fake-data"
import { TeamInfo } from "./team-info"
import { CapOutlookCarousel } from "./cap-outlook/cap-carousel"

import {TeamStaff} from "./team-staff"
const TeamMain = () => {
    const teamInfo = getTeamMetaData("PHI")
  return (
    <div className="m-auto w-7xl">

        <div className="flex gap-6 w-full my-12">
            <TeamInfo 
            teamInfo={teamInfo}
            teamStaff={teamData.pageProps.teamStaff}
        />
        {/* <TeamStaff teamStaff={teamData.pageProps.teamStaff}        /> */}
        <CapOutlookCarousel 
          capOutlook={teamData.pageProps.capOutlook}
        />
        </div>
      
       {/**
        * TeamHeader
        * TeamInfo, TeamStaff, TeamCapOutlook
        * ---
        * TeamDraftPicks
        * ---
        * PositionGroupTables
        */}
    </div>
  )
}

export default TeamMain
