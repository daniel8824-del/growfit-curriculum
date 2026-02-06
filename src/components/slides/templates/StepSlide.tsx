import { motion } from 'framer-motion'
import type { SlideData } from '@/types'

export function StepSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full"
      >
        <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
        {slide.subtitle && (
          <p className="mt-2 text-white/60">{slide.subtitle}</p>
        )}
        {slide.bullets && (
          <div className="mt-8 space-y-4">
            {slide.bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-growfit text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-white/90 mt-1 leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
