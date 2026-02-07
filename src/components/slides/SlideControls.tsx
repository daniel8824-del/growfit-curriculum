import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SlideControlsProps {
  onPrev: () => void
  onNext: () => void
  onExit: () => void
  onToggleFullscreen: () => void
  isFullscreen: boolean
  hasPrev: boolean
  hasNext: boolean
}

export function SlideControls({ onPrev, onNext, onExit, onToggleFullscreen, isFullscreen, hasPrev, hasNext }: SlideControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={onExit}
        className="text-white/70 hover:text-white hover:bg-white/10"
        aria-label="슬라이드 나가기"
      >
        <X className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleFullscreen}
        className="text-white/70 hover:text-white hover:bg-white/10"
        aria-label={isFullscreen ? '전체화면 해제' : '전체화면'}
      >
        {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
      </Button>
      <div className="flex items-center gap-1 ml-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          disabled={!hasPrev}
          className="text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={!hasNext}
          className="text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
