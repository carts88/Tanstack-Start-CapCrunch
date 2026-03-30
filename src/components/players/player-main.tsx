import { playerData } from "./mock-player-data"
import { PlayerInfoCard } from "./player-info-card"
import { ContractHistory } from "./contract/contract-history"
import { ContractStats } from "./contract/contract-stats"
import { TransactionList } from "./transactions/transaction-list"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const PlayerMain = () => {
    const {player, /**goals, projections, teamMates */ } = playerData
    const {contracts, transactions, deployment, stats, ...playerInfo} = player
  return (
    <div  className=" lg:max-w-7xl m-auto my-12 space-y-6">
      <PlayerInfoCard 
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
            <ContractStats 
                    projCareerSalary={2444444} 
                    totalContracts={contracts.length} 
                    totalGTDMoney={0} 
                    contractTypeBreakDown={{
                      elc: contracts.filter((c) => c.type.includes("ELC")).length,
                      spc: contracts.filter((c) => c.type.includes("SPC")).length,
                      _35Plus: contracts.filter((c) => c.type.includes("35")).length,
                  }}        
                  
                  />
                  <ContractHistory 
                  teamPrimary={playerInfo.teamPrimary}
                  teamSecondary={playerInfo.teamSecondary}
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

export default PlayerMain
