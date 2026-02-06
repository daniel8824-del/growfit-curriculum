import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, FolderOpen, BarChart3, Share2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: FolderOpen,
    title: '코스 관리',
    desc: '차시별 커리큘럼을 구성하고, 수강생을 등록/관리합니다.',
  },
  {
    icon: Share2,
    title: '자료 배포',
    desc: '템플릿, Few-shot, 에이전트를 코스에 한번에 공유합니다.',
  },
  {
    icon: BarChart3,
    title: '학습 모니터링',
    desc: 'AI 활용 빈도, 모델 선호도, 실습 진행률을 실시간 확인합니다.',
  },
  {
    icon: GraduationCap,
    title: '다음 기수 즉시 배포',
    desc: '이전 기수의 교육 자산을 그대로 복사하여 즉시 시작합니다.',
  },
]

export function InstructorSection() {
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
          <span className="inline-flex items-center gap-2 rounded-full border bg-growfit-accent/5 border-growfit-accent/20 px-3 py-1 text-sm text-growfit-accent">
            <GraduationCap className="h-3.5 w-3.5" />
            강사용 기능
          </span>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">교육 운영이 쉬워집니다</h2>
          <p className="mt-3 text-muted-foreground">코스 생성부터 모니터링까지, 강사에게 필요한 모든 것</p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="rounded-xl border bg-card/50 p-4 sm:p-5"
            >
              <f.icon className="h-6 w-6 sm:h-8 sm:w-8 text-growfit-accent mb-3" />
              <h3 className="font-semibold text-sm">{f.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link to="/instructor">
            <Button variant="outline" className="gap-2">
              강사 가이드 보기 <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
