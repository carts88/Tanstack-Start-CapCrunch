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

const DEAD_CAP_BADGE: Record<string, { label: string; className: string; icon: LucideIcon }> = {
  RS:             { label: 'RS',     className: 'text-destructive/70', icon: CirclePercent },
  BUYOUT:         { label: 'BUYOUT', className: 'text-destructive',    icon: X },
  BONUS_OVERAGES: { label: 'BONUS',  className: 'text-yellow-600',     icon: TrophyIcon },
};

const SEGMENT_STYLES = [
  { bg: 'bg-primary',    text: 'text-primary-foreground', muted: 'text-primary-foreground/70' },
  { bg: 'bg-primary/75', text: 'text-primary-foreground', muted: 'text-primary-foreground/70' },
  { bg: 'bg-primary/55', text: 'text-primary-foreground', muted: 'text-primary-foreground/70' },
  { bg: 'bg-primary/40', text: 'text-primary',            muted: 'text-primary/70'            },
  { bg: 'bg-primary/28', text: 'text-primary',            muted: 'text-primary/70'            },
];
const SEGMENT_OPACITIES = [1, 0.75, 0.55, 0.4, 0.28];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtM      = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;
const fmtDollar = (v: number) => `$${Math.round(v).toLocaleString()}`;

// ─── Shared section label ─────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/8 px-2 py-0.5 rounded-md">
      {children}
    </span>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricCard({
  label,
  value,
  lowThreshold,
  highThreshold,
  isMoney,
  variant = 'default',
}: {
  label: string;
  value: string | number;
  lowThreshold?: number;
  highThreshold?: number;
  isMoney?: boolean;
  variant?: 'default' | 'danger' | 'success';
}) {
  const isANumber = typeof value === 'number';

  const numericVariant =
    isANumber && lowThreshold !== undefined && highThreshold !== undefined
      ? value > highThreshold ? 'danger'
      : value < lowThreshold  ? 'success'
      : 'default'
      : variant;

  const valueColor =
    numericVariant === 'danger'  ? 'text-red-500 dark:text-red-400' :
    numericVariant === 'success' ? 'text-emerald-600 dark:text-emerald-400' :
    'text-foreground';

  const bgStyle =
    numericVariant === 'danger'  ? 'bg-destructive/40 border border-destructive' :
    numericVariant === 'success' ? 'bg-emerald-500/20 border border-emerald-500' :
    'bg-muted/50 border border-border';

  return (
    <div className={`rounded-xl px-3 py-2.5 transition-colors ${bgStyle}`}>
      <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
      <p className={`text-[14px] font-semibold leading-tight tabular-nums ${valueColor}`}>
        {isMoney ? formatCurrency(isANumber ? value : 0) : value}
      </p>
    </div>
  );
}

