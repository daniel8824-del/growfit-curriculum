import type { SlideData } from '@/types'
import { TitleSlide } from './templates/TitleSlide'
import { FeatureSlide } from './templates/FeatureSlide'
import { StepSlide } from './templates/StepSlide'
import { ComparisonSlide } from './templates/ComparisonSlide'
import { TipSlide } from './templates/TipSlide'
import { SummarySlide } from './templates/SummarySlide'

interface SlideRendererProps {
  slide: SlideData
  color?: string
}

export function SlideRenderer({ slide, color }: SlideRendererProps) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} color={color} />
    case 'feature':
      return <FeatureSlide slide={slide} />
    case 'step':
      return <StepSlide slide={slide} />
    case 'comparison':
      return <ComparisonSlide slide={slide} />
    case 'checkpoint':
      return <TipSlide slide={slide} />
    case 'summary':
      return <SummarySlide slide={slide} />
    default:
      return <FeatureSlide slide={slide} />
  }
}
