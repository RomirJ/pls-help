'use client'

import { MrbCol, MrbRow } from '@/designSystem'
import { HelperChildren } from '@/designSystem/helpers/children'

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  const { childrenFound, childrenRemaining } = HelperChildren.findAndSeparate(
    children,
    ['Leftbar'],
  )

  return (
    <>
      <MrbRow style={{ flex: 1, overflow: 'hidden' }}>
        {childrenFound['Leftbar']}
        <MrbCol
          style={{ overflowY: 'auto', height: '100%' }}
          className="mrb-fill-flex p-5"
        >
          {childrenRemaining}
        </MrbCol>
      </MrbRow>
    </>
  )
}
