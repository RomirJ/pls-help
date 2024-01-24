'use client'

import { RouterObject } from '@/core/router'
import {
  MrbAvatar,
  MrbButton,
  MrbCard,
  MrbCol,
  MrbRow,
  MrbToast,
  MrbTypography,
} from '@/designSystem'
import { AuthenticationApi } from '@/domain'
import { User, UserApi } from '@/domain/user'
import { PageLayout } from '@/layouts/Page.layout'
import { useAuthentication } from '@/modules/authentication'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UserForm } from './components/userForm'

export default function ProfilePage() {
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const router = useRouter()

  const user = authentication.user as User

  const [isLoading, setLoading] = useState(false)
  const [isLoadingLogout, setLoadingLogout] = useState(false)

  const handleSubmit = async (values: Partial<User>) => {
    setLoading(true)

    try {
      const userUpdated = await UserApi.updateOne(user.id, values)
      authentication.setUser(userUpdated)
    } catch (error) {
      toast.error(`Could not save information`)
    }

    setLoading(false)
  }

  const handleClickLogout = async () => {
    setLoadingLogout(true)

    try {
      await AuthenticationApi.logout(document)
      authentication.logout()

      router.push(RouterObject.route.LOGIN)
    } catch (error) {
      toast.error(`Could not logout`)
      setLoadingLogout(false)
    }
  }

  return (
    <PageLayout layout="super-narrow">
      <MrbRow horizontal="between" vertical="center">
        <MrbTypography variant="h2">Profile</MrbTypography>
        <div>
          <MrbButton onClick={handleClickLogout} isLoading={isLoadingLogout}>
            Logout
          </MrbButton>
        </div>
      </MrbRow>

      <MrbCard className="mb-5">
        <MrbCard.Body>
          <MrbCol gap={3}>
            <MrbAvatar src={user.pictureUrl}>{user.name}</MrbAvatar>
            <UserForm
              user={user}
              isLoading={isLoading}
              isDisabled={isLoadingLogout}
              onSubmit={handleSubmit}
            />
          </MrbCol>
        </MrbCard.Body>
      </MrbCard>
    </PageLayout>
  )
}
