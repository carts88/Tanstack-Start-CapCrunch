import React from 'react';
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export type BuyoutRow = {
  season: number;
  caphit?: number;
  baseSalary?: number;
  signingBonus?: number;
  buyoutCaphit?: number;
  capSavings?: number;
};

interface DisplayBuyoutInfoProps {
  buyoutData: BuyoutRow[];
  type: '1/3' | '2/3';
}

const DisplayBuyoutInfo: React.FC<DisplayBuyoutInfoProps> = ({
  buyoutData,
  type,
}) => {
  if (!buyoutData || buyoutData.length === 0) return null;

  // Define the metrics (labels) and the order you want them displayed
  const metrics = [
    { key: 'caphit', label: 'Cap Hit' },
    { key: 'baseSalary', label: 'Base Salary' },
    { key: 'signingBonus', label: 'Signing Bonus' },
    { key: 'buyoutCaphit', label: 'Buyout Cap Hit' },
    { key: 'capSavings', label: 'Cap Savings' },
  ] as const;

  type MetricKey = (typeof metrics)[number]['key'];

  const formatSeason = (season: number) => `${season}-${String(season + 1).slice(-2)}`;

  const formatMoney = (value: number | undefined) => {
    if (value === undefined || value === null) return '-';
    const abs = Math.abs(value);
    const formatted = `$${abs.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
    return value < 0 ? `(${formatted})` : formatted;
  };

  return (
  
        <div className="rounded-md border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-left">Metric</TableHead>
                {buyoutData.map((row) => (
                  <TableHead key={row.season} className="text-center font-medium">
                    {formatSeason(row.season)}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {metrics.map(({ key, label }) => (
                <TableRow key={key} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-semibold text-left text-card-foreground">
                    {label}
                  </TableCell>
                  {buyoutData.map((row) => {
                    const value = row[key as MetricKey];
                    const formatted = formatMoney(value as number | undefined);

                    return (
                      <TableCell
                        key={row.season}
                        className="text-right tabular-nums"
                        style={{
                          color:
                            value === undefined
                              ? undefined
                              : value < 0
                              ? '#ef4444' // red-500
                              : '#22c55e', // green-500
                        }}
                      >
                        {formatted}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
  );
};

export default DisplayBuyoutInfo;