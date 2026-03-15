import { createFileRoute } from '@tanstack/react-router'
import { FeatureCard, FeatureCardInterface } from '@/components/ui/misc/feature-card'


const features: FeatureCardInterface[] = [
    {
      title: "Custom Buyout Calculator",
      description: "Build your own contract, and see what the buyout looks like following NHL rules"
    },
    {
      title: "Contract Variability Calculator",
      description: "Build NHL contracts following contract variability & other rules "
    },
  ]

export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div className='m-auto w-7xl gap-3 grid grid-cols-3 my-6'>
      {features.map((item, index) => (
        <FeatureCard
          key={index}  // Unique key required
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}
