import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'

const sessionIcons = [Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy]
const sessionColors = ['#0EA5E9', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4', '#8B5CF6', '#F59E0B']

const layers = [
  { label: 'Foundation', sessions: '1-3', color: '#0EA5E9' },
  { label: 'Application', sessions: '4-6', color: '#8B5CF6' },
  { label: 'Mastery', sessions: '7-8', color: '#F59E0B' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-growfit/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[300px] w-[90vw] sm:h-[500px] sm:w-[800px] rounded-full bg-growfit/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:py-20 text-center sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-growfit animate-pulse" />
            BCT ONE Inc. &middot; GrowFit AI 실습 플랫폼
          </span>
        </motion.div>

        {/* Headline — learner-centric */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-[1.75rem] font-bold tracking-tight sm:mt-8 sm:text-5xl lg:text-6xl leading-tight"
        >
          <span className="bg-gradient-to-r from-growfit to-growfit-accent bg-clip-text text-transparent">
            40시간
          </span>
          이면,{' '}
          <br className="hidden sm:block" />
          AI를 업무에 쓸 수 있습니다
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base text-muted-foreground sm:mt-6 sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          비교하고, 프롬프트하고, RAG 구축하고, 에이전트를 만들기까지
          <br className="hidden sm:block" />
          &mdash; 하나의 플랫폼에서 완결되는 AI 실무 교육
        </motion.p>

        {/* 3-layer competency badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-1.5"
            >
              {i > 0 && (
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50" />
              )}
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: layer.color, color: layer.color === '#F59E0B' ? '#1a1a2e' : '#fff' }}
              >
                {layer.label}
                <span className="opacity-70">({layer.sessions}차시)</span>
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 8-session icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-4 gap-2 max-w-[200px] mx-auto sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 sm:max-w-none"
        >
          {sessionIcons.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.06, type: 'spring', stiffness: 300, damping: 20 }}
              className="flex h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border bg-card/80 backdrop-blur-sm shadow-sm mx-auto"
              style={{ borderColor: `${sessionColors[i]}30` }}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" style={{ color: sessionColors[i] }} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4"
        >
          <Link to="/curriculum" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-growfit hover:bg-growfit/90 text-white gap-2">
              커리큘럼 보기
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="https://growfit.onecloud.kr" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
              GrowFit 시작하기
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8"
        >
          {[
            { value: 8, suffix: '차시', label: '체계적 커리큘럼' },
            { value: 40, suffix: '시간', label: '실습 중심 교육' },
            { value: 6, suffix: '가지', label: '교육 효과' },
            { value: 10, suffix: '개', label: '확장 시나리오' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold sm:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
