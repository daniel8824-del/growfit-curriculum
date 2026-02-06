import { CheckCircle2, GitCompareArrows, SlidersHorizontal, Route, RefreshCcw, BarChart3 } from 'lucide-react'
import { differentiators } from '@/data/differentiators'
import type { GrowFitCheckpoint as GFCheckpoint } from '@/types'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitCompareArrows, SlidersHorizontal, Route, RefreshCcw, BarChart3,
}

interface GrowFitCheckpointProps {
  checkpoint: GFCheckpoint
}

export function GrowFitCheckpoint({ checkpoint }: GrowFitCheckpointProps) {
  const diff = differentiators.find((d) => d.id === checkpoint.differentiatorId)
  if (!diff) return null
  const Icon = iconMap[diff.icon] || CheckCircle2

  return (
    <div
      className="rounded-xl border-2 p-5 sm:p-6"
      style={{ borderColor: `${diff.color}30`, backgroundColor: `${diff.color}05` }}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${diff.color}20`, color: diff.color }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-medium" style={{ color: diff.color }}>
            GrowFit 점검 &middot; 차별점 #{diff.id}
          </p>
          <h4 className="font-semibold">{diff.title}</h4>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3">
          <p className="text-[10px] font-medium text-destructive mb-1">타 교육</p>
          <p className="text-xs">{diff.painPoint}</p>
        </div>
        <div className="rounded-lg border bg-card p-3" style={{ borderColor: `${diff.color}30` }}>
          <p className="text-[10px] font-medium mb-1" style={{ color: diff.color }}>GrowFit</p>
          <p className="text-xs">{diff.solution}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="h-4 w-4 text-growfit" />
          <span className="font-medium">{checkpoint.activity}</span>
        </div>
        <p className="text-xs text-muted-foreground pl-6">{checkpoint.reviewPrompt}</p>
      </div>

      <div className="mt-3 text-xs text-muted-foreground">
        소요 시간: {checkpoint.duration}
      </div>
    </div>
  )
}
