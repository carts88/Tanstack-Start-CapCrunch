import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { X, Plus } from 'lucide-react';
import { CURRENT_SEASON, SEASON_METADATA } from '@/lib/constants/hockey';
import { withForm } from '@/components/form';
import { customBuyoutFormOpts } from './buyout.schema';
import { getObjectOfArrayByKey } from '@/lib/utils/array.utils';

export const SimpleContractYearFields = withForm({
  ...customBuyoutFormOpts,
  render: ({form}) => {
    const {minSalary} = getObjectOfArrayByKey(SEASON_METADATA,"value", CURRENT_SEASON)
    return (
      <Card className="border-border bg-card shadow-sm">
        <CardHeader >
          <CardTitle>
            Contract Year Data
          </CardTitle>
          <CardDescription>
            Enter contract year data for each season.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form.AppField name="contractYears" mode="array">
            {(field) => {
              return (
                <div className="space-y-3">
                  {/* Header Row */}
                  <div className="grid grid-cols-[100px_1fr_1fr_40px] gap-3 px-1 ">
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Season
                    </Label>
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Base Salary
                    </Label>
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Signing Bonus
                    </Label>
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Actions
                    </Label>
                  </div>

                  {/* Contract Year Rows */}
                  <div className="space-y-2">
                    {field.state.value.map((_, i) => {
                      return (
                        <div 
                          key={i} 
                          className="grid grid-cols-[100px_1fr_1fr_40px] gap-3 p-1"
                        >
                          <div className="flex items-center">
                            <p className="text-sm font-semibold text-foreground">
                              {CURRENT_SEASON + i}
                            </p>
                          </div>

                          <form.AppField name={`contractYears[${i}].baseSalary`}>
                            {(subField) => {
                              return (
                                <subField.MoneyField
                                  id={`contractYears[${i}].baseSalary`}
                                />
                              )
                            }}
                          </form.AppField>

                          <form.AppField name={`contractYears[${i}].signingBonus`}>
                            {(subField) => {
                              return (
                                <subField.MoneyField
                                  id={`contractYears[${i}].signingBonus`}
                                />
                              )
                            }}
                          </form.AppField>

                          <div className="flex items-center">
                            <Button
                              onClick={() => field.removeValue(i)}
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Add Season Button */}
                  <Button
                    onClick={() => field.pushValue({ baseSalary: minSalary, signingBonus: 0 })}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="w-full border-dashed hover:border-solid hover:bg-muted/50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Season
                  </Button>
                </div>
              )
            }}
          </form.AppField>
        </CardContent>
        
        <CardFooter className="flex justify-end gap-3 border-t border-border pt-4">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
        </CardFooter>
      </Card>
    )
  }
})