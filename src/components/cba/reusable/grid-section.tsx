import { SubSection } from "../types";
import { RenderSubSection } from "../render-subsection";
import { COL_MAP } from "./utils";

interface IGridSection {
    title: string;
    description: string;
    cols: number;
    subSections: SubSection[];
}

export const GridSection = ({ title, description, cols =3, subSections }: IGridSection) => {
    return (
        <section className="w-full py-4 px-1">

            {/* Section Header */}
            <div className="mb-2 max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
                    {title}
                </h2>
                {description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-4" />

            {/* Grid */}
            <div 
className={`grid grid-cols-1 ${COL_MAP[cols]} gap-3`}
            >
      {subSections.map((section, i) => (
                    <RenderSubSection
                        key={`${i}`}
                        section={section}
                    />
                ))}
            </div>

        </section>
    );
};