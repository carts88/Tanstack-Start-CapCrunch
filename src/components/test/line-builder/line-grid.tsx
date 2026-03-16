import { LineupSlot } from "./lineup-slot";
type GridProps = {
  title: string;
  columns: readonly string[];
  rows: readonly (string | number)[];
};

export function LineGrid({ title, columns, rows }: GridProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {/* Header */}
        {columns.map((col) => (
          <div
            key={col}
            className="text-center font-bold py-2 bg-gray-100 dark:bg-gray-800 rounded-t-lg"
          >
            {col}
          </div>
        ))}

        {/* Slots */}
        {rows.map((row) =>
          columns.map((col) => (
            <LineupSlot
              key={`${col}${row}`}
              emptyLabel={`${col}${row}`}
            />
          ))
        )}
      </div>
    </div>
  );
}