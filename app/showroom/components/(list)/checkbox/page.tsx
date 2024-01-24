'use client'

import { MrbCheckbox, MrbCol, MrbTypography } from '@/designSystem'
import { useState } from 'react'

export default function CheckboxShow() {
  const [value, setValue] = useState(false)

  const handleChange = ({ value }) => {
    setValue(value)
  }

  return (
    <>
      <MrbCol gap={2}>
        <MrbTypography>{value ? 'Checked' : 'Not Checked'}</MrbTypography>
        <MrbCheckbox onChange={handleChange}>You can tick me</MrbCheckbox>
        <MrbCheckbox disabled onChange={() => console.log('impossible')}>
          You can&apos;t tick me
        </MrbCheckbox>
      </MrbCol>
    </>
  )
}
