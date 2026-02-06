import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, GitCompareArrows, Palette, SlidersHorizontal, Settings, FileText, ListChecks, Database, Split, Bot, GraduationCap, BarChart3, Share2 } from 'lucide-react'
import { growfitFeatures } from '@/data/growfit-features'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare, GitCompareArrows, Palette, SlidersHorizontal, Settings, FileText, ListChecks, Database, Split, Bot, GraduationCap, BarChart3, Share2,
}

const categoryLabels: Record<string, string> = {
  practice: 'AI 실습',
  management: '교육 관리',
  analytics: '분석',
}

export function FeatureShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">GrowFit 주요 기능</h2>
          <p className="mt-3 text-muted-foreground">교육에 필요한 모든 기능이 하나의 플랫폼에</p>
        </motion.div>

        {(['practice', 'management', 'analytics'] as const).map((cat) => {
          const features = growfitFeatures.filter((f) => f.category === cat)
          if (features.length === 0) return null
          return (
            <div key={cat} className="mt-10 first:mt-12">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">{categoryLabels[cat]}</h3>
              <div className={cn(
                'grid gap-3',
                cat === 'practice' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'
              )}>
                {features.map((f, i) => {
                  const Icon = iconMap[f.icon] || MessageSquare
                  return (
                    <motion.div
                      key={f.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.05 * i }}
                      className="group rounded-xl border bg-card/50 p-4 transition-colors hover:border-growfit/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-growfit/10 text-growfit">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">{f.name}</h4>
                          {f.sessions.length > 0 && (
                            <p className="text-[10px] text-muted-foreground">
                              차시 {f.sessions.join(', ')}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
