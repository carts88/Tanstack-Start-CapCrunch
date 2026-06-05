// server/create-contract.ts
import { createServerFn } from "@tanstack/react-start";
import { deleteAllContractYears, deleteContractInfo, deleteTransaction } from "../contracts";
import { sql } from "@/data/db";

export interface DeleteContractInput {
  playerId: number;
  contractId: string;
}

export const deleteContractById = createServerFn({
  method: "POST",
})
  .inputValidator((data: DeleteContractInput) => data)
  .handler(async ({ data }) => {

  await sql.transaction(
        [
          deleteAllContractYears(data.contractId), 
          deleteTransaction(data.contractId),
          deleteContractInfo(data.contractId)
        ]
      )
       
    return {
      success: true,
    };
  });