
import DisplayBuyoutInfo from '../display-buyout-info';
import { SimpleContractInfoFields } from './simple-contract-info-fields';
import { SimpleContractYearFields } from './simple-contract-year-input';
import { calculateBuyout } from '../buyout.utils';
import { Container, ContainerHeader, ContainerTitle, ContainerDescription, ContainerContent } from "@/components/ui/container";
import { useAppForm } from '@/components/form';
import { CURRENT_SEASON } from '@/lib/constants/hockey';
import { customBuyoutFormOpts } from './buyout.schema';
import { useMemo } from 'react';
import { useStore } from '@tanstack/react-form';

const generateContract = (
  years: Array<{ baseSalary: number; signingBonus: number }>,
  caphit: number
) => {
  return years.map((year, i) => ({
    season: CURRENT_SEASON + i,
    caphit,
    baseSalary: year.baseSalary,
    signingBonus: year.signingBonus,
    totalSalary: year.baseSalary + year.signingBonus,
  }));
};

const buildBuyoutData = (
  caphit: number,
  contractYears: Array<{ baseSalary: number; signingBonus: number }>
) => {
  const contract = generateContract(contractYears, caphit);

  return {
    contract,
    over26: calculateBuyout(contract, 27),
    under26: calculateBuyout(contract, 25),
  };
};


const CustomBuyout = () => {

  const form = useAppForm({
    ...customBuyoutFormOpts,
    onSubmit: ({ value }) => {
      console.log("Submitted:", value);
    },
  });

  
const values = useStore(form.store, (state) => state.values)
const isValid = useStore(form.store, (state) => state.isValid)

const buyoutData = useMemo(() => {
  if (!isValid) return null;
  return buildBuyoutData(values.caphit, values.contractYears);
}, [values, isValid]);



  const isReady = buyoutData !== null;

  return (
    <Container className="mx-auto max-w-6xl py-8">
      <ContainerHeader>
        <ContainerTitle>Contract Buyout Calculator</ContainerTitle>
        <ContainerDescription>
          Calculate NHL contract buyout scenarios and cap implications
        </ContainerDescription>
      </ContainerHeader>

      <ContainerContent className="space-y-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-8"
        >
          <SimpleContractInfoFields form={form} />
          <SimpleContractYearFields form={form} />

        </form>

        {/* Auto-updating Results */}
      {isReady && (
          <div className="space-y-8 pt-12 mt-12 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground">Buyout Results</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Over 26 Years Old Buyout – 2/3 Rate
                </h3>
                <DisplayBuyoutInfo buyoutData={buyoutData.over26} type="2/3" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Under 26 Years Old Buyout – 1/3 Rate
                </h3>
                <DisplayBuyoutInfo buyoutData={buyoutData.under26} type="1/3" />
              </div>
            </div>
          </div> 
        )}
      </ContainerContent>
    </Container>
  );
};

export default CustomBuyout;