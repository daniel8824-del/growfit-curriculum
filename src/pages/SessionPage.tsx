import { useParams, Navigate } from 'react-router-dom'
import { sessions } from '@/data/sessions'
import { SessionNav } from '@/components/curriculum/SessionNav'
import { SessionDetail } from '@/components/curriculum/SessionDetail'

export default function SessionPage() {
  const { sessionSlug } = useParams()
  const session = sessions.find((s) => s.slug === sessionSlug)

  if (!session) return <Navigate to="/curriculum" replace />

  return (
    <div className="space-y-6">
      <SessionNav />
      <SessionDetail session={session} />
    </div>
  )
}
