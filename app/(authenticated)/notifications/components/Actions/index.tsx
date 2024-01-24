import { MrbButton, MrbRow } from '@/designSystem'
import React, { MouseEvent } from 'react'

type Props = {
  canClearAll: boolean
  isLoadingClearAll: boolean
  onClearAll: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Actions: React.FC<Props> = ({
  canClearAll,
  onClearAll,
  isLoadingClearAll,
}) => {
  return (
    <>
      <MrbRow className="mrb-fill-flex" horizontal="right" vertical="center">
        {canClearAll && (
          <MrbButton onClick={onClearAll} isLoading={isLoadingClearAll}>
            Clear All
          </MrbButton>
        )}
      </MrbRow>
    </>
  )
}
