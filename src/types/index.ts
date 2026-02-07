export type CompetencyLayer = 'foundation' | 'application' | 'mastery'

export interface Session {
  id: number
  slug: string
  title: string
  hours: number
  icon: string
  color: string
  gradient: string
  sourceChapters: string
  growfitFeatures: string[]
  description: string
  segments: SessionSegment[]
  checkpoint: GrowFitCheckpoint
  slideCount?: number
  learningOutcomes: string[]
  prerequisites: number[]
  competencyLayer: CompetencyLayer
  keyConceptsIntroduced: string[]
}

export interface SessionSegment {
  order: number
  title: string
  hours: number
  growfitAction: string
  content: string
  growfitFeatures: string[]
  steps: SegmentStep[]
  tips: string[]
}

export interface SegmentStep {
  order: number
  instruction: string
  growfitPath: string
  screenshot?: string
  note?: string
}

export interface GrowFitCheckpoint {
  differentiatorId: number
  duration: string
  activity: string
  reviewPrompt: string
}

export interface Differentiator {
  id: number
  slug: string
  title: string
  subtitle: string
  icon: string
  color: string
  painPoint: string
  solution: string
  growfitFeature: string
  sessions: number[]
}

export interface Scenario {
  id: string
  title: string
  hours: number
  level: 'beginner' | 'intermediate' | 'advanced'
  participants: string
  relatedSessions: number[]
  differentiators: number[]
  growfitFeatures: string[]
  objective: string
  flow: ScenarioStep[]
  assessment: string
  instructorTip: string
}

export interface ScenarioStep {
  time: string
  activity: string
  growfitAction: string
}

export interface SlideData {
  id: string
  sessionId: number
  order: number
  type: 'title' | 'feature' | 'step' | 'comparison' | 'checkpoint' | 'summary'
  title: string
  subtitle?: string
  body?: string
  screenshot?: string
  bullets?: string[]
  beforeAfter?: { before: string; after: string }
  differentiatorId?: number
}

export interface GrowFitFeature {
  id: string
  name: string
  category: 'practice' | 'management' | 'analytics'
  description: string
  icon: string
  sessions: number[]
}

export interface EducationalEffect {
  id: string
  title: string
  metric: string
  mechanism: string
  icon: string
  sessions: number[]
}

export interface CompetencyMilestone {
  layer: CompetencyLayer
  label: string
  sessions: number[]
  outcome: string
  color: string
}
