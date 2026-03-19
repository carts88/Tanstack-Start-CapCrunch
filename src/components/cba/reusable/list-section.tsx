import { SectionCard } from "./section-card";

interface ListItem {
  text: string;
  tag?: string;
}

interface ListSectionProps {
  title: string;
  items: (string | ListItem)[];
}

export const ListSection = ({ title, items }: ListSectionProps) => {
  return (
    <SectionCard>
      <div className="space-y-3">
        <h3 className="font-medium text-sm text-foreground tracking-tight">
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, idx) => {
            const text = typeof item === "string" ? item : item.text;
            const tag = typeof item === "string" ? undefined : item.tag;

            return (
              <li key={idx} className="flex gap-2.5 text-sm text-muted-foreground">
                <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-primary/60 shrink-0" />
                <span className="leading-relaxed">
                  {tag && (
                    <span className="inline-block mr-1.5 px-1.5 py-px text-[10px] font-medium rounded-full bg-primary/10 text-primary align-middle leading-[1.8]">
                      {tag}
                    </span>
                  )}
                  {text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionCard>
  );
};