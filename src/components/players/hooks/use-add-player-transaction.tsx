// components/manage-contract/use-add-player-transaction.ts
import { addPlayerTransaction, AddPlayerTransactionInput } from "@/data/players/server/add-player-transaction";
import { useMutation } from "@tanstack/react-query";

interface UseAddPlayerTransactionOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useAddPlayerTransaction({
  onSuccess,
  onError,
}: UseAddPlayerTransactionOptions = {}) {
  return useMutation({
    mutationFn: (input: AddPlayerTransactionInput) =>
      addPlayerTransaction({ data: input }),
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error: Error) => {
      console.error("Failed to add transaction:", error);
      onError?.(error);
    },
  });
}