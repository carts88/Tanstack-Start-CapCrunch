import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { CollapsibleSection } from "./collapsible-section";
import { ISection } from "../types";

interface ICBASection {
  trigger: string;
  sections: ISection[];
}

interface CBANavigatorProps {
  sections: ICBASection[];
}

export const CBANavigator = ({ sections }: CBANavigatorProps) => {
  const [current, setCurrent] = useState(0);
  const [query, setQuery] = useState("");

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(sections.length - 1, i + 1));

  const isFirst = current === 0;
  const isLast = current === sections.length - 1;
  const activeSection = sections[current];

  return (
    <div className="mx-auto flex flex-col gap-6 p-4">

      {/* ── Tab strip ──────────────────────────────────────────────── */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
        {sections.map((s, i) => (
          <button
            key={s.trigger}
            onClick={() => setCurrent(i)}
            className={`
              shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 border
              ${i === current
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border/60 hover:border-border hover:text-foreground"
              }
            `}
          >
            {s.trigger}
          </button>
        ))}
      </div>

      {/* ── Search bar ─────────────────────────────────────────────── */}
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60 group-focus-within:text-foreground/60 transition-colors duration-150 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search this agreement…"
          className="
            w-full h-9 pl-8.5 pr-8 rounded-lg border border-border/60 bg-transparent
            text-sm text-foreground placeholder:text-muted-foreground/50
            focus:outline-none focus:border-border focus:ring-0
            transition-colors duration-150
          "
          style={{ paddingLeft: "2.125rem" }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 flex items-center justify-center rounded text-muted-foreground/50 hover:text-foreground transition-colors duration-150"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* ── Section header ─────────────────────────────────────────── */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
            {current + 1} of {sections.length}
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {activeSection.trigger}
          </h2>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={prev}
            disabled={isFirst}
            aria-label="Previous section"
            className="h-8 w-8 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all duration-150 hover:border-border hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            disabled={isLast}
            aria-label="Next section"
            className="h-8 w-8 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all duration-150 hover:border-border hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Progress bar ───────────────────────────────────────────── */}
      <div className="h-px w-full bg-border/40 rounded-full overflow-hidden -mt-4">
        <div
          className="h-full bg-foreground/30 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${((current + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      {activeSection.sections.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-2 border border-dashed border-border/60 rounded-xl text-center">
          <span className="text-sm font-medium text-foreground">Coming soon</span>
          <span className="text-xs text-muted-foreground">
            No content has been added to this section yet.
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {activeSection.sections.map((section, idx) => (
            <CollapsibleSection
              key={`${activeSection.trigger}-${idx}`}
              title={section.title}
              description={section.description}
              subSections={section.subSections}
            />
          ))}
        </div>
      )}

      {/* ── Bottom prev/next ───────────────────────────────────────── */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={prev}
          disabled={isFirst}
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          {!isFirst && sections[current - 1].trigger}
        </button>
        <button
          onClick={next}
          disabled={isLast}
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {!isLast && sections[current + 1].trigger}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
};