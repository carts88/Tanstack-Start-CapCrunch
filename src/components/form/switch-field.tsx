import { useFieldContext } from "./form-context";
import { Input } from "@/components/ui/input";
import { 
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
 } from "../ui/field";

type TextFieldProps = {
    id: string;
    label?: string;
    description?: string;

}

export const NumberField = ({id, label, description}: TextFieldProps) => {
    const field = useFieldContext<number>();

    return (
        <Field>
            {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
            <Input 
            id={id}
            type="number"
            placeholder={label}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.valueAsNumber)}
            />
            {description && <FieldDescription>{description}</FieldDescription>}
            {!field.state.meta.isValid && (
                <FieldError>
                    {field.state.meta.errors.map((error) => error?.message).join(", ")}
                </FieldError>
            )}
        </Field>
    )
}