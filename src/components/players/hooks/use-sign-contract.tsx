// use-sign-contract.ts
import { ContractFormValues } from "@/components/manage-contract/contract-grid.types";
import { signContract } from "@/data/players/server/sign-contract";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface UseSignContractOptions {
  onSuccess?: () => void;
}

export function useSignContract(playerId: number, options?: UseSignContractOptions) {
  return useMutation({
    mutationKey: ["signContract", playerId],
    mutationFn: async (formValues: ContractFormValues) => {
      return signContract({
        data: {
          ...formValues,
          playerId,
          contractId: `${playerId}${formValues.startYear}`,
        },
      });
    },
    onSuccess: (data) => {
      toast.success(`Contract signed for player #${playerId}`);
      options?.onSuccess?.();
    },
    onError: (error) => {
      toast.error(`Failed to sign contract: ${error.message}`);
    },
  });
}