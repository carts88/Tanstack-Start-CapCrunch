export type IconType = React.ComponentType<{ className?: string }>;

interface FeatureCardInterface {
    icon?: IconType;
    title: string;
    description: string;
}

export const FeatureCard = ({ icon: IconComponent, title, description }: FeatureCardInterface) => {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            {IconComponent && (
                <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                </div>
            )}
            <h3 className="text-xl font-semibold text-white mb-3">
                {title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
};