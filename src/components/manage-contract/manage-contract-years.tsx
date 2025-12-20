import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { X, Plus } from 'lucide-react';
import { LEAGUE_MIN_SALARY } from '@/lib/constants/hockey';
import { withFieldGroup } from '@/components/form';
import { baseContractYear, contractBuilderFormOpts } from './manage-contract-schema';
import { validateBaseSalaryForYear, validatePerformanceBonusForYear, validateSigningBonusForYear } from './yearly-validations';
import { clauseOptions } from '@/lib/constants/hockey';

const contractYearLabels = [
  "Season",
  "Base Salary",
  "Signing Bonus",
  "P. Bonus",
  "Minors Salary",
  "Clause", 
  "Clause Info",
  ""
];


export const ManageContractYearsFields = withFieldGroup({
  defaultValues: {
    contractYears: baseContractYear
  },
    props: {
      maxAllowedTerm: 7,
      isClauseEligible: false,
    },
  render: function ManageContractYearFieldsRender ({group, maxAllowedTerm, isClauseEligible}) {
    return (
      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <CardTitle>
            Contract Year Data
          </CardTitle>
          <CardDescription>
            Enter contract year data for each season.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <group.AppField name="contractYears" mode="array">
            {(field) => {
              return (
                <div className="space-y-4">
                  <ScrollArea className="w-full rounded-md ">
                    <div className="min-w-900px p-4">
                      <div className="grid grid-cols-[80px_140px_140px_140px_140px_160px_150px_50px] gap-3 pb-3 border-b border-border mb-3">
                        {contractYearLabels.map((label, idx) => (
                          <Label 
                            key={idx}
                            className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                          >
                            {label}
                          </Label>
                        ))}
                      </div>

                      {/* Contract Year Rows */}
                      <div className="space-y-1">
                        {group.state.values.contractYears.map((_, i) => {
                          return (
                            <div 
                              key={i} 
                              className="grid grid-cols-[80px_140px_140px_140px_140px_160px_150px_50px] gap-x-3 items-center py-2 px-1 rounded-md  transition-colors"
                            >
                              <div className="flex items-center">
                                <p className="text-sm font-semibold text-foreground">
                                  {2024 + i}
                                </p>
                              </div>

                              <group.AppField 
                              name={`contractYears[${i}].baseSalary`}
                              validators={{
                                onBlur: ({ value }) => validateBaseSalaryForYear(value),
                              }}

                              >
                                {(subField) => {
                                  
                                  return (
                                    <subField.MoneyField
                                      id={`contractYears[${i}].baseSalary`}
                                      
                                    />
                                  )
                                }}
                              </group.AppField>

                              <group.AppField 
                              validators={{
                                onBlur: ({ value }) => validateSigningBonusForYear(value),
                              }}
                              name={`contractYears[${i}].signingBonus`}>
                                {(subField) => {
                                  return (
                                    <subField.MoneyField
                                      id={`contractYears[${i}].signingBonus`}
                                    />
                                  )
                                }}
                              </group.AppField>

                              <group.AppField 
                             
                              name={`contractYears[${i}].performanceBonus`}>
                                {(subField) => {
                                  return (
                                    <subField.MoneyField
                                      id={`contractYears[${i}].performanceBonus`}
                                    />
                                  )
                                }}
                              </group.AppField>

                              <group.AppField name={`contractYears[${i}].minorsSalary`}>
                                {(subField) => {
                                  return (
                                    <subField.MoneyField
                                      id={`contractYears[${i}].minorsSalary`}
                                    />
                                  )
                                }}
                              </group.AppField>

                              {isClauseEligible && 
                                <group.AppField
                                name={`contractYears[${i}].clause`}>
                                  {(subField) => {
                                    return (
                                      <subField.SelectWithSearchImageField
                                        id={`contractYears[${i}].clause`}
                                        placeholder=''
                                        subject='clauses'
                                        items={clauseOptions}
                                      />
                                    )
                                  }}
                                </group.AppField>
                              }

                              {isClauseEligible && 
                                <group.AppField name="clauseInfo">
                                  {(subField) => {
                                    return (
                                      <subField.TextField
                                        id={`contractYears[${i}].clauseinfo`}
                                      />
                                    )
                                  }}
                                </group.AppField>
                              }                              
                              <div className="flex items-center justify-center">
                                {i >= 1 &&
                                  <Button
                                  onClick={() => field.removeValue(i)}
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                                }
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                  
                  {/* Add Season Button */}
                  {field.state.value.length <= maxAllowedTerm &&
                    <Button
                    onClick={() => field.pushValue(baseContractYear)
                    }
                    type="button"
                    variant="outline"
                    size="sm"
                    className="w-full border-dashed hover:border-solid hover:bg-muted/50 transition-all"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Season
                  </Button>
                  }
                </div>
              )
            }}
          </group.AppField>
          
        </CardContent>
        
        <CardFooter className="flex justify-end gap-3 border-t border-border pt-3">
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button size="sm">
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    )
  }
})
