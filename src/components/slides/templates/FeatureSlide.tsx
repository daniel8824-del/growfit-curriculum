import { motion } from 'framer-motion'
import type { SlideData } from '@/types'

export function FeatureSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{slide.title}</h2>
        {slide.subtitle && (
          <p className="mt-2 text-lg text-white/60">{slide.subtitle}</p>
        )}
        {slide.body && (
          <p className="mt-4 text-white/80 leading-relaxed">{slide.body}</p>
        )}
        {slide.bullets && (
          <ul className="mt-6 space-y-3">
            {slide.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-white/90"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-growfit shrink-0" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  )
}
