import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import type { SlideData } from '@/types'

export function TipSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full text-center"
      >
        <Lightbulb className="h-12 w-12 text-amber-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
        {slide.body && (
          <p className="mt-4 text-lg text-white/70 leading-relaxed">{slide.body}</p>
        )}
        {slide.bullets && (
          <div className="mt-6 space-y-3 text-left max-w-xl mx-auto">
            {slide.bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 rounded-lg bg-white/5 p-3"
              >
                <Lightbulb className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{b}</span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
