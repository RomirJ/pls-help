'use client'

import { Layout } from './components/layout'
import { Leftbar } from './components/leftbar'

export default function ShowroomComponentPage({ children }) {
  return (
    <Layout>
      <Leftbar />
      {children}
    </Layout>
  )
}
