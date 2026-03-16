import { useDnd } from "./drag-drop-context";
import { DraggableItem } from "./types";

interface DraggableProps {
  itemId: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export function Draggable({ itemId, children, className, style, disabled }: DraggableProps) {
  const { setDraggingId, draggingId } = useDnd();
  const isDragging = draggingId === itemId;

  return (
    <div
      draggable={!disabled}
      className={className}
      onDragStart={() => setDraggingId(itemId)}
      onDragEnd={() => setDraggingId(null)}
      style={{
        cursor: disabled ? "default" : "grab",
        opacity: isDragging ? 0.5 : 1,
        userSelect: "none",
        transition: "opacity 0.1s",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function DefaultDraggableCard({ item }: { item: DraggableItem }) {
  return (
    <Draggable itemId={item.id} style={{ width: "100%" }}>
      <div
        style={{
          padding: "8px 10px",
          background: "var(--draggable-bg, #1e1e1e)",
          border: "1px solid var(--draggable-border, #333)",
          borderRadius: "var(--draggable-radius, 4px)",
          color: "var(--draggable-color, #e0e0e0)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.01em",
          textAlign: "center",
        }}
      >
        {item.id}
      </div>
    </Draggable>
  );
}

