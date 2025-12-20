import { Field, FieldLabel, FieldContent} from '@/components/ui/field'
import SelectWithSearchImage, { SelectItemWithImage } from '../ui/advanced/select-with-search';
import { useFieldContext } from './form-context';

interface SelectWithSearchImageFieldProps {
    id :string;
    label?: string;
    placeholder:string
    subject: string
    items: SelectItemWithImage
}

export const SelectWithSearchImageField = ({
    id,
    label,
    placeholder,
    subject,
    items
    
}: SelectWithSearchImageFieldProps) => {
  const field = useFieldContext<string>()
  return (
    <Field className='p-0'>
        {label && 
          <FieldLabel>
              {label}
          </FieldLabel>
        }
        <FieldContent>
          <SelectWithSearchImage
            id={id}
            value={field.state.value}
            onValueChange={field.handleChange }
            subject={subject}
            placeholder={placeholder}
            items={items}
          />
        </FieldContent>
    </Field>
  )
}
