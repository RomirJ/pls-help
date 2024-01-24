'use client'

import { useHttpAction } from '@/core/http/http.action.hook'
import { useCoreStore } from '@/core/store'
import { MrbRow, MrbTypography } from '@/designSystem'
import { NotificationApi } from '@/domain/notification'
import { PageLayout } from '@/layouts/Page.layout'
import { useNotificationToast } from '@/modules/notification/components'
import { Actions } from './components/Actions'
import { NotificationList } from './components/NotificationList'

export default function NotificationsPage() {
  const { notifications, setNotifications } = useCoreStore()

  const notificationToast = useNotificationToast()
  const actionClearAll = useHttpAction()

  const handleClearAll = () => {
    actionClearAll.run(() =>
      NotificationApi.deleteAllByMe().then(() => setNotifications([])),
    )
  }

  const canClearAll = notifications.length > 0

  return (
    <PageLayout layout="super-narrow">
      <MrbRow horizontal="between" vertical="center" gap={1}>
        <MrbTypography variant="h2">Notifications</MrbTypography>

        <Actions
          canClearAll={canClearAll}
          isLoadingClearAll={actionClearAll.isLoading}
          onClearAll={handleClearAll}
        />
      </MrbRow>

      <NotificationList
        notifications={notifications}
        onClick={notificationToast.onClick}
        onDelete={notificationToast.onDelete}
      />
    </PageLayout>
  )
}
