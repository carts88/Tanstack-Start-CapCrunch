import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { NavItem } from '../navigation-types';
import { Link } from '@tanstack/react-router';

interface SideButtonNavLinkProps {
  item: Extract<NavItem, { type: 'side' }>;
}

const SideButtonNavLink = ({ item }: SideButtonNavLinkProps) => {
  const [button1, button2] = item.buttons || [];
  const Icon1 = button1?.icon;
  const Icon2 = button2?.icon;

  return (
    <div className="flex rounded-md overflow-hidden">
      <NavigationMenuLink asChild>
        <Link to={item.href} className="flex-1 p-2 hover:bg-muted min-w-0">
          <div className="font-medium text-sm mb-1">{item.name}</div>
          {item.description && (
            <div className="text-xs text-muted-foreground" style={{ whiteSpace: 'normal' }}>
              {item.description}
            </div>
          )}
        </Link>
      </NavigationMenuLink>

      {button1 && (
        <NavigationMenuLink asChild>
          <Link
            to={button1.href}
            className={`flex flex-col items-center justify-center px-3 py-2 hover:bg-muted transition-colors ${
              button2 ? 'border-x border-muted' : ''
            }`}
          >
            {Icon1 && <Icon1 className="w-4 h-4" />}
            <span className="text-xs font-medium leading-none">{button1.label}</span>
          </Link>
        </NavigationMenuLink>
      )}

      {button2 && (
        <NavigationMenuLink asChild>
          <Link to={button2.href} className="flex flex-col items-center justify-center px-3 py-2 hover:bg-muted transition-colors">
            {Icon2 && <Icon2 className="w-4 h-4" />}
            <span className="text-xs font-medium leading-none">{button2.label}</span>
          </Link>
        </NavigationMenuLink>
      )}
    </div>
  );
};

export default SideButtonNavLink;