import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "success" | "info" | "warning" | "danger";

export interface TableCell {
  value: string;
  badge?: BadgeVariant;
}

interface TableSectionProps {
  headers: string[];
  tableData: (string | TableCell)[][];
  footers?: string[];
  caption?: string;
}

const badgeClasses: Record<BadgeVariant, string> = {
  default: "bg-muted text-muted-foreground",
  success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  info:    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  danger:  "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

const CellContent = ({ cell }: { cell: string | TableCell }) => {
  if (typeof cell === "string") return <>{cell}</>;
  if (!cell.badge) return <>{cell.value}</>;
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-[10px] font-medium rounded-full leading-[1.8]",
        badgeClasses[cell.badge]
      )}
    >
      {cell.value}
    </span>
  );
};

export const TableSection = ({
  headers,
  tableData,
  footers,
  caption,
}: TableSectionProps) => {
  return (
    <div className="border border-border/60 rounded-xl overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            {headers.map((header) => (
              <TableHead
                key={header}
                className="text-[11px] font-semibold tracking-wide uppercase text-muted-foreground"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData.map((row, i) => (
            <TableRow
              key={i}
              className={cn(
                "transition-colors duration-100 hover:bg-primary/5",
                i % 2 === 1 && "bg-muted/20"
              )}
            >
              {row.map((cell, j) => (
                <TableCell key={j} className="text-sm">
                  <CellContent cell={cell} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

        {footers && (
          <TableFooter>
            <TableRow>
              {footers.map((foot, i) => (
                <TableCell key={i} className="text-sm font-medium">
                  {foot}
                </TableCell>
              ))}
            </TableRow>
          </TableFooter>
        )}

        {caption && <TableCaption>{caption}</TableCaption>}
      </Table>
    </div>
  );
};