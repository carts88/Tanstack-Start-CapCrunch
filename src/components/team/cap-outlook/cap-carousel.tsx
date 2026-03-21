import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// components
import { ExpirationBreakdownRow } from './expiration-breakdown-row';

// ─── Types ────────────────────────────────────────────────────────────────────

interface DeadCapPlayer {
  fullName: string;
  pos?: string;
  caphit: number;
  termRemaining?: number;
  transactionId?: string;
  note?: string;
}

interface DeadCapEntry {
  type: 'RS' | 'BUYOUT' | 'BONUS_OVERAGES';
  players: DeadCapPlayer[];
}

interface GroupOutlook {
  group: 'forwards' | 'defense' | 'goalies' | 'injuredReserve' | 'longTermIR';
  total: number;
  caphit: number;
  capPercentage: number;
}

interface ExpirationBreakdown {
  expiry: 'UFA' | 'RFA' | 'UNSIGNED' | 'ARB';
  total: number;
  onRoster23?: number;
  onRoster?: number;
  caphit: number;
}

interface CapSeasonOutlook {
  season: string;
  upperLimit: number;
  lowerLimit: number;
  caphit: number;
  projPlayoffCaphit: number;
  dailyCaphit: number;
  roster23: number;
  roster50: number;
  roster90: number;
  avgAge: number;
  avgHeight: [string, number] | [];
  avgWeight: [number, number] | [];
  totalSPCExempt: number;
  totalWaiverExempt: number;
  yearlyOutlook: GroupOutlook[];
  expirationBreakdown?: ExpirationBreakdown[];
  deadcap: DeadCapEntry[];
}

