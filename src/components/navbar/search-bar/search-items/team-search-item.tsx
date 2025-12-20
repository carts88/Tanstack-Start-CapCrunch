import { CommandItem } from "@/components/ui/command"
import { Link } from "@tanstack/react-router"
interface ISearchTeam {
  id: string
  league: string
  teamName: string
  teamSlug: string
}

export function TeamSearchItem (team: ISearchTeam) {
  const {league, id, teamName, teamSlug} = team
  return (
    <CommandItem className="cursor-pointer">
      <Link
        to="/teams/$teamSlug"
        params={{teamSlug: teamSlug}}
        className="flex items-center gap-3 w-full py-1"
      >
        <div className="shrink-0">
          <img 
            src={`/logos/${league.toLowerCase}/${teamSlug}.svg`}
            alt={teamSlug}
            width={32}
            height={32}
            className="rounded"
          />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-medium text-sm truncate">{teamName}</span>
          <span className="text-xs text-muted-foreground">{id}</span>
        </div>
        <span className="shrink-0 px-2 py-0.5 text-xs font-medium bg-secondary rounded-md">
          {league}
        </span>
      </Link>
    </CommandItem>
  )
}
