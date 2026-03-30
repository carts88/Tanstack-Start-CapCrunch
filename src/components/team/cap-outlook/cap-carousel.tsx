import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// components
import { ExpirationBreakdownRow } from './expiration-breakdown-row';
import { formatCurrency } from '@/lib/utils/formatters';
import { CirclePercent, type LucideIcon, TrophyIcon, X } from 'lucide-react';

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

const RETENTION_COLORS = ['bg-primary/70', 'bg-primary/50', 'bg-primary/30'];

const DEAD_CAP_BADGE: Record<string, { label: string; className: string, icon: LucideIcon }> = {
  RS:             { label: 'RS',     className: 'text-destructive/70' , icon: CirclePercent},
  BUYOUT:         { label: 'BUYOUT', className: 'text-destructive' ,icon: X},
  BONUS_OVERAGES: { label: 'BONUS',  className: 'text-yellow-600', icon: TrophyIcon },
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

function MetricCard({ label, value, 
    lowThreshold,
    highThreshold,
    isMoney,
    variant = 'default' }: { 
        label: string; 
        value: string | number;
        lowThreshold?: number;
        highThreshold?: number;
        isMoney?: boolean
        variant?: 'default' | 'danger' | 'success' },
      ) {

  const isANumber = typeof value === "number";

  const numericVariant = isANumber && lowThreshold !== undefined && highThreshold !== undefined
    ? value > highThreshold ? 'danger'
    : value < lowThreshold ? 'success'
    : 'default'
    : variant;

  const valueColor =
    numericVariant === 'danger'  ? 'text-red-500 dark:text-red-400' :
    numericVariant === 'success' ? 'text-emerald-600 dark:text-emerald-400' :
    'text-foreground';

  const bgStyle =
    numericVariant === 'danger'  ? 'bg-destructive/40 border border-destructive' :
    numericVariant === 'success' ? 'bg-emerald-500/20 border border-emerald-500' :
    'bg-muted/50';

  return (
    <div className={`rounded-lg px-2.5 py-1.5 ${bgStyle}`}>
      <p className="text-[11px] text-muted-foreground mb-0.5">{label}</p>
      <p className={`text-[15px] font-medium leading-tight ${valueColor}`}>{isMoney ?  formatCurrency(isANumber ? value : 0) : value}</p>
    </div>
  );
}

const SEGMENT_STYLES = [
  { bg: 'bg-primary',           text: 'text-primary-foreground',      muted: 'text-primary-foreground/70' },
  { bg: 'bg-primary/75',        text: 'text-primary-foreground',      muted: 'text-primary-foreground/70' },
  { bg: 'bg-primary/55',        text: 'text-primary-foreground',      muted: 'text-primary-foreground/70' },
  { bg: 'bg-primary/40',        text: 'text-primary',                 muted: 'text-primary/70'            },
  { bg: 'bg-primary/28',        text: 'text-primary',                 muted: 'text-primary/70'            },
];
const SEGMENT_OPACITIES = [1, 0.75, 0.55, 0.4, 0.28];

function CapUsageBar({ caphit, upperLimit, lowerLimit, yearlyOutlook }: { caphit: number; upperLimit: number; lowerLimit: number; yearlyOutlook: GroupOutlook[] }) {
  const pct = Math.min((caphit / upperLimit) * 100, 100);
  const space = upperLimit - caphit;
  const active = yearlyOutlook.filter(g => g.total > 0);

  const MIN_PCT = 10;
  const rawPcts = active.map(g => (g.caphit / upperLimit) * 100);
  const clampedPcts = rawPcts.map(p => Math.max(p, MIN_PCT));
  const totalClamped = clampedPcts.reduce((a, b) => a + b, 0);
  const scale = totalClamped > pct ? pct / totalClamped : 1;
  const finalPcts = clampedPcts.map(p => p * scale);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">Cap usage</span>
        <span className="text-[11px] text-muted-foreground">{pct.toFixed(1)}% of {fmtM(upperLimit)}</span>
      </div>
      <div className="w-full h-7 rounded-md overflow-hidden border border-border flex">
        {active.map((g, i) => {
          const style = SEGMENT_STYLES[i] ?? SEGMENT_STYLES[SEGMENT_STYLES.length - 1];
          const opacity = SEGMENT_OPACITIES[i] ?? 0.2;
          const isDark = opacity > 0.5;
          return (
            <HoverCard key={g.group} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div
                    className={`h-full flex items-center gap-1 px-2 transition-all duration-500 cursor-pointer hover:brightness-110 overflow-hidden shrink-0 ${style.bg}`}
                    style={{ width: `${finalPcts[i]}%` }}
                  >
                    <span className={`text-[10px] font-semibold whitespace-nowrap ${style.text}`}>{GROUP_CONFIG[g.group].label}</span>
                    <span className={`text-[10px] whitespace-nowrap ${style.muted}`}>·</span>
                    <span className={`text-[10px] whitespace-nowrap ${style.text}`}>{fmtM(g.caphit)}</span>
                    <span className={`text-[10px] whitespace-nowrap ${style.muted}`}>·</span>
                    <span className={`text-[10px] whitespace-nowrap ${style.muted}`}>{g.total}</span>
                  </div>
              </HoverCardTrigger>
              <HoverCardContent side="top" align="start" className="w-52 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: `hsl(var(--primary) / ${opacity})` }} />
                    <span className="font-medium text-sm">{GROUP_CONFIG[g.group].label}</span>
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
                      <span className="text-muted-foreground">% of cap</span>
                      <span>{((g.caphit / upperLimit) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
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
                className={`flex flex-col items-center justify-center px-2 cursor-pointer hover:opacity-80 transition-opacity overflow-hidden border-r border-white/20 last:border-r-0 ${RETENTION_COLORS[i % 3]}`}
                style={{ width: `${100 / maxSlots}%` }}
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
          <span className="text-[11px] font-medium text-destructive">{fmtM(total)}</span>
        )}
      </div>
      {all.length === 0 ? (
        <p className="text-[11px] text-muted-foreground">None</p>
      ) : (
        <div className="rounded-md border border-border overflow-hidden">
          {all.map((p, i) => {
            const badge = DEAD_CAP_BADGE[p.type];
            const Icon = badge.icon
            return (
              <HoverCard key={i} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div className={`flex items-center justify-between px-2 py-1 bg-background hover:bg-muted/40 transition-colors cursor-pointer ${i > 0 ? 'border-t border-border' : ''}`}>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`text-[10px] font-medium px-py-px rounded shrink-0 ${badge.className}`}>
                        <Icon  className='h-4 w-4'/>
                      </span>
                      <span className="text-[11px] font-medium text-foreground truncate">{p.fullName}</span>
                      {p.termRemaining !== undefined && (
                        <span className="text-[10px] text-muted-foreground shrink-0">{p.termRemaining}yr</span>
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-destructive shrink-0 ml-2">{fmtM(p.caphit)}</span>
                  </div>
                </HoverCardTrigger>
                {p.note && (
                  <HoverCardContent side="top" align="end" className="w-64 p-3">
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

// ─── Main Component ─────────────────────────────────────────────────────────────

export  function CapOutlookCarousel({ capOutlook }: CapOutlookCarouselProps) {
  const [current, setCurrent] = useState(0);
  const s = capOutlook[current];

  const capSpace = s.upperLimit - s.caphit;
  const spaceVariant = capSpace < 5_000_000 ? 'danger' : 'success';

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
        <div className="grid grid-cols-7 gap-2">
          <MetricCard label="Cap hit"    value={s.caphit}   lowThreshold={s.lowerLimit} highThreshold={s.upperLimit} isMoney/>
          <MetricCard label="Cap space"  value={capSpace}   variant={spaceVariant} isMoney/>
          <MetricCard label="Active"  value={s.roster23} highThreshold={23} lowThreshold={20}/>
          <MetricCard label="Contracts"  value={s.roster50}  highThreshold={50} lowThreshold={26}/>
          <MetricCard label="In System"  value={s.roster90} highThreshold={90} />
          <MetricCard label="Playoff Cap"  value={s.projPlayoffCaphit} highThreshold={s.upperLimit} lowThreshold={s.lowerLimit} isMoney />
          <MetricCard label="Daily Caphit"  value={s.dailyCaphit}  isMoney/>
        </div>
        <div className="flex items-center justify-between text-[13px] text-muted-foreground px-0.5">
          <div className="flex items-center gap-4">
            <span>Waiver exempt <span className="text-foreground font-medium">7</span></span>
            <span>Contract exempt <span className="text-foreground font-medium">3</span></span>
          </div>
          <div className="flex items-center gap-4">
            <span><span className="text-foreground font-medium">6'2"</span> ht</span>
            <span><span className="text-foreground font-medium">200</span> lbs</span>
            <span><span className="text-foreground font-medium">26.6</span> yrs</span>
          </div>
        </div>
        {/* Cap bar */}
        <CapUsageBar caphit={s.caphit} upperLimit={s.upperLimit} lowerLimit={s.lowerLimit} yearlyOutlook={s.yearlyOutlook} />

        {/* Two-column: groups + retention/deadcap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            {/* <GroupBreakdownBars yearlyOutlook={s.yearlyOutlook} /> */}
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