'use client'

import { MrbCol, MrbIcon, MrbRow, MrbTypography } from '@/designSystem'

export default function IconShow() {
  const names = ['heart-line', 'database', 'bluetooth-connect-fill']

  return (
    <>
      {names.map((name, index) => (
        <MrbRow key={index} gap={2} vertical="center">
          <MrbCol>
            <MrbTypography variant="h1">
              <MrbIcon name={name} />
            </MrbTypography>
          </MrbCol>
          <MrbCol>
            <MrbTypography variant="h2">
              <MrbIcon name={name} />
            </MrbTypography>
          </MrbCol>
          <MrbCol>
            <MrbTypography variant="h3">
              <MrbIcon name={name} />
            </MrbTypography>
          </MrbCol>
          <MrbCol>
            <MrbTypography>
              <MrbIcon name={name} isRotating />
            </MrbTypography>
          </MrbCol>
        </MrbRow>
      ))}
    </>
  )
}
