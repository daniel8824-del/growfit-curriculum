import { motion } from 'framer-motion'
import { GraduationCap, FolderOpen, Share2, BarChart3, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { sessions } from '@/data/sessions'
import { getSessionSlides } from '@/data/slides'

const steps = [
  {
    icon: FolderOpen,
    title: '1. 코스 생성',
    desc: 'GrowFit 관리자 페이지에서 새 코스를 만들고, 8차시 커리큘럼을 구성합니다.',
    details: [
      '코스명, 기간, 수강 인원 설정',
      '차시별 목표와 일정 배치',
      '수강생 등록 (이메일 초대 또는 코드)',
    ],
  },
  {
    icon: Share2,
    title: '2. 교육 자료 배포',
    desc: '템플릿, Few-shot 예제, 에이전트를 코스에 공유합니다.',
    details: [
      '프롬프트 템플릿 → 코스에 공유',
      'Few-shot 예제 세트 → 학생들에게 배포',
      '기본 에이전트 → Class 범위로 Published',
    ],
  },
  {
    icon: BarChart3,
    title: '3. 수업 진행 & 모니터링',
    desc: '실시간으로 수강생의 AI 활용 현황을 확인합니다.',
    details: [
      '비교 모드 사용 빈도 확인',
      '모델별 선호도 분석',
      '실습 진행률 추적',
    ],
  },
  {
    icon: CheckCircle2,
    title: '4. 평가 & 다음 기수 준비',
    desc: '학습 데이터를 분석하고, 교육 자산을 다음 기수에 재활용합니다.',
    details: [
      '대시보드에서 학습 행동 데이터 리뷰',
      '우수 프롬프트/에이전트 아카이브',
      '코스 복사 → 다음 기수 즉시 시작',
    ],
  },
]

export default function InstructorPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="h-8 w-8 text-growfit-accent" />
          <h1 className="text-3xl font-bold">강사 가이드</h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          GrowFit으로 AI 교육을 운영하는 4단계 가이드입니다.<br />
          코스 생성부터 자료 배포, 모니터링, 재활용까지 한 플랫폼에서 완결합니다.
        </p>
      </motion.div>

      {/* 4-step guide */}
      <div className="space-y-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="rounded-xl border bg-card p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-growfit-accent/10 text-growfit-accent">
                <step.icon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold">{step.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{step.desc}</p>
            <ul className="space-y-2">
              {step.details.map((d, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-growfit shrink-0 mt-0.5" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Session quick links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10"
      >
        <h2 className="text-xl font-bold mb-4">차시별 슬라이드 바로가기</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sessions.map((s) => (
            <Link
              key={s.id}
              to={`/slides/${s.slug}`}
              className="rounded-lg border bg-card/50 p-3 text-sm hover:border-growfit/30 transition-colors"
            >
              <span className="text-xs text-muted-foreground">차시 {s.id}</span>
              <p className="font-medium mt-0.5">{s.title}</p>
              <p className="text-xs text-growfit mt-1">{getSessionSlides(s.id).length}장 슬라이드</p>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-center"
      >
        <a href="https://growfit.onecloud.kr" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-growfit hover:bg-growfit/90 text-white">
            GrowFit에서 코스 만들기
          </Button>
        </a>
      </motion.div>
    </div>
  )
}
