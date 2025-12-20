
import { useFieldContext } from "./form-context";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../ui/field";

import {
  DateField,
  DateFieldDays,
  DateFieldMonths,
  DateFieldSeparator,
  DateFieldYears,
} from "@/components/ui/date-field";

type DatePickerFieldProps = {
  id: string;
  label: string;
  description?: string;
};

export const DatePickerField = ({
  id,
  label,
  description,
}: DatePickerFieldProps) => {
  const field = useFieldContext<Date | undefined>();

  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldContent>
        <DateField
          value={field.state.value ?? undefined}
          onValueChange={(date) => field.setValue(date ?? undefined)}
        >
          <div className="flex items-center">
           
            <DateFieldMonths />
            <DateFieldSeparator />
            <DateFieldDays />
            <DateFieldSeparator />
            <DateFieldYears />
          </div>
        </DateField>
      </FieldContent>

      <FieldError />
    </Field>
  );
};