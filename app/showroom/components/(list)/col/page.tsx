'use client'

import { MrbCard, MrbCol, MrbRow, MrbTypography, Theme } from '@/designSystem'

export default function ColShow() {
  return (
    <>
      <MrbCol gap={1}>
        <span className="p-1" style={{ background: Theme.ui_1 }}>
          Item 1
        </span>
        <span className="p-1" style={{ background: Theme.ui_2 }}>
          Item 2
        </span>
        <span className="p-1" style={{ background: Theme.ui_3 }}>
          Item 3
        </span>
      </MrbCol>
      <br />
      <MrbCard size="full-width">
        <MrbRow>
          <MrbCol gap={1} xs="4">
            <MrbTypography variant="primary">Item 1</MrbTypography>
            <MrbTypography variant="secondary">Details 1</MrbTypography>
          </MrbCol>
          <MrbCol gap={1} xs="4">
            <MrbTypography variant="primary">Item 1</MrbTypography>
            <MrbTypography variant="secondary">Details 1</MrbTypography>
          </MrbCol>
          <MrbCol gap={1} xs="4">
            <MrbTypography variant="primary">Item 1</MrbTypography>
            <MrbTypography variant="secondary">Details 1</MrbTypography>
          </MrbCol>
        </MrbRow>
      </MrbCard>
    </>
  )
}
