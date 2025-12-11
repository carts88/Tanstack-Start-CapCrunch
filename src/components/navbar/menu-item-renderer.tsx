import {
  BaseNavLink,
  DescriptionNavLink,
  FeaturedNavLink,
  SideButtonNavLink,
  TeamNavLink,
  TitleNav,
} from '@/components/navbar/nav-links';
import type { NavItem } from './navigation-types';

interface MenuItemRendererProps {
  item: NavItem;
}

export const MenuItemRenderer = ({ item }: MenuItemRendererProps) => {
  switch (item.type) {
    case 'base':
      return <BaseNavLink item={item} />;
    case 'description':
      return <DescriptionNavLink item={item} />;
    case 'featured':
      return <FeaturedNavLink item={item} />;
    case 'side':
      return <SideButtonNavLink item={item} />;
    case 'team':
      return <TeamNavLink item={item} />;
    case 'title':
      return <TitleNav item={item} />;
    default:
      return <BaseNavLink item={item as any} />; // fallback
  }
};