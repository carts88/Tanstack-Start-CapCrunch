// components/manage-contract/add-transaction-form.tsx
import { useForm } from "@tanstack/react-form";
import { createTransactionFormOpts } from "./add-transaction.schema";
import { useAddPlayerTransaction } from "../hooks/use-add-player-transaction";
import { nhlTeamSelectData, ROSTER_MOVE_TRANSACTIONS_DATA } from "@/lib/constants/metadata";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import SelectWithSearchImage from "@/components/ui/advanced/select-with-search";


export interface IPlayerMeta {
  playerId: number;
  fullName: string;
  birthDate: string | Date;
  currentTeam: string;
}

interface AddTransactionFormProps {
  playerMeta: IPlayerMeta;
  onSuccess?: () => void;
}

export function AddTransactionForm({
  playerMeta,
  onSuccess,
}: AddTransactionFormProps) {
  const { mutate, isPending } = useAddPlayerTransaction({ onSuccess });

  const form = useForm({
    ...createTransactionFormOpts(playerMeta),
    onSubmit: async ({ value }) => {
      mutate({
        transactionId: crypto.randomUUID(),
        playerId: playerMeta.playerId,
        type: value.type,
        team: value.team as string,
        date: value.date,
        note: value.notes,
        updateStatus: value.updateStatus,
        updateTeam: value.updateTeam
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      {/* Transaction Type */}
      <form.Field
        name="type"
        validators={{
          onChange: ({ value }) =>
            !value ? "Transaction type is required" : undefined,
        }}
      >
        {(field) => (
          <div className="space-y-1.5">
            <label
              htmlFor={field.name}
              className="block text-xs font-semibold tracking-widest text-zinc-400 uppercase"
            >
              Transaction Type
            </label>
            <SelectWithSearchImage
              id="type"
              modal={true}
              value={field.state.value ?? ""}
              onValueChange={(value) => field.handleChange(value as any)}
              subject="contract type"
              placeholder="Set Contract type"
              items={ROSTER_MOVE_TRANSACTIONS_DATA}
            />

            {field.state.meta.errors.length > 0 && (
              <p className="text-xs text-red-400 mt-1">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Team */}
      <form.Field
        name="team"
        validators={{
          onChange: ({ value }) =>
            !value ? "Team is required" : undefined,
        }}
      >
        {(field) => (
          <div className="space-y-1.5">
            <label
              htmlFor="team"
              className="block text-xs font-semibold tracking-widest text-zinc-400 uppercase"
            >
              Team
            </label>
            <SelectWithSearchImage
              id="team"
              modal={true}
              value={field.state.value ?? ""}
              onValueChange={(value) => field.handleChange(value)}
              subject="teams"
              placeholder="teams"
              items={nhlTeamSelectData}
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-xs text-red-400 mt-1">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Date */}
      <form.Field
        name="date"
        validators={{
          onChange: ({ value }) =>
            !value ? "Date is required" : undefined,
        }}
      >
        {(field) => (
          <div className="space-y-1.5">
            <label
              htmlFor={field.name}
              className="block text-xs font-semibold tracking-widest text-zinc-400 uppercase"
            >
              Date
            </label>
            <input
              id={field.name}
              type="date"
              name={field.name}
              value={
                field.state.value
                  ? field.state.value instanceof Date
                    ? field.state.value.toISOString().split("T")[0]
                    : field.state.value
                  : ""
              }
              onBlur={field.handleBlur}
              onChange={(e) =>
                field.handleChange(
                  e.target.value ? new Date(e.target.value) : (undefined as any)
                )
              }
              className={cn(
                "w-full bg-zinc-900 border rounded-sm px-3 py-2",
                "text-sm text-zinc-100",
                "focus:outline-none focus:ring-1 focus:ring-blue-500",
                "transition-colors duration-150",
                "scheme-dark",
                field.state.meta.errors.length
                  ? "border-red-500/60"
                  : "border-zinc-700 hover:border-zinc-500"
              )}
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-xs text-red-400 mt-1">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Notes */}
      <form.Field name="notes">
        {(field) => (
          <div className="space-y-1.5">
            <label
              htmlFor={field.name}
              className="block text-xs font-semibold tracking-widest text-zinc-400 uppercase"
            >
              Notes
            </label>
            <textarea
              id={field.name}
              name={field.name}
              rows={3}
              value={field.state.value ?? ""}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Optional notes…"
              className={cn(
                "w-full bg-zinc-900 border border-zinc-700 rounded-sm px-3 py-2",
                "text-sm text-zinc-100 placeholder:text-zinc-600 resize-none",
                "focus:outline-none focus:ring-1 focus:ring-blue-500",
                "hover:border-zinc-500 transition-colors duration-150"
              )}
            />
          </div>
        )}
      </form.Field>

      {/* Update Status toggle */}
      <form.Field name="updateStatus">
        {(field) => (
          <div className="flex items-center gap-3">
            <Switch
              id="updateStatus"
              checked={field.state.value ?? false}
              onCheckedChange={(checked) => field.handleChange(checked as any)}
              onBlur={field.handleBlur}
            />
            <label
              htmlFor="updateStatus"
              className="text-xs font-semibold tracking-widest text-zinc-400 uppercase cursor-pointer"
            >
              Update Player Status
            </label>
          </div>
        )}
      </form.Field>

      <form.Field name="updateTeam">
        {(field) => (
          <div className="flex items-center gap-3">
            <Switch
              id="updateTeam"
              checked={field.state.value ?? false}
              onCheckedChange={(checked) => field.handleChange(checked as any)}
              onBlur={field.handleBlur}
            />
            <label
              htmlFor="updateTeam"
              className="text-xs font-semibold tracking-widest text-zinc-400 uppercase cursor-pointer"
            >
              Update Player Team
            </label>
          </div>
        )}
      </form.Field>

      {/* Submit */}
      <div className="pt-2 border-t border-zinc-800">
        <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting || isPending}
              className={cn(
                "w-full py-2.5 rounded-sm text-xs font-semibold tracking-widest uppercase",
                "transition-all duration-200",
                canSubmit && !isPending
                  ? "bg-blue-600 hover:bg-blue-500 text-white cursor-pointer"
                  : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
              )}
            >
              {isSubmitting || isPending ? "Saving…" : "Save Transaction"}
            </button>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
}