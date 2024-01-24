import { MrbButton, MrbForm, MrbFormInputConfiguration } from '@/designSystem'

type Props = {
  isLoading: boolean
  onSubmit: (values: { email: string; password: string }) => void
}

export const RegisterForm = ({ isLoading, onSubmit }: Props) => {
  const handleSubmit = values => {
    onSubmit(values)
  }

  const inputs: MrbFormInputConfiguration[] = [
    {
      key: 'email',
      type: 'text',
      label: 'Email',
      props: {
        type: 'email',
      },
    },
    {
      type: 'text',
      key: 'name',
      label: 'Name',
    },

{
      type: 'password',
      key: 'password',
      label: 'Password',
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
        Register
      </MrbButton>
    </MrbForm>
  )
}
