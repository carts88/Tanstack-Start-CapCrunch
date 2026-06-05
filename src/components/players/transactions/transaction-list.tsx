import { TransactionCard } from "./transaction-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Transaction {
  id: number;
  type: string;
  date: string;
  team: string;
  details: string;
  notes: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  title?: string;
  limit?: number;
  cardHeight?: number;
}

export const TransactionList = ({
  transactions,
  title = "Transaction History",
  limit,
  cardHeight = 160,
}: TransactionListProps) => {
  const safeTransactions = transactions ?? [];
  const visible = limit ? safeTransactions.slice(0, limit) : safeTransactions;
  const isEmpty = safeTransactions.length === 0;

  return (
    <section className="w-full max-w-full">
      {title && (
        <header className="mb-3 flex items-baseline justify-between border-b-2 border-border pb-2">
          <h2
            className="m-0 text-[13px] font-bold uppercase tracking-widest text-foreground"
            style={{ fontFamily: "'Arial Narrow', 'Helvetica Neue', sans-serif" }}
          >
            {title}
          </h2>
          {!isEmpty && (
            <span className="ml-4 text-[11px] tracking-[0.05em] text-muted-foreground">
              {safeTransactions.length}{" "}
              {safeTransactions.length === 1 ? "transaction" : "transactions"}
            </span>
          )}
        </header>
      )}

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground/40"
            aria-hidden="true"
          >
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          <p
            className="text-[13px] uppercase tracking-[0.05em] text-muted-foreground"
            style={{ fontFamily: "'Arial Narrow', sans-serif" }}
          >
            No transactions found.
          </p>
        </div>
      ) : (
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
          <CarouselContent className="-ml-2">
            {visible.map((tx) => (
              <CarouselItem
                key={tx.id}
                className="basis-78 pl-2"
                style={{ height: `${cardHeight}px` }}
              >
                <TransactionCard transaction={tx} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-3 flex items-center justify-end gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      )}
    </section>
  );
};