import { useState } from "react";
import { BucketDef, BucketGroup, DraggableItem, SwapMode } from "./types";
import { Draggable } from "./default-draggable-card";
import { BucketGrid, BucketRenderProps } from "./bucket-grid";
import { DndProvider } from "./drag-drop-context";

// ─────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────
type ContractStatus = "UFA" | "RFA" | "ELC" | "LTIR";
type Hand = "L" | "R";

interface Player {
  name: string;
  number: number;
  pos: string;
  hand: Hand;
  capHit: number;
  years: number;
  status: ContractStatus;
  age: number;
  nmc?: boolean;
  ntc?: boolean;
  elc?: boolean;
}

const PLAYERS: Record<string, Player> = {
  "p-lw1":  { name: "Z. Hyman",         number: 18, pos: "LW", hand: "L", capHit: 5500000,  years: 3, status: "UFA", age: 32 },
  "p-c1":   { name: "C. McDavid",          number: 97, pos: "C",  hand: "L", capHit: 12500000, years: 5, status: "UFA", age: 27, nmc: true },
  "p-rw1":  { name: "L. Draisaitl",        number: 29, pos: "RW", hand: "L", capHit: 8500000,  years: 3, status: "UFA", age: 28, nmc: true },
  "p-ld1":  { name: "M. Ekholm",           number: 77, pos: "LD", hand: "L", capHit: 6250000,  years: 2, status: "UFA", age: 34 },
  "p-rd1":  { name: "D. Nurse",            number: 25, pos: "RD", hand: "L", capHit: 9250000,  years: 5, status: "UFA", age: 29, ntc: true },
  "p-lw2":  { name: "D. Holloway",         number: 22, pos: "LW", hand: "L", capHit: 2167500,  years: 1, status: "RFA", age: 24 },
  "p-c2":   { name: "R. Nugent-Hopkins",   number: 93, pos: "C",  hand: "L", capHit: 5125000,  years: 2, status: "UFA", age: 31 },
  "p-rw2":  { name: "E. Bouchard",         number: 72, pos: "RW", hand: "R", capHit: 7250000,  years: 7, status: "RFA", age: 24 },
  "p-ld2":  { name: "B. Kulak",            number: 27, pos: "LD", hand: "L", capHit: 2200000,  years: 1, status: "UFA", age: 30 },
  "p-rd2":  { name: "C. Ceci",             number: 5,  pos: "RD", hand: "R", capHit: 3250000,  years: 1, status: "UFA", age: 30 },
  "p-lw3":  { name: "M. Janmark",          number: 13, pos: "LW", hand: "L", capHit: 1100000,  years: 1, status: "UFA", age: 32 },
  "p-c3":   { name: "D. Shore",            number: 21, pos: "C",  hand: "R", capHit: 775000,   years: 1, status: "UFA", age: 32 },
  "p-rw3":  { name: "K. Yamamoto",         number: 56, pos: "RW", hand: "R", capHit: 3100000,  years: 1, status: "RFA", age: 25 },
  "p-ld3":  { name: "P. Broberg",          number: 86, pos: "LD", hand: "L", capHit: 863333,   years: 1, status: "ELC", age: 22, elc: true },
  "p-rd3":  { name: "T. Barrie",           number: 22, pos: "RD", hand: "R", capHit: 4500000,  years: 1, status: "UFA", age: 32 },
  "p-g1":   { name: "J. Skinner",          number: 74, pos: "G",  hand: "L", capHit: 2625000,  years: 2, status: "UFA", age: 31 },
  "p-g2":   { name: "J. Campbell",         number: 36, pos: "G",  hand: "L", capHit: 5000000,  years: 4, status: "UFA", age: 32 },
};

const CAP_CEILING = 88_000_000;
const ROSTER_IDS = Object.keys(PLAYERS);

function formatCap(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  return `$${(n / 1_000).toFixed(0)}K`;
}

// ─────────────────────────────────────────────
// Bucket builders
// ─────────────────────────────────────────────
function buildNhlBuckets(): BucketDef[] {
  const buckets: BucketDef[] = [];
  [0, 1, 2, 3].forEach((row) => {
    [0, 1, 2].forEach((col) => buckets.push({ id: `fwd-col${col}-row${row}`, col, row, groupId: "fwd" }));
  });
  for (let row = 0; row < 3; row++) {
    [0, 1].forEach((col) => buckets.push({ id: `def-col${col}-row${row}`, col, row, groupId: "def" }));
  }
  for (let row = 0; row < 2; row++) {
    buckets.push({ id: `g-col0-row${row}`, col: 0, row, groupId: "g" });
  }
  for (let row = 0; row < 4; row++) {
    buckets.push({ id: `scratch-col0-row${row}`, col: 0, row, groupId: "scratch" });
  }
  return buckets;
}

