import { MrbButton, MrbForm, MrbFormInputConfiguration } from '@/designSystem'
import React from 'react'

type Props = {
  isLoading: boolean
  onSubmit: (email: string) => void
}

export const Form: React.FC<Props> = ({ isLoading, onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values.email)
  }

  const inputs: MrbFormInputConfiguration[] = [
    {
      type: 'email',
      key: 'email',
      label: 'Email',
    },
  ]

  return (
    <MrbForm
      inputs={inputs}
      onSubmit={handleSubmit}
      settings={{ emitStyle: 'onChange' }}
    >
      <MrbButton
        isLoading={isLoading}
        variant="primary"
        type="submit"
        fullWidth
      >
        Reset Password
      </MrbButton>
    </MrbForm>
  )
}
