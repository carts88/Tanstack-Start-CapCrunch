// server/create-contract.ts
import { createServerFn } from "@tanstack/react-start";
import { PlayerStatusTypes, TeamSlugs, TransactionTypes } from "@/lib/types/global-hockey-types";
import { insertTransaction } from "../contracts";
import { getStatusForRosterMove } from "@/lib/constants/metadata";
import { updatePlayerStatus, updatePlayerTeam } from "../single-player.queries";


export interface AddPlayerTransactionInput {
  transactionId: string;
  playerId: number;
  type: TransactionTypes
  team: string;
  date: Date 
  note: string
  updateStatus: boolean
  updateTeam: boolean
}

export const addPlayerTransaction = createServerFn({
  method: "POST",
})
  .inputValidator((data: AddPlayerTransactionInput) => data)
  .handler(async ({ data }) => {
    const {
      type,
      team,
      date,
      note,
      updateStatus,
      updateTeam,
      playerId,
      transactionId
    } = data

      await insertTransaction({
        "transactionId": transactionId,
        "date": date,
        "notes": note,
        "playerId": playerId,
        "team": team,
        "type": type
      }
    );

    if(updateStatus) {
      const newStatus = getStatusForRosterMove(type) // this is a filler value, I'm going to have a function that gets the corresponding newStatus based off the transaction type
      await updatePlayerStatus({newStatus: newStatus, playerId: playerId})
    }

    if(type == "WAIVER_CLAIM") {
      
      // update to new team
      await updatePlayerTeam({
        newTeam: team as TeamSlugs,
        playerId: playerId
      })
    }

    if(type == "SIGNED_PTO") {
      
      // update to new team
        await updatePlayerTeam({
        newTeam: team as TeamSlugs,
        playerId: playerId
      })
    }

    if(updateTeam && type == "TERMINATION") {
      // update to team to null as the player no longer has a contract, and thus the team forfeits their player rights
      await updatePlayerTeam({
        newTeam: null,
        playerId: playerId
      })
    }


    return {
      success: true,
    };
  });