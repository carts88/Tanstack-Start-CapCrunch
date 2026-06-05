import { useState } from "react";
import { ContractInfo } from "./build-contract/contract-info,";
import { ContractFormValues } from "./contract-grid.types";
import { emptyYear } from "./contract-grid.utils";
import { ContractYearGrid } from "./contract-grid";

export function CustomContractBuilder() {
  const [contract, setContract] = useState<ContractFormValues>({
    startYear: new Date().getFullYear(),
    signingDate: new Date(),
    signingTeam: "ANA",
    contractType: "SPC",
    years: [emptyYear()],
  });

  
  return (
    <div className="w-7xl m-auto my-5">
        <ContractInfo
        isModalNested={false}
        contract={contract}
        updateContract={(updater) =>
          setContract((prev) => updater(prev))
        }
        handleContractTypeChange={(newType) =>
          newType &&
          setContract((prev) => ({
            ...prev,
            contractType: newType,
          }))
        }

        handleLengthChange={(newLen) => {
          setContract((prev) => {
            const years =
              newLen > prev.years.length
                ? [
                    ...prev.years,
                    ...Array.from(
                      { length: newLen - prev.years.length },
                      emptyYear
                    ),
                  ]
                : prev.years.slice(0, newLen);

            return {
              ...prev,
              years,
            };
          });
        }}
        handleSigningTeamChange={(team) =>
          setContract((prev) => ({
            ...prev,
            signingTeam: team,
          }))
        }
        handleSetSigningDate={(date) =>
          date &&
          setContract((prev) => ({
            ...prev,
            signingDate: date,
          }))
        }
      />

      <ContractYearGrid
        calculatedCapHit={244424}
        contract={contract}
        setContract={setContract}
      />
    </div>    

);
}