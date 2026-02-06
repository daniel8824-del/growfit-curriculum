import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

interface GrowFitBadgeProps {
  feature: string
  className?: string
  size?: 'sm' | 'md'
}

export function GrowFitBadge({ feature, className, size = 'sm' }: GrowFitBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-growfit/10 text-growfit border border-growfit/20 font-medium',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        className
      )}
    >
      <Sparkles className={size === 'sm' ? 'h-3 w-3' : 'h-3.5 w-3.5'} />
      {feature}
    </span>
  )
}
