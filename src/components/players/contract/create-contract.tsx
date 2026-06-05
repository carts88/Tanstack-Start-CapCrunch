import { Toaster } from "@/components/ui/sonner";
import { useState, ReactNode } from "react";
import { FilePlus2 } from "lucide-react";
import { ContractInfo } from "../../manage-contract/build-contract/contract-info,";
import { ContractFormValues } from "../../manage-contract/contract-grid.types";
import { emptyYear, getCalculatedCapHit } from "../../manage-contract/contract-grid.utils";
import { ContractYearGrid } from "../../manage-contract/contract-grid";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSignContract } from "../hooks/use-sign-contract";
import { CURRENT_SEASON } from "@/lib/constants/hockey";
import { FloatingBarButton } from "@/components/ui/advanced/floating-bar";
import type{ IPlayerMeta } from "../transactions/add-transaction-form";

interface CreateContractProps {
  playerMeta: IPlayerMeta
  /** Override the Sheet trigger entirely with your own element */
  trigger?: ReactNode;
}

export function CreateContract({ playerMeta, trigger }: CreateContractProps) {
  const { playerId, fullName, currentTeam, birthDate } = playerMeta;
  const [open, setOpen] = useState(false);

  const [contract, setContract] = useState<ContractFormValues>({
    startYear: CURRENT_SEASON,
    signingDate: new Date(),
    signingTeam: currentTeam,
    contractType: "SPC",
    years: [{ ...emptyYear(), season: CURRENT_SEASON }],
  });

  const calculatedCapHit = contract ? getCalculatedCapHit(contract.years) : 0;
  const { mutate, isPending, isError, error } = useSignContract(playerId, {
    onSuccess: () => setOpen(false),
  });

  const defaultTrigger = (
    <FloatingBarButton
      icon={<FilePlus2 size={16} />}
      label="Contract"
      tooltip="Add contract"
    />
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {trigger ?? defaultTrigger}
      </SheetTrigger>

      <SheetContent className="w-3/4 overflow-y-auto">
        <SheetHeader className="pb-4 border-b border-border">
          <div className="flex items-baseline gap-3">
            <SheetTitle className="text-2xl font-bold tracking-tight">
              {fullName}
            </SheetTitle>
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              New Contract
            </span>
          </div>
        </SheetHeader>

        <div className="w-7xl m-auto my-5">
          <ContractInfo
            isModalNested
            contract={contract}
            updateContract={(updater) => setContract((prev) => updater(prev))}
            handleLengthChange={(newLen) => {
              setContract((prev) => {
                const years =
                  newLen > prev.years.length
                    ? [
                        ...prev.years,
                        ...Array.from({ length: newLen - prev.years.length }, (_, i) => ({
                          ...emptyYear(),
                          season: prev.startYear + prev.years.length + i,
                        })),
                      ]
                    : prev.years.slice(0, newLen);
                return { ...prev, years };
              });
            }}
            handleSigningTeamChange={(team) =>
              setContract((prev) => ({ ...prev, signingTeam: team }))
            }
            handleSetSigningDate={(date) =>
              date && setContract((prev) => ({ ...prev, signingDate: date }))
            }
            handleContractTypeChange={(type) =>
              type && setContract((prev) => ({ ...prev, contractType: type }))
            }
          />

          <ContractYearGrid
            calculatedCapHit={calculatedCapHit}
            contract={contract}
            setContract={setContract}
          />
        </div>

        <button
          onClick={() => mutate(contract)}
          disabled={isPending}
          className="mt-6 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? "Signing…" : "Sign Contract"}
        </button>
        <Toaster 
          toastOptions={{
            "duration": 1000
          }}
        />
        {isError && (
          <p className="mt-2 text-sm text-destructive">
            {error?.message ?? "Something went wrong"}
          </p>
        )}
      </SheetContent>
    </Sheet>
  );
}