import * as React from 'react'
import { SearchIcon, Loader2Icon } from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { PlayerSearchItem } from './search-items/player-search-item'
import { StaffSearchItem } from './search-items/staff-search-item'
import { useSearch } from './use-search'

const MIN_QUERY_LENGTH = 2

export default function SearchBar() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const { data, isSearching } = useSearch(query)

  const isBelowMinLength = query.trim().length < MIN_QUERY_LENGTH

  const players = data?.league_players ?? []
  const staff = data?.league_staff ?? []

  const showPlayers = players.length > 0
  const showStaff = staff.length > 0
  const hasResults = showPlayers || showStaff

  const handleOpenChange = (next: boolean) => {
    setOpen(next)

    if (!next) {
      setQuery('')
    }
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    document.addEventListener('keydown', down)

    return () => {
      document.removeEventListener('keydown', down)
    }
  }, [])

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
          <span className="font-normal text-muted-foreground px-1">
            Search players, staff, cba ...
          </span>
        </span>

        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          Ctrl K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={handleOpenChange}>
        <div className="flex items-center border-b px-3">
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder="Search players, teams, staff..."
            className="flex-1"
          />

          {isSearching && (
            <Loader2Icon
              size={14}
              className="text-muted-foreground animate-spin mr-2 shrink-0"
            />
          )}
        </div>

        <CommandList>
          {isBelowMinLength && (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <SearchIcon className="mb-2 h-8 w-8 text-muted-foreground/50" />
              <p className="text-xs text-muted-foreground">
                Type at least 2 characters to search
              </p>
            </div>
          )}

          {!isBelowMinLength && !isSearching && !hasResults && (
            <CommandEmpty>
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <SearchIcon className="mb-2 h-8 w-8 text-muted-foreground/50" />
                <p className="text-sm font-medium">No results found</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Try searching with different keywords
                </p>
              </div>
            </CommandEmpty>
          )}

          {showPlayers && (
            <CommandGroup heading="Players">
              {players.map((player) => (
                <PlayerSearchItem
                  key={player.player_id}
                  team={player.team}
                  position={player.position}
                  fullName={player.full_name}
                  playerSlug={player.player_slug}
                />
              ))}
            </CommandGroup>
          )}

          {showPlayers && showStaff && <CommandSeparator />}

          {showStaff && (
            <CommandGroup heading="Staff">
              {staff.map((member) => (
                <StaffSearchItem
                  key={member.staff_id}
                  id={member.staff_id}
                  teamSlug={member.team ?? ''}
                  role={member.role ?? ''}
                  fullName={member.full_name}
                  staffSlug={member.staff_slug}
                />
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
