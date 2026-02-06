import { Clock, Users, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { GrowFitBadge } from '@/components/common/GrowFitBadge'
import { differentiators } from '@/data/differentiators'
import type { Scenario } from '@/types'

const levelLabels: Record<string, string> = { beginner: '초급', intermediate: '중급', advanced: '고급' }
const levelColors: Record<string, string> = {
  beginner: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  intermediate: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
}

interface ScenarioCardProps {
  scenario: Scenario
  expanded?: boolean
}

export function ScenarioCard({ scenario, expanded }: ScenarioCardProps) {
  return (
    <div className="rounded-xl border bg-card p-4 sm:p-6">
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${levelColors[scenario.level]}`}>
          {levelLabels[scenario.level]}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" /> {scenario.hours}시간
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="h-3 w-3" /> {scenario.participants}
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold sm:text-lg">{scenario.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{scenario.objective}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {scenario.growfitFeatures.map((f) => (
          <GrowFitBadge key={f} feature={f} />
        ))}
      </div>

      {scenario.relatedSessions.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {scenario.relatedSessions.map((s) => (
            <Badge key={s} variant="outline" className="text-[10px]">차시 {s}</Badge>
          ))}
          {scenario.differentiators.map((dId) => {
            const d = differentiators.find((dd) => dd.id === dId)
            return d ? (
              <Badge key={dId} variant="outline" className="text-[10px]" style={{ borderColor: `${d.color}40`, color: d.color }}>
                {d.title}
              </Badge>
            ) : null
          })}
        </div>
      )}

      {expanded && (
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2">진행 순서</h4>
            <div className="space-y-2">
              {scenario.flow.map((step, i) => (
                <div key={i} className="flex gap-2 sm:gap-3 text-sm">
                  <span className="shrink-0 text-xs text-muted-foreground font-mono w-12 sm:w-14">{step.time}</span>
                  <div>
                    <p className="font-medium">{step.activity}</p>
                    <p className="text-xs text-growfit">{step.growfitAction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border bg-muted/30 p-3">
              <p className="text-xs font-medium mb-1">평가 방법</p>
              <p className="text-xs text-muted-foreground">{scenario.assessment}</p>
            </div>
            <div className="rounded-lg border bg-amber-500/5 border-amber-500/20 p-3">
              <p className="text-xs font-medium text-amber-600 mb-1">강사 팁</p>
              <p className="text-xs text-muted-foreground">{scenario.instructorTip}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
