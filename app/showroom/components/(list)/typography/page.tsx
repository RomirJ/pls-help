'use client'

import { MrbCol, MrbTypography } from '@/designSystem'

export default function TypographyShow() {
  return (
    <>
      <MrbCol gap={1}>
        <MrbTypography variant="h1">Variant H1</MrbTypography>
        <MrbTypography variant="h2">Variant H2</MrbTypography>
        <MrbTypography variant="h3">Variant H3</MrbTypography>
        <MrbTypography variant="primary">Variant Primary</MrbTypography>
        <MrbTypography variant="secondary">Variant Secondary</MrbTypography>
        <MrbTypography variant="caption">Variant Caption</MrbTypography>

        <MrbTypography horizontal="left">Align left</MrbTypography>
        <MrbTypography horizontal="center">Align center</MrbTypography>
        <MrbTypography horizontal="right">Align right</MrbTypography>
      </MrbCol>
    </>
  )
}
