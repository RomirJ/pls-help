'use client'

import { MrbButton, MrbDivider, MrbIcon } from '@/designSystem'
import { MrbDropdown } from '@/designSystem/components/atoms/MrbDropdown'
export default function ButtonShow() {
  const content = <div>hello</div>
  return (
    <>
      <MrbDropdown
        label={<MrbButton variant="primary">Dropdown button</MrbButton>}
      >
        <MrbButton variant="secondary" size="small">
          <MrbIcon name="edit-line" /> Rename
        </MrbButton>
        <MrbButton variant="secondary" size="small">
          <MrbIcon name="save-line" /> Save
        </MrbButton>

        <MrbDivider />
        <MrbButton variant="secondary" size="small">
          <MrbIcon name="close-line" /> Delete
        </MrbButton>
      </MrbDropdown>
    </>
  )
}