function CapUsageBar({
  caphit,
  upperLimit,
  lowerLimit,
  yearlyOutlook,
}: {
  caphit: number;
  upperLimit: number;
  lowerLimit: number;
  yearlyOutlook: GroupOutlook[];
}) {
  const pct = Math.min((caphit / upperLimit) * 100, 100);
  const space = upperLimit - caphit;
  const active = yearlyOutlook.filter(g => g.total > 0);

  const MIN_PCT = 8;
  const rawPcts = active.map(g => (g.caphit / upperLimit) * 100);
  const clampedPcts = rawPcts.map(p => Math.max(p, MIN_PCT));
  const totalClamped = clampedPcts.reduce((a, b) => a + b, 0);
  const scale = totalClamped > pct ? pct / totalClamped : 1;
  const finalPcts = clampedPcts.map(p => p * scale);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <SectionLabel>Cap Usage</SectionLabel>
        <span className="text-[11px] text-muted-foreground tabular-nums">{pct.toFixed(1)}% of {fmtM(upperLimit)}</span>
      </div>

      <div className="w-full h-8 rounded-lg overflow-hidden border border-border flex">
        {active.map((g, i) => {
          const style = SEGMENT_STYLES[i] ?? SEGMENT_STYLES[SEGMENT_STYLES.length - 1];
          const opacity = SEGMENT_OPACITIES[i] ?? 0.2;
          return (
            <HoverCard key={g.group} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <div
                  className={`h-full flex items-center gap-1.5 px-2.5 transition-all duration-500 cursor-pointer hover:brightness-110 overflow-hidden shrink-0 border-r border-white/10 last:border-r-0 ${style.bg}`}
                  style={{ width: `${finalPcts[i]}%` }}
                >
                  <span className={`text-[10px] font-semibold whitespace-nowrap ${style.text}`}>
                    {GROUP_CONFIG[g.group].label}
                  </span>
                  <span className={`text-[10px] whitespace-nowrap ${style.muted}`}>·</span>
                  <span className={`text-[10px] whitespace-nowrap tabular-nums ${style.text}`}>{fmtM(g.caphit)}</span>
                  <span className={`text-[10px] whitespace-nowrap ${style.muted}`}>·</span>
                  <span className={`text-[10px] whitespace-nowrap ${style.muted}`}>{g.total}</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent side="top" align="start" className="w-52 p-3.5 rounded-xl">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: `hsl(var(--primary) / ${opacity})` }}
                    />
                    <span className="font-semibold text-sm">{GROUP_CONFIG[g.group].label}</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      ['Players', g.total],
                      ['Cap hit', fmtDollar(g.caphit)],
                      ['% of cap', `${((g.caphit / upperLimit) * 100).toFixed(1)}%`],
                    ].map(([k, v]) => (
                      <div key={k as string} className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{k}</span>
                        <span className="font-medium tabular-nums">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
        <div className="flex items-center px-3 flex-1 bg-muted/30">
          <span className="text-[11px] text-muted-foreground whitespace-nowrap tabular-nums">{fmtM(space)} left</span>
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
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <SectionLabel>Retention</SectionLabel>
        <span className="text-[11px] text-muted-foreground">{rsPlayers.length}/{maxSlots} slots · max {fmtM(retLimit)}</span>
      </div>

      <div className="w-full h-9 rounded-lg overflow-hidden border border-border flex">
        {rsPlayers.map((p, i) => (
          <HoverCard key={p.fullName} openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <div
                className={`flex flex-col items-center justify-center px-2 cursor-pointer hover:opacity-80 transition-opacity overflow-hidden border-r border-white/20 last:border-r-0 ${RETENTION_COLORS[i % 3]}`}
                style={{ width: `${100 / maxSlots}%` }}
              >
                <span
                  className="font-semibold text-primary-foreground leading-tight truncate w-full text-center"
                  style={{ fontSize: 'clamp(9px, 1.1vw, 11px)' }}
                >
                  {p.fullName}
                </span>
                <span
                  className="text-primary-foreground/70 leading-tight tabular-nums"
                  style={{ fontSize: 'clamp(8px, 0.95vw, 10px)' }}
                >
                  {fmtM(p.caphit)}
                </span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent side="top" align="center" className="w-60 p-3.5 rounded-xl">
              <div className="space-y-2">
                <p className="font-semibold text-sm">{p.fullName}</p>
                {[
                  p.pos                         && ['Position',        p.pos],
                  ['Retained',                     fmtDollar(p.caphit)],
                  p.termRemaining !== undefined && ['Years remaining', p.termRemaining],
                ].filter(Boolean).map(([k, v]: any) => (
                  <div key={k} className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{k}</span>
                    <span className={`font-medium tabular-nums ${k === 'Retained' ? 'text-destructive' : ''}`}>{v}</span>
                  </div>
                ))}
                {p.note && (
                  <p className="text-[10px] text-muted-foreground pt-1.5 border-t border-border leading-relaxed">{p.note}</p>
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
              {emptySlots === maxSlots
                ? 'No retention slots used'
                : `${emptySlots} open · ${fmtM(remaining)} left`}
            </span>
          </div>
        )}
      </div>

      <div className="flex justify-between text-[10px] text-muted-foreground tabular-nums">
        <span>{fmtDollar(totalRetained)} retained</span>
        <span>{fmtM(retLimit)} limit</span>
      </div>
    </div>
  );
}

function DeadCapList({ deadcap }: { deadcap: DeadCapEntry[] }) {
  const all = deadcap.flatMap(d => d.players.map(p => ({ ...p, type: d.type })));
  const total = all.reduce((a, p) => a + p.caphit, 0);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <SectionLabel>Dead Cap</SectionLabel>
        {total > 0 && (
          <span className="text-[11px] font-semibold text-destructive tabular-nums">{fmtM(total)}</span>
        )}
      </div>

      {all.length === 0 ? (
        <p className="text-[11px] text-muted-foreground italic">None</p>
      ) : (
        <div className="rounded-xl overflow-hidden border border-border">
          {all.map((p, i) => {
            const badge = DEAD_CAP_BADGE[p.type];
            const Icon = badge.icon;
            return (
              <HoverCard key={i} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div
                    className={`flex items-center justify-between px-3 py-2 bg-background hover:bg-muted/40 transition-colors cursor-pointer ${
                      i > 0 ? 'border-t border-border' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`shrink-0 ${badge.className}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[12px] font-medium text-foreground truncate">{p.fullName}</span>
                      {p.termRemaining !== undefined && (
                        <span className="text-[10px] text-muted-foreground shrink-0">{p.termRemaining}yr</span>
                      )}
                    </div>
                    <span className="text-[12px] font-semibold text-destructive shrink-0 ml-2 tabular-nums">
                      {fmtM(p.caphit)}
                    </span>
                  </div>
                </HoverCardTrigger>
                {p.note && (
                  <HoverCardContent side="top" align="end" className="w-64 p-3.5 rounded-xl">
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

export function CapOutlookCarousel({ capOutlook }: CapOutlookCarouselProps) {
  const [current, setCurrent] = useState(0);
  const s = capOutlook[current];

  const capSpace = s.upperLimit - s.caphit;
  const spaceVariant = capSpace < 5_000_000 ? 'danger' : 'success';

  return (
    <div className="w-full font-sans space-y-3">
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4 space-y-4">

        {/* Season tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {capOutlook.map((season, i) => (
            <button
              key={season.season}
              onClick={() => setCurrent(i)}
              className={`
                text-[11px] px-3 py-1.5 rounded-lg border font-medium transition-all duration-200
                ${i === current
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/30'
                  : 'bg-transparent text-muted-foreground border-border hover:bg-muted/50 hover:text-foreground'}
              `}
            >
              {season.season}
            </button>
          ))}
        </div>

        {/* Metric grid */}
        <div className="grid grid-cols-7 gap-2">
          <MetricCard label="Cap Hit"    value={s.caphit}            lowThreshold={s.lowerLimit} highThreshold={s.upperLimit} isMoney />
          <MetricCard label="Cap Space"  value={capSpace}            variant={spaceVariant} isMoney />
          <MetricCard label="Active"     value={s.roster23}          highThreshold={23} lowThreshold={20} />
          <MetricCard label="Contracts"  value={s.roster50}          highThreshold={50} lowThreshold={26} />
          <MetricCard label="In System"  value={s.roster90}          highThreshold={90} />
          <MetricCard label="Playoff"    value={s.projPlayoffCaphit} highThreshold={s.upperLimit} lowThreshold={s.lowerLimit} isMoney />
          <MetricCard label="Daily"      value={s.dailyCaphit}       isMoney />
        </div>

        {/* Team stats strip */}
        <div className="flex items-center justify-between text-[11px] text-muted-foreground px-3 py-2 rounded-lg bg-muted/30 border border-border">
          <div className="flex items-center gap-5">
            <span>Waiver exempt <span className="text-foreground font-semibold ml-0.5">7</span></span>
            <span>Contract exempt <span className="text-foreground font-semibold ml-0.5">3</span></span>
          </div>
          <div className="flex items-center gap-5">
            <span><span className="text-foreground font-semibold">6'2"</span> avg ht</span>
            <span><span className="text-foreground font-semibold">200</span> lbs</span>
            <span><span className="text-foreground font-semibold">26.6</span> yrs</span>
          </div>
        </div>

        {/* Cap bar */}
        <CapUsageBar
          caphit={s.caphit}
          upperLimit={s.upperLimit}
          lowerLimit={s.lowerLimit}
          yearlyOutlook={s.yearlyOutlook}
        />

        <div className="border-t border-border" />

        {/* Two-column bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-4">
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