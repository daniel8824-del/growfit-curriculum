import { Link, useParams } from 'react-router-dom'
import { Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy } from 'lucide-react'
import { sessions } from '@/data/sessions'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, SlidersHorizontal, MessageSquareText, Sparkles, Briefcase, Database, Bot, Trophy,
}

export function SessionNav() {
  const { sessionSlug } = useParams()

  return (
    <div className="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar">
      {sessions.map((s) => {
        const Icon = iconMap[s.icon] || Brain
        const active = sessionSlug === s.slug
        return (
          <Link
            key={s.id}
            to={`/curriculum/${s.slug}`}
            className={cn(
              'flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all',
              active
                ? 'border-transparent text-white shadow-sm'
                : 'bg-card/50 text-muted-foreground hover:text-foreground hover:border-border'
            )}
            style={active ? { backgroundColor: s.color } : undefined}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline whitespace-nowrap">{s.title}</span>
            <span className="sm:hidden">{s.id}</span>
          </Link>
        )
      })}
    </div>
  )
}
