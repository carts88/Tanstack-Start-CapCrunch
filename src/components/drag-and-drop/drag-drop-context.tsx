// ─────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────

import { useState, useRef, useCallback, createContext, useContext, ReactNode, CSSProperties } from "react";
import { BucketDef } from "./types";
import { BucketGroup, DraggableItem, SwapMode } from "./types";
import { cascadeSwap, directSwap } from "./dnd-utils";

interface DndContextValue {
  items: DraggableItem[];
  buckets: BucketDef[];
  groups: BucketGroup[];
  swapMode: SwapMode;
  draggingId: string | null;
  overBucketId: string | null;
  setDraggingId: (id: string | null) => void;
  setOverBucketId: (id: string | null) => void;
  dropOnBucket: (targetBucketId: string) => void;
  getItemInBucket: (bucketId: string) => DraggableItem | undefined;
  getBucket: (bucketId: string) => BucketDef | undefined;
}

const DndContext = createContext<DndContextValue | null>(null);

export function useDnd() {
  const ctx = useContext(DndContext);
  if (!ctx) throw new Error("useDnd must be used within a DndProvider");
  return ctx;
}

interface DndProviderProps {
  initialItems: DraggableItem[];
  initialBuckets: BucketDef[];
  groups: BucketGroup[];
  swapMode?: SwapMode;
  onItemsChange?: (items: DraggableItem[], buckets: BucketDef[]) => void;
  children: React.ReactNode;
}

export function DndProvider({
  initialItems,
  initialBuckets,
  groups,
  swapMode = "direct",
  onItemsChange,
  children,
}: DndProviderProps) {
  const initialBucketIds = useRef<Set<string>>(new Set(initialBuckets.map((b) => b.id)));
  const [items, setItems] = useState<DraggableItem[]>(initialItems);
  const [buckets, setBuckets] = useState<BucketDef[]>(() => {
    let expanded = [...initialBuckets];
    for (const group of groups) {
      if (!group.autoExpand) continue;
      for (let col = 0; col < group.cols; col++) {
        const colBuckets = expanded
          .filter((b) => b.groupId === group.id && b.col === col)
          .sort((a, b) => a.row - b.row);
        if (!colBuckets.length) continue;
        const lastBucket = colBuckets[colBuckets.length - 1];
        const lastFilled = initialItems.some((i) => i.bucketId === lastBucket.id);
        if (lastFilled) {
          const newId = `${group.id}-col${col}-row${lastBucket.row + 1}`;
          if (!expanded.find((b) => b.id === newId)) {
            expanded.push({ id: newId, col, row: lastBucket.row + 1, groupId: group.id });
          }
        }
      }
    }
    return expanded;
  });
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [overBucketId, setOverBucketId] = useState<string | null>(null);

  const getItemInBucket = useCallback(
    (bucketId: string) => items.find((i) => i.bucketId === bucketId),
    [items]
  );

    const getBucket = useCallback(
        (bucketId: string) => buckets.find((b) => b.id === bucketId),
        [buckets]
    );
    const getColBuckets = (src: BucketDef[], groupId: string, col: number) =>
        src.filter((b) => b.groupId === groupId && b.col === col).sort((a, b) => a.row - b.row);

  // Auto-expand: when the last-row bucket in a column is filled, add a new bucket
    const maybeExpand = useCallback(
    (nextItems: DraggableItem[], nextBuckets: BucketDef[]) => {
        let expanded = [...nextBuckets];
        const initIds = initialBucketIds.current;
        const isFilled = (bucketId: string) => nextItems.some((i) => i.bucketId === bucketId);

        for (const group of groups) {
        if (!group.autoExpand) continue;
        for (let col = 0; col < group.cols; col++) {

            // Prune dynamic trailing empties
            let sorted = getColBuckets(expanded, group.id, col);
            while (sorted.length >= 2) {
            const last = sorted[sorted.length - 1];
            const secondLast = sorted[sorted.length - 2];
            if (initIds.has(last.id) || isFilled(last.id) || isFilled(secondLast.id)) break;
            expanded = expanded.filter((b) => b.id !== last.id);
            sorted = getColBuckets(expanded, group.id, col);
            }

            // Expand if last bucket is filled
            sorted = getColBuckets(expanded, group.id, col);
            if (!sorted.length) continue;
            const last = sorted[sorted.length - 1];
            if (isFilled(last.id)) {
            const newId = `${group.id}-col${col}-row${last.row + 1}`;
            if (!expanded.find((b) => b.id === newId)) {
                expanded.push({ id: newId, col, row: last.row + 1, groupId: group.id });
            }
            }
        }
        }
        return expanded;
    },
    [groups]
    );
  const dropOnBucket = useCallback(
    (targetBucketId: string) => {
      if (!draggingId) return;
      let nextItems: DraggableItem[];

      if (swapMode === "cascade") {
        nextItems = cascadeSwap(items, buckets, groups, draggingId, targetBucketId);
      } else {
        nextItems = directSwap(items, draggingId, targetBucketId);
      }

      const nextBuckets = maybeExpand(nextItems, buckets);
      setItems(nextItems);
      setBuckets(nextBuckets);
      onItemsChange?.(nextItems, nextBuckets);
      setDraggingId(null);
      setOverBucketId(null);
    },
    [draggingId, items, buckets, groups, swapMode, maybeExpand, onItemsChange]
  );

  return (
    <DndContext.Provider
      value={{
        items,
        buckets,
        groups,
        swapMode,
        draggingId,
        overBucketId,
        setDraggingId,
        setOverBucketId,
        dropOnBucket,
        getItemInBucket,
        getBucket,
      }}
    >
      {children}
    </DndContext.Provider>
  );
}
