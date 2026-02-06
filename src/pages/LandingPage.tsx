import { HeroSection } from '@/components/landing/HeroSection'
import { EducationalEffectsSection } from '@/components/landing/EducationalEffectsSection'
import { DifferentiatorsSection } from '@/components/landing/DifferentiatorsSection'
import { SessionTimeline } from '@/components/landing/SessionTimeline'
import { FeatureShowcase } from '@/components/landing/FeatureShowcase'
import { ScenarioCarousel } from '@/components/landing/ScenarioCarousel'
import { InstructorSection } from '@/components/landing/InstructorSection'
import { StatsSection } from '@/components/landing/StatsSection'
import { CTASection } from '@/components/landing/CTASection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <EducationalEffectsSection />
      <DifferentiatorsSection />
      <SessionTimeline />
      <FeatureShowcase />
      <ScenarioCarousel />
      <InstructorSection />
      <StatsSection />
      <CTASection />
    </>
  )
}
