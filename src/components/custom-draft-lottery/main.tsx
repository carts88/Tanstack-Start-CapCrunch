// custom-draft-lottery-main.tsx
// Top-level shell for the custom NHL draft lottery simulator.
// Three-step flow: set order → view combos → run the draw.

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ListOrdered, TableProperties, Dices } from "lucide-react";
import { ManagePreLotteryOrder } from "./manage-pre-lottery-order";
import { LotteryDraw } from "./lottery-draw";
import { LottoComboTable } from "./lotto-combo-table";
import { TeamLotteryCombo } from "./utils";

const steps = [
  {
    value: "draft-order",
    label: "Set Draft Order",
    shortLabel: "Draft Order",
    icon: ListOrdered,
  },
  {
    value: "view-combos",
    label: "View Combos",
    shortLabel: "Combos",
    icon: TableProperties,
  },
  {
    value: "draw-lottery",
    label: "Run Lottery",
    shortLabel: "Draw",
    icon: Dices,
  },
];

export const CustomDraftLotteryMain = () => {
  const [lotteryCombos, setLotteryCombos] = useState<TeamLotteryCombo[]>([]);
  const [activeTab, setActiveTab] = useState("draft-order");

  const combosReady = lotteryCombos.length > 0;

  const handleCombosGenerated = (combos: TeamLotteryCombo[]) => {
    setLotteryCombos(combos);
    // Auto-advance to the next step
    setActiveTab("view-combos");
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-10 px-4 space-y-6">
      {/* Page title */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">NHL Draft Lottery Simulator</h1>
        <p className="text-sm text-muted-foreground">
          Set your league's draft order, assign traded picks, and run a weighted lottery draw.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Step tabs */}
        <TabsList className="w-full h-auto p-1 gap-1">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLocked = i > 0 && !combosReady;
            const isComplete = i === 0 && combosReady;

            return (
              <TabsTrigger
                key={step.value}
                value={step.value}
                disabled={isLocked}
                className="flex-1 flex items-center gap-1 py-1.5 px-1.5 text-xs sm:text-sm"
              >
                <span className="flex items-center gap-1.5">
                  {isComplete ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  ) : (
                    <Icon className="h-4 w-4 shrink-0" />
                  )}
                  <span className="hidden sm:inline">{step.label}</span>
                  <span className="sm:hidden">{step.shortLabel}</span>
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Tab contents */}
        <TabsContent value="draft-order" className="mt-4 focus-visible:outline-none">
          <ManagePreLotteryOrder onCombosGenerated={handleCombosGenerated} />
        </TabsContent>

        <TabsContent value="view-combos" className="mt-4 focus-visible:outline-none">
          <div className="px-4">
            <LottoComboTable lotteryCombos={lotteryCombos} />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setActiveTab("draw-lottery")}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-95 transition-all"
              >
                Proceed to Draw
                <Dices className="h-4 w-4" />
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="draw-lottery" className="mt-4 focus-visible:outline-none">
          <div className="px-4">
            <LotteryDraw lotteryCombos={lotteryCombos} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};