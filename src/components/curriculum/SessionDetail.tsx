import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy, Clock, Presentation, ExternalLink, Lightbulb, Target, BookOpen, Tag, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { GrowFitCheckpoint } from './GrowFitCheckpoint'
import { GrowFitBadge } from '@/components/common/GrowFitBadge'
import { sessions } from '@/data/sessions'
import type { Session } from '@/types'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy,
}

interface SessionDetailProps {
  session: Session
}

export function SessionDetail({ session }: SessionDetailProps) {
  const Icon = iconMap[session.icon] || Brain
  const [openSegments, setOpenSegments] = useState<string[]>(['seg-0'])

  const scrollToSegment = useCallback((index: number) => {
    const value = `seg-${index}`
    setOpenSegments((prev) => prev.includes(value) ? prev : [...prev, value])
    setTimeout(() => {
      document.getElementById(value)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }, [])

  const prereqSessions = session.prerequisites
    ?.map((id) => sessions.find((s) => s.id === id))
    .filter(Boolean) ?? []

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-4">
          <div
            className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${session.color}15`, color: session.color }}
          >
            <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">차시 {session.id} &middot; {session.sourceChapters}</p>
            <h1 className="text-xl font-bold sm:text-2xl">{session.title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> {session.hours}시간
          </span>
          <Link to={`/slides/${session.slug}`}>
            <Button size="sm" variant="outline" className="gap-1.5">
              <Presentation className="h-4 w-4" />
              슬라이드
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Prerequisites */}
      {prereqSessions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3"
        >
          <AlertCircle className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
          <div className="text-sm">
            <span className="font-medium">선수 과목:</span>{' '}
            {prereqSessions.map((s, i) => (
              <span key={s!.id}>
                {i > 0 && ', '}
                <Link to={`/curriculum/${s!.slug}`} className="text-growfit hover:underline">
                  차시 {s!.id} ({s!.title})
                </Link>
              </span>
            ))}
            을 먼저 수강하세요.
          </div>
        </motion.div>
      )}

      {/* Learning Outcomes Card */}
      {session.learningOutcomes?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="rounded-xl border border-growfit/20 bg-growfit/5 p-4 sm:p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-5 w-5 text-growfit" />
            <h2 className="font-semibold text-sm">이 차시를 마치면</h2>
          </div>
          <ul className="space-y-2">
            {session.learningOutcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-growfit text-white text-[10px] font-bold mt-0.5">
                  {i + 1}
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Key Concepts + GrowFit features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-muted-foreground leading-relaxed">{session.description}</p>

        {/* Key Concepts */}
        {session.keyConceptsIntroduced?.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
              <Tag className="h-3 w-3" /> 핵심 개념:
            </span>
            {session.keyConceptsIntroduced.map((concept) => (
              <span
                key={concept}
                className="inline-flex items-center rounded-full bg-growfit-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-growfit-accent"
              >
                {concept}
              </span>
            ))}
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {session.growfitFeatures.map((f) => (
            <GrowFitBadge key={f} feature={f} size="md" />
          ))}
        </div>
      </motion.div>

      {/* 5-hour Visual Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-xl border bg-card p-3 sm:p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-medium">{session.hours}시간 수업 구성</h3>
        </div>

        {/* Schedule bar */}
        <div className="flex gap-0.5 rounded-lg overflow-hidden h-8 sm:h-10">
          {session.segments.map((seg, i) => {
            const isOpen = openSegments.includes(`seg-${i}`)
            return (
              <button
                key={i}
                onClick={() => scrollToSegment(i)}
                className="relative h-full rounded-sm transition-all hover:brightness-110 cursor-pointer overflow-hidden"
                style={{
                  flex: seg.hours,
                  backgroundColor: session.color,
                  opacity: isOpen ? 1 : 0.3 + (i * 0.12),
                }}
                title={`${seg.title} (${seg.hours}시간)`}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white/90 px-1 truncate">
                  {seg.hours >= 1 ? seg.title : ''}
                </span>
              </button>
            )
          })}
        </div>

        {/* Time labels */}
        <div className="flex gap-0.5 mt-1">
          {session.segments.map((seg, i) => (
            <div key={i} className="text-center text-[10px] text-muted-foreground" style={{ flex: seg.hours }}>
              {seg.hours}h
            </div>
          ))}
        </div>
      </motion.div>

      {/* Segments accordion */}
      <Accordion type="multiple" value={openSegments} onValueChange={setOpenSegments}>
        {session.segments.map((seg, i) => (
          <AccordionItem key={i} value={`seg-${i}`} id={`seg-${i}`}>
            <AccordionTrigger>
              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <span
                  className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full text-[10px] sm:text-xs font-bold text-white"
                  style={{ backgroundColor: session.color }}
                >
                  {seg.order}
                </span>
                <div>
                  <span className="font-semibold text-sm sm:text-base">{seg.title}</span>
                  <span className="ml-2 text-xs text-muted-foreground">{seg.hours}시간</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-4 sm:pl-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-growfit">GrowFit:</span>
                  <span className="text-sm text-muted-foreground">{seg.growfitAction}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{seg.content}</p>

                {seg.growfitFeatures.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {seg.growfitFeatures.map((f) => (
                      <GrowFitBadge key={f} feature={f} />
                    ))}
                  </div>
                )}

                {seg.steps.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-medium">실습 단계</p>
                    {seg.steps.map((step) => (
                      <div key={step.order} className="flex gap-3 text-sm">
                        <span className="shrink-0 text-xs text-muted-foreground font-medium mt-0.5">
                          {step.order}.
                        </span>
                        <div>
                          <p>{step.instruction}</p>
                          <p className="text-xs text-growfit">{step.growfitPath}</p>
                          {step.note && (
                            <p className="text-xs text-muted-foreground mt-0.5">{step.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {seg.tips.length > 0 && (
                  <div className="rounded-lg bg-amber-500/5 border border-amber-500/20 p-3 space-y-1.5">
                    {seg.tips.map((tip, ti) => (
                      <div key={ti} className="flex gap-2 text-xs">
                        <Lightbulb className="h-3.5 w-3.5 shrink-0 text-amber-500 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Checkpoint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GrowFitCheckpoint checkpoint={session.checkpoint} />
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="flex flex-wrap gap-3"
      >
        <a href="https://growfit.onecloud.kr" target="_blank" rel="noopener noreferrer">
          <Button className="bg-growfit hover:bg-growfit/90 text-white gap-2">
            GrowFit에서 실습하기
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
        <Link to={`/slides/${session.slug}`}>
          <Button variant="outline" className="gap-2">
            슬라이드 보기
            <Presentation className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
