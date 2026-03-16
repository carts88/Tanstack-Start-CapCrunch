// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type SwapMode = "direct" | "cascade";

export interface DraggableItem {
  id: string;
  bucketId: string | null;
  data?: Record<string, unknown>;
}

export interface BucketDef {
  id: string;
  col: number;
  row: number;
  groupId: string;
}

export interface BucketGroup {
  id: string;
  cols: number;
  autoExpand?: boolean; // bucket-creator: adds empty bucket when last row is filled
}

