import { AnyFieldMeta } from "@tanstack/react-form";
import { ZodError } from "zod";


interface IFieldErrors {
    meta: AnyFieldMeta
}

export const FieldErrors = ({meta}: IFieldErrors) => {
    if (!meta.isTouched) return null;

    return (
        <div className="space-y-1 mt-1.5">
            {meta.errors.map(({message}: ZodError, index) => (
                <p 
                    key={index}
                    className="text-sm text-destructive font-medium flex items-start gap-1.5"
                >
                    <span className="text-destructive mt-0.5" aria-hidden="true">•</span>
                    <span>{message}</span>
                </p>
            ))}
        </div>
    );
}