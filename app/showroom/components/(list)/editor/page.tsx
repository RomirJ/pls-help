'use client'

import { MrbAlert } from '@/designSystem'
import { MrbEditor } from '@/designSystem/components/atoms/MrbEditor'
import { useState } from 'react'

export default function DividerShow() {
  const [value, setValue] = useState()

  const handleChange = ({ value }) => {
    setValue(value)
  }

  return (
    <>
      <MrbAlert>{value}</MrbAlert>
      <MrbEditor value={value} onChange={handleChange} />
    </>
  )
}
