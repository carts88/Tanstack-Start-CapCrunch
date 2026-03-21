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
      <Tabs defaultValue="stats">
        <TabsList className="p-2">
          <TabsTrigger className="p-3" value="contracts">
            Contracts
          </TabsTrigger>
            <TabsTrigger className="p-3" value="stats">
            Stats
          </TabsTrigger>
          </TabsList>
          <TabsContent className="my-6 space-y-5" value="contracts">
            <ContractStats projCareerSalary={0} totalContracts={0} totalGTDMoney={0} contractTypeBreakDown={{
                    elc: 0,
                    spc: 0,
                    _35Plus: 0
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
