import { IconType } from "@/components/ui/misc/feature-card";

// NavLink Types
export interface NavLink {
  type: 'basic';
  label: string;
  href: string;
}

export interface DescriptionNavLink {
  type: 'description';
  label: string;
  href: string;
  description: string;
}

export interface IconNavLink {
  type: 'icon';
  label: string;
  href: string;
  icon: IconType;
}


export interface TeamNavLink {
  type: 'team';
  label: string;
  href: string;
}

export interface ButtonsNavLink {
  type: 'buttons';
  label: string;
  href: string;
  buttons: IconNavLink[];
}

export type NavLinkUnion = NavLink | DescriptionNavLink | IconNavLink | ButtonsNavLink | TeamNavLink;


export type NavColumn = {
  title?: string;
  links: NavLinkUnion[];
};

export type NavMenuSection = {
  headerLinks?: HeaderLinksSection;
  columnSection?: {
    title: string;
    columns: NavColumn[];
  };
};

export type NavMenuItem = {
  trigger: string;
  sections: NavMenuSection;
};
// ===== Section Types =====

export type HeaderLinksSection = {
    title?: string;
    links: NavLinkUnion[];
};

export type ColumnsSection = {
    title?: string;
    columns: NavColumn[];
};



// ================
// Navigation Menu Types
// ================


export interface NavMenuProps {
    trigger: string;
    sections: NavMenuSectionProps;
}

export interface NavMenuSectionProps {
    headerLinks?: HeaderLinksSectionProps;
    columnSection?: NavMenuColumnSectionProps;
}

export interface HeaderLinksSectionProps {
    links: { label: string; href: string; description?: string }[];
}

export interface NavMenuColumnSectionProps {
    title?: string | null;
    columns: {
        title?: string | null;
        links: { name: string; href: string }[];
    }[];
}