function buildNhlItems(): DraggableItem[] {
  return [
    { id: "p-lw1", bucketId: "fwd-col0-row0" },
    { id: "p-c1",  bucketId: "fwd-col1-row0" },
    { id: "p-rw1", bucketId: "fwd-col2-row0" },
    { id: "p-lw2", bucketId: "fwd-col0-row1" },
    { id: "p-c2",  bucketId: "fwd-col1-row1" },
    { id: "p-rw2", bucketId: "fwd-col2-row1" },
    { id: "p-lw3", bucketId: "fwd-col0-row2" },
    { id: "p-c3",  bucketId: "fwd-col1-row2" },
    { id: "p-rw3", bucketId: "fwd-col2-row2" },
    { id: "p-ld1", bucketId: "def-col0-row0" },
    { id: "p-rd1", bucketId: "def-col1-row0" },
    { id: "p-ld2", bucketId: "def-col0-row1" },
    { id: "p-rd2", bucketId: "def-col1-row1" },
    { id: "p-ld3", bucketId: "def-col0-row2" },
    { id: "p-rd3", bucketId: "def-col1-row2" },
    { id: "p-g1",  bucketId: "g-col0-row0" },
    { id: "p-g2",  bucketId: "g-col0-row1" },
  ];
}
// ─────────────────────────────────────────────
// Status Badge
// ─────────────────────────────────────────────
const STATUS_STYLES: Record<ContractStatus, string> = {
  UFA:  "bg-slate-700/60 text-slate-300 border-slate-600/40",
  RFA:  "bg-blue-900/50 text-blue-300 border-blue-700/40",
  ELC:  "bg-emerald-900/50 text-emerald-300 border-emerald-700/40",
  LTIR: "bg-red-900/50 text-red-300 border-red-700/40",
};

