'use client'

import { MrbAvatar, MrbCol, MrbRow, MrbTypography } from '@/designSystem'
import { MrbList } from '@/designSystem/components/atoms/MrbList'

export default function ListShow() {
  const handleClick = () => {
    console.log('Clicked')
  }

  return (
    <>
      <MrbList>
        <MrbList.Item onClick={handleClick}>
          <MrbRow gap={2} vertical="center" className="mrb-fill-x">
            <MrbAvatar>Akainu</MrbAvatar>
            <MrbCol xs="fill">
              <MrbTypography>Akainu</MrbTypography>
              <MrbTypography variant="secondary">Lava</MrbTypography>
            </MrbCol>
          </MrbRow>
        </MrbList.Item>

        <MrbList.Item onClick={handleClick}>
          <MrbRow gap={2} vertical="center" className="mrb-fill-x">
            <MrbAvatar>Aokiji</MrbAvatar>
            <MrbCol xs="fill">
              <MrbTypography>Aokiji</MrbTypography>
              <MrbTypography variant="secondary">Ice</MrbTypography>
            </MrbCol>
          </MrbRow>
        </MrbList.Item>
      </MrbList>
    </>
  )
}
