import { useFieldContext } from "./form-context";
import { Textarea } from "@/components/ui/textarea";
import { 
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle
 } from "../ui/field";
interface TextAreaField {
    id: string;
    label: string;
    description: string
}

export const TextAreaField = ({id, label, description}: TextAreaField) => {
    const field = useFieldContext<string>();

    return (
        <Field>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <Textarea 
            id={id}
            placeholder={label}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
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