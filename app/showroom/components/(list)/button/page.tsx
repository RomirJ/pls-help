'use client'

import { MrbButton, MrbCol } from '@/designSystem'
export default function ButtonShow() {
  const content = <div>hello</div>
  return (
    <>
      <MrbCol gap={1}>
        <div>
          <MrbButton>Default</MrbButton>
        </div>
        <div>
          <MrbButton variant="primary">Primary</MrbButton>
        </div>
        <div>
          <MrbButton variant="secondary">Secondary</MrbButton>
        </div>
        <div>
          <MrbButton variant="danger">Danger</MrbButton>
        </div>
        <div>
          <MrbButton variant="warning">Warning</MrbButton>
        </div>
        <div>
          <MrbButton variant="success">Success</MrbButton>
        </div>
        <div>
          <MrbButton disabled>Disabled</MrbButton>
        </div>
        <div>
          <MrbButton isLoading>Loading</MrbButton>
        </div>
        <div>
          <MrbButton size="small">Small</MrbButton>
        </div>
        <div>
          <MrbButton size="medium">Medium</MrbButton>
        </div>
        <div>
          <MrbButton size="large">Large</MrbButton>
        </div>
        <div>
          <MrbButton noPadding>No padding</MrbButton>
        </div>
        <div>
          <MrbButton fullWidth>Full Width</MrbButton>
        </div>
      </MrbCol>
    </>
  )
}
