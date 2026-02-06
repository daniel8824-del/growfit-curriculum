import { useState } from 'react'
import { motion } from 'framer-motion'
import { scenarios } from '@/data/scenarios'
import { ScenarioCard } from '@/components/curriculum/ScenarioCard'

export default function ScenariosPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold sm:text-3xl">확장 시나리오</h1>
        <p className="mt-2 text-muted-foreground">
          기업/학교 수요에 맞춰 선택 운영하는 10개 독립형 워크숍
        </p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        {scenarios.map((sc, i) => (
          <motion.div
            key={sc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            onClick={() => setExpanded(expanded === sc.id ? null : sc.id)}
            className="cursor-pointer"
          >
            <ScenarioCard scenario={sc} expanded={expanded === sc.id} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
