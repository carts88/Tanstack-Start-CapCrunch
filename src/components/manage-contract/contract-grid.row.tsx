import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { ContractYear } from "./contract-grid.types";
import { formatSalaryDisplay } from "./contract-grid.utils";
import { CLAUSE_OPTIONS } from "./contract-grid.quick-fill";
import { ClauseTypes } from "@/lib/types/global-hockey-types";

interface ContractYearRowProps {
  row: ContractYear;
  yearLabel: string;
  index: number;
  calculatedCapHit: number;
  updateYearField: (
    rowIndex: number,
    field: keyof ContractYear,
    value: unknown
  ) => void;
  handleSalaryBlur: (
    rowIndex: number,
    field: keyof ContractYear,
    raw: string
  ) => void;
}

export function ContractYearRow({
  row,
  yearLabel,
  index,
  calculatedCapHit,
  updateYearField,
  handleSalaryBlur,
}: ContractYearRowProps) {
  return (
    <tr className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
      <td className="px-3 py-1.5 w-24">
        <span className="text-xs font-medium text-muted-foreground">
          {yearLabel}
        </span>
      </td>

      <td className="px-1 py-1">
        <div className="flex items-center gap-1">
          <Input
            value={formatSalaryDisplay(row.capHitOverride ?? calculatedCapHit)}
            placeholder="0"
            onChange={(e) => updateYearField(index, "capHitOverride", e.target.value)}
            onBlur={(e) => handleSalaryBlur(index, "capHitOverride", e.target.value)}
            className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
          />

          {row.capHitOverride !== null && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7 shrink-0"
              onClick={() => updateYearField(index, "capHitOverride", null)}
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
      </td>

      <td className="px-1 py-1">
        <Input
          value={formatSalaryDisplay(row.baseSalary)}
          placeholder="0"
          onChange={(e) => updateYearField(index, "baseSalary", e.target.value)}
          onBlur={(e) => handleSalaryBlur(index, "baseSalary", e.target.value)}
          className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
        />
      </td>

      <td className="px-1 py-1">
        <Input
          value={formatSalaryDisplay(row.signingBonus)}
          placeholder="0"
          onChange={(e) => updateYearField(index, "signingBonus", e.target.value)}
          onBlur={(e) => handleSalaryBlur(index, "signingBonus", e.target.value)}
          className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
        />
      </td>

      <td className="px-1 py-1">
        <Input
          value={formatSalaryDisplay(row.performanceBonus)}
          placeholder="0"
          onChange={(e) => updateYearField(index, "performanceBonus", e.target.value)}
          onBlur={(e) => handleSalaryBlur(index, "performanceBonus", e.target.value)}
          className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
        />
      </td>

      <td className="px-1 py-1">
        <Input
          value={formatSalaryDisplay(row.minorsSalary)}
          placeholder="0"
          onChange={(e) => updateYearField(index, "minorsSalary", e.target.value)}
          onBlur={(e) => handleSalaryBlur(index, "minorsSalary", e.target.value)}
          className="h-8 text-sm border-transparent bg-transparent shadow-none focus-visible:ring-1 "
        />
      </td>

      <td className="px-1 py-1">
        <div className="flex items-center gap-1">
          <Select
            value={row.clause ?? ""}
            onValueChange={(value) => updateYearField(index, "clause", value as ClauseTypes)}
          >
            <SelectTrigger className="h-8 text-xs w-24 border-transparent shadow-none bg-transparent focus:ring-1 focus:border-violet-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CLAUSE_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </td>

      <td className="px-1 py-1">
        {row.clause && (
          <Input
            value={row.clauseInfo ?? ""}
            onChange={(e) => updateYearField(index, "clauseInfo", e.target.value)}
            placeholder="Details…"
            className="h-8 text-xs w-28 border-transparent bg-transparent shadow-none focus-visible:ring-1 "
          />
        )}
      </td>
    </tr>
  );
}
