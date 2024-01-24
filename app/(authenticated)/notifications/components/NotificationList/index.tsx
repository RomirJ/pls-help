import { MrbList, MrbNotification, MrbTypography } from '@/designSystem'
import { MrbListItem } from '@/designSystem/components/atoms/MrbListItem'
import { Notification } from '@/domain/notification'
import React from 'react'

type Props = {
  notifications: Notification[]
  onDelete: (notification: Notification) => void
  onClick: (notification: Notification) => void
}

export const NotificationList: React.FC<Props> = ({
  notifications,
  onDelete,
  onClick,
}) => {
  const isEmpty = notifications.length === 0

  return (
    <>
      {isEmpty && (
        <MrbTypography variant="secondary">
          You have no notifications
        </MrbTypography>
      )}

      <MrbList divider={false} noPadding>
        {notifications.map(notification => (
          <MrbListItem key={notification.id} className="mb-1">
            <MrbNotification
              notification={notification}
              onClick={onClick}
              onDelete={onDelete}
            />
          </MrbListItem>
        ))}
      </MrbList>
    </>
  )
}
