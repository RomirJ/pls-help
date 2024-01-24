'use client'

import { MrbCol, MrbLink } from '@/designSystem'

export default function LinkShow() {
  return (
    <>
      <MrbCol gap={1}>
        <MrbLink to="/showroom/components/button" variant="primary">
          Here is a link
        </MrbLink>

        <MrbLink to="/showroom/components/form" newWindow>
          Here is another one
        </MrbLink>
      </MrbCol>
    </>
  )
}
