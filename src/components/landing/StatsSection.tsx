import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'

const stats = [
  { value: 8, suffix: '차시', label: '체계적 커리큘럼', desc: 'LLM부터 에이전트까지 단계별 구성' },
  { value: 40, suffix: '시간', label: '충분한 실습 시간', desc: '이론 20% + 실습 80% 구성' },
  { value: 13, suffix: '개', label: 'GrowFit 기능', desc: 'AI 실습, 관리, 분석 올인원' },
  { value: 10, suffix: '개', label: '확장 시나리오', desc: '기업/학교 맞춤 독립형 워크숍' },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-28 bg-growfit/[0.03]" ref={ref}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-2xl font-bold sm:text-3xl md:text-4xl"
        >
          숫자로 보는 GrowFit 커리큘럼
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="text-center rounded-xl border bg-card p-4 sm:p-6"
            >
              <div className="text-2xl font-bold text-growfit sm:text-3xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-semibold text-sm">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
