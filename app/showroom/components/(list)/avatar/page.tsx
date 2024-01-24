'use client'

import { MrbCol } from '@/designSystem'
import { MrbAvatar } from '@/designSystem/components/atoms/MrbAvatar'
import { useState } from 'react'

export default function AvatarShow() {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <MrbCol gap={1}>
      <MrbAvatar src="https://hips.hearstapps.com/hmg-prod/images/cat-instagram-captions-64ff2dfa47e9a.jpg?crop=1xw:0.84375xh;center,top">
        Example
      </MrbAvatar>
      <MrbAvatar color="blue">blue</MrbAvatar>
      <MrbAvatar color="green">green</MrbAvatar>
      <MrbAvatar color="purple">purple</MrbAvatar>
      <MrbAvatar color="orange">orange</MrbAvatar>
      <MrbAvatar color="pink">pink</MrbAvatar>
      <MrbAvatar color="grey">grey</MrbAvatar>
      <MrbAvatar color="red">red</MrbAvatar>
      <MrbAvatar color="yellow">yellow</MrbAvatar>
      <MrbAvatar color="lightgreen">lightgreen</MrbAvatar>
      <MrbAvatar color="cyan">cyan</MrbAvatar>
      <MrbAvatar color="lavender">lavender</MrbAvatar>
      <MrbAvatar color="salmon">salmon</MrbAvatar>
      <MrbAvatar color="darkgrey">darkgrey</MrbAvatar>
      <MrbAvatar color="darkblue">darkblue</MrbAvatar>
    </MrbCol>
  )
}
