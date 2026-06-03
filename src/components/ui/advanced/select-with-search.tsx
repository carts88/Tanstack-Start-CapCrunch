import { useMemo, useState } from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface SelectItemWithImage<T> {
  value: T
  label: string
  imagePath?: string
}

interface SelectWithSearchProps {
  id: string
  subject: string
  items: SelectItemWithImage<string>[]
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  modal: boolean
}

export default function SelectWithSearchImage({
  id,
  subject,
  items,
  value,
  onValueChange,
  placeholder,
  modal
}: SelectWithSearchProps) {
  const [open, setOpen] = useState(false)

  const itemMap = useMemo(
    () => new Map(items.map((item) => [item.value, item])),
    [items]
  )

  const selectedItem = itemMap.get(value)

  const commandItems = useMemo(
    () =>
      items.map((item) => (
        <CommandItem
          key={item.value}
          value={item.value}
          onSelect={(currentValue) => {
            onValueChange(currentValue === value ? "" : currentValue)
            setOpen(false)
          }}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-3">
            {item.imagePath && (
              <img
                src={item.imagePath}
                width={32}
                height={32}
                alt={item.label}
                loading="lazy"
                decoding="async"
                className="rounded-sm object-contain"
              />
            )}
            <span>{item.label}</span>
          </div>
        </CommandItem>
      )),
    [items, value, onValueChange]
  )

  return (
    <Popover open={open} modal={modal} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          role="combobox"
          className="w-full justify-between font-normal hover:bg-accent/50"
        >
          {selectedItem ? (
            <div className="flex min-w-0 items-center gap-2">
              {selectedItem.imagePath && (
                <img
                  src={selectedItem.imagePath}
                  width={32}
                  height={32}
                  alt={selectedItem.label}
                  loading="eager"
                  fetchPriority="high"
                  className="shrink-0 rounded-sm object-contain"
                />
              )}
              <span className="truncate">{selectedItem.label}</span>
            </div>
          ) : (
            <span className="text-muted-foreground">
              {placeholder || `Select ${subject}...`}
            </span>
          )}

          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-(--radix-popover-trigger-width) max-w-sm p-0"
        align="start"
      >
        {open && (
          <Command>
            <CommandInput
              placeholder={`Search ${subject}...`}
              className="h-9"
            />

            <CommandList>
              <CommandEmpty>No {subject} found.</CommandEmpty>

              <CommandGroup>
                {commandItems}
              </CommandGroup>
            </CommandList>
          </Command>
        )}
      </PopoverContent>
    </Popover>
  )
}