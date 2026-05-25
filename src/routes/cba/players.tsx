import { createFileRoute } from '@tanstack/react-router'
import { contractsCBA } from '@/components/cba/config'
import { CollapsibleSection } from '@/components/cba/reusable/collapsible-section'


export const Route = createFileRoute('/cba/players')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
          <div className="flex flex-col gap-4">
            {contractsCBA.map((section, idx) => (
              <CollapsibleSection
                key={`${section.title}-${idx}`}
                title={section.title}
                description={section.description}
                subSections={section.subSections}
              />
            ))}
          </div>
      )
}
