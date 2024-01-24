'use client'

import { AuthenticationGuard } from '@/modules/authentication'
import { ReactNode } from 'react'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <AuthenticationGuard isPublic={true}>{children}</AuthenticationGuard>
}
