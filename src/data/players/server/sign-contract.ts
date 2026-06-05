// server/create-contract.ts
import { createServerFn } from "@tanstack/react-start";
import { ContractFormValues } from "@/components/manage-contract/contract-grid.types";
import { createContract } from "../single-player.controller";


interface CreateContractInput extends ContractFormValues {
  playerId: number;
  contractId: string;
}

export const signContract = createServerFn({
  method: "POST",
})
  .inputValidator((data: CreateContractInput) => data)
  .handler(async ({ data }) => {
    await createContract(data);
    return {
      success: true,
    };
  });