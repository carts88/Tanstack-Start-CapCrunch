
import { CommandItem } from "@/components/ui/command"
import { Link } from "@tanstack/react-router"
interface ISearchPlayer {
  fullName: string, position: string, playerSlug: string, team: string
}

export function PlayerSearchItem (player: ISearchPlayer) {
  const {fullName, position, playerSlug, team} = player

  return (
    <CommandItem className="cursor-pointer">
      <Link
        to="/players/$playerSlug"
        params={{playerSlug: playerSlug}}
        className="flex items-center gap-3 w-full py-1"
      >
        <div className="shrink-0">
          <img 
            src={`/logos/nhl/${team}.svg`}
            alt={team}
            width={32}
            height={32}
            className="rounded"
          />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-medium text-sm truncate">{fullName}</span>
          <span className="text-xs text-muted-foreground">{team}</span>
        </div>
        <span className="shrink-0 px-2 py-0.5 text-xs font-medium bg-secondary rounded-md">
          {position}
        </span>
      </Link>
    </CommandItem>
  )
}
