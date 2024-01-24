import { MrbTypography } from '@/designSystem'
import React from 'react'

type Props = {
  email: string
}

export const MessageSuccess: React.FC<Props> = ({ email }) => {
  return (
    <MrbTypography variant="h3" horizontal="center">
      We sent an email to {email} with a link to reset your password.
    </MrbTypography>
  )
}
