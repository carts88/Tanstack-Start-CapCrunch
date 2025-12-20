import * as React from "react"
import {
  SearchIcon,
} from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { fakeSearchData as searchData} from "./fake-search-data"
import { PlayerSearchItem } from "./search-items/player-search-item"
import { TeamSearchItem } from "./search-items/team-search-item"
import { CBASearchItem } from "./search-items/cba-search-item"


export default function SearchBar() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

    const handleItemClick = () => {
      setOpen(false)
    }


  const players = searchData.players
  const staff = searchData.staff
  const teams = searchData.teams
  const cba = searchData.cba
  return (
    <>
      <button
        className="inline-flex h-10 w-full max-w-sm items-center justify-between rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground shadow-sm transition-all hover:bg-accent hover:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-2">
          <SearchIcon
            className="text-muted-foreground"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="font-normal text-muted-foreground px-1">Search players, staff, cba ...</span>
        </span>
        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          ctrl K
        </kbd>
      </button>
      <CommandDialog  open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search players, teams, staff..." />
        <div className="my-2 items-center">
        <ToggleGroup className="w-full" type="multiple">
          <ToggleGroupItem className="rounded-none" value="players">Players</ToggleGroupItem>
          <ToggleGroupItem className="rounded-none" value="teams">Teams</ToggleGroupItem>
          <ToggleGroupItem className="rounded-none" value="staff">Staff</ToggleGroupItem>
          <ToggleGroupItem className="rounded-none" value="cba">CBA</ToggleGroupItem>
        </ToggleGroup>
        </div>
        <CommandList>
          <CommandEmpty>
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <SearchIcon className="mb-2 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm font-medium">No results found</p>
              <p className="text-xs text-muted-foreground mt-1">Try searching with different keywords</p>
            </div>
          </CommandEmpty>
          <CommandGroup heading="Players">
            {players.map((player, idx) => (
              <PlayerSearchItem 
                key={`${player.playerSlug}-${idx}`}
                team={player.team}
                position={player.position}
                fullName={player.fullName}
                playerSlug={player.playerSlug}
              />
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Teams">
            {teams.map((team, idx) => (
                <TeamSearchItem 
                  key={`${team.teamSlug}-${idx}`}
                  teamName={team.teamName}
                  id={team.id}
                  teamSlug={team.teamSlug}
                  league={team.league}
                />
              ))}
              
          </CommandGroup>

          <CommandGroup heading="CBA">
            {cba.map((item, idx) => (
                <CBASearchItem 
                  id={item.id}
                  key={`${item.id}-${idx}`}
                  label={item.label}
                  category={item.category}
                  url={item.url}
                  description={item.description}

                />
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}