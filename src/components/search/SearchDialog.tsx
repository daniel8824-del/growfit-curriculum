import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'
import { Search } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { sessions } from '@/data/sessions'
import { scenarios } from '@/data/scenarios'
import { cn } from '@/lib/utils'

interface SearchItem {
  type: 'session' | 'scenario'
  title: string
  description: string
  href: string
  meta: string
}

function buildSearchItems(): SearchItem[] {
  const items: SearchItem[] = []
  sessions.forEach((s) => {
    items.push({
      type: 'session',
      title: `차시 ${s.id}: ${s.title}`,
      description: s.description,
      href: `/curriculum/${s.slug}`,
      meta: s.growfitFeatures.join(', '),
    })
    s.segments.forEach((seg) => {
      items.push({
        type: 'session',
        title: seg.title,
        description: seg.content,
        href: `/curriculum/${s.slug}`,
        meta: `차시 ${s.id}`,
      })
    })
  })
  scenarios.forEach((sc) => {
    items.push({
      type: 'scenario',
      title: sc.title,
      description: sc.objective,
      href: '/scenarios',
      meta: `${sc.hours}시간 | ${sc.level}`,
    })
  })
  return items
}

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const items = useMemo(buildSearchItems, [])
  const fuse = useMemo(
    () => new Fuse(items, { keys: ['title', 'description', 'meta'], threshold: 0.4 }),
    [items]
  )
  const results = query.length > 0 ? fuse.search(query).slice(0, 8) : []

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onOpenChange])

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  function handleSelect(href: string) {
    navigate(href)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="sm:max-w-lg p-0 gap-0">
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="차시, 시나리오, GrowFit 기능 검색..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            autoFocus
          />
          <kbd className="hidden sm:inline-flex h-5 items-center rounded border px-1.5 text-[10px] text-muted-foreground">
            ESC
          </kbd>
        </div>
        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto p-2">
            {results.map(({ item }, i) => (
              <button
                key={i}
                onClick={() => handleSelect(item.href)}
                className={cn(
                  'flex w-full flex-col items-start gap-1 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent',
                )}
              >
                <div className="flex items-center gap-2">
                  <span className={cn(
                    'rounded px-1.5 py-0.5 text-[10px] font-medium',
                    item.type === 'session' ? 'bg-growfit/10 text-growfit' : 'bg-growfit-accent/10 text-growfit-accent'
                  )}>
                    {item.type === 'session' ? '차시' : '시나리오'}
                  </span>
                  <span className="font-medium">{item.title}</span>
                </div>
                <span className="text-xs text-muted-foreground line-clamp-1">{item.description}</span>
              </button>
            ))}
          </div>
        )}
        {query.length > 0 && results.length === 0 && (
          <div className="py-8 text-center text-sm text-muted-foreground">
            검색 결과가 없습니다
          </div>
        )}
        {query.length === 0 && (
          <div className="py-8 text-center text-sm text-muted-foreground">
            검색어를 입력하세요
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
