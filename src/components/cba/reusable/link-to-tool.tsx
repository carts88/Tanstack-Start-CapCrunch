import { Link } from "@tanstack/react-router";

interface ILinkToTool {
    name: string;
    description?: string;
    link: string;
}

export const LinkToTool = ({ name, description, link }: ILinkToTool) => {
    return (
        <Link to={link} className="group block no-underline">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 px-6 py-5 shadow-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5">
                
                {/* Subtle glow blob */}
                <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition-all duration-500 group-hover:bg-primary/35 group-hover:scale-125" />

                <div className="relative flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary/60">
                            Tool
                        </p>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                            {name}
                        </h3>
                        {description && (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Arrow icon */}
                    <span className="mt-1 flex-shrink-0 rounded-full border border-primary/20 bg-primary/10 p-1.5 text-primary transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary/60 to-primary/20 transition-all duration-500 group-hover:w-full rounded-full" />
            </div>
        </Link>
    );
};