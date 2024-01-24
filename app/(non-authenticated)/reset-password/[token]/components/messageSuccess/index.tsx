import { MrbTypography } from '@/designSystem'
import React from 'react'

export const MessageSuccess: React.FC = () => {
  return (
    <MrbTypography variant="h3" horizontal="center">
      Your password has been changed.
    </MrbTypography>
  )
}
