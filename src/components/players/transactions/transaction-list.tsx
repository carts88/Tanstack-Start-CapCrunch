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
  const visible = limit ? transactions.slice(0, limit) : transactions;

  if (transactions.length === 0) {
    return (
      <div
        className="text-center text-[13px] uppercase tracking-[0.05em] text-muted-foreground"
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
          <span className="ml-4 text-[11px] tracking-[0.05em] text-muted-foreground">
            {transactions.length}{" "}
            {transactions.length === 1 ? "transaction" : "transactions"}
          </span>
        </header>
      )}

      <Carousel
        opts={{ align: "start", dragFree: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {visible.map((tx) => (
            <CarouselItem
              key={tx.id}
              className="basis-[312px] pl-2"
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
    </section>
  );
};