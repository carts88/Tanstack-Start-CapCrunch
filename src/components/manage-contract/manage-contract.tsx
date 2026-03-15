import { Container, ContainerHeader, ContainerTitle, ContainerDescription, ContainerContent } from "@/components/ui/container";
import { Button } from '@/components/ui/button';
import { useAppForm } from '@/components/form';
import { baseContractYear, contractBuilderFormOpts, contractDefaultValues, defaultSubmitMeta, ManageContractInfoSchema } from './manage-contract-schema';
import { ManageContractInfoFields } from './manage-contract-info';
import { ManageContractYearsFields } from './manage-contract-years';
import { ManageContractModes } from "./manage-contract.types";
import { getContractCalculations, validateBackLoadedContract, validateContract, validateFrontLoadedContract } from './variability-calculations';
import type { ClauseTypes, ContractTypes } from '@/lib/types/global-hockey-types';
import { revalidateLogic, useStore } from "@tanstack/react-form";
import { useState } from "react";

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
  console.log(mode, age, prevContractYears)
  const form = useAppForm({
    defaultValues: {
      ...contractDefaultValues,
      contractYears: baseContractYear,
    },
    validationLogic: revalidateLogic(),
    onSubmitMeta: defaultSubmitMeta,
    onSubmit: async ({ value, meta }) => {
      // Do something with the values passed via handleSubmit
      console.log(`Selected action - ${meta.submitAction}`, value)
    },
      validators: {
        
        // onDynamic: 
        onChange({ value }) {
          let errors = [];
          const { contractYears, ...contractInfo } = value;
          console.log("validating contract", value)
          const { totalSigningBonus, maxAllowedSigningBonus, contractLoad } = getContractCalculations(contractYears);

          if (totalSigningBonus > maxAllowedSigningBonus) {
            errors.push("Total signing bonus exceeds maximum allowed signing bonus based on CBA rules.")
          }

          if (!errors) return null
        return errors
        },
      },
    })
  
  
    const errors = useStore(form.store, (state) => state.errors)


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
            
          />

          <ManageContractYearsFields 
            form={form}
          />

          {errors.map((error, idx) => (
            <li 
              key={idx}
              className="flex items-start gap-2 text-sm text-destructive"
            >
              <span className="mt-0.5 text-destructive">•</span>
              <span>{error}</span>
            </li>
          ))}
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