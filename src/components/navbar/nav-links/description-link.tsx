import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { NavItem } from '../navigation-types';
import { Link } from '@tanstack/react-router';

interface DescriptionNavLinkProps {
  item: Extract<NavItem, { type: 'description' }>;
}

const DescriptionNavLink = ({ item }: DescriptionNavLinkProps) => {
  const Icon = item.icon;
  return (
    <NavigationMenuLink asChild>
      <Link to={item.href} className="block p-2 rounded-md hover:bg-muted transition-colors">
        <div className="flex items-center gap-2 mb-1">
          {Icon && <Icon className="h-4 w-4" />}
          <div className="font-medium text-sm">{item.name}</div>
        </div>
        <div className="text-xs text-muted-foreground" style={{ whiteSpace: 'normal' }}>
          {item.description}
        </div>
      </Link>
    </NavigationMenuLink>
  );
};

export default DescriptionNavLink;