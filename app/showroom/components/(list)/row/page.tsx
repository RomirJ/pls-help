'use client'

import { MrbCol, MrbRow, MrbTypography, Theme } from '@/designSystem'

export default function RowShow() {
  return (
    <>
      <MrbRow gap={1}>
        <span className="p-1" style={{ background: Theme.ui_1 }}>
          Item 1
        </span>
        <span className="p-1" style={{ background: Theme.ui_2 }}>
          Item 2
        </span>
        <span className="p-1" style={{ background: Theme.ui_3 }}>
          Item 3
        </span>
      </MrbRow>
      <br />

      <MrbRow>
        <MrbCol xs="1">
          <MrbTypography variant="primary">Price</MrbTypography>
        </MrbCol>
        <MrbCol horizontal="right" xs="11">
          <MrbTypography variant="secondary">$90</MrbTypography>
        </MrbCol>
      </MrbRow>
      <MrbRow>
        <MrbCol xs="1">
          <MrbTypography variant="primary">Features</MrbTypography>
        </MrbCol>
        <MrbCol horizontal="right" xs="11">
          <MrbTypography variant="secondary">Feature 1</MrbTypography>
          <br />
          <MrbTypography variant="secondary">Feature 2</MrbTypography>
          <br />
          <MrbTypography variant="secondary">Feature 3</MrbTypography>
        </MrbCol>
      </MrbRow>
    </>
  )
}
