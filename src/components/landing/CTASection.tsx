import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="rounded-2xl border bg-gradient-to-br from-growfit/10 via-transparent to-growfit-accent/10 p-6 sm:p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            AI 교육을 시작하세요
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            8차시 40시간 커리큘럼으로 수강생의 AI 역량을 체계적으로 키우세요.
            <br className="hidden sm:block" />
            GrowFit이 교육 준비부터 운영, 평가까지 도와드립니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link to="/curriculum" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-growfit hover:bg-growfit/90 text-white gap-2">
                커리큘럼 살펴보기
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="https://growfit.onecloud.kr" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                GrowFit 무료 체험
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
