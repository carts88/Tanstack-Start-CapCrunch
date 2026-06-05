// components/manage-contract/create-contract.tsx
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode, useState } from "react";
import { AddTransactionForm } from "./add-transaction-form";
import { Button } from "@/components/ui/button";

interface CreateContractProps {
  playerMeta: {
    playerId: number;
    fullName: string;
    birthDate: string | Date;
    currentTeam: string;
    
  };
    trigger: ReactNode;
  
}

export function AddTransactionSheet({ playerMeta, trigger}: CreateContractProps) {
  const { fullName } = playerMeta;
  const [open, setOpen] = useState(false);

  

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <SheetTrigger asChild>
          {trigger}
        </SheetTrigger>
      </SheetTrigger>

      <SheetContent className="w-3/4 overflow-y-auto">
        <SheetHeader className="pb-4 border-b border-zinc-800">
          <div className="flex items-baseline gap-3">
            <SheetTitle className="text-2xl font-bold tracking-tight text-white">
              {fullName}
            </SheetTitle>
            <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
              Add Transaction
            </span>
          </div>
        </SheetHeader>

        <div className="w-full max-w-2xl mx-auto my-6">
          <AddTransactionForm
            playerMeta={playerMeta}
            onSuccess={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}