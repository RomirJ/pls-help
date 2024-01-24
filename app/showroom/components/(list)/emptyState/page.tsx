'use client'

import { MrbButton, MrbIcon, MrbTypography } from '@/designSystem'
import { MrbEmptyState } from '@/designSystem/components/atoms/MrbEmptyState'

export default function EmptyStateShow() {
  const handleClick = () => {
    console.log('Clicked')
  }

  return (
    <>
      <MrbEmptyState className="m-1">
        <MrbTypography variant="primary">No item</MrbTypography>
        <MrbTypography variant="secondary">
          There is no items to display.
        </MrbTypography>
        <MrbButton variant="primary" size="small" onClick={() => handleClick()}>
          <MrbIcon name="add-line" /> New project
        </MrbButton>
      </MrbEmptyState>
    </>
  )
}
