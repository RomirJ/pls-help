'use client'

import { MrbButton, MrbModal } from '@/designSystem'
import { useState } from 'react'

export default function ModalShow() {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
      <MrbButton onClick={() => setOpen(true)}>Open</MrbButton>
      <MrbModal isOpen={isOpen} onClose={() => setOpen(false)}>
        Fred Again Tiny Desk concert is pretty good.
      </MrbModal>
    </>
  )
}
