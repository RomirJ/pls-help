'use client'

import { MrbCol, MrbNotification } from '@/designSystem'

export default function NotificationShow() {
  return (
    <>
      <MrbCol gap={1} style={{ position: 'relative' }}>
        <MrbNotification
          notification={{
            senderName: 'John',
            senderEmail: 'john@carter.com',
            title: 'Alert',
            message: 'You have a new notification',
            senderPictureUrl:
              'https://www.igscountertops.com/wp-content/uploads/2017/09/CALACATTA-BORGHINI--1400x788.jpg',
            dateCreated: '2025-01-01',
          }}
        />
      </MrbCol>
    </>
  )
}
