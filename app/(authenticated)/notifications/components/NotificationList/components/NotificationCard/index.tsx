import {
  MrbAvatar,
  MrbButton,
  MrbCard,
  MrbCol,
  MrbIcon,
  MrbRow,
  MrbTypography,
} from '@/designSystem'
import { Notification } from '@/domain/notification'
import React, { MouseEvent } from 'react'

type Props = {
  notification: Notification
  onClick: () => void
  onDelete: (event: MouseEvent<HTMLButtonElement>) => void
}

export const NotificationCard: React.FC<Props> = ({
  notification,
  onClick,
  onDelete,
}) => {
  return (
    <>
      <MrbCard onClick={onClick}>
        <MrbRow gap={2}>
          <MrbCol vertical="top">
            <MrbAvatar src={notification.senderPictureUrl}>
              {notification.senderName}
            </MrbAvatar>
          </MrbCol>
          <MrbCol xs="fill" vertical="center">
            <MrbTypography variant="secondary">
              {notification.title}
            </MrbTypography>
            <MrbTypography>{notification.message}</MrbTypography>
          </MrbCol>
          <MrbCol>
            <MrbButton variant="plain" onClick={onDelete}>
              <MrbIcon name="close" />
            </MrbButton>
          </MrbCol>
        </MrbRow>
      </MrbCard>
    </>
  )
}
