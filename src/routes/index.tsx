import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/pages/error'
import HomePage from '@/pages/home'

// const LoginPage = lazy(() => import('@/pages/login'))
const BattlePage = lazy(() => import('@/pages/battle'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/battle',
    element: <BattlePage />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
])

export default router
