// navigation-types.ts
import type { LucideIcon } from 'lucide-react';

export interface NavButton {
  label: string;
  href: string;
  icon?: LucideIcon ;
}

// Discriminated union for all possible nav item types
export type NavItem =
  | { type: 'featured';    name: string; description: string; href: string; icon?: LucideIcon ; buttons?: NavButton[] }
  | { type: 'grid';        name: string; description: string; href: string; icon?: LucideIcon  }
  | { type: 'side';        name: string; description?: string; href: string; buttons?: NavButton[] }
  | { type: 'description'; name: string; description: string; href: string; icon?: LucideIcon  }
  | { type: 'team';        label: string; href: string } // used in team columns
  | { type: 'title';       label: string }               // division headers like "Pacific"
  | { type: 'base';        label: string; href: string } // fallback/simple links
  | { type: 'icon';        label: string; href: string; icon: LucideIcon  };

// Section & Trigger
export interface NavSection {
  title?: string;
  layout: 'grid' | 'list';
  columns?: number;
  isTeamColumns?: boolean;
  items: NavItem[] | NavItem[][]; // flat or columns (for teams)
}

export interface NavTrigger {
  trigger: string;
  width: string;
  sections: NavSection[];
}

export type NavigationConfigType = NavTrigger[];