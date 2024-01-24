'use client'

import { MrbCol, MrbTag } from '@/designSystem'

export default function TagShow() {
  return (
    <>
      <MrbCol gap={1}>
        <div>
          <MrbTag>default</MrbTag>
        </div>
        <div>
          <MrbTag variant="primary">primary</MrbTag>
        </div>
        <div>
          <MrbTag variant="success">success</MrbTag>
        </div>
        <div>
          <MrbTag variant="warning">warning</MrbTag>
        </div>
        <div>
          <MrbTag variant="danger">danger</MrbTag>
        </div>
        <div>
          <MrbTag variant="secondary">secondary</MrbTag>
        </div>
      </MrbCol>
    </>
  )
}
