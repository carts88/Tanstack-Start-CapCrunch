import { CommandItem } from "@/components/ui/command"
import { Link } from "@tanstack/react-router";
import { Book } from "lucide-react"

interface ISearchCBA {
  id: number;
  url: string;
  category: string;
  label: string;
  description: string
}

export function CBASearchItem (item: ISearchCBA) {
  const {category ,url, label, description} = item
  return (
    <CommandItem className="cursor-pointer">
      <Link
        to={url}
        className="flex items-center gap-3 w-full py-1"
      >
        <div className="shrink-0">
          <Book 
          className="size-8"
          />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-medium text-sm truncate">{label}</span>
          <span className="text-xs text-muted-foreground">{description}</span>
        </div>
        <span className="shrink-0 px-2 py-0.5 text-xs font-medium bg-secondary rounded-md">
          {category}
        </span>
      </Link>
    </CommandItem>
  )
}