interface CapOutlookCarouselProps {
  capOutlook: CapSeasonOutlook[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const GROUP_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  forwards:       { label: 'Forwards',   color: '#185FA5', bg: 'rgba(24,95,165,0.12)' },
  defense:        { label: 'Defense',    color: '#0F6E56', bg: 'rgba(15,110,86,0.12)' },
  goalies:        { label: 'Goalies',    color: '#534AB7', bg: 'rgba(83,74,183,0.12)' },
  injuredReserve: { label: 'IR',         color: '#BA7517', bg: 'rgba(186,117,23,0.12)' },
  longTermIR:     { label: 'LTIR',       color: '#A32D2D', bg: 'rgba(163,45,45,0.12)' },
};

const RETENTION_COLORS = ['#185FA5', '#0F6E56', '#534AB7'];

const DEAD_CAP_BADGE: Record<string, { label: string; className: string }> = {
  RS:             { label: 'RS',     className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
  BUYOUT:         { label: 'BUYOUT', className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
  BONUS_OVERAGES: { label: 'BONUS',  className: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
};

const EXPIRY_CONFIG: Record<string, { label: string; color: string; textClass: string; bgClass: string }> = {
  UFA:      { label: 'UFA',      color: '#A32D2D', textClass: 'text-red-800 dark:text-red-300',     bgClass: 'bg-red-100 dark:bg-red-900/30' },
  RFA:      { label: 'RFA',      color: '#185FA5', textClass: 'text-blue-800 dark:text-blue-300',   bgClass: 'bg-blue-100 dark:bg-blue-900/30' },
  ARB:      { label: 'ARB',      color: '#BA7517', textClass: 'text-amber-800 dark:text-amber-300', bgClass: 'bg-amber-100 dark:bg-amber-900/30' },
  UNSIGNED: { label: 'Unsigned', color: '#5F5E5A', textClass: 'text-gray-600 dark:text-gray-400',   bgClass: 'bg-gray-100 dark:bg-gray-800/40' },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtM = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;
const fmtDollar = (v: number) => `$${Math.round(v).toLocaleString()}`;

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricCard({ label, value, variant = 'default' }: { label: string; value: string; variant?: 'default' | 'danger' | 'success' }) {
  const valueColor =
    variant === 'danger'  ? 'text-red-500 dark:text-red-400' :
    variant === 'success' ? 'text-emerald-600 dark:text-emerald-400' :
    'text-foreground';
  return (
    <div className="bg-muted/50 rounded-lg px-2.5 py-1.5">
      <p className="text-[11px] text-muted-foreground mb-0.5">{label}</p>
      <p className={`text-[15px] font-medium leading-tight ${valueColor}`}>{value}</p>
    </div>
  );
}

function CapUsageBar({ caphit, upperLimit, lowerLimit }: { caphit: number; upperLimit: number; lowerLimit: number }) {
  const pct = Math.min((caphit / upperLimit) * 100, 100);
  const space = upperLimit - caphit;
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">Cap usage</span>
        <span className="text-[11px] text-muted-foreground">{pct.toFixed(1)}% of {fmtM(upperLimit)}</span>
      </div>
      <div className="w-full h-7 rounded-md overflow-hidden border border-border flex">
        <div
          className="flex items-center justify-end pr-2.5 transition-all duration-500"
          style={{ width: `${pct}%`, background: '#185FA5' }}
        >
          <span className="text-[11px] font-medium text-white whitespace-nowrap">{fmtM(caphit)}</span>
        </div>
        <div className="flex items-center pl-2.5 flex-1 bg-muted/30">
          <span className="text-[11px] text-muted-foreground whitespace-nowrap">{fmtM(space)} left</span>
        </div>
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground">
        <span>Floor {fmtM(lowerLimit)}</span>
        <span>Ceiling {fmtM(upperLimit)}</span>
      </div>
    </div>
  );
}

function GroupBreakdownBars({ yearlyOutlook }: { yearlyOutlook: GroupOutlook[] }) {
  const active = yearlyOutlook.filter(g => g.total > 0);
  return (
    <div className="space-y-1.5">
      <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">Group breakdown</span>
      <div className="space-y-1.5 mt-1">
        {active.map(g => {
          const cfg = GROUP_CONFIG[g.group];
          const pct = Math.round(g.capPercentage);
          return (
            <HoverCard key={g.group} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[11px] text-muted-foreground w-[68px] shrink-0 truncate">
                    {cfg.label} ({g.total})
                  </span>
                  <div className="flex-1 h-[18px] bg-muted/40 rounded-[3px] overflow-hidden">
                    <div
                      className="h-full rounded-[3px] flex items-center pl-2 transition-all duration-500 group-hover:opacity-80"
                      style={{ width: `${pct}%`, background: cfg.color }}
                    >
                      <span className="text-[10px] font-medium text-white whitespace-nowrap">{fmtM(g.caphit)}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-muted-foreground w-8 text-right shrink-0">{pct}%</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent side="top" align="start" className="w-52 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: cfg.color }} />
                    <span className="font-medium text-sm">{cfg.label}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Players</span>
                      <span>{g.total}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Cap hit</span>
                      <span className="font-medium">{fmtDollar(g.caphit)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">% of total</span>
                      <span>{pct}%</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
}

function RetentionBar({ deadcap, upperLimit }: { deadcap: DeadCapEntry[]; upperLimit: number }) {
  const maxSlots = 3;
  const retLimit = upperLimit * 0.15;
  const rsPlayers = deadcap.find(d => d.type === 'RS')?.players ?? [];
  const totalRetained = rsPlayers.reduce((a, p) => a + p.caphit, 0);
  const remaining = retLimit - totalRetained;
  const emptySlots = maxSlots - rsPlayers.length;

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          Retention (max {fmtM(retLimit)})
        </span>
        <span className="text-[11px] text-muted-foreground">{rsPlayers.length}/{maxSlots} slots</span>
      </div>
      <div className="w-full h-8 rounded-md overflow-hidden border border-border flex">
        {rsPlayers.map((p, i) => (
          <HoverCard key={p.fullName} openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <div
                className="flex flex-col items-center justify-center px-2 cursor-pointer hover:opacity-80 transition-opacity overflow-hidden border-r border-white/20 last:border-r-0"
                style={{ width: `${100 / maxSlots}%`, background: RETENTION_COLORS[i % 3] }}
              >
                <span
                  className="font-medium text-white leading-tight truncate w-full text-center"
                  style={{ fontSize: 'clamp(9px, 1.1vw, 11px)' }}
                >
                  {p.fullName}
                </span>
                <span
                  className="text-white/80 leading-tight"
                  style={{ fontSize: 'clamp(8px, 0.95vw, 10px)' }}
                >
                  {fmtM(p.caphit)}
                </span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent side="top" align="center" className="w-60 p-3">
              <div className="space-y-1.5">
                <p className="font-medium text-sm">{p.fullName}</p>
                {p.pos && (
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Position</span>
                    <span>{p.pos}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Retained cap hit</span>
                  <span className="font-medium text-red-500">{fmtDollar(p.caphit)}</span>
                </div>
                {p.termRemaining !== undefined && (
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Years remaining</span>
                    <span>{p.termRemaining}</span>
                  </div>
                )}
                {p.note && (
                  <p className="text-[10px] text-muted-foreground pt-1 border-t border-border leading-relaxed">{p.note}</p>
                )}
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
        {emptySlots > 0 && (
          <div
            className="flex items-center justify-center bg-muted/30"
            style={{ width: `${(emptySlots / maxSlots) * 100}%` }}
          >
            <span className="text-[11px] text-muted-foreground">
              {emptySlots === maxSlots ? 'No retention slots used' : `${emptySlots} slot${emptySlots > 1 ? 's' : ''} open · ${fmtM(remaining)} left`}
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground">
        <span>{fmtDollar(totalRetained)} retained</span>
        <span>{fmtM(retLimit)} limit</span>
      </div>
    </div>
  );
}

function DeadCapList({ deadcap }: { deadcap: DeadCapEntry[] }) {
  const all = deadcap.flatMap(d =>
    d.players.map(p => ({ ...p, type: d.type }))
  );
  const total = all.reduce((a, p) => a + p.caphit, 0);

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">Dead cap</span>
        {total > 0 && (
          <span className="text-[11px] font-medium text-red-500 dark:text-red-400">{fmtM(total)} total</span>
        )}
      </div>
      {all.length === 0 ? (
        <p className="text-[12px] text-muted-foreground py-0.5">None</p>
      ) : (
        <div className="divide-y divide-border rounded-md border border-border overflow-hidden">
          {all.map((p, i) => {
            const badge = DEAD_CAP_BADGE[p.type];
            return (
              <HoverCard key={i} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div className="flex items-center justify-between px-2 py-1 bg-background hover:bg-muted/40 transition-colors cursor-pointer">
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium text-foreground truncate">{p.fullName}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {p.termRemaining !== undefined ? `${p.termRemaining} yr left` : 'overage'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${badge.className}`}>
                        {badge.label}
                      </span>
                      <span className="text-[12px] font-medium text-red-500 dark:text-red-400">{fmtM(p.caphit)}</span>
                    </div>
                  </div>
                </HoverCardTrigger>
                {p.note && (
                  <HoverCardContent side="top" align="end" className="w-72 p-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.note}</p>
                  </HoverCardContent>
                )}
              </HoverCard>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────



// ─── Main Component ─────────────────────────────────────────────────────────────

export  function CapOutlookCarousel({ capOutlook }: CapOutlookCarouselProps) {
  const [current, setCurrent] = useState(0);
  const s = capOutlook[current];

  const capSpace = s.upperLimit - s.caphit;
  const spaceVariant = capSpace < 5_000_000 ? 'danger' : 'success';

  const heightStr = s.avgHeight.length === 2
    ? `${s.avgHeight[0]} / ${(s.avgHeight[1] as number).toFixed(0)} cm`
    : '—';
  const weightStr = s.avgWeight.length === 2
    ? `${s.avgWeight[0]} lbs / ${(s.avgWeight[1] as number).toFixed(1)} kg`
    : '—';

  return (
    <div className="w-full space-y-3 font-sans">
      {/* Season tabs */}
      
      {/* Card */}
      <div className="rounded-xl border border-border bg-card p-3 space-y-3">
        <div className="flex items-center gap-1 flex-wrap">
                {capOutlook.map((season, i) => (
                <button
                    key={season.season}
                    onClick={() => setCurrent(i)}
                    className={`
                    text-xs px-3 py-1.5 rounded-md border transition-all
                    ${i === current
                        ? 'bg-blue-50 text-blue-800 border-blue-200 font-medium dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700'
                        : 'bg-transparent text-muted-foreground border-border hover:bg-muted/50'}
                    `}
                >
                    {season.season}
                </button>
                ))}
            </div>

        {/* Metric rows */}
        <div className="grid grid-cols-6 gap-2">
          <MetricCard label="Cap hit"         value={fmtM(s.caphit)} />
          <MetricCard label="Cap space"       value={fmtM(capSpace)} variant={spaceVariant} />
          <MetricCard label="Avg age"         value={String(s.avgAge)} />
          <MetricCard label="Roster 23·50·90" value={`${s.roster23}·${s.roster50}·${s.roster90}`} />
          <MetricCard label="Avg height" value={heightStr} />
          <MetricCard label="Avg weight" value={weightStr} />

        </div>
        <div className="grid grid-cols-2 gap-2">
        </div>

        {/* Cap bar */}
        <CapUsageBar caphit={s.caphit} upperLimit={s.upperLimit} lowerLimit={s.lowerLimit} />

        {/* Two-column: groups + retention/deadcap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            <GroupBreakdownBars yearlyOutlook={s.yearlyOutlook} />
            {s.expirationBreakdown && s.expirationBreakdown.length > 0 && (
              <ExpirationBreakdownRow expirationBreakdown={s.expirationBreakdown} />
            )}
          </div>

          <div className="space-y-4">
            <RetentionBar deadcap={s.deadcap} upperLimit={s.upperLimit} />
            <DeadCapList deadcap={s.deadcap} />
          </div>
        </div>
      </div>
    </div>
  );
}