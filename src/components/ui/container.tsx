// components/container.tsx or in your components/ui/ folder
import { cn } from "@/lib/utils" // shadcn's utility for className merging
import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("space-y-6 ", className)}>
      {children}
    </div>
  )
}

export function ContainerHeader({ children, className }: ContainerProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  )
}

export function ContainerTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={cn("text-3xl font-bold tracking-tight text-foreground", className)}>
      {children}
    </h1>
  )
}

export function ContainerDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-muted-foreground", className)}>
      {children}
    </p>
  )
}

export function ContainerContent({ children, className }: ContainerProps) {
  return <div className={cn("mt-6", className)}>{children}</div>
}