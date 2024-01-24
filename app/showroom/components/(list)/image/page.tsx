'use client'

import { MrbCol, MrbImage } from '@/designSystem'

export default function ImageShow() {
  const url =
    'https://emporiosurfaces.com/wp-content/uploads/diesel-liquid-green-f1-swatch-500x500.jpeg'

  return (
    <>
      <MrbCol gap={1}>
        <p>Small</p>
        <MrbImage src={url} size="small" />
        <p>Medium</p>
        <MrbImage src={url} size="medium" />
        <p>Large</p>
        <MrbImage src={url} size="large" />
        <p>Full width</p>
        <MrbImage src={url} size="fill" />
      </MrbCol>
    </>
  )
}
