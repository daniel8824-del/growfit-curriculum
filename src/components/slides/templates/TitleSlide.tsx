import { motion } from 'framer-motion'
import type { SlideData } from '@/types'

export function TitleSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {slide.subtitle && (
          <p className="text-lg text-white/60 mb-4">{slide.subtitle}</p>
        )}
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        {slide.body && (
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">{slide.body}</p>
        )}
      </motion.div>
    </div>
  )
}
