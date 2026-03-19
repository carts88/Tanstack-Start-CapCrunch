import type { BadgeVariant } from "./reusable/table-section";
import type { AlertVariant } from "./reusable/alert-block";
import type { RichListBadgeVariant } from "./reusable/rich-list-section";

// ── Shared ────────────────────────────────────────────────────────────────────

interface BaseBlock {
  title?: string;
  description?: string;
}

// ── Block Grid ────────────────────────────────────────────────────────────────

export interface BlockGridSection {
  type: "block-grid";
  cols?: number;
  blocks: { title: string; description: string }[];
}

// ── List ──────────────────────────────────────────────────────────────────────

export interface ListSubSection {
  type: "list";
  title: string;
  items: (string | { text: string; tag?: string })[];
}

// ── Description ───────────────────────────────────────────────────────────────

export interface DescriptionSubSection {
  type: "description";
  title: string;
  description: string;
}

// ── Link to Tool ──────────────────────────────────────────────────────────────

export interface LinkToToolSubSection {
  type: "link-to-tool";
  name: string;
  link: string;
  description?: string;
}

// ── Table ─────────────────────────────────────────────────────────────────────

export interface TableSubSection {
  type: "table";
  headers: string[];
  tableData: (string | { value: string; badge?: BadgeVariant })[][];
  footers?: string[];
  caption?: string;
}

// ── Grid Section ──────────────────────────────────────────────────────────────

export interface GridSubSection {
  type: "grid-section";
  title: string;
  description: string;
  cols: number;
  subSection: SubSection[];
}

// ── Stat Callout ──────────────────────────────────────────────────────────────

export interface StatCalloutSubSection {
  type: "stat-callout";
  cols?: 2 | 3 | 4;
  stats: {
    value: string;
    label: string;
    delta?: string;
    deltaVariant?: "up" | "down" | "neutral";
  }[];
}

// ── Alert Block ───────────────────────────────────────────────────────────────

export interface AlertSubSection {
  type: "alert";
  variant?: AlertVariant;
  title: string;
  description: string;
}

// ── Comparison Block ──────────────────────────────────────────────────────────

export interface ComparisonSubSection {
  type: "comparison";
  leftLabel: string;
  rightLabel: string;
  leftItems: { text: string }[];
  rightItems: { text: string }[];
  rightAccent?: "blue" | "green";
}

// ── Timeline Block ────────────────────────────────────────────────────────────

export interface TimelineSubSection {
  type: "timeline";
  events: {
    date: string;
    title: string;
    description?: string;
    status?: "past" | "active" | "upcoming";
  }[];
}

// ── Definition Block ──────────────────────────────────────────────────────────

export interface DefinitionSubSection {
  type: "definition";
  title?: string;
  items: {
    question: string;
    answer: string;
    note?: string;
  }[];
}

// ── Rich List Section ─────────────────────────────────────────────────────────

export interface RichListSubSection {
  type: "rich-list";
  title?: string;
  items: {
    label: string;
    description?: string;
    icon?: React.ReactNode;
    badge?: string;
    badgeVariant?: RichListBadgeVariant;
    value?: string;
    valueLabel?: string;
    subList?: { label: string; description?: string }[];
  }[];
}

// ── Union ─────────────────────────────────────────────────────────────────────

export type SubSection =
  | BlockGridSection
  | ListSubSection
  | DescriptionSubSection
  | LinkToToolSubSection
  | TableSubSection
  | GridSubSection
  | StatCalloutSubSection
  | AlertSubSection
  | ComparisonSubSection
  | TimelineSubSection
  | DefinitionSubSection
  | RichListSubSection;

export interface ISection {
  title: string;
  description?: string;
  subSections: SubSection[] 
}