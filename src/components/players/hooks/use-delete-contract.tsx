// components/manage-contract/use-add-player-transaction.ts
import { deleteContractById, DeleteContractInput } from "@/data/players/server/delete-contract";
import { useMutation } from "@tanstack/react-query";

interface UseDeleteContractOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useDeleteContract({
  onSuccess,
  onError,
}: UseDeleteContractOptions = {}) {
  return useMutation({
    mutationFn: (input: DeleteContractInput) =>
      deleteContractById({ data: input }),
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: Error, data) => {
      console.error("Failed delete contract for contractId:", data.contractId, error);
      onError?.(error);
    },
  });
}