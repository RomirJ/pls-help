'use client'

import { MrbAlert, MrbCol, MrbTypography } from '@/designSystem'
import { useState } from 'react'

export default function AvatarShow() {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <MrbCol gap={1}>
      <MrbAlert>This is variant default</MrbAlert>
      <MrbAlert variant="primary">This is variant primary</MrbAlert>
      <MrbAlert variant="danger">This is variant danger</MrbAlert>
      <MrbAlert variant="warning">This is variant warning</MrbAlert>
      <MrbAlert variant="success">
        <MrbTypography>This is variant success</MrbTypography>
      </MrbAlert>
    </MrbCol>
  )
}
