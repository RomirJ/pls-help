import {
  MrbButton,
  MrbForm,
  MrbFormInputConfiguration,
  MrbToast,
} from '@/designSystem'
import React from 'react'

type Props = {
  isLoading: boolean
  evSubmit: (email: string) => void
}

export const Form: React.FC<Props> = ({ isLoading, evSubmit }) => {
  const toast = MrbToast.useToast()

  const handleSubmit = values => {
    const { password, passwordConfirmation } = values

    if (password !== passwordConfirmation) {
      toast.error(`Password and confirmation must match.`)
      return
    }

    evSubmit(values.password)
  }

  const inputs: MrbFormInputConfiguration[] = [
    {
      type: 'text',
      key: 'password',
      label: 'Password',
      props: {
        type: 'password',
      },
    },
    {
      type: 'text',
      key: 'passwordConfirmation',
      label: 'Password Confirmation',
      props: {
        type: 'password',
      },
    },
  ]

  return (
    <div className="mrb-form">
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
    </div>
  )
}
