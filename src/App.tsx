import { RouterProvider } from 'react-router-dom'

import type { FC } from 'react'
import { Suspense } from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import { Provider } from './Provider'
import router from '@/routes'

import '@/styles/base.css'
import 'antd/dist/reset.css'
import 'uno.css'

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider>
        <Suspense fallback={<h1>loading...</h1>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </ConfigProvider>
  )
}

export default App
