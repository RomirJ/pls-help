'use client'

import { MrbStepper } from '@/designSystem'
import { useState } from 'react'

export default function StepperShow() {
  const steps = ['Step 1', 'Step 2', 'Step 3']
  const [index, setIndex] = useState(0)

  const handleClick = (index: number) => {
    setIndex(index)
  }

  return (
    <>
      <MrbStepper steps={steps} index={index} onClickStep={handleClick} />
    </>
  )
}
