"use client"

import { createFormHook } from "@tanstack/react-form";
import { TextField } from "./text-field";
import { MoneyField } from "./money-field";
import { fieldContext, formContext } from "./form-context";
import { NumberField } from "./number-field";
import { SubscribeButton } from "./subscribe-button";
import { DatePickerField } from "./date-picker-field";
import { SelectWithSearchImageField } from "./select-with-search-image-field";

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
    fieldContext: fieldContext,
    formContext: formContext,
    fieldComponents: {
        TextField,
        NumberField,
        MoneyField,
        DatePickerField,
        SelectWithSearchImageField
    },
    formComponents: {
        SubscribeButton
    },
})