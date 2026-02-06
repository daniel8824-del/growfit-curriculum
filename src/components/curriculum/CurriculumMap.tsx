import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { sessions } from '@/data/sessions'
import { competencyMilestones } from '@/data/educational-effects'
import { SessionCard } from './SessionCard'
import type { CompetencyLayer } from '@/types'

const layerStyles: Record<CompetencyLayer, { bg: string; border: string }> = {
  foundation: { bg: 'bg-sky-500/[0.03]', border: 'border-sky-500/20' },
  application: { bg: 'bg-violet-500/[0.03]', border: 'border-violet-500/20' },
  mastery: { bg: 'bg-amber-500/[0.03]', border: 'border-amber-500/20' },
}

export function CurriculumMap() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold sm:text-3xl">8차시 커리큘럼</h1>
        <p className="mt-2 text-muted-foreground">
          8차시 &middot; 40시간 &middot; 3단계 역량 성장 여정
        </p>
      </motion.div>

      <div className="space-y-4 sm:space-y-6">
        {competencyMilestones.map((milestone, mi) => {
          const style = layerStyles[milestone.layer]
          const layerSessions = sessions.filter((s) =>
            milestone.sessions.includes(s.id)
          )

          return (
            <motion.div
              key={milestone.layer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * mi }}
            >
              {/* Arrow between layers */}
              {mi > 0 && (
                <div className="flex justify-center -mt-3 mb-3">
                  <ArrowDown className="h-5 w-5 text-muted-foreground/40" />
                </div>
              )}

              {/* Layer container */}
              <div className={`rounded-2xl border ${style.border} ${style.bg} p-4 sm:p-6`}>
                {/* Layer header */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: milestone.color }}
                  >
                    {milestone.layer.charAt(0).toUpperCase() + milestone.layer.slice(1)}
                  </span>
                  <span className="text-sm font-medium">{milestone.label}</span>
                  <span className="text-xs text-muted-foreground">
                    차시 {milestone.sessions.join(', ')} &middot; {layerSessions.reduce((a, s) => a + s.hours, 0)}시간
                  </span>
                </div>

                {/* Milestone outcome */}
                <p className="text-xs text-muted-foreground mb-4">{milestone.outcome}</p>

                {/* Session cards */}
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {layerSessions.map((s, i) => (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 * mi }}
                    >
                      <SessionCard session={s} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
