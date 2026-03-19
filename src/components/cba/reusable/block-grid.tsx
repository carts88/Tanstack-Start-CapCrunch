const COL_MAP: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

interface Block {
  title: string;
  description: string;
}

interface BlockGridProps {
  cols?: number;
  blocks: Block[];
}

export const BlockGrid = ({ cols = 2, blocks }: BlockGridProps) => {
  return (
    <div className={`grid grid-cols-1 ${COL_MAP[cols] ?? "md:grid-cols-2"} gap-3`}>
      {blocks.map((block, idx) => (
        <div
          key={idx}
          className="group relative bg-card border border-border/60 rounded-xl p-5 space-y-2 transition-all duration-200 border-t-primary border-t-4 rounded-t-none"
        >

          <h4 className="font-medium text-sm text-foreground tracking-tight">
            {block.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {block.description}
          </p>
        </div>
      ))}
    </div>
  );
};