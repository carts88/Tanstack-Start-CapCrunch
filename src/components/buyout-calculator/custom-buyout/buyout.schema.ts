// buyout.schema.ts
import { CURRENT_SEASON_METADATA } from "@/lib/constants/hockey";
import { formOptions } from "@tanstack/react-form";
import z from "zod";

const {minSalary, upperLimit}= CURRENT_SEASON_METADATA
const maxSalary = upperLimit * .2

export const CustomBuyoutContractYearSchema = z.object({
  baseSalary: z
    .number()
    .min(minSalary, `Base salary must be ≥ ${minSalary.toLocaleString()}`)
    .max(maxSalary, `Base salary must be ≤ ${maxSalary.toLocaleString()}`),
  signingBonus: z
    .number()
    .min(0, "Signing bonus must be ≥ 0")
});

export const customBuyoutFormSchema = z.object({
  caphit: z
    .number()
    .min(minSalary, `Cap hit must be ≥ ${minSalary.toLocaleString()}`)
    .max(maxSalary, `Cap hit must be ≤ ${maxSalary.toLocaleString()}`),
  contractYears: z
    .array(CustomBuyoutContractYearSchema)
    .min(1, "Must have at least 1 contract year")
    .max(7, "Maximum 7 years allowed"),
});



export const customBuyoutFormDefaultValues = {
  caphit: minSalary,
  contractYears: [
    {
      baseSalary: minSalary,
      signingBonus: 0,
    },
  ],
};

export const customBuyoutFormOpts = formOptions({
  defaultValues: customBuyoutFormDefaultValues,
  validators: { onSubmit: customBuyoutFormSchema },
});
