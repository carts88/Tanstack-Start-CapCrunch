import { useState } from "react";
import { ContractInfo } from "../build-contract/contract-info,";
import { ContractFormValues } from "../contract-grid.types";
import { emptyYear } from "../contract-grid.utils";
import { ContractYearGrid } from "../contract-grid";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface CreateContractProps {
  playerMeta: {
    playerId: number
    fullName: string
    birthDate: string | Date
    currentTeam: string
  }
  fullName: string
  playerId: number
  signingTeam: string
}

export function CreateContract({
  playerMeta,
}: CreateContractProps) {

  const { playerId, fullName, currentTeam, birthDate } = playerMeta

  const [contract, setContract] = useState<ContractFormValues>({
    startYear: new Date().getFullYear(),
    signingDate: new Date(),
    signingTeam: currentTeam,
    years: [emptyYear()],
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="
          inline-flex items-center gap-2 px-4 py-2
          bg-transparent border border-zinc-600
          text-zinc-400 text-xs font-semibold tracking-widest uppercase
          rounded-sm cursor-pointer
          hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5
          transition-all duration-200
        ">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Contract
        </button>
      </SheetTrigger>

      <SheetContent className="w-3/4">
        <SheetHeader className="pb-4 border-b border-zinc-800">
          <div className="flex items-baseline gap-3">
            <SheetTitle className="text-2xl font-bold tracking-tight text-white">
              {fullName}
            </SheetTitle>
            <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
              New Contract
            </span>
          </div>
        </SheetHeader>

        <div className="w-7xl m-auto my-5">
          <ContractInfo
            isModalNested
            contract={contract}
            updateContract={(updater) =>
              setContract((prev) => updater(prev))
            }
            handleLengthChange={(newLen) => {
              setContract((prev) => {
                const years =
                  newLen > prev.years.length
                    ? [
                        ...prev.years,
                        ...Array.from(
                          { length: newLen - prev.years.length },
                          emptyYear
                        ),
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
          />

          <ContractYearGrid
            mode="CUSTOM"
            contract={contract}
            onChange={setContract}
            setContract={setContract}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}