import { cn } from '@/lib/utils'

interface GrowFitFeatureTagProps {
  feature: string
  className?: string
}

export function GrowFitFeatureTag({ feature, className }: GrowFitFeatureTagProps) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-md bg-growfit/10 px-2 py-0.5 text-xs font-medium text-growfit border border-growfit/15',
      className
    )}>
      {feature}
    </span>
  )
}
