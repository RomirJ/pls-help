'use client'

import { MrbButton, MrbCol, MrbTooltip } from '@/designSystem'

export default function TooltipShow() {
  return (
    <MrbCol gap={2}>
      <MrbTooltip placement="top" content="Top">
        <MrbButton variant="primary">Top</MrbButton>
      </MrbTooltip>
      <MrbTooltip placement="bottom" content="Bottom">
        <MrbButton variant="primary">Bottom</MrbButton>
      </MrbTooltip>
      <MrbTooltip placement="left" content="Left">
        <MrbButton variant="primary">Left</MrbButton>
      </MrbTooltip>
      <MrbTooltip placement="right" content="Right">
        <MrbButton variant="primary">Right</MrbButton>
      </MrbTooltip>
    </MrbCol>
  )
}
