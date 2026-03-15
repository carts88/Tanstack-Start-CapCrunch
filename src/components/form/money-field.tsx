import { useFieldContext } from "./form-context";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "../ui/field";
import { useState, useEffect } from "react";

interface NumberFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  description?: string;
  locale?: string; // optional: 'en-US', 'de-DE', etc.
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export const MoneyField = ({
  id,
  label,
  description,
  locale = "en-US",
  minimumFractionDigits = 0,
  maximumFractionDigits = 0,
}: NumberFieldProps) => {
  const field = useFieldContext<number>();
  const [displayValue, setDisplayValue] = useState("");

  // Sync display value whenever the actual number value changes
  useEffect(() => {
    if (field.state.value == null || isNaN(field.state.value)) {
      setDisplayValue("");
    } else {
      setDisplayValue(
        field.state.value.toLocaleString(locale, {
          minimumFractionDigits,
          maximumFractionDigits,
        })
      );
    }
  }, [field.state.value, locale, minimumFractionDigits, maximumFractionDigits]);

  const parseInput = (value: string): number | undefined => {
    // Remove all commas, spaces, and allow common decimal separators
    const cleaned = value.replace(/,/g, "").trim();
    if (cleaned === "" || cleaned === "-") return undefined;
    const num = Number(cleaned);
    return isNaN(num) ? undefined : num;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setDisplayValue(rawValue);

    const parsed = parseInput(rawValue);
    // Only update form state if it's a valid number or empty
    if (parsed !== undefined) {
      field.handleChange(parsed === undefined ? NaN : parsed);
    }
  };

  const handleBlur = () => {
    field.handleBlur();

    // Re-format on blur for consistency
    if (field.state.value != null && !isNaN(field.state.value)) {
      const formatted = field.state.value.toLocaleString(locale, {
        minimumFractionDigits,
        maximumFractionDigits,
      });
      setDisplayValue(formatted);
    }
  };

  return (
    <Field>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      
      <Input
        id={id}
        type="text"
        inputMode="numeric" // shows numeric keyboard on mobile
        pattern="[0-9,]*"
        placeholder={label}
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {description && <FieldDescription>{description}</FieldDescription>}
      {!field.state.meta.isValid && (
        <FieldError>
          {field.state.meta.errors.map((error) => error?.message).join(", ")}
        </FieldError>
      )}
    </Field>
  );
};