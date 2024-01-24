'use client'

import { MrbCol, MrbLoader } from '@/designSystem'

export default function LoaderShow() {
  return (
    <>
      <MrbCol gap={1}>
        <p>Small</p>
        <MrbLoader size="small" />
        <p>Medium</p>
        <MrbLoader size="medium" />
        <p>Large</p>
        <MrbLoader size="large" />
        <p>Expanded</p>
        <MrbLoader isExpanded />
      </MrbCol>
    </>
  )
}
