
import { getTeamMetaData } from "@/lib/utils/meta.utils"
import { teamData } from "./team-fake-data"
import { TeamInfo } from "./team-info"
import { CapOutlookCarousel } from "./cap-outlook/cap-carousel"
import { DraftPicksTable } from "./draftpicks/draft-picks-table"
import {TeamStaff} from "./team-staff"

const TeamMain = () => {
    const teamInfo = getTeamMetaData("PHI")
    const {
      teamCaptains,
      teamStaff,
      
    } = teamData.pageProps
    
    return (
      <div className="m-auto h-screen w-7xl">

          <div className="flex gap-6 w-full my-12">
              <TeamInfo 
              teamInfo={teamInfo}
              teamStaff={teamStaff}
          />
          {/* <TeamStaff teamStaff={teamData.pageProps.teamStaff}        /> */}
          <CapOutlookCarousel 
            capOutlook={teamData.pageProps.capOutlook}
          />
          </div>
        <DraftPicksTable draftpicks={teamData.pageProps.draftPicks} teamSlug="philadelphia-flyers"/>
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
