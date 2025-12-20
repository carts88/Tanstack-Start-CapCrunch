
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { withForm } from '@/components/form';
import { customBuyoutFormOpts } from './buyout.schema';


export const SimpleContractInfoFields = withForm({
  ...customBuyoutFormOpts,
  render: ({form}) => {
    return (
      <Card className="border-border bg-card">
      <CardHeader >
         <CardTitle className="text-card-foreground">
           Contract Information
         </CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter the contract caphit.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-x-2 py-1 items-center">
         <form.AppField
            name="caphit"
            >
              {(field) => {
                return (
                  <field.MoneyField
                    id='caphit'
                    label='Caphit'
                    description='Enter caphit for this contract!'
                  />
                )
              }}
            </form.AppField>
      </CardContent>
    </Card>
    )
  }
}
)