import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Contract Details',
    description: 'Enter contract term left and cap hit',
  },
  {
    step: 2,
    title: 'Yearly Breakdown',
    description: 'Enter data for each remaining year',
  },
  {
    step: 3,
    title: 'Buyout Results',
    description: 'View 1/3 and 2/3 buyout calculations',
  },
];

interface CustomBuyoutStepperProps {
  currentStep?: number;
  onStepChange?: (step: number) => void;
}

const CustomBuyoutStepper: React.FC<CustomBuyoutStepperProps> = ({
  currentStep = 1,
  onStepChange,
}) => {
  const handlePrevious = () => {
    if (currentStep > 1 && onStepChange) {
      onStepChange(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length && onStepChange) {
      onStepChange(currentStep + 1);
    }
  };

  return (
    <Card className="border-border bg-card shadow-sm mb-6">
      <CardContent className="pt-8 pb-6 px-6">
        <Stepper defaultValue={currentStep} className="mb-8">
          {steps.map(({ step, title, description }) => (
            <StepperItem
              key={step}
              step={step}
              className="not-last:flex-1 max-md:items-start"
            >
              <StepperTrigger className="rounded-lg p-3 max-md:flex-col hover:bg-accent/50 transition-all duration-200 group">
                <StepperIndicator className="group-hover:scale-110 transition-transform" />
                <div className="text-center md:text-left mt-2 md:mt-0 md:ml-3">
                  <StepperTitle className="text-card-foreground font-semibold text-sm md:text-base">
                    {title}
                  </StepperTitle>
                  <StepperDescription className="max-sm:hidden text-muted-foreground text-xs md:text-sm mt-0.5">
                    {description}
                  </StepperDescription>
                </div>
              </StepperTrigger>
              {step < steps.length && (
                <StepperSeparator className="max-md:mt-3.5 md:mx-4 opacity-60" />
              )}
            </StepperItem>
          ))}
        </Stepper>

        <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/40">
          <Button
            variant="outline"
            size="default"
            disabled={currentStep === 1}
            onClick={handlePrevious}
            className="flex items-center gap-2 min-w-30"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="text-sm text-muted-foreground font-medium">
            Step {currentStep} of {steps.length}
          </div>

          <Button
            size="default"
            disabled={currentStep === steps.length}
            onClick={handleNext}
            className="flex items-center gap-2 min-w-30"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomBuyoutStepper;