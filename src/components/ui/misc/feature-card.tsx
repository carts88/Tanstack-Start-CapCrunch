export type IconType = React.ComponentType<{ className?: string }>;

export interface FeatureCardInterface {
    icon?: IconType;
    title: string;
    description: string;
}

export const FeatureCard = ({ icon: IconComponent, title, description }: FeatureCardInterface) => {
    return (
        <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 hover:primary/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
            {IconComponent && (
                <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-card-foreground" />
                </div>
            )}
            <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </div>
    );
};