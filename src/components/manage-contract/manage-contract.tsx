import { Container, ContainerHeader, ContainerTitle, ContainerDescription, ContainerContent } from "@/components/ui/container";
import { Button } from '@/components/ui/button';
import { useAppForm } from '@/components/form';
import { baseContractYear, contractBuilderFormOpts, contractDefaultValues } from './manage-contract-schema';
import { ManageContractInfoFields } from './manage-contract-info';
import { ManageContractYearsFields } from './manage-contract-years';
import { validateContract } from './variability-calculations';
import { ManageContractModes } from "./manage-contract.types";
import { buildContract } from "./manage-contract-utils";
import { getClauseEligibilty } from "@/lib/utils/player.utils";
import { useFormStepper } from "@/hooks/use-form-stepper";
import { getMaxAllowedTerm } from "./yearly-validations";
import type { ClauseTypes, ContractTypes } from '@/lib/types/global-hockey-types';
import { useStore } from "@tanstack/react-form";

type FormMeta = {
  submitAction: 'continue' | 'backToMenu' | null
}

const defaultMeta: FormMeta = {
  submitAction: null,
}
interface ManageContractType {
    mode: ManageContractModes;
    age: number;
    prevContractYears?: {
        baseSalary: number;
        signingBonus: number;
        performanceBonus: number;
        minorsSalary: number;
        clause:  string | null;
        clauseInfo:   string | null;
    }[]
}

const ManageContract = ({ mode, age, prevContractYears }: ManageContractType) => {
/**
  const {
      currentValidator,
      step,
      currentStep,
      isFirstStep,
      handleCancelOrBack,
      handleNextStepOrSubmit,
    } = useFormStepper(ManageContractFormSteps);
 */

  const form = useAppForm({
  onSubmitMeta: defaultMeta,
  defaultValues: {
    ...contractDefaultValues,
    contractYears: baseContractYear,
  },
  onSubmit: async ({ value, meta }) => {
    // Do something with the values passed via handleSubmit
    console.log(`Selected action - ${meta.submitAction}`, value)
  },
});


  const { values} = form.state
  console.log(values)
  const { contractType } = values

  return (
    <Container className="mx-auto max-w-6xl py-8">
      <ContainerHeader>
        <ContainerTitle>Build Contract</ContainerTitle>
        <ContainerDescription>
          Contract Variability & Legality Calculator
        </ContainerDescription>
      </ContainerHeader>
      <ContainerContent>
        <form onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
      className="space-y-4"
      >
          <ManageContractInfoFields 
              form={form}
              fields={{
                contractType: "contractType",
                signingDate: "signingDate",
                signingTeam: "signingTeam",
                startYear: "startYear",
                contractLength: "contractLength"
              }}
            />

         
              <ManageContractYearsFields 
              form={form}
              fields={{contractYears: "contractYears"}}
              />
            
            <Button  
              type="submit"> 
                Submit
            </Button>
            </form>
      </ContainerContent>
    </Container>
  );
};

export default ManageContract;