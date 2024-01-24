'use client'

import { MrbBadge, MrbButton, MrbCol, MrbIcon } from '@/designSystem'

export default function BadgeShow() {
  return (
    <>
      <MrbCol gap={1}>
        <div className="mt-2">
          <MrbBadge content={5}>
            <MrbButton>Notifications</MrbButton>
          </MrbBadge>
        </div>
        <div className="mt-2">
          Notifications{' '}
          <MrbBadge variant="primary" content={5}>
            <MrbIcon name="notification-line" />
          </MrbBadge>
        </div>
        <div className="mt-2">
          Notifications{' '}
          <MrbBadge variant="success" content={5}>
            <MrbIcon name="notification-line" />
          </MrbBadge>
        </div>
        <div className="mt-2">
          Notifications{' '}
          <MrbBadge variant="warning" content={5}>
            <MrbIcon name="notification-line" />
          </MrbBadge>
        </div>
        <div className="mt-2">
          Notifications{' '}
          <MrbBadge variant="danger" content={5}>
            <MrbIcon name="notification-line" />
          </MrbBadge>
        </div>
      </MrbCol>
    </>
  )
}
