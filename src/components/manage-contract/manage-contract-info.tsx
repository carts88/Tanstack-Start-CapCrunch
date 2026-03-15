import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { withForm } from '@/components/form';
import { seasons, nhlTeams, contractTypes } from '@/lib/constants/metadata';
import { ContractTypes } from '@/lib/types/global-hockey-types';
import { errorMessage } from '../form/form-utils/form.utils';
import { Button } from '@/components/ui/button';
import { createInitialContractYears } from './manage-contract-utils';

export function getMaxTerm (contractType: ContractTypes) {
  if(contractType == "ELC" || contractType == "ELC-FA" )
    return 3
  else return 7
}

export const ManageContractInfoFields = withForm({
  render: function ManageContractInfoFieldRender({form}) {
    const submitStepOne = () => {
       const contractLength = form.getFieldValue('contractLength') as number
       const startYear = form.getFieldValue('startYear') as number
      form.setFieldValue("contractYears", createInitialContractYears(contractLength, startYear));
    };
    console.log("errors", form.state.errors)
      return (
        <Card className="border-border bg-card">
        <CardHeader >
          <CardTitle className="text-card-foreground">
            Contract Information
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter Contract Info
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-x-2 py-1 items-center">
              <form.AppField
                name="signingDate"
                >
                  {(field) => {
                    return (
                      <field.DatePickerField
                        id='signingDate'
                        label='Signing Date'
                      />
                    )
                  }}
              </form.AppField>

           

            <form.AppField
              name="signingTeam"
              >
                {(field) => {
                  return (
                    <field.SelectWithSearchImageField
                      id='signingTeam'
                      label='Signing Team'
                      subject="team"
                      placeholder="Choose an NHL team"
                      items={nhlTeams}
                    />
                  )
                }}
            </form.AppField>
            

            <form.AppField
              name="startYear"
              >
                {(field) => {
                  return (
                    <field.SelectWithSearchImageField
                      id='startYear'
                      label='Start Year (season)'
                      subject="season"
                      placeholder="Choose a start year to contract"
                      items={seasons}
                    />
                  )
                }}
            </form.AppField>

            <form.AppField
              name="contractType"
              >
                {(field) => {
                  return (
                    <field.SelectWithSearchImageField
                    
                      id='contractType'
                      label='Contract Type'
                      subject="contract types"
                      placeholder="What type of contract?"
                      items={contractTypes}
                    />
                  )
                }}
            </form.AppField>
            
            <form.AppField
                name="contractLength"
                validators={{
                  onBlurListenTo: ['contractType'],
                  onChange: ({value, fieldApi}) => {
                    const maxTerm = getMaxTerm(fieldApi.form.getFieldValue('contractType') as ContractTypes)
                    if(Number(value) > maxTerm) {
                      return errorMessage(`Contract length cannot be greater than ${maxTerm}`);
                    }
                    return undefined
                  }
                  
                }}
                >
                  {(field) => {
                    return (
                      <field.NumberField
                        id='contractLength'
                        label='Contract Length'
                      />
                    )
                  }}
              </form.AppField>

        </CardContent>
        <CardFooter
        
        className='flex justify-end'>
          <Button
          onClick={submitStepOne}
          >
            Submit Contract Info
          </Button>

        </CardFooter>
      </Card>
      )
    }
  }
)