'use client'

import { MrbButton, MrbCol, MrbToast } from '@/designSystem'

export default function ToastShow() {
  const toast = MrbToast.useToast()

  return (
    <>
      <MrbCol gap={1}>
        <div>
          <MrbButton onClick={() => toast.info('Write it.')}>Info</MrbButton>
        </div>

        <div>
          <MrbButton onClick={() => toast.success('Save it.')}>
            Success
          </MrbButton>
        </div>

        <div>
          <MrbButton onClick={() => toast.error('Load it.')}>Error</MrbButton>
        </div>

        <div>
          <MrbButton onClick={() => toast.warning('Curve it.')}>
            Warning
          </MrbButton>
        </div>
      </MrbCol>
    </>
  )
}
