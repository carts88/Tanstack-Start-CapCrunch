import { SectionCard } from "./section-card";

export const DescriptionBlock = ({ title, description }: any) => {
  return (
    <SectionCard>
      <div className="space-y-1.5">
        <h3 className="font-medium text-sm text-foreground tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </SectionCard>
  );
};