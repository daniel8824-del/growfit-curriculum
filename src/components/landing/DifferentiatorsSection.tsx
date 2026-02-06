import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GitCompareArrows, SlidersHorizontal, Route, RefreshCcw, BarChart3, ChevronRight } from 'lucide-react'
import { differentiators } from '@/data/differentiators'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitCompareArrows,
  SlidersHorizontal,
  Route,
  RefreshCcw,
  BarChart3,
}

export function DifferentiatorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)
  const d = differentiators[active]
  const Icon = iconMap[d.icon] || GitCompareArrows

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
            교육 효과를 만드는{' '}
            <span className="bg-gradient-to-r from-growfit to-growfit-accent bg-clip-text text-transparent">
              5가지 설계 원칙
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            왜 GrowFit 수업에서 더 나은 학습 결과가 나오는지, 그 설계를 공개합니다
          </p>
        </motion.div>

        {/* Tab selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {differentiators.map((diff, i) => {
            const DIcon = iconMap[diff.icon] || GitCompareArrows
            return (
              <button
                key={diff.id}
                onClick={() => setActive(i)}
                className={cn(
                  'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all',
                  active === i
                    ? 'border-transparent text-white shadow-lg'
                    : 'bg-card/50 text-muted-foreground hover:text-foreground hover:border-border'
                )}
                style={active === i ? { backgroundColor: diff.color } : undefined}
              >
                <DIcon className="h-4 w-4" />
                <span className="hidden sm:inline">{diff.title}</span>
                <span className="sm:hidden">#{diff.id}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Active differentiator detail */}
        <motion.div
          key={d.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 rounded-2xl border bg-card p-4 sm:p-6 lg:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${d.color}20`, color: d.color }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.subtitle}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                  <p className="text-xs font-medium text-destructive mb-1">이 원칙이 없으면</p>
                  <p className="text-sm">{d.painPoint}</p>
                </div>
                <div className="rounded-lg border border-growfit/20 bg-growfit/5 p-4">
                  <p className="text-xs font-medium text-growfit mb-1">이 원칙이 있으면</p>
                  <p className="text-sm">{d.solution}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-lg border bg-muted/30 p-5">
                <p className="text-xs font-medium text-muted-foreground mb-2">대응 GrowFit 기능</p>
                <p className="text-sm font-medium">{d.growfitFeature}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.sessions.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{ backgroundColor: `${d.color}15`, color: d.color }}
                    >
                      차시 {s}에서 적용
                      <ChevronRight className="h-3 w-3" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
