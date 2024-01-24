import { MrbAlert } from '@/designSystem'
import React from 'react'

type Props = {
  errors: string[]
}

export const ErrorAlert: React.FC<Props> = ({ errors }) => {
  return (
    <>
      {errors.length > 0 && (
        <MrbAlert variant="danger">
          {errors.map((error, errorIndex) => (
            <b key={errorIndex}>{error}</b>
          ))}
        </MrbAlert>
      )}
    </>
  )
}
