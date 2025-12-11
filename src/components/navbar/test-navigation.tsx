// TestNavigation.tsx
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { MenuItemRenderer } from './menu-item-renderer';
import { addUUIDtoArray } from '@/lib/utils';

import type {
  NavItem,
  NavSection,
  NavigationConfigType,
} from './navigation-types';

/* -------------------------------------------------------------------------- */
/*                               Team Column                                  */
/* -------------------------------------------------------------------------- */
type TeamColumnProps = {
  items: NavItem[];
};

const TeamColumn = ({ items }: TeamColumnProps) => {
  return (
    <div className="space-y-1">
      {addUUIDtoArray(items).map((item) => (
        <MenuItemRenderer key={item.uuid} item={item} />
      ))
      }
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               Menu Section                                 */
/* -------------------------------------------------------------------------- */
type MenuSectionProps = {
  section: NavSection & { uuid?: string };
};

const MenuSection = ({ section }: MenuSectionProps) => {
  const {
    title,
    items,
    layout = "flex",
    columns = 1,
    isTeamColumns = false,
  } = section;

  const getLayoutClasses = (cols: number) => {
    if (layout === 'grid') return `grid grid-cols-${cols} gap-1`;
    if (layout === 'list') return 'flex gap-1';
    return 'space-y-1';
  };

  // Team columns — 2D array
  if (isTeamColumns && Array.isArray(items) && items.length > 0 && Array.isArray(items[0])) {
    const columnItems = items as NavItem[][];

    return (
      <div className="mb-3 last:mb-0">
        {title && (
          <h3 className="font-semibold text-sm mb-2 px-1 text-foreground/80">
            {title}
          </h3>
        )}
        <div className={`grid grid-cols-${columns ?? 3} gap-4`}>
          {columnItems.map((column, index) => (
            <TeamColumn key={index} items={column} />
          ))}
        </div>
      </div>
    );
  }

  // Regular flat items
  const flatItems = items as NavItem[];

  return (
    <div className="mb-3 last:mb-0">
      {title && (
        <h3 className="font-semibold text-sm mb-2 px-1 text-foreground/80">
          {title}
        </h3>
      )}
      <div 
      style={{
        gridTemplateColumns: layout === 'grid' ? `repeat(${columns}, minmax(0, 1fr))` : undefined,
      }}
      className={getLayoutClasses(columns)}>
        {addUUIDtoArray(flatItems).map((item) => (
          <MenuItemRenderer key={item.uuid} item={item} />
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                            Main Navigation Component                        */
/* -------------------------------------------------------------------------- */
type TestNavigationProps = {
  menuItems: NavigationConfigType;
};

const TestNavigation = ({ menuItems }: TestNavigationProps) => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {menuItems.map((menuItem) => (
          <NavigationMenuItem
            key={menuItem.trigger}
            className="text-muted-foreground hover:text-primary bg-transparent px-0.5 py-0.5 font-medium text-sm whitespace-nowrap transition-colors *:[svg]:-me-0.5 *:[svg]:size-4"
          >
            <NavigationMenuTrigger>{menuItem.trigger}</NavigationMenuTrigger>

            <NavigationMenuContent
              className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50"
            >
              <div className={`p-2 ${menuItem.width || 'w-[500px]'}`}>
                {addUUIDtoArray(menuItem.sections).map((section) => (
                  <React.Fragment key={section.uuid}>
                    <MenuSection section={section} />
                  </React.Fragment>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { TestNavigation };