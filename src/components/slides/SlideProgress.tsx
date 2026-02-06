import { cn } from '@/lib/utils'

interface SlideProgressProps {
  current: number
  total: number
  color?: string
}

export function SlideProgress({ current, total, color }: SlideProgressProps) {
  const pct = ((current + 1) / total) * 100

  return (
    <div className="w-full">
      <div className="h-1 w-full rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, backgroundColor: color || 'var(--growfit)' }}
        />
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-white/50">
        <span>{current + 1} / {total}</span>
        <span>{Math.round(pct)}%</span>
      </div>
    </div>
  )
}
