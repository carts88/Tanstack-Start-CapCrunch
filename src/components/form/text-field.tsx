import { useFieldContext } from "./form-context";
import { Input } from "@/components/ui/input";
import { 
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
 } from "../ui/field";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    description?: string;
}

export const TextField = ({id, label, description, ...props}: TextFieldProps) => {
    const field = useFieldContext<string>();

    return (
        <Field>
            {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
            <Input 
            id={id}
            type="text"
            placeholder={label}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            {...props}
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