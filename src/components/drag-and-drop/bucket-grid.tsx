// ─────────────────────────────────────────────
// Bucket Grid
// ─────────────────────────────────────────────

import { DefaultBucket } from "./default-bucket";
import { useDnd } from "./drag-drop-context";
import { BucketDef, DraggableItem } from "./types";

interface BucketGridProps {
  groupId: string;
  gap?: number;
  colLabels?: string[];
  rowLabels?: string[];
  rowPrefix?: string
  className?: string;
  style?: React.CSSProperties;
  renderBucket?: (props: BucketRenderProps) => React.ReactNode;
  renderItem?: (item: DraggableItem) => React.ReactNode;
  emptyState?: React.ReactNode;
}

export interface BucketRenderProps {
  bucket: BucketDef;
  item: DraggableItem | undefined;
  isOver: boolean;
  isDraggingSource: boolean;
}

export function BucketGrid({
  groupId,
  gap = 8,
  colLabels,
  rowLabels,
  rowPrefix,
  className,
  style,
  renderBucket,
  renderItem,
  emptyState,
}: BucketGridProps) {
  const { buckets, overBucketId, draggingId, setOverBucketId, dropOnBucket, getItemInBucket, items } = useDnd();

  const groupBuckets = buckets.filter((b) => b.groupId === groupId);
  const maxCol = Math.max(...groupBuckets.map((b) => b.col), 0);
  const maxRow = Math.max(...groupBuckets.map((b) => b.row), 0);

  const cols = maxCol + 1;
  const rows = maxRow + 1;

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `${rowLabels ? "auto " : ""}repeat(${cols}, 1fr)`,
        gridTemplateRows: `${colLabels ? "auto " : ""}repeat(${rows}, auto)`,
        gap,
        ...style,
      }}
    >
      {/* Column labels */}
      {colLabels &&
        Array.from({ length: cols }).map((_, ci) => (
          <div
            key={`clabel-${ci}`}
            style={{
              gridColumn: rowLabels ? ci + 2 : ci + 1,
              gridRow: 1,
              textAlign: "center",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--bucket-label-color, #888)",
              paddingBottom: 4,
            }}
          >
            {colLabels[ci] ?? `Col ${ci + 1}`}
          </div>
        ))}

      {/* Row labels */}
      {rowLabels &&
        Array.from({ length: rows }).map((_, ri) => (
          <div
            key={`rlabel-${ri}`}
            style={{
              gridColumn: 1,
              gridRow: colLabels ? ri + 2 : ri + 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 8,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--bucket-label-color, #888)",
            }}
          >
            {rowPrefix ? `${rowPrefix}${ri + 1}` : `R${ri+1}`}
          </div>
        ))}

      {/* Buckets */}
      {groupBuckets.map((bucket) => {
        const item = getItemInBucket(bucket.id);
        const isOver = overBucketId === bucket.id;
        const isDraggingSource = !!draggingId && item?.id === draggingId;

        const gridCol = rowLabels ? bucket.col + 2 : bucket.col + 1;
        const gridRow = colLabels ? bucket.row + 2 : bucket.row + 1;

        return (
          <div
            key={bucket.id}
            style={{ gridColumn: gridCol, gridRow: gridRow }}
            onDragOver={(e) => {
              e.preventDefault();
              setOverBucketId(bucket.id);
            }}
            onDragLeave={() => setOverBucketId(null)}
            onDrop={(e) => {
              e.preventDefault();
              dropOnBucket(bucket.id);
            }}
          >
            {renderBucket ? (
              renderBucket({ bucket, item, isOver, isDraggingSource })
            ) : (
              <DefaultBucket
                bucket={bucket}
                item={item}
                isOver={isOver}
                isDraggingSource={isDraggingSource}
                renderItem={renderItem}
                emptyState={emptyState}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

