import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { NHLTeamMetaData } from '@/lib/constants/metadata';

// ─── Types ────────────────────────────────────────────────────────────────────

type StaffRole = 'poho' | 'gm' | 'agm' | 'hc' | 'associate' | 'assistant';
type TeamStaffData = Record<StaffRole, [string, string]>;

export interface TeamCardProps {
  teamInfo: NHLTeamMetaData;
  teamStaff: TeamStaffData;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const ROLE_META: Record<StaffRole, { label: string; section: 'frontOffice' | 'coaching' }> = {
  poho:      { label: 'President',     section: 'frontOffice'},
  gm:        { label: 'General Manager',       section: 'frontOffice' },
  agm:       { label: 'Asst. General Manager', section: 'frontOffice' },
  hc:        { label: 'Head Coach',            section: 'coaching' },
  associate: { label: 'Associate Coach',       section: 'coaching' },
  assistant: { label: 'Assistant Coach',       section: 'coaching' },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ColorSwatch({ hex, label }: { hex: string; label: string }) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div
          className="w-5 h-5 rounded-full border border-border cursor-pointer hover:scale-110 transition-transform shrink-0"
          style={{ backgroundColor: hex }}
        />
      </HoverCardTrigger>
      <HoverCardContent side="top" align="center" className="w-auto p-2.5">
        <p className="text-[11px] font-medium text-muted-foreground">{label}</p>
        <p className="text-[11px] font-mono text-foreground">{hex}</p>
      </HoverCardContent>
    </HoverCard>
  );
}

function StaffRow({ roleKey, name }: { roleKey: StaffRole; name: string }) {
  const { label } = ROLE_META[roleKey];
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-border last:border-b-0">
      <span className="text-[12px] text-foreground truncate">{name}</span>
      <span className="text-[11px] text-muted-foreground shrink-0 ml-3">{label}</span>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
      {children}
    </p>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function TeamInfo({ teamInfo, teamStaff }: TeamCardProps) {
  const entries = (Object.entries(teamStaff) as [StaffRole, [string, string]][])
    .filter(([key]) => key in ROLE_META);

  const frontOffice = entries.filter(([key]) => ROLE_META[key].section === 'frontOffice');
  const coaching    = entries.filter(([key]) => ROLE_META[key].section === 'coaching');

  const colors = [
    { hex: teamInfo.primaryColor, label: 'Primary' },
    { hex: teamInfo.secondColor,  label: 'Secondary' },
    ...(teamInfo.thirdColor ? [{ hex: teamInfo.thirdColor, label: 'Tertiary' }] : []),
  ];

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden w-full max-w-xs">

      {/* ── Header: logo centred on tinted bg, meta + swatches below ── */}
      <div
        className="relative flex flex-col items-center px-4 pt-6 pb-4 border-b border-border overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${teamInfo.primaryColor}28 0%, ${teamInfo.primaryColor}08 100%)` }}
      >
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: teamInfo.primaryColor }}
        />

        {/* Logo */}
        <img
          src={`/logos/nhl/${teamInfo.teamSlug}.svg`}
          alt={`${teamInfo.label} logo`}
          width={110}
          height={110}
          className="object-contain mb-3"
        />

        {/* Team name */}
        <p className="text-[20px] font-semibold text-foreground leading-tight text-center">
          {teamInfo.label}
        </p>

        {/* Abbreviation + est. + swatches row */}
        <div className="flex items-center gap-2 mt-1.5 flex-wrap justify-center">
          <span
            className="text-[11px] font-mono px-1.5 py-0.5 rounded font-medium"
            style={{ background: `${teamInfo.primaryColor}22`, color: teamInfo.primaryColor }}
          >
            {teamInfo.value}
          </span>
          <span className="text-[11px] text-muted-foreground">Est. {teamInfo.established}</span>
          <span className="text-muted-foreground/40 text-[11px]">·</span>
          {colors.map(c => (
            <ColorSwatch key={c.label} hex={c.hex} label={c.label} />
          ))}
        </div>
      </div>

      <div className="px-4 py-1.5 space-y-2">

        {/* ── Front Office ── */}
        {frontOffice.length > 0 && (
          <div>
            <SectionLabel>Front office</SectionLabel>
            <div>
              {frontOffice.map(([key, [name]]) => (
                <StaffRow key={key} roleKey={key} name={name} />
              ))}
            </div>
          </div>
        )}

        {/* ── Coaching Staff ── */}
        {coaching.length > 0 && (
          <div>
            <SectionLabel>Coaching staff</SectionLabel>
            <div>
              {coaching.map(([key, [name]]) => (
                <StaffRow key={key} roleKey={key} name={name} />
              ))}
            </div>
          </div>
        )}

        {/* ── Affiliates ── */}
        {teamInfo.affiliates && teamInfo.affiliates.length > 0 && (
          <div>
            <SectionLabel>Affiliates</SectionLabel>
            <div className="flex items-center gap-3">
              {teamInfo.affiliates.map((affiliate) => (
                <HoverCard key={affiliate.team} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <img
                      src={`/logos/${affiliate.league.toLowerCase()}/${affiliate.slug}.svg`}
                      alt={affiliate.team}
                      className="object-contain cursor-pointer w-8 h-8 hover:scale-110 transition-transform"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent side="top" align="center" className="w-auto p-2.5">
                    <p className="text-[12px] font-medium">{affiliate.team}</p>
                    <p className="text-[11px] text-muted-foreground">{affiliate.league}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}