import type{  NavItem } from "../navigation-types"
import { Link } from "@tanstack/react-router";
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

interface TeamNavProps {
  item: Extract<NavItem, { type: 'team' }>;
}

const TeamNavLink = ({ item }: TeamNavProps) => {
  return (
    <div className="flex items-center gap-1">
      {item.href && (
        <img
          src={`/logos/nhl/${item.href}.svg`}
          alt={`${item.label} logo`}
          width={30}
          height={30}
          className="h-full w-7"
        />
      )}
      
      <div className="flex flex-col justify-start items-start min-w-0 flex-1">
        {/* Primary navigation link */}
        <NavigationMenuLink className="p-0" asChild>
          <Link
            to={`/teams/$teamSlug`}
            params={{teamSlug: item.href}}
            className="hover:bg-transparent hover:text-primary transition-colors"
          >
            <p className="font-medium text-xs leading-tight truncate">
              {item.label}
            </p>
          </Link>
        </NavigationMenuLink>
        
        {/* Secondary navigation links - horizontal with bullet separator */}
        <div className="flex items-center text-xs text-muted-foreground">
          <Link
            to={`/teams/$teamSlug/depth-chart`}
            params={{teamSlug: item.href}}
            className="hover:text-foreground transition-colors underline-offset-2 gap-0 hover:underline whitespace-nowrap flex items-center"
          >
            Depth Chart
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            to={`/teams/$teamSlug/daily-cap`}
            params={{teamSlug: item.href}}
            className="hover:text-foreground transition-colors underline-offset-2 gap-0 hover:underline whitespace-nowrap flex items-center"
          >
            Depth Chart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TeamNavLink;