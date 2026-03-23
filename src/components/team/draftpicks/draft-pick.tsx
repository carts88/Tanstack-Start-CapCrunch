import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Lock, Trophy, Scale } from "lucide-react";

export interface IPickCondition {
    type: "PROTECTED" | "CHOICE" | "PERFORMANCE";
    note: string;
}

interface IDraftPick {
    draftpick: {
        pickId: string;
        round: number;
        overall?: number;
        team: string;
        teamSlug: string;
        conditions: IPickCondition[];
        isTraded: boolean;
        isForfeited: boolean;
    };
}

const CONDITION_ICON = {
    PROTECTED:   { Icon: Lock,   corner: "-top-1.5 -left-1.5"  },
    CHOICE:      { Icon: Scale,  corner: "-top-1.5 -right-1.5" },
    PERFORMANCE: { Icon: Trophy, corner: "-bottom-1.5 -left-1.5" },
} as const;

export const DraftPick = ({ draftpick }: IDraftPick) => {
    const { round, overall, team, teamSlug, conditions, isTraded, isForfeited } = draftpick;

    const isConditional = conditions.length > 0;
    const isHoverCard   = conditions.length > 0 || isTraded || isForfeited;

    const logo = (
        <span
            className={[
                "relative flex items-center justify-center",
                "h-8 w-8 rounded-full",
                "bg-card/50 ring-1 ring-white/10",
                "transition-all duration-200",
                isTraded    ? "opacity-40 grayscale" : "hover:ring-white/25 hover:bg-card/80",
                isForfeited && "ring-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.35)]",
                isConditional && "border-2 border-primary",
            ].filter(Boolean).join(" ")}
        >
            <img
                src={`/logos/nhl/${teamSlug}.svg`}
                alt={team}
                height={24}
                width={24}
                className="drop-shadow-sm"
            />

            {/* Condition icons */}
            {conditions.map(({ type }) => {
                const { Icon, corner } = CONDITION_ICON[type];
                return (
                    <span
                        key={type}
                        className={`absolute ${corner} flex items-center justify-center h-4 w-4 rounded-full bg-background ring-1 ring-border`}
                    >
                        <Icon className="h-3 w-3 text-muted-foreground" />
                    </span>
                );
            })}

            {/* Status dots — shifted to bottom-right to avoid collision */}
            {isForfeited && (
                <span className="absolute -bottom-0.5 -right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-background" />
            )}
            {isTraded && !isForfeited && (
                <span className="absolute -bottom-0.5 -right-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground/60 ring-2 ring-background" />
            )}
        </span>
    );

    if (!isHoverCard) return logo;

    return (
        <HoverCard openDelay={150}>
            <HoverCardTrigger asChild>{logo}</HoverCardTrigger>
            <HoverCardContent>
                {/** Content coming soon */}
            </HoverCardContent>
        </HoverCard>
    );
};