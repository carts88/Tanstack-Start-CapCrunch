import { CommandItem } from "@/components/ui/command"
import { Link } from "@tanstack/react-router"


interface ISearchStaff {
  id: string
  role: string
  fullName: string
  staffSlug: string
  teamSlug: string
}

export function StaffSearchItem (staff: ISearchStaff) {
  const {role, fullName, staffSlug, teamSlug} = staff
  return (
    <CommandItem className="cursor-pointer">
      <Link
        to={`/staff/$staffSlug`}
        params={{staffSlug: staffSlug}}
        className="flex items-center gap-3 w-full py-1"
      >
        <div className="shrink-0">
          <img 
            src={`/logos/nhl/${teamSlug}.svg`}
            width={32}
            height={32}
            className="rounded"
          />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-medium text-sm truncate">{fullName}</span>
          <span className="text-xs text-muted-foreground">{role}</span>
        </div>
        
      </Link>
    </CommandItem>
  )
}
