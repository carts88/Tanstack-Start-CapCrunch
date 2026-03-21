import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface ExpirationBreakdown {
  expiry: 'UFA' | 'RFA' | 'UNSIGNED' | 'ARB';
  total: number;
  onRoster23?: number;
  onRoster?: number;
  caphit: number;
}

const EXPIRY_CONFIG: Record<string, { label: string; color: string }> = {
  UFA:      { label: 'UFA',      color: '#A32D2D' },
  RFA:      { label: 'RFA',      color: '#185FA5' },
  ARB:      { label: 'ARB',      color: '#534AB7' },
  UNSIGNED: { label: 'Unsigned', color: '#5F5E5A' },
};

const fmtM      = (v: number) => `$${(v / 1_000_000).toFixed(1)}M`;
const fmtDollar = (v: number) => `$${Math.round(v).toLocaleString()}`;

export function ExpirationBreakdownRow({
  expirationBreakdown,
}: {
  expirationBreakdown: ExpirationBreakdown[];
}) {
  const totalPlayers = expirationBreakdown.reduce((a, e) => a + e.total, 0);
  const active = expirationBreakdown.filter(e => e.total > 0);

  return (
    <div className="">
      <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        Contract expiry breakdown
      </span>

      <div className="rounded-md  overflow-hidden divide-y divide-border">
        {active.map((e) => {
          const cfg = EXPIRY_CONFIG[e.expiry];
          const pct = Math.round((e.total / totalPlayers) * 100);
          const onRoster = e.onRoster23 ?? e.onRoster ?? 0;

          return (
            <HoverCard key={e.expiry} openDelay={200} closeDelay={100}>
              <HoverCardTrigger >
                <div className="flex  justify-between w-full py-1 items-center gap-3  hover:bg-muted/40 transition-colors cursor-pointer">

                  {/* Color label badge */}
                  <div className="flex gap-2 items-center">
                    <span
                    className="text-[11px] font-semibold text-white px-2 py-0.5 rounded shrink-0 w-16 text-center"
                    style={{ background: cfg.color }}
                  >
                    {cfg.label}
                  </span>
                  <div className="flex gap-2">
                      <p className="text-[12px] font-medium text-foreground leading-none">{e.total} players</p>
                      <p className="text-[12px]  text-foreground leading-none">{e.onRoster23} on active roster</p>
                      
                    </div>
                  </div>
                  

                  {/* Stats — fixed widths so columns align across rows */}
                  <div className="flex items-center gap-2 shrink-0">
                    
                    <div className="flex gap-2 ">
                      {e.caphit > 0 ? (
                                              <p className="text-[10px] text-muted-foreground leading-none mt-0.5">cap hit</p>
                      ) : (
                        <p className="text-[12px] text-muted-foreground leading-none">—</p>
                      )}
                        <p className="text-[12px] font-medium text-foreground leading-none">{fmtM(e.caphit)}</p>
                    </div>
                  </div>

                </div>
              </HoverCardTrigger>

              <HoverCardContent side="top" align="end" className="w-48 p-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: cfg.color }} />
                    <span className="font-medium text-sm">{cfg.label}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Total players</span>
                      <span className="font-medium">{e.total}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">On active roster</span>
                      <span>{onRoster}</span>
                    </div>
                    {e.caphit > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Cap hit</span>
                        <span className="font-medium text-red-500">{fmtDollar(e.caphit)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Share</span>
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