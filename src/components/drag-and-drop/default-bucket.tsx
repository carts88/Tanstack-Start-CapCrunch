import { DefaultDraggableCard } from "./default-draggable-card";
import { BucketDef, DraggableItem } from "./types";

export function DefaultBucket({
  item,
  isOver,
  isDraggingSource,
  renderItem,
  emptyState,
}: {
  bucket: BucketDef;
  item: DraggableItem | undefined;
  isOver: boolean;
  isDraggingSource: boolean;
  renderItem?: (item: DraggableItem) => React.ReactNode;
  emptyState?: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: 52,
        border: `2px solid ${isOver ? "var(--bucket-over-border, #4f8ef7)" : "var(--bucket-border, #2a2a2a)"}`,
        borderRadius: "var(--bucket-radius, 6px)",
        background: isOver
          ? "var(--bucket-over-bg, rgba(79,142,247,0.08))"
          : "var(--bucket-bg, #141414)",
        transition: "border-color 0.15s, background 0.15s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isDraggingSource ? 0.4 : 1,
        padding: "4px",
      }}
    >
      {item ? (
        renderItem ? renderItem(item) : <DefaultDraggableCard item={item} />
      ) : (
        emptyState ?? <DefaultEmptyState />
      )}
    </div>
  );
}

function DefaultEmptyState() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--bucket-empty-color, #333)",
        fontSize: 18,
        userSelect: "none",
      }}
    >
      +
    </div>
  );
}

