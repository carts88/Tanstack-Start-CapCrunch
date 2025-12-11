import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavItem } from '../navigation-types';
import { Link } from "@tanstack/react-router";

interface FeaturedNavLinkProps {
  item: Extract<NavItem, { type: 'featured' }>;
}

const FeaturedNavLink = ({ item }: FeaturedNavLinkProps) => {
  const Icon = item.icon;

  return (
    <NavigationMenuLink asChild>
      <Link
        to={item.href}
        className="block p-2 rounded-md bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
      >
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="h-5 w-5 text-primary shrink-0" />}
          <div className="font-semibold text-sm">{item.name}</div>
        </div>
        {item.description && (
          <div className="text-xs text-muted-foreground wrap-break-words">{item.description}</div>
        )}
      </Link>
    </NavigationMenuLink>
  );
};

export default FeaturedNavLink;