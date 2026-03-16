import { PositionTypes } from "@/lib/types/global-hockey-types";

interface LineupSlotProps {
  columnIndex?: number;
  playerPosition?: PositionTypes

  emptyLabel: string;
  // Add these when you implement drag & drop / player selection
  // isOccupied?: boolean;
  // player?: Player | null;
}

export const LineupSlot = ({ emptyLabel }: LineupSlotProps) => {
  // Later you can do: if (player) return <PlayerCard player={player} />;

  return (
    <div
      className={`
        group relative
        rounded-lg border-2 border-dashed border-gray-400/60 dark:border-gray-500/50
        bg-gray-50/40 dark:bg-gray-800/30
        hover:border-gray-500/80 hover:bg-gray-100/60
        dark:hover:border-gray-400/70 dark:hover:bg-gray-700/40
        transition-all duration-200
        flex flex-col items-center justify-center
        overflow-hidden cursor-pointer select-none
        shadow-sm hover:shadow-md
        p-1
      `}
    >
      {/* Optional subtle line number / position badge */}
      <div className="absolute top-1.5 left-2 text-xs font-mono text-gray-500/70 dark:text-gray-400/60">
        {emptyLabel}
      </div>

      {/* Big centered placeholder text */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300/80 dark:text-gray-600/70 group-hover:text-gray-400/90 transition-colors">
        {emptyLabel.replace(/\d/, '')} {/* shows just LW / C / RW – cleaner look */}
      </div>

    
      {/* You can later add a small "Drop player here" hint on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-sm font-medium text-gray-500/0 group-hover:text-gray-600/80 dark:group-hover:text-gray-300/80">
          Drop here
        </span>
      </div>
    </div>
  );
};