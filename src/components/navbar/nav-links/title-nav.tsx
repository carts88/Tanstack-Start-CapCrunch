import { NavItem } from '../navigation-types';

interface TitleNavProps {
  item: Extract<NavItem, { type: 'title' }>;
}

const TitleNav = ({ item }: TitleNavProps) => {
  return (
    <div className="font-semibold text-sm text-foreground/80 py-1">
      {item.label}
    </div>
  );
};

export default TitleNav;