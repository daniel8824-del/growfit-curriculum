import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy, Clock, ArrowRight, ArrowDown } from 'lucide-react'
import { sessions } from '@/data/sessions'
import { competencyMilestones } from '@/data/educational-effects'
import type { CompetencyLayer } from '@/types'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy,
}

const layerConfig: Record<CompetencyLayer, { bg: string; border: string }> = {
  foundation: { bg: 'bg-sky-500/[0.03]', border: 'border-sky-500/20' },
  application: { bg: 'bg-violet-500/[0.03]', border: 'border-violet-500/20' },
  mastery: { bg: 'bg-amber-500/[0.03]', border: 'border-amber-500/20' },
}

export function SessionTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-20 sm:py-28 bg-growfit/[0.02]" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            8차시 &middot; 40시간 커리큘럼
          </h2>
          <p className="mt-3 text-muted-foreground">
            LLM 이해부터 에이전트 빌드까지, 3단계 역량 성장 여정
          </p>
        </motion.div>

        <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
          {competencyMilestones.map((milestone, mi) => {
            const config = layerConfig[milestone.layer]
            const layerSessions = sessions.filter((s) =>
              milestone.sessions.includes(s.id)
            )

            return (
              <motion.div
                key={milestone.layer}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * mi }}
              >
                {/* Arrow between layers */}
                {mi > 0 && (
                  <div className="flex justify-center -mt-3 mb-3">
                    <ArrowDown className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                )}

                {/* Layer container */}
                <div className={`rounded-2xl border ${config.border} ${config.bg} p-5 sm:p-6`}>
                  {/* Layer header */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
                      style={{ backgroundColor: milestone.color }}
                    >
                      {milestone.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      차시 {milestone.sessions.join(', ')} &middot; {layerSessions.reduce((a, s) => a + s.hours, 0)}시간
                    </span>
                    <span className="hidden sm:inline text-xs text-muted-foreground/70">
                      &mdash; {milestone.outcome}
                    </span>
                  </div>

                  {/* Session cards in this layer */}
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {layerSessions.map((session, si) => {
                      const Icon = iconMap[session.icon] || Brain
                      return (
                        <motion.div
                          key={session.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.2 + mi * 0.15 + si * 0.08 }}
                        >
                          <Link to={`/curriculum/${session.slug}`}>
                            <div className="group rounded-xl border bg-card/80 p-4 transition-all hover:shadow-md hover:border-primary/20">
                              <div className="flex items-start gap-3">
                                <div
                                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                  style={{ backgroundColor: `${session.color}15`, color: session.color }}
                                >
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium text-muted-foreground">차시 {session.id}</span>
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                      <Clock className="h-3 w-3" /> {session.hours}시간
                                    </span>
                                  </div>
                                  <h3 className="mt-1 font-semibold text-sm group-hover:text-growfit transition-colors">{session.title}</h3>
                                </div>
                              </div>

                              {/* Segment mini-preview */}
                              <p className="mt-2.5 text-[11px] text-muted-foreground line-clamp-2">
                                {session.segments.map((seg) => seg.title).join(' · ')}
                              </p>

                              <div className="mt-2 flex items-center justify-between">
                                <span className="text-[10px] text-muted-foreground">{session.segments.length}개 세션</span>
                                <span className="inline-flex items-center gap-0.5 text-xs text-growfit opacity-0 group-hover:opacity-100 transition-opacity">
                                  상세보기 <ArrowRight className="h-3 w-3" />
                                </span>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
