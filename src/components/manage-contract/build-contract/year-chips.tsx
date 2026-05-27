interface YearChipsProps {
  yearCount: number;
  startYear: number;
  selected: Set<number>;
  onToggle: (i: number) => void;
  onToggleAll: () => void;
}

function YearChips({
  yearCount,
  startYear,
  selected,
  onToggle,
  onToggleAll,
}: YearChipsProps) {
  const allSelected = selected.size === yearCount;

  const someSelected =
    selected.size > 0 && !allSelected;

  return (
    <div className="flex flex-wrap items-center gap-1.5 px-3 py-1.5 flex-1 min-w-0">
      <button
        type="button"
        onClick={onToggleAll}
        className={cn(
          "text-[11px] px-2.5 py-1 rounded-full border transition-all",
          allSelected
            ? "border-dashed border-primary text-foreground"
            : someSelected
            ? "border-dashed border-primary/60 text-primary-foreground"
            : "border-dashed border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
        )}
      >
        All
      </button>

      {Array.from(
        { length: yearCount },
        (_, i) => {
          const year = startYear + i;

          const label = `${year}–${String(
            year + 1
          ).slice(-2)}`;

          const on = selected.has(i);

          return (
            <button
              key={i}
              type="button"
              onClick={() => onToggle(i)}
              className={cn(
                "text-[11px] px-2.5 py-1 rounded-full border transition-all whitespace-nowrap",
                on
                  ? "bg-primary border-primary/60 text-primary-foreground"
                  : "border-border text-muted-foreground bg-background hover:border-primary hover:text-primary/60"
              )}
            >
              {label}
            </button>
          );
        }
      )}
    </div>
  );
}

