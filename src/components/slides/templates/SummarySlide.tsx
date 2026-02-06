import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import type { SlideData } from '@/types'

export function SummarySlide({ slide }: { slide: SlideData }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-growfit mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
        {slide.subtitle && (
          <p className="mt-2 text-white/60">{slide.subtitle}</p>
        )}
        {slide.bullets && (
          <div className="mt-8 space-y-3 text-left max-w-xl mx-auto">
            {slide.bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-growfit shrink-0 mt-0.5" />
                <span className="text-white/90">{b}</span>
              </motion.div>
            ))}
          </div>
        )}
        {slide.body && (
          <p className="mt-6 text-white/60 leading-relaxed">{slide.body}</p>
        )}
      </motion.div>
    </div>
  )
}
