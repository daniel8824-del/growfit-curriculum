import { Link } from 'react-router-dom'
import { Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy, Clock, ArrowRight, Target } from 'lucide-react'
import type { Session } from '@/types'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy,
}

interface SessionCardProps {
  session: Session
}

export function SessionCard({ session }: SessionCardProps) {
  const Icon = iconMap[session.icon] || Brain

  return (
    <Link to={`/curriculum/${session.slug}`}>
      <div className="group h-full rounded-xl border bg-card p-4 sm:p-5 transition-all hover:shadow-md hover:border-growfit/20">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${session.color}15`, color: session.color }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-medium text-muted-foreground">차시 {session.id}</span>
            <h3 className="text-sm font-semibold sm:text-base group-hover:text-growfit transition-colors">{session.title}</h3>
          </div>
        </div>

        {/* Mini timeline bar */}
        <div className="mt-4 flex gap-0.5 rounded-lg overflow-hidden h-2">
          {session.segments.map((seg, i) => (
            <div
              key={i}
              className="h-full rounded-sm"
              style={{
                flex: seg.hours,
                backgroundColor: session.color,
                opacity: 0.25 + (i * 0.15),
              }}
              title={`${seg.title} (${seg.hours}시간)`}
            />
          ))}
        </div>

        {/* Segment list */}
        <ul className="mt-3 space-y-0.5">
          {session.segments.map((seg) => (
            <li key={seg.order} className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: session.color }} />
              <span className="truncate">{seg.title}</span>
              <span className="ml-auto shrink-0 text-[10px]">{seg.hours}h</span>
            </li>
          ))}
        </ul>

        {/* Meta */}
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" /> {session.hours}시간
          <span className="text-border">|</span>
          {session.segments.length}개 세션
        </div>

        {/* Learning outcome preview */}
        {session.learningOutcomes?.[0] && (
          <div className="mt-3 flex items-start gap-1.5 text-[11px] text-muted-foreground/80">
            <Target className="h-3 w-3 shrink-0 mt-0.5 text-growfit" />
            <span className="line-clamp-2">{session.learningOutcomes[0]}</span>
          </div>
        )}

        {/* Arrow */}
        <div className="mt-3 flex justify-end">
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  )
}
