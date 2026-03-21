import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

type StaffRole = "poho" | "gm" | "agm" | "hc" | "associate" | "assistant";

type TeamStaffData = Record<StaffRole, [string, string]>;

const ROLE_META: Record<StaffRole, { label: string; section: "frontOffice" | "coaching" }> = {
  poho:      { label: "President & Owner",     section: "frontOffice" },
  gm:        { label: "General Manager",       section: "frontOffice" },
  agm:       { label: "Asst. General Manager", section: "frontOffice" },
  hc:        { label: "Head Coach",            section: "coaching" },
  associate: { label: "Associate Coach",       section: "coaching" },
  assistant: { label: "Assistant Coach",       section: "coaching" },
};

interface StaffRowProps {
  roleKey: StaffRole;
  name: string;
  slug: string;
}

function StaffRow({ roleKey, name, slug }: StaffRowProps) {
  const { label } = ROLE_META[roleKey];

  return (
    <HoverCard openDelay={100} closeDelay={50}>
      <HoverCardTrigger asChild>
        <div className="flex items-center justify-between px-3 py-1.5 hover:bg-muted/50 transition-colors cursor-pointer">
          <span className="text-sm text-foreground truncate">{name}</span>
          <span className="text-xs text-muted-foreground shrink-0 ml-2">{label}</span>
        </div>
      </HoverCardTrigger>

      <HoverCardContent className="w-56 p-3" side="right" align="start">
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t text-xs">
            <div>
              <p className="text-muted-foreground font-medium">Role key</p>
              <p className="font-mono mt-0.5">{roleKey}</p>
            </div>
            <div>
              <p className="text-muted-foreground font-medium">Slug</p>
              <p className="font-mono mt-0.5 truncate">{slug}</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

interface SectionHeaderProps {
  label: string;
  variant: "primary" | "muted";
}

function SectionHeader({ label, variant }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/30">
      <div
        className={
          variant === "primary"
            ? "w-1.5 h-1.5 rounded-full bg-foreground"
            : "w-1.5 h-1.5 rounded-full bg-muted-foreground"
        }
      />
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

interface TeamStaffProps {
  teamStaff: TeamStaffData;
}

export function TeamStaff({ teamStaff }: TeamStaffProps) {
  const entries = (Object.entries(teamStaff) as [StaffRole, [string, string]][]).filter(
    ([key]) => key in ROLE_META
  );

  const frontOffice = entries.filter(([key]) => ROLE_META[key].section === "frontOffice");
  const coaching = entries.filter(([key]) => ROLE_META[key].section === "coaching");

  return (
    <div className="bg-card border rounded-lg flex flex-col overflow-hidden w-full max-w-xs">
      <div className="px-3 py-2 border-b">
        <h2 className="text-sm font-semibold text-foreground">Team Staff</h2>
      </div>

      {frontOffice.length > 0 && (
        <div>
          <SectionHeader label="Front Office" variant="primary" />
          <div className="divide-y">
            {frontOffice.map(([key, [name, slug]]) => (
              <StaffRow key={key} roleKey={key} name={name} slug={slug} />
            ))}
          </div>
        </div>
      )}

      {coaching.length > 0 && (
        <div>
          <SectionHeader label="Coaching Staff" variant="muted" />
          <div className="divide-y">
            {coaching.map(([key, [name, slug]]) => (
              <StaffRow key={key} roleKey={key} name={name} slug={slug} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}