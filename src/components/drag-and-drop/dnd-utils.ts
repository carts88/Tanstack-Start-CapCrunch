import { BucketDef, BucketGroup, DraggableItem } from "./types";


export function directSwap(items: DraggableItem[], draggingId: string, targetBucketId: string) {
  const dragItem = items.find((i) => i.id === draggingId)!;
  const targetItem = items.find((i) => i.bucketId === targetBucketId);

  const swaps = new Map<string, string | null>([
    [draggingId, targetBucketId],
    ...(targetItem ? [[targetItem.id, dragItem.bucketId]] as [string, string | null][] : []),
  ]);

  return items.map((item) =>
    swaps.has(item.id) ? { ...item, bucketId: swaps.get(item.id)! } : item
  );
}


export function cascadeSwap(
  items: DraggableItem[],
  buckets: BucketDef[],
  groups: BucketGroup[],
  draggingId: string,
  targetBucketId: string
): DraggableItem[] {
  const dragItem = items.find((i) => i.id === draggingId)!;
  const targetBucket = buckets.find((b) => b.id === targetBucketId)!;
  const group = groups.find((g) => g.id === targetBucket.groupId)!;

  const colBuckets = buckets
    .filter((b) => b.groupId === group.id && b.col === targetBucket.col && b.row >= targetBucket.row)
    .sort((a, b) => a.row - b.row);

  const moves = new Map<string, string>(); // itemId → new bucketId
  let displaced: DraggableItem | null = null;

  for (const bucket of colBuckets) {
    const incoming: DraggableItem = displaced ?? dragItem;
    const occupant: DraggableItem | null = items.find((i) => i.bucketId === bucket.id && i.id !== incoming.id) ?? null;
    moves.set(incoming.id, bucket.id);
    if (!occupant) break;
    displaced = occupant;
  }

  // If still displaced at the end, send it to the drag item's original bucket
  if (displaced && !moves.has(displaced.id)) {
    moves.set(displaced.id, dragItem.bucketId!);
  }

  return items.map((item) =>
    moves.has(item.id) ? { ...item, bucketId: moves.get(item.id)! } : item
  );
}