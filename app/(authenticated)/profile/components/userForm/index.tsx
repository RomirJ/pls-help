import {
  MrbButton,
  MrbForm,
  MrbFormInputConfiguration,
  MrbRow,
} from '@/designSystem'
import { User } from '@/domain/user'

const formConfiguration: MrbFormInputConfiguration[] = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'email',
    label: 'Email',
    props: {
      type: 'email',
    },
  },
  {
    key: 'pictureUrl',
    label: 'Profile Picture',
    isOptional: true,
  },
]

type Props = {
  user: User
  isLoading: boolean
  isDisabled: boolean
  onSubmit: (user: Partial<User>) => void
}

export const UserForm: React.FC<Props> = ({
  user,
  isLoading,
  isDisabled,
  onSubmit,
}: Props) => {
  const handleSubmit = (values: Partial<User>) => {
    onSubmit(values)
  }

  return (
    <MrbForm
      defaultValues={user}
      inputs={formConfiguration}
      onSubmit={handleSubmit}
    >
      <MrbRow horizontal="right">
        <MrbButton
          isLoading={isLoading}
          disabled={isDisabled}
          variant="primary"
          type="submit"
        >
          Save
        </MrbButton>
      </MrbRow>
    </MrbForm>
  )
}
