import { AnimatePresence, motion } from 'framer-motion'
import { useSlideNavigation } from '@/hooks/useSlideNavigation'
import { useFullscreen } from '@/hooks/useFullscreen'
import { SlideRenderer } from './SlideRenderer'
import { SlideControls } from './SlideControls'
import { SlideProgress } from './SlideProgress'
import type { SlideData } from '@/types'

interface SlideContainerProps {
  slides: SlideData[]
  sessionTitle: string
  sessionColor: string
  onExit: () => void
}

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
}

export function SlideContainer({ slides, sessionTitle, sessionColor, onExit }: SlideContainerProps) {
  const { currentSlide, direction, goNext, goPrev } = useSlideNavigation({
    totalSlides: slides.length,
    onExit,
  })
  const { isFullscreen, toggleFullscreen } = useFullscreen()
  const slide = slides[currentSlide]

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0f]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-sm text-white/50">
          {sessionTitle}
        </div>
        <SlideControls
          onPrev={goPrev}
          onNext={goNext}
          onExit={onExit}
          onToggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
          hasPrev={currentSlide > 0}
          hasNext={currentSlide < slides.length - 1}
        />
      </div>

      {/* Slide content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <SlideRenderer slide={slide} color={sessionColor} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom progress */}
      <div className="px-4 py-3">
        <SlideProgress current={currentSlide} total={slides.length} color={sessionColor} />
      </div>
    </div>
  )
}
