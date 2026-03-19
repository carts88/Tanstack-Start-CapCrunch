import { SectionCard } from "./section-card";

interface DescriptionBlockProps {
  title: string;
  description: string;
}

export const DescriptionBlock = ({ title, description }: DescriptionBlockProps) => {
  return (
    <SectionCard>
      <div className="space-y-1.5">
        <h3 className="font-medium text-sm text-foreground tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </SectionCard>
  );
};