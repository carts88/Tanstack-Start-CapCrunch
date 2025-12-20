import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { withFieldGroup } from '@/components/form';
import { seasons, nhlTeams, contractTypes } from '@/lib/constants/metadata';
import { getMaxAllowedTerm } from './yearly-validations';
import { ContractTypes } from '@/lib/types/global-hockey-types';


export const errorMessage = (literalString: string) =>  {return { message: literalString }}
export function getMaxTerm (contractType: ContractTypes) {
  if(contractType == "ELC" || contractType == "ELC-FA" )
    return 3
  else return 7
}

export const ManageContractInfoFields = withFieldGroup({
  render: function ManageContractInfoFieldRender({group}) {
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
              <group.AppField
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
              </group.AppField>

           

            <group.AppField
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
            </group.AppField>
            

            <group.AppField
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
            </group.AppField>

            <group.AppField
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
            </group.AppField>
            
            <group.AppField
                name="contractLength"
                validators={{
                  onBlurListenTo: ['contractType'],
                  onBlur: ({value, fieldApi}) => {
                    
                    const maxTerm = getMaxTerm(fieldApi.form.getFieldValue('contractType') as ContractTypes)
                    console.log(
                      "value", value
                    )
                     console.log(
                      "maxTerm", maxTerm
                    )
                    if(value > maxTerm) {
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
              </group.AppField>


        </CardContent>
        <CardFooter className='flex justify-end'>
          

        </CardFooter>
      </Card>
      )
    }
  }
)