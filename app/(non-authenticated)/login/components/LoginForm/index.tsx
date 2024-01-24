import { MrbButton, MrbForm, MrbFormInputConfiguration } from '@/designSystem'

type Props = {
  isLoading: boolean
  onSubmit: (values: { email: string; password: string }) => void
}

export const LoginForm = ({ isLoading, onSubmit }: Props) => {
  const handleSubmit = values => {
    onSubmit(values)
  }

  const inputs: MrbFormInputConfiguration[] = [
    {
      type: 'text',
      key: 'email',
      label: 'Email',
      props: {
        type: 'email',
      },
    },
    {
      type: 'text',
      key: 'password',
      label: 'Password',
      props: {
        type: 'password',
      },
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
        Login
      </MrbButton>
    </MrbForm>
  )
}
