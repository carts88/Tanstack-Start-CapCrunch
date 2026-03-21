import { TransactionCard } from "./transaction-card";

interface Transaction {
  id: number;
  type: string;
  date: string;
  team: string;
  details: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  title?: string;
  limit?: number;
  cardHeight?: number; // px, default 160
}

export const TransactionList = ({
  transactions,
  title = "Transaction History",
  limit,
  cardHeight = 160,
}: TransactionListProps) => {
  const visible = limit ? transactions.slice(0, limit) : transactions;
  const hidden = limit ? Math.max(0, transactions.length - limit) : 0;

  if (transactions.length === 0) {
    return (
      <div className="text-center text-[13px] uppercase tracking-[0.05em] text-muted-foreground"
        style={{ fontFamily: "'Arial Narrow', sans-serif" }}
      >
        No transactions found.
      </div>
    );
  }

  return (
    <section className="w-full max-w-full">
      {title && (
        <header className="mb-3 flex items-baseline justify-between border-b-2 border-border pb-2">
          <h2
            className="m-0 text-[13px] font-bold uppercase tracking-[0.1em] text-foreground"
            style={{ fontFamily: "'Arial Narrow', 'Helvetica Neue', sans-serif" }}
          >
            {title}
          </h2>
          <span
            className="ml-4 text-[11px] tracking-[0.05em] text-muted-foreground"
          >
            {transactions.length} {transactions.length === 1 ? "transaction" : "transactions"}
          </span>
        </header>
      )}

      <div className="flex flex-row items-stretch gap-2 overflow-x-auto [scrollbar-color:hsl(var(--border))_transparent] [scrollbar-width:thin]">
        {visible.map((tx) => (
          <div
            key={tx.id}
            className="w-78 shrink-0"
            style={{ height: `${cardHeight}px` }}
          >
            <TransactionCard transaction={tx} />
          </div>
        ))}

        {hidden > 0 && (
          <div
            className="flex shrink-0 items-center whitespace-nowrap px-4 text-[11px] uppercase tracking-[0.05em] text-muted-foreground"
            style={{ fontFamily: "'Arial Narrow', sans-serif" }}
          >
            +{hidden} more
          </div>
        )}
      </div>
    </section>
  );
};