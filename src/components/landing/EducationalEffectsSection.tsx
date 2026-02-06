import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GitCompare, SlidersHorizontal, FileText, Database, Bot, BarChart3, ArrowRight } from 'lucide-react'
import { educationalEffects, competencyMilestones } from '@/data/educational-effects'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitCompare,
  SlidersHorizontal,
  FileText,
  Database,
  Bot,
  BarChart3,
}

export function EducationalEffectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            GrowFit 수업이 만드는{' '}
            <span className="bg-gradient-to-r from-growfit to-growfit-accent bg-clip-text text-transparent">
              6가지 변화
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            단순한 AI 도구 소개가 아닙니다. GrowFit으로 수업하면 학습자에게 이런 변화가 생깁니다.
          </p>
        </motion.div>

        {/* 6 Effect Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {educationalEffects.map((effect, i) => {
            const Icon = iconMap[effect.icon] || Database
            return (
              <motion.div
                key={effect.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="group relative rounded-xl border bg-card p-4 sm:p-5 transition-all hover:shadow-md hover:border-growfit/20"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-growfit/10 text-growfit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm">{effect.title}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {effect.metric}
                    </p>
                  </div>
                </div>
                <div className="mt-3 rounded-lg bg-muted/30 p-3">
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    <span className="font-medium text-growfit">GrowFit:</span>{' '}
                    {effect.mechanism}
                  </p>
                </div>
                {/* Related sessions - visible on hover */}
                <div className="mt-3 flex flex-wrap gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  {effect.sessions.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full bg-growfit/10 px-2 py-0.5 text-[10px] font-medium text-growfit"
                    >
                      {s}차시
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Competency Milestone Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-14"
        >
          <h3 className="text-center text-sm font-medium text-muted-foreground mb-6">
            3단계 역량 성장 경로
          </h3>
          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
            {competencyMilestones.map((milestone, i) => (
              <div key={milestone.layer} className="flex-1 flex items-center">
                {i > 0 && (
                  <ArrowRight className="hidden sm:block h-5 w-5 shrink-0 text-muted-foreground/40 -ml-1 -mr-1" />
                )}
                <div
                  className={cn(
                    'flex-1 rounded-xl border p-3 sm:p-4 transition-all',
                    'hover:shadow-sm'
                  )}
                  style={{ borderColor: `${milestone.color}30` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white"
                      style={{ backgroundColor: milestone.color }}
                    >
                      {milestone.layer.charAt(0).toUpperCase() + milestone.layer.slice(1)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      차시 {milestone.sessions.join(', ')}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{milestone.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {milestone.outcome}
                  </p>
                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: milestone.color }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : { width: 0 }}
                      transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
