import { PlayerInfoCard } from "./player-info-card"
import { ContractHistory } from "./contract/contract-history"
import { ContractStats } from "./contract/contract-stats"
import { TransactionList } from "./transactions/transaction-list"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { getObjOfArrByKey } from "@/lib/utils/array.utils"
import { nhlTeams } from "@/lib/constants/metadata"
import { CreateContract } from "../manage-contract/admin/create-contract"
import { TeamInfo } from "../team/team-info"
import { TeamTricodes } from "../custom-draft-lottery/utils"

export default function PlayerMain ({playerInfo, contracts, transactions}) {

const teamMeta = getObjOfArrByKey(nhlTeams , "teamSlug", playerInfo?.team)

    // const { deployment, stats, ...playerInfo} = player
  return (
    <div  className=" lg:max-w-7xl m-auto my-12 space-y-6">
      <PlayerInfoCard 
        teamMeta={teamMeta}
        playerInfo={playerInfo}
      />
      <TransactionList 
        title={"Transactions"}
        transactions={transactions} 
      />
      <Tabs defaultValue="contracts">
        <TabsList className="p-2">
          <TabsTrigger className="p-3" value="contracts">
            Contracts
          </TabsTrigger>
            <TabsTrigger className="p-3" value="stats">
            Stats
          </TabsTrigger>
          </TabsList>
          <TabsContent className="my-6 space-y-5" value="contracts">
            <CreateContract 
              playerMeta={{
                playerId: playerInfo.playerId,
                fullName: playerInfo.fullName,
                currentTeam:  teamMeta.value ?? "ANA",
                birthDate: new Date(playerInfo.birthDate)
              }}
            />
            {/* <ContractStats 
                    projCareerSalary={2444444} 
                    totalContracts={contracts.length} 
                    totalGTDMoney={0} 
                    contractTypeBreakDown={{
                      elc: contracts.filter((c) => c.type.includes("ELC")).length,
                      spc: contracts.filter((c) => c.type.includes("SPC")).length,
                      _35Plus: contracts.filter((c) => c.type.includes("35")).length,
                  }}        
                  
                  /> */}
                  <ContractHistory 
                    contracts={contracts}
                  />
          </TabsContent>
          <TabsContent value="stats">
            {/* <StatsTable stats={stats}              /> */}
          </TabsContent>
      </Tabs>
    </div>
  )
}