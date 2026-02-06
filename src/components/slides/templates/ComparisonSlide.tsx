import { motion } from 'framer-motion'
import type { SlideData } from '@/types'

export function ComparisonSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl font-bold text-white text-center">{slide.title}</h2>
        {slide.beforeAfter && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-red-500/30 bg-red-500/10 p-6"
            >
              <p className="text-sm font-medium text-red-400 mb-3">기존 방식</p>
              <p className="text-white/80 leading-relaxed">{slide.beforeAfter.before}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-xl border border-growfit/30 bg-growfit/10 p-6"
            >
              <p className="text-sm font-medium text-growfit mb-3">GrowFit</p>
              <p className="text-white/80 leading-relaxed">{slide.beforeAfter.after}</p>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
