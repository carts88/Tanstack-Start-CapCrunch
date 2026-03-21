import { SectionCard } from "./section-card";

interface ComponentBlockProps {
  title?: string;
  description?: string;
  component: React.ReactNode;
}

export const ComponentBlock = ({ title, description, component }: ComponentBlockProps) => {
  return (
    <SectionCard>
      {(title || description) && (
        <div className="space-y-1 mb-3">
          {title && (
            <h3 className="font-medium text-sm text-foreground tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
      {component}
    </SectionCard>
  );
};