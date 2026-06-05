// components/manage-contract/transaction-schema.ts
import { z } from "zod";
import { formOptions } from "@tanstack/react-form";
import { TEAM_SLUGS, TRANSACTION_TYPES } from "@/lib/constants/metadata";
import { IPlayerMeta } from "./add-transaction-form";

export const transactionSchema = z.object({
  team: z.enum(TEAM_SLUGS),
  type: z.enum(TRANSACTION_TYPES),
  date: z.date({ error: "Must enter a date" }),
  notes: z.string().default(""),
  updateStatus: z.boolean().default(false),
  updateTeam:  z.boolean().default(false),
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;

// Base options (without player-specific data)
export const baseTransactionFormOpts = formOptions({
  defaultValues: {
    team: "" as typeof TEAM_SLUGS[number],
    type: "" as typeof TRANSACTION_TYPES[number],
    date: undefined as unknown as Date,
    notes: "",
    updateStatus: false,
    updateTeam: false
  } satisfies Partial<TransactionFormValues>,
});

// transaction-schema.ts
export function createTransactionFormOpts(playerMeta?: IPlayerMeta) {
  return formOptions({
    ...baseTransactionFormOpts,
    defaultValues: {
      ...baseTransactionFormOpts.defaultValues,
      team: playerMeta?.currentTeam
    },
    context: {
      playerMeta,
    },
  });
}