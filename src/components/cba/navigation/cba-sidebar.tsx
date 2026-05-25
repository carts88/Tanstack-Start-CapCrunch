import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState, useMemo } from "react"
import {
  ChevronDown,
  BookOpen,
  FileText,
  Users,
  ArrowLeftRight,
  DollarSign,
  GraduationCap,
  Search,
  X,
} from "lucide-react"

interface MenuSection {
  label: string
  icon: React.ElementType
  items: string[]
}

const menuSections: MenuSection[] = [
  {
    label: "General",
    icon: BookOpen,
    items: ["What is the CBA", "Current CBA Term", "External Links"],
  },
  {
    label: "Contracts",
    icon: FileText,
    items: ["Contract Variability", "Max / Min Term & Salary", "Contract Types", "Bonuses", "Clauses"],
  },
  {
    label: "Free Agency",
    icon: Users,
    items: ["Expiry Status", "When", "Arbitration"],
  },
  {
    label: "Roster Moves",
    icon: ArrowLeftRight,
    items: ["Roster Assignments", "Contract Terminations", "Trades (Max Retentions)", "Buyouts", "Waivers", "Offersheets"],
  },
  {
    label: "Salary Cap",
    icon: DollarSign,
    items: ["Upper / Lower Limits", "How to Calculate the Cap", "Cap Accrual", "LTIR Effects on Cap", "Overages", "Playoff Salary Cap (2026 CBA)"],
  },
  {
    label: "Transfer & Eligibility",
    icon: GraduationCap,
    items: ["NHL–CHL Agreement", "NCAA Eligibility", "CHL Eligibility"],
  },
]

export const CBASidebar = () => {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    if (!query.trim()) return null
    const q = query.toLowerCase()
    return menuSections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.toLowerCase().includes(q)),
      }))
      .filter((s) => s.items.length > 0)
  }, [query])

  const isSearching = query.trim().length > 0
  const sections = isSearching ? (filtered ?? []) : menuSections

  return (
    <Sidebar className="sticky top-[calc(var(--header-height)+0.6rem)  w-80 border-r border-sidebar-border">
      <div className="mx-5">
        <SidebarHeader className="border-b border-sidebar-border px-3 py-3 gap-3">
        <div className="flex items-center gap-2.5">
         
          <div>
            <p className="text-[13px] font-semibold leading-none">CBA Guide</p>
            <p className="text-[11px] text-foreground mt-0.5"> Collective Bargaining Agreement</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border border-sidebar-border bg-transparent py-1.5 pl-8 pr-7 text-[13px] placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/20"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="py-1">
        {isSearching && sections.length === 0 && (
          <p className="px-4 py-8 text-center text-[12px] text-foreground">
            No results for &ldquo;{query}&rdquo;
          </p>
        )}

        {sections.map((section) =>
          isSearching ? (
            <SidebarGroup key={section.label} className="py-1 px-0">
              <SidebarGroupLabel className="flex items-center gap-1.5 px-3 text-[10px] uppercase tracking-widest">
                <section.icon className="h-3 w-3" />
                {section.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton className="px-3 text-[13px]">
                        {item}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : (
            <Collapsible key={section.label} defaultOpen className="group/collapsible">
              <SidebarGroup className="py-0 px-0">
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="flex w-full items-center gap-2 px-3 py-2 text-[11px] font-semibold uppercase tracking-widest text-foreground ">
                    <section.icon className="h-3.5 w-3.5 shrink-0" />
                    {section.label}
                    <ChevronDown className="ml-auto h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu className="mb-1">
                      {section.items.map((item) => (
                        <SidebarMenuItem key={item}>
                          <SidebarMenuButton className="px-3 pl-8 text-[13px] text-foreground">
                            {item}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )
        )}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border px-4 py-2.5">
        <p className="text-[11px] text-foreground/40 text-center tracking-wide">
          NHL CBA Reference
        </p>
      </SidebarFooter>
      </div>
    </Sidebar>
  )
}