function StatusBadge({ status }: { status: ContractStatus }) {
  return (
    <span className={`text-[8.5px] font-bold tracking-wider px-1 py-px rounded border ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}

// ─────────────────────────────────────────────
// Player Card  — CapFriendly style
// ─────────────────────────────────────────────
function PlayerCard({ item }: { item: DraggableItem }) {
  const p = PLAYERS[item.id];
  if (!p) return null;

  const teamColor = "#FF4C00"; // Oilers orange

  return (
    <Draggable itemId={item.id} style={{ width: "100%" }}>
      <div
        className="
          w-full border border-border rounded-md
          cursor-grab active:cursor-grabbing
          hover:brightness-110
          transition-all duration-150 group select-none
          overflow-hidden relative
        "
        style={{
          backgroundColor: `${teamColor}50`,
          borderColor: `${teamColor}60`,
          borderLeftWidth: p.hand === "L" ? "3px" : "1px",
          borderLeftColor: p.hand === "L" ? `${teamColor}60` : undefined,
          borderRightWidth: p.hand === "R" ? "3px" : "1px",
          borderRightColor: p.hand === "R" ? `${teamColor}60` : undefined,
        }}
      >
        {/* Logo watermark — centered, vertically centered */}
        <img
          src="/logos/nhl/edmonton-oilers.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-1/5 top-1/2 -translate-x-1/2 -translate-y-1/2 h-18 w-18 object-contain pointer-events-none select-none"
          style={{ opacity: .25 }}
        />

        {/* Row 1: number (left) + name (centered) + age (right) */}
        <div className="relative flex items-center px-2 pt-1.5 pb-1 ">
        <span className="text-[8px] font-bold text-white w-5 text shrink-0 text-center py-px rounded tabular-nums">
            {p.pos} 
          </span>
          <span className="flex-1 text-center text-[12.5px] font-semibold text-foreground truncate leading-tight group-hover:text-primary transition-colors px-1">
            {p.name}
          </span>

          <span className="text-[7px] font-medium text-muted-foreground w-7 text shrink-0 bg-white/5 text-center py-px rounded tabular-nums">
            {p.age} y.o
          </span>
        </div>

        {/* Row 2: clause icon (left) + contract info (centered) + status badge (right) */}
<div className="relative flex items-center px-2 py-1.5">

  {/* Clause icon — bottom left */}
  <div className="w-5 shrink-0 flex items-center justify-center">
    {p.nmc ? (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" >
        <path d="M8 1.5L2 4v4c0 3.1 2.5 5.8 6 6.5 3.5-.7 6-3.4 6-6.5V4L8 1.5z"
          fill="rgba(251,191,36,0.25)" stroke="#fbbf24" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M5.5 8l1.8 1.8L10.5 6.5"
          stroke="#fbbf24" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : p.ntc ? (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6"
          fill="rgba(192,132,252,0.2)" stroke="#c084fc" strokeWidth="1.2"/>f
        <path d="M5 8h4.5M7.5 5.5L10 8l-2.5 2.5"
          stroke="#c084fc" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 8V5.5"
          stroke="#c084fc" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ) : (
      <span className="w-1 h-1 rounded-full bg-white/10" />
    )}
  </div>

  {/* Contract info — centered, aligned under name */}
  <div className="flex-1 flex flex-col items-center gap-px">
    <p className="text-[9.5px] font-mono font-bold tabular-nums text-foreground/90 tracking-tight leading-tight">
      {p.years}  × {formatCap(p.capHit)}
    </p>
  </div>

  {/* Status badge — pinned right */}
  <div className="w-7 shrink-0 flex items-center justify-end">
    <StatusBadge status={p.elc ? "ELC" : p.status} />
  </div>
</div>

      </div>
    </Draggable>
  );
}
// ─────────────────────────────────────────────
// Player Bucket
// ─────────────────────────────────────────────
function PlayerBucket({ item, isOver, isDraggingSource }: BucketRenderProps) {
  return (
    <div
      className={`
        min-h-15.5 min-w-41.25 rounded border p-0.75
        flex items-stretch
        transition-all duration-100
        ${isOver ? "border-primary/70 bg-primary/5 shadow-[0_0_12px_rgba(255,76,0,0.12)]" : "border-border bg-background/30"}
        ${isDraggingSource ? "opacity-20" : "opacity-100"}
      `}
      onDragOver={(e) => e.preventDefault()}
    >
      {item ? (
        <PlayerCard item={item} />
      ) : (
        <div className="flex-1 flex items-center justify-center text-[9px] tracking-widest uppercase text-border/70 font-medium">
          LW4
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Section Header  — ruled divider style
// ─────────────────────────────────────────────
function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-2.5">
      <span className="w-0.5 h-3.5 bg-primary rounded-sm shrink-0" />
      <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground">
        {label}
      </span>
      <div className="h-px flex-1 bg-border/60" />
    </div>
  );
}

// ─────────────────────────────────────────────
// Col label
// ─────────────────────────────────────────────
function ColLabel({ label }: { label: string }) {
  return (
    <div className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground/60 text-center">
      {label}
    </div>
  );
}

// ─────────────────────────────────────────────
// Cap Tracker
// ─────────────────────────────────────────────
function CapTracker({ capUsed }: { capUsed: number }) {
  const pct = Math.min((capUsed / CAP_CEILING) * 100, 100);
  const space = CAP_CEILING - capUsed;
  const overCap = capUsed > CAP_CEILING;
  const warningZone = pct > 85;

  return (
    <div className="bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-4 mb-5">
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-1.5">
          <div className="flex items-baseline gap-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">2024–25 Cap</span>
            <span className="text-[12px] font-bold tabular-nums text-card-foreground">{formatCap(capUsed)}</span>
            <span className="text-[10px] text-muted-foreground">/ {formatCap(CAP_CEILING)}</span>
          </div>
          <span className={`text-[12px] font-bold tabular-nums ${overCap ? "text-red-400" : warningZone ? "text-amber-400" : "text-emerald-400"}`}>
            {overCap ? "OVER CAP" : `${formatCap(space)} space`}
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${overCap ? "bg-red-500" : warningZone ? "bg-amber-500" : "bg-primary"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Quick stat pills */}
      <div className="flex flex-col gap-1 shrink-0 text-right">
        <div className="text-[9px] text-muted-foreground">
          <span className="font-bold text-card-foreground">{ROSTER_IDS.length}</span> players
        </div>
        <div className="text-[9px] text-muted-foreground">
          <span className="font-bold text-card-foreground">{((capUsed / CAP_CEILING) * 100).toFixed(1)}%</span> used
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Legend
// ─────────────────────────────────────────────
function Legend() {
  return (
    <div className="mt-5 pt-3 border-t border-border/40 flex flex-wrap gap-x-5 gap-y-1.5 text-[9px] text-muted-foreground/70">
      <span><span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mr-1 align-middle" />Shoots L</span>
      <span><span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 mr-1 align-middle" />Shoots R</span>
      <span><span className="text-primary font-bold">#</span> Jersey no.</span>
      <span><span className="text-accent font-bold">$M</span> Cap hit (AAV)</span>
      <span><span className="inline-flex gap-0.5 align-middle"><span className="w-[4.5px] h-[4.5px] rounded-full bg-primary inline-block" /><span className="w-[4.5px] h-[4.5px] rounded-full bg-primary inline-block" /></span> Yrs remaining</span>
      <span className="font-bold">Age</span>
      <span className="text-slate-300 font-bold">UFA</span>
      <span className="text-blue-300 font-bold">RFA</span>
      <span className="text-emerald-300 font-bold">ELC</span>
      <span className="text-amber-300 font-bold">NMC</span>
      <span className="text-purple-300 font-bold">NTC</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// Groups
// ─────────────────────────────────────────────
const NHL_GROUPS: BucketGroup[] = [
  { id: "fwd",     cols: 3, autoExpand: true },
  { id: "def",     cols: 2, autoExpand: true },
  { id: "g",       cols: 1, autoExpand: true },
  { id: "scratch", cols: 1, autoExpand: true },
];

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────
export default function DndExample() {
  const [swapMode, setSwapMode] = useState<SwapMode>("direct");

  const capUsed = ROSTER_IDS.reduce((sum, id) => {
    const p = PLAYERS[id];
    return p ? sum + p.capHit : sum;
  }, 0);

  return (
    <div className="min-h-screen bg-background text-foreground px-5 py-6 font-sans">

      {/* Top bar */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <img src="/logos/nhl/edmonton-oilers.svg" alt="Edmonton Oilers" className="h-10 w-10 object-contain" />
        <div>
          <div className="text-[15px] font-extrabold tracking-tight text-card-foreground leading-none">
            Edmonton Oilers
          </div>
          <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">
            2024–25 · Armchair GM
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1.5">
          <span className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground mr-1">Swap</span>
          {(["direct", "cascade"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setSwapMode(m)}
              className={`
                px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase cursor-pointer
                border transition-all duration-100
                ${swapMode === m
                  ? "bg-primary/15 border-primary text-primary"
                  : "bg-card border-border text-muted-foreground hover:border-muted-foreground/40"
                }
              `}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Cap tracker */}
      <CapTracker capUsed={capUsed} />

      {/* Lineup */}
      <DndProvider
        initialItems={buildNhlItems()}
        initialBuckets={buildNhlBuckets()}
        groups={NHL_GROUPS}
        swapMode={swapMode}
      >
        <div className="flex gap-5 flex-wrap items-start">

          {/* Forwards */}
          <div className="flex-1 min-w-full">
            <SectionHeader label="Forwards" />
            <div className="flex gap-[6px] mb-1 pl-[38px]">
              {["LW","C","RW"].map((l) => (
                <div key={l} className="flex-1 min-w-[165px]">
                  <ColLabel label={l} />
                </div>
              ))}
            </div>
            <BucketGrid
              groupId="fwd"
              gap={6}
              colLabels={["LW","C","RW"]}
              rowLabels={["L1","L2","L3","L4"]}
              renderBucket={(props) => <PlayerBucket {...props} />}
              rowPrefix="L"
            />
          </div>

          <div className="flex gap-8 w-full">
            <div className="w-full">
              <SectionHeader label="Defense" />
            <BucketGrid
              groupId="def"
              gap={6}
              colLabels={["LD","RD"]}
              rowLabels={["P1","P2","P3"]}
              renderBucket={(props) => <PlayerBucket {...props} />}
              rowPrefix="P"
            />
            </div>
            <div className="w-120">
              <SectionHeader label="Goalies" />
              <BucketGrid
                groupId="g"
                gap={6}
                colLabels={['G']}
                rowPrefix="G"
                rowLabels={["#1","#2"]}
                renderBucket={(props) => <PlayerBucket {...props} />}
              />
            </div>
          </div>

         
        </div>

        <Legend />
      </DndProvider>
    </div>
  );
}