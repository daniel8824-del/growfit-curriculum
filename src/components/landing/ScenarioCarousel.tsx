import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, ArrowRight } from 'lucide-react'
import { scenarios } from '@/data/scenarios'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const levelLabels: Record<string, string> = {
  beginner: '초급',
  intermediate: '중급',
  advanced: '고급',
}
const levelColors: Record<string, string> = {
  beginner: 'bg-emerald-500/10 text-emerald-500',
  intermediate: 'bg-amber-500/10 text-amber-500',
  advanced: 'bg-red-500/10 text-red-500',
}

export function ScenarioCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-28 bg-growfit/[0.02]" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">확장 시나리오</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">기업/학교 수요에 맞춰 선택 운영하는 독립형 워크숍</p>
          </div>
          <Link to="/scenarios" className="hidden sm:block">
            <Button variant="outline" size="sm" className="gap-1">
              전체 보기 <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </motion.div>

        <div className="mt-8 flex gap-3 sm:gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {scenarios.slice(0, 6).map((sc, i) => (
            <motion.div
              key={sc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i }}
              className="min-w-[260px] max-w-[300px] sm:min-w-[280px] sm:max-w-[320px] shrink-0 snap-start rounded-xl border bg-card p-4 sm:p-5"
            >
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${levelColors[sc.level]}`}>
                  {levelLabels[sc.level]}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {sc.hours}시간
                </span>
              </div>
              <h3 className="mt-3 font-semibold text-sm">{sc.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">{sc.objective}</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" /> {sc.participants}
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {sc.growfitFeatures.slice(0, 3).map((f) => (
                  <Badge key={f} variant="secondary" className="text-[10px] px-1.5 py-0">{f}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <Link to="/scenarios" className="mt-4 block sm:hidden">
          <Button variant="outline" size="sm" className="w-full gap-1">
            전체 보기 <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
