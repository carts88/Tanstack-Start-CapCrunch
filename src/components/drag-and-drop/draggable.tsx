
// import type { ReactNode } from 'react';

// // ──────────────────────────────────────────────
// // Props interface
// // ──────────────────────────────────────────────
// interface IDraggableCard {
//   id: string | number;           // unique identifier required for sorting
//   children: ReactNode;
//   className?: string;
//   style?: React.CSSProperties;
//   disabled?: boolean;
// }

// // ──────────────────────────────────────────────
// // Draggable Card component
// // ──────────────────────────────────────────────
// export const DraggableCard = ({
//   id,
//   children,
//   className = '',
//   style,
//   disabled = false,
// }: IDraggableCard) => {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({
//     id,
//     disabled,
//   });

//   const dragStyle = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.65 : 1,
//     scale: isDragging ? 1.03 : 1,
//     boxShadow: isDragging ? '0 10px 25px -5px rgba(0,0,0,0.25)' : undefined,
//     zIndex: isDragging ? 10 : undefined,
//     ...style,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={dragStyle}
//       className={`
//         touch-none select-none
//         rounded-lg border bg-white p-4 shadow-sm
//         transition-all duration-200
//         ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
//         ${className}
//       `}
//       {...(disabled ? {} : attributes)}
//       {...(disabled ? {} : listeners)}
//     >
//       {children}
//     </div>
//   );
// };