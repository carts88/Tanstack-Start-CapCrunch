import { Link } from '@tanstack/react-router';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { NavItem } from '../navigation-types';

interface BaseNavLinkProps {
  item: Extract<NavItem, { type: 'base' }>;
}

const BaseNavLink = ({ item }: BaseNavLinkProps) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        to={item.href}
        className="block p-2 text-foreground rounded-md hover:bg-muted transition-colors"
      >
        <div className="font-medium text-sm">{item.label}</div>
      </Link>
    </NavigationMenuLink>
  );
};

export default BaseNavLink;