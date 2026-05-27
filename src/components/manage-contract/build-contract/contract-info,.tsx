import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Select, SelectItem, SelectGroup, SelectTrigger, SelectValue, SelectContent } from "../../ui/select"
import SelectWithSearchImage from "../../ui/advanced/select-with-search"
import { nhlTeamSelectData } from "@/lib/constants/metadata"
import { DateField, DateFieldDays, DateFieldMonths, DateFieldSeparator, DateFieldYears } from "../../ui/date-field"
import { ContractFormValues } from "../contract-grid"


interface IContractInfo {
  contract: ContractFormValues;

  updateContract: (
    updater: (
      prev: ContractFormValues
    ) => ContractFormValues
  ) => void;

  handleLengthChange: (
    newLen: number
  ) => void;

  handleSigningTeamChange: (
    newTeam: string
  ) => void;

    handleSetSigningDate: (
        newDate: Date | null
      ) => void;
}

export const ContractInfo = ({
contract,
updateContract,
handleLengthChange, 
handleSigningTeamChange,
handleSetSigningDate
} :  IContractInfo) => {
    
    return (
        <div className="inline-flex flex-wrap items-stretch  rounded-lg bg-background overflow-hidden">
  {/* Start year */}
  <div className="flex flex-col gap-1 px-4 py-2.5 border-r border-border">
    <Label className="text-[11px] text-muted-foreground tracking-wide">
      Start year
    </Label>
    <Input
      
      type="number"
      min={1990}
      max={2026}
      value={contract.startYear}
      onChange={(e) =>
        updateContract((prev) => ({
          ...prev,
          startYear: Number(e.target.value),
        }))
      }
      className="w-22 h-9 text-sm bg-muted/50"
    />
  </div>

  {/* Contract length */}
  <div className="flex flex-col gap-1 px-4 py-2.5 border-r border-border">
    <Label className="text-[11px] text-muted-foreground tracking-wide">
      Length
    </Label>
    <Select
      value={String(contract.years.length)}
      onValueChange={(v) => handleLengthChange(Number(v))}
    >
      <SelectTrigger className="w-24 h-7 text-sm bg-muted/50">
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
  </div>

  {/* Signing team */}
  <div className="flex flex-col gap-1 px-4 py-2.5 border-r border-border">
    <Label className="text-[11px] text-muted-foreground tracking-wide">
      Signing team
    </Label>
    <SelectWithSearchImage
      id="signing team"
      subject="signing team"
      items={nhlTeamSelectData}
      value={contract.signingTeam}
      onValueChange={handleSigningTeamChange}
    />
  </div>

  {/* Signing date */}
  <div className="flex flex-col gap-1 px-4 py-2.5">
    <Label className="text-[11px] text-muted-foreground tracking-wide">
      Signing date
    </Label>
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
  </div>

</div>
    )
}