import { Table, TableCell, TableBody, TableHeader, TableHead, TableRow } from "@/components/ui/table"
import { DraftPick } from "./draft-pick"
import { getTeamMetaData } from "@/lib/utils/meta.utils"

type Round = 1 | 2 | 3 | 4 | 5 | 6 | 7

interface IPickCondition {
    type: "PROTECTED" | "CHOICE" | "PERFORMANCE"
    note: string
}

interface IDraftPick {
    pickId: string
    round: number
    originalOwner: string
    currentOwner: string
    conditions: IPickCondition[]
    trade?: {
        date: string
        tradeId: string
    }
}

interface IYearPicks {
    year: number
    rounds: Record<Round, IDraftPick[]>
}

interface IDraftPicksTable {
    draftpicks?: IYearPicks[]
    teamSlug: string // "PHI"
}

const COLUMN_NAMES = ["YEAR", "Round 1", "Round 2","Round 3", "Round 4", "Round 5", "Round 6", "Round 7"]
const ROUNDS: Round[] = [1,2,3,4,5,6,7]

export const DraftPicksTable = ({ draftpicks, teamSlug}: IDraftPicksTable) => {

    return(
        <Table>
            <TableHeader>
                <TableRow>
                    {COLUMN_NAMES.map((round)=> (
                        <TableHead 
                            className={round === "YEAR" ? "bg-muted/20" : ""} 
                            key={round}
                        >
                            {round}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody>
                {draftpicks?.map((yearData) => (
                    <TableRow key={yearData.year}>
                        
                        {/* YEAR */}
                        <TableCell className="bg-muted/60">
                            {yearData.year}
                        </TableCell>

                        {/* ROUNDS */}
                        {ROUNDS.map((round) => {
                            const picks = yearData.rounds[round] || []

                            return (
                                <TableCell
                                key={round}>
                                   

                                    <div className="flex flex-row gap-1">
                                        {picks.map((pick) => {
                                            return (
                                                <DraftPick
                                                key={pick.pickId}
                                                draftpick={{
                                                    pickId: pick.pickId,
                                                    round: pick.round,
                                                    conditions: pick.conditions,
                                                    team: pick.originalOwner,
                                                    teamSlug: pick.originalOwner,
                                                    isTraded: pick.currentOwner !== teamSlug,
                                                    isForfeited: false // adjust if you add this later
                                                }}
                                            />
                                            )
                                        })}
                                    </div>
                                </TableCell>
                            )
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}