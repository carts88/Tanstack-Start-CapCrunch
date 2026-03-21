import { getTeamMetaData } from "@/lib/utils/meta.utils";

interface Transaction {
  id: number;
  type: string;
  date: string;
  team: string;
  details: string;
}

interface TransactionCardProps {
  transaction: Transaction;
}

const TYPE_LABELS: Record<string, { label: string; icon: string }> = {
  "TRADE":       { label: "Trade",       icon: "⇄" },
  "SIGNING-EXT": { label: "Extension",   icon: "✎" },
  "SIGNING-ELC": { label: "Entry-Level", icon: "✎" },
  "SIGNING-UFA": { label: "UFA Signing", icon: "✎" },
  "SIGNING-RFA": { label: "RFA Signing", icon: "✎" },
  "DRAFT":       { label: "Draft Pick",  icon: "★" },
  "WAIVER":      { label: "Waivers",     icon: "↓" },
  "BUYOUT":      { label: "Buyout",      icon: "✕" },
  "RECALL":      { label: "Recall",      icon: "↑" },
  "LOAN":        { label: "Loan",        icon: "→" },
};

export const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const { type, date, team, details } = transaction;
  const { primaryColor, secondColor, label, teamSlug } = getTeamMetaData(team);

  const typeInfo = TYPE_LABELS[type] ?? { label: type, icon: "•" };
  const logoPath = `/logos/nhl/${teamSlug}.svg`;

  const bgTint = `${primaryColor}12`;
  const accentTint = `${primaryColor}30`;

  return (
    <article
      className="flex h-full overflow-hidden rounded-lg text-[13px] leading-[1.5]"
      style={{
        background: bgTint,
        border: `1px solid ${accentTint}`,
        fontFamily: "'Georgia', serif",
        color: "var(--color-text, #1a1a1a)",
      }}
    >
      {/* Left accent bar */}
      <div className="w-1 shrink-0" style={{ background: primaryColor }} />

      {/* Team logo column */}
      <div
        className="flex shrink-0 items-center justify-center px-2.5 py-3"
        style={{
          background: `${primaryColor}18`,
          borderRight: `1px solid ${accentTint}`,
          minWidth: "52px",
        }}
      >
        <img
          src={logoPath}
          alt={`${label ?? team} logo`}
          width={32}
          height={32}
          className="block object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Content — fills remaining height, scrollable details */}
      <div className="flex min-w-0 flex-1 flex-col p-3">
        {/* Header row */}
        <div className="mb-1.5 flex items-center justify-between gap-2">
          {/* Type badge */}
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded-[3px] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]"
            style={{
              background: primaryColor,
              color: secondColor ?? "#fff",
              fontFamily: "'Arial Narrow', 'Helvetica Neue', sans-serif",
            }}
          >
            <span className="text-[11px]">{typeInfo.icon}</span>
            {typeInfo.label}
          </span>

          {/* Date */}
          <time
            dateTime={date}
            className="shrink-0 text-[11px] font-extrabold tracking-[0.04em] text-foreground/60"
            style={{ fontFamily: "'Arial Narrow', 'Helvetica Neue', sans-serif" }}
          >
            {date}
          </time>
        </div>

        {/* Team label */}
        <div
          className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.06em]"
          style={{
            color: primaryColor,
          }}
        >
          {label ?? team}
        </div>

        {/* Scrollable details */}
        <div className="group min-h-0 flex-1 overflow-y-hidden hover:overflow-y-auto [scrollbar-color:hsl(var(--border))_transparent] [scrollbar-width:thin]">
        <p className="m-0 text-[12px] leading-[1.55] text-foreground">
            {details}
        </p>
        </div>
      </div>
    </article>
  );
};