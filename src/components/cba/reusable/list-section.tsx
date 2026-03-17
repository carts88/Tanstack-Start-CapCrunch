import { SectionCard } from "./section-card";

export const ListSection = ({ title, items }: any) => {
  return (
    <SectionCard>
      <div className="space-y-3">
        <h3 className="font-medium text-sm text-foreground tracking-tight">{title}</h3>
        <ul className="space-y-2">
          {items.map((item: string, idx: number) => (
            <li key={idx} className="flex gap-2.5 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
};