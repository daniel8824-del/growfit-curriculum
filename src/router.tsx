import { createBrowserRouter } from 'react-router-dom'
import { LandingLayout } from '@/components/layout/LandingLayout'
import { ContentLayout } from '@/components/layout/ContentLayout'
import ErrorPage from '@/pages/ErrorPage'
import NotFoundPage from '@/pages/NotFoundPage'

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-growfit border-t-transparent" />
  </div>
)

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingFallback />,
    children: [
      {
        element: <LandingLayout />,
        children: [
          {
            path: '/',
            lazy: () => import('@/pages/LandingPage').then((m) => ({ Component: m.default })),
          },
        ],
      },
      {
        element: <ContentLayout />,
        children: [
          {
            path: '/curriculum',
            lazy: () => import('@/pages/CurriculumPage').then((m) => ({ Component: m.default })),
          },
          {
            path: '/curriculum/:sessionSlug',
            lazy: () => import('@/pages/SessionPage').then((m) => ({ Component: m.default })),
          },
          {
            path: '/scenarios',
            lazy: () => import('@/pages/ScenariosPage').then((m) => ({ Component: m.default })),
          },
          {
            path: '/instructor',
            lazy: () => import('@/pages/InstructorPage').then((m) => ({ Component: m.default })),
          },
        ],
      },
      {
        path: '/slides/:sessionSlug',
        lazy: () => import('@/pages/SlidePage').then((m) => ({ Component: m.default })),
      },
      {
        path: '/print',
        lazy: () => import('@/pages/PrintPage').then((m) => ({ Component: m.default })),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
