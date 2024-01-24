'use client'

import { useCoreStore } from '@/core/store'
import { MrbNotification, MrbToast } from '@/designSystem'
import { Notification, useNotificationCreated } from '@/domain/notification'
import { AuthenticationGuard } from '@/modules/authentication'
import { useNotificationToast } from '@/modules/notification/components'

import { UserCodeVerification } from '@/modules/user/components'
import { ReactNode } from 'react'

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode
}) {
  const store = useCoreStore()
  const toast = MrbToast.useToast()

  const notificationToast = useNotificationToast()

  useNotificationCreated((notification: Notification) => {
    const notificationsUpdated = [...store.notifications]

    notificationsUpdated.push(notification)

    store.setNotifications(notificationsUpdated)

    toast.plain(
      <MrbNotification
        notification={notification}
        {...notificationToast}
        isPreview={true}
      />,
    )
  })

  return (
    <AuthenticationGuard>
      <UserCodeVerification>{children}</UserCodeVerification>
    </AuthenticationGuard>
  )
}
