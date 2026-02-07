import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { sessions } from '@/data/sessions'
import { getSessionSlides } from '@/data/slides'
import { SlideContainer } from '@/components/slides/SlideContainer'

export default function SlidePage() {
  const { sessionSlug } = useParams()
  const navigate = useNavigate()
  const session = sessions.find((s) => s.slug === sessionSlug)

  if (!session) {
    return <Navigate to="/curriculum" replace />
  }

  const slides = getSessionSlides(session.id)

  if (slides.length === 0) {
    return <Navigate to={`/curriculum/${session.slug}`} replace />
  }

  return (
    <SlideContainer
      slides={slides}
      sessionTitle={`차시 ${session.id}: ${session.title}`}
      sessionColor={session.color}
      onExit={() => navigate(`/curriculum/${session.slug}`)}
    />
  )
}
