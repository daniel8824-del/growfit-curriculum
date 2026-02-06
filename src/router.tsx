import { createBrowserRouter } from 'react-router-dom'
import { LandingLayout } from '@/components/layout/LandingLayout'
import { ContentLayout } from '@/components/layout/ContentLayout'

export const router = createBrowserRouter([
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
])
