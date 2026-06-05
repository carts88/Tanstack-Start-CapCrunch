import { CSSProperties, ReactNode, ButtonHTMLAttributes } from "react";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type FloatingBarPosition = "top" | "bottom" | "left" | "right";
export type FloatingBarRounded = "sm" | "md" | "lg" | "full";

export interface FloatingBarProps {
  children: ReactNode;
  position?: FloatingBarPosition;
  offset?: string;
  gap?: string;
  className?: string;
  style?: CSSProperties;
  backdrop?: boolean;
  rounded?: FloatingBarRounded | string;
}

export interface FloatingBarDividerProps {
  /** Force orientation. Auto-detected from parent position when omitted. */
  vertical?: boolean;
}

export interface FloatingBarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon element (e.g. a Lucide icon) shown above the label */
  icon: ReactNode;
  /** Short label beneath the icon */
  label: string;
  /** Highlight as active/selected */
  active?: boolean;
  /** Red destructive styling */
  danger?: boolean;
  /** Tooltip / aria-label */
  tooltip?: string;
}

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

const POSITION_META: Record<
  FloatingBarPosition,
  { wrapper: CSSProperties; inner: CSSProperties; isVertical: boolean }
> = {
  bottom: {
    wrapper: { bottom: "var(--fb-offset)", left: "50%", transform: "translateX(-50%)" },
    inner: { flexDirection: "row" },
    isVertical: false,
  },
  top: {
    wrapper: { top: "var(--fb-offset)", left: "50%", transform: "translateX(-50%)" },
    inner: { flexDirection: "row" },
    isVertical: false,
  },
  left: {
    wrapper: { left: "var(--fb-offset)", top: "50%", transform: "translateY(-50%)" },
    inner: { flexDirection: "column" },
    isVertical: true,
  },
  right: {
    wrapper: { right: "var(--fb-offset)", top: "50%", transform: "translateY(-50%)" },
    inner: { flexDirection: "column" },
    isVertical: true,
  },
};

const ROUNDED_MAP: Record<FloatingBarRounded, string> = {
  sm: "8px",
  md: "12px",
  lg: "18px",
  full: "9999px",
};

// ─────────────────────────────────────────────
// FloatingBar
// ─────────────────────────────────────────────

export function FloatingBar({
  children,
  position = "bottom",
  offset = "20px",
  gap = "6px",
  className = "",
  style = {},
  backdrop = true,
  rounded = "lg",
}: FloatingBarProps) {
  const meta = POSITION_META[position] ?? POSITION_META.bottom;
  const borderRadius =
    ROUNDED_MAP[rounded as FloatingBarRounded] ?? rounded ?? ROUNDED_MAP.lg;

  const wrapperStyle = {
    position: "fixed" as const,
    zIndex: 9999,
    "--fb-offset": offset,
    ...meta.wrapper,
    ...style,
  } as CSSProperties & { "--fb-offset": string };

  const innerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap,
    padding: "6px",
    borderRadius,
    border: "1px solid hsl(var(--border) / 0.6)",
    background: "transparent",                          // ← was hsl(background/0.75)

    backdropFilter: backdrop ? "blur(20px) saturate(1.8)" : "none",
    WebkitBackdropFilter: backdrop ? "blur(20px) saturate(1.8)" : "none",
    boxShadow:
      "0 8px 24px -4px hsl(var(--foreground) / 0.12), 0 2px 8px -2px hsl(var(--foreground) / 0.08), inset 0 1px 0 hsl(var(--foreground) / 0.05)",
    ...meta.inner,
  };

  return (
    <div style={wrapperStyle} className={`floating-bar ${className}`} role="toolbar">
      <div style={innerStyle}>{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// FloatingBarDivider
// ─────────────────────────────────────────────

export function FloatingBarDivider({ vertical = false }: FloatingBarDividerProps) {
  return (
    <div
      role="separator"
      style={{
        // horizontal bar  → thin horizontal line (width-driven)
        // vertical bar    → thin vertical line  (height-driven)
        width: vertical ? "1px" : "24px",
        height: vertical ? "24px" : "1px",
        margin: vertical ? "2px 4px" : "4px 2px",
        background: "hsl(var(--border) / 0.5)",
        borderRadius: "1px",
        flexShrink: 0,
      }}
    />
  );
}

// ─────────────────────────────────────────────
// FloatingBarButton  (icon + label pill)
//
// Use this as the <SheetTrigger asChild> child, or
// wrap it however you like. It is NOT opinionated
// about Sheet — it's just a styled button.
//
// Example:
//   <SheetTrigger asChild>
//     <FloatingBarButton
//       icon={<FilePlus2 size={16} />}
//       label="Contract"
//       tooltip="Add contract"
//     />
//   </SheetTrigger>
// ─────────────────────────────────────────────

export function FloatingBarButton({
  icon,
  label,
  active = false,
  danger = false,
  tooltip,
  className = "",
  ...rest
}: FloatingBarButtonProps) {
  return (
    <button
      title={tooltip ?? label}
      aria-label={tooltip ?? label}
      aria-pressed={active}
      data-active={active || undefined}
      data-danger={danger || undefined}
      className={[
        // layout
        "group relative inline-flex flex-col items-center justify-center gap-1",
        "w-14 py-2.5 px-1",
        // shape
        "rounded-md",
        // base colours  (uses CSS vars so it respects light/dark)
        "text-muted-foreground",
        // hover / active / danger states via Tailwind data-* variants
        "hover:bg-accent hover:text-accent-foreground",
        "data-active:bg-accent data-active:text-accent-foreground",
        "data-danger:hover:bg-destructive/15 data-danger:hover:text-destructive",
        "data-danger:text-destructive/70",
        // motion
        "transition-all duration-150 active:scale-95",
        // reset
        "cursor-pointer border-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        "bg-transparent",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {/* icon */}
      <span className="flex items-center justify-center w-7 h-7 rounded-sm transition-colors">
        {icon}
      </span>
      {/* label */}
      <span className="text-[10px] font-medium leading-none tracking-wide">
        {label}
      </span>
    </button>
  );
}