import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "../../ui/select"
import SelectWithSearchImage from "../../ui/advanced/select-with-search"
import { nhlTeamSelectData } from "@/lib/constants/metadata"
import { DateField, DateFieldDays, DateFieldMonths, DateFieldSeparator, DateFieldYears } from "../../ui/date-field"
import { ContractFormValues } from "../contract-grid"

interface IContractInfo {
  contract: ContractFormValues;
  updateContract: (updater: (prev: ContractFormValues) => ContractFormValues) => void;
  handleLengthChange: (newLen: number) => void;
  handleSigningTeamChange: (newTeam: string) => void;
  handleSetSigningDate: (newDate: Date | null) => void;
}

function FieldWrapper({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </Label>
      {children}
    </div>
  )
}

export const ContractInfo = ({
  contract,
  updateContract,
  handleLengthChange,
  handleSigningTeamChange,
  handleSetSigningDate,
}: IContractInfo) => {
  return (
    <div className="inline-flex items-end gap-x-4">

      <FieldWrapper label="Start year">
        <Input
          type="number"
          min={1990}
          max={2026}
          value={contract.startYear}
          onChange={(e) =>
            updateContract((prev) => ({ ...prev, startYear: Number(e.target.value) }))
          }
          className="w-20 text-xs bg-muted/50"
        />
      </FieldWrapper>

      <FieldWrapper label="Length">
        <Select
          value={String(contract.years.length)}
          onValueChange={(v) => handleLengthChange(Number(v))}
        >
          <SelectTrigger className="w-20 h-7 text-xs bg-muted/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n} {n === 1 ? "yr" : "yrs"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldWrapper>

      <FieldWrapper label="Signing team">
        <SelectWithSearchImage
          id="signing team"
          subject="signing team"
          items={nhlTeamSelectData}
          value={contract.signingTeam}
          onValueChange={handleSigningTeamChange}
        />
      </FieldWrapper>

      <FieldWrapper label="Signing date">
        <DateField
          id=""
          defaultValue={contract.signingDate}
          onValueChange={handleSetSigningDate}
        >
          <DateFieldMonths />
          <DateFieldSeparator />
          <DateFieldDays />
          <DateFieldSeparator />
          <DateFieldYears />
        </DateField>
      </FieldWrapper>

    </div>
  )
}