import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ExternalLink, ArrowLeftRight, UserPlus, ClipboardList, ArrowDownToLine } from 'lucide-react';

const acquisitionIcon: Record<string, React.ReactNode> = {
  Trade:        <ArrowLeftRight className="w-3.5 h-3.5" />,
  "Free Agent": <UserPlus className="w-3.5 h-3.5" />,
  Draft:        <ClipboardList className="w-3.5 h-3.5" />,
  Waivers:      <ArrowDownToLine className="w-3.5 h-3.5" />,
};

const acquisitionColor: Record<string, string> = {
  Trade:        "bg-amber-500/15 text-amber-600 border-amber-500/30",
  "Free Agent": "bg-purple-500/15 text-purple-600 border-purple-500/30",
  Draft:        "bg-sky-500/15 text-sky-600 border-sky-500/30",
  Waivers:      "bg-rose-500/15 text-rose-600 border-rose-500/30",
};

const statusColor: Record<string, string> = {
  NHL: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  AHL: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  IR:  "bg-red-500/15 text-red-600 border-red-500/30",
};

export const PlayerInfoCard = ({ playerInfo }: any) => {
  const draftLabel = playerInfo?.draft
    ? `${playerInfo.draft.year} • Rd ${playerInfo.draft.round} • #${playerInfo.draft.overall}`
    : "Undrafted";

  const acqType = playerInfo.acquisition?.type;
  const primary = playerInfo.teamPrimary ?? "#888";
  const secondary = playerInfo.teamSecondary ?? "#ccc";

  const draftedby = playerInfo.draft.gm && playerInfo.draft.team ? `${playerInfo.draft?.gm} - ${playerInfo.draft?.team }` : ""

  return (
    <Card className="bg-card text-card-foreground w-full p-0 mx-auto overflow-hidden">
      <CardContent className="p-0">
           {/* ── Team color accent bar ── */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(to right, ${primary} 60%, ${secondary})` }}
        />

        
        {/* ── Header ── */}
        <div className="flex flex-row items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40">
          <div className="flex items-center gap-2">
            <img
              src={`/logos/nhl/${playerInfo.teamSlug}.svg`}
              height={32} width={32}
              alt={playerInfo.teamTricode}
              className="rounded-full bg-accent p-0.5 h-8 w-8 border border-border"
            />
            <span className="text-sm font-semibold text-foreground">{playerInfo.teamName}</span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-xs text-muted-foreground">#{playerInfo.jerseyNumber}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {playerInfo.status && (
              <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${statusColor[playerInfo.status] ?? "bg-muted text-muted-foreground border-border"}`}>
                {playerInfo.status}
              </span>
            )}
            {acqType && (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className={`inline-flex items-center justify-center p-1 rounded border cursor-default ${acquisitionColor[acqType] ?? "bg-muted text-muted-foreground border-border"}`}>
                    {acquisitionIcon[acqType] ?? <ArrowLeftRight className="w-3.5 h-3.5" />}
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-72 text-xs" side="bottom" align="end">
                  <p className="font-semibold text-foreground mb-1">{acqType}</p>
                  <p className="text-muted-foreground leading-snug">{playerInfo.acquisition.details}</p>
                </HoverCardContent>
              </HoverCard>
            )}
            {playerInfo.isWaiversExempt && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded border bg-muted text-muted-foreground border-border">
                W-Exempt
              </span>
            )}
            {playerInfo.isSPCExempt && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded border bg-muted text-muted-foreground border-border">
                SPC-Exempt
              </span>
            )}
            {playerInfo.isSlideEligible && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded border bg-sky-500/15 text-sky-600 border-sky-500/30">
                Slide
              </span>
            )}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex gap-4 px-4 py-4">

          {/* Left: headshot + identity */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <img
              src={playerInfo.headshotUrl}
              alt={`${playerInfo.fullName} headshot`}
              width={150} height={150}
              className="rounded-full border-2 border-border shadow-sm  object-cover"
            />
            <div className="text-center">
              <h1 className="text-lg font-bold text-foreground leading-tight">{playerInfo.fullName}</h1>
            </div>
          </div>
          
          {/* Middle: 2-col label/value grid */}
          <div className="flex-1 flex flex-col justify-between gap-3">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <InfoRow label="Age"         value={`${playerInfo.birthdate} • ${playerInfo.age} y.o`} />
              <InfoRow label={playerInfo.position === "G" ? "Catches" : "Shoots"} value={playerInfo.shootsCatches === "L" ? "Left" : "Right"} />
              <InfoRow label="Position"    value={playerInfo.pos ?? playerInfo.position} />
              <InfoRow label="Birthplace"  value={playerInfo.birthplace} />
              <InfoRow label="Nationality" value={playerInfo.nationality} />
              <InfoRow label="Height"      value={`${playerInfo.height?.[0]} (${playerInfo.height?.[1]})`} />
              <InfoRow label="Draft"       value={draftLabel} />
              <InfoRow label="Weight"      value={`${playerInfo.weight?.[0]} (${playerInfo.weight?.[1]})`} />
              <InfoRow label="Drafted By"  value={draftedby ?? "—"} />
              <InfoRow label="Expires"  value={`2028 - UFA`} />
            </div>

            <div className="pt-2.5 border-t border-border flex items-center gap-5">
              <MiniStat label="Waiver Age"  value={`${playerInfo.waiversAge} y.o`} />
              <MiniStat label="Signing Age" value={`${playerInfo.elcSigningAge} y.o`} />
              {playerInfo.charity && (
                <a
                  href={playerInfo.charity.link}
                  target="_blank" rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="truncate max-w-[150px]">{playerInfo.charity.name}</span>
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100" />
                </a>
              )}
            </div>
          </div>

          {/* Right sliver */}
          <div className="shrink-0 w-[88px] flex flex-col gap-3 border-l border-border pl-4">
            <SliverStat label="Professional Seasons" value={`${playerInfo.proSeasons ?? "—"}`} />
            <SliverStat label="Accrued Seasons"     value={`${playerInfo.accruedSeasons ?? "—"}`} />
            <SliverStat label="Pro Experience"  value={`${playerInfo.proExperience ?? "—"} yrs`} />
          </div>

        </div>


      </CardContent>
    </Card>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-baseline gap-2">
    <span className="text-sm text-muted-foreground font-medium shrink-0">{label}:</span>
    <span className="text-sm text-foreground text-right truncate">{value}</span>
  </div>
);

const MiniStat = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">{label}</span>
    <span className="text-sm font-semibold text-foreground">{value}</span>
  </div>
);

const SliverStat = ({ label, value, accent }: { label: string; value: string; accent?: string }) => (
  <div className="flex flex-col gap-0.5">
    <span
      className="text-[10px] uppercase tracking-wide font-medium leading-tight"
      style={{ color: accent ?? "var(--muted-foreground)" }}
    >
      {label}
    </span>
    <span className="text-sm font-semibold text-foreground">{value}</span>
  </div>
);