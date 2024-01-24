'use client'

import { RouterObject } from '@/core/router'
import { useCoreStore } from '@/core/store'
import {
  MrbCard,
  MrbCol,
  MrbImage,
  MrbLink,
  MrbRow,
  MrbToast,
} from '@/designSystem'
import { AuthenticationHook } from '@/domain/authentication'
import { User, UserApi } from '@/domain/user'
import { useAuthentication } from '@/modules/authentication'
import { GlobalService } from '@/modules/global'
import { GoogleOauth } from '@/modules/googleOauth'
import { GoogleButton } from '@/modules/googleOauth/components/googleButton'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styled from 'styled-components'
import { ErrorAlert } from './components/ErrorAlert'
import { RegisterForm } from './components/RegisterForm'

const Content = styled.div`
  width: 340px;
`

export default function RegisterPage() {
  const router = useRouter()
  const store = useCoreStore()
  const toast = MrbToast.useToast()
  const authentication = useAuthentication()

  const {
    register,
    isLoading: isLoadingLogin,
    isSuccess: isSuccessLogin,
    errors: errorsLogin,
  } = AuthenticationHook.useRegister()

  const {
    googleCallback,
    isLoading: isLoadingGoogle,
    isSuccess: isSuccessGoogle,
    errors: errorsGoogle,
  } = AuthenticationHook.useGoogle()

  const isSuccess = isSuccessLogin || isSuccessGoogle
  const isLoading = isLoadingLogin || isLoadingGoogle || isSuccess
  const errors = [...errorsLogin, ...errorsGoogle]
  const hasErrors = errors.length > 0

  useEffect(() => {
    if (isSuccess) {
      onSuccess()
    }
  }, [isSuccess])

  const onError = () => {
    toast.error(`Could not register with Google`)
  }

  const onSuccess = async () => {
    try {
      const user = await UserApi.findMe()

      authentication.login(user)

      await GlobalService.initialiseStore({ store, toast })

      router.push(RouterObject.route.HOME)
    } catch (error) {
      toast.error(`Something went wrong during the initialization`)
    }
  }

  /* -------------------------------- HANDLERS -------------------------------- */

  const handleSubmit = (values: Partial<User>) => {
    register(values)
  }

  const handleGoogleSuccess = (response: { credential: string }) => {
    googleCallback(response)
  }

  return (
    <MrbRow className="mrb-fill-xy" horizontal="center" vertical="center">
      <Content>
        <MrbCol gap={4}>
          <MrbRow horizontal="center">
            <MrbImage size="small" src="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/bpMb3l-filmi-LsLG" />
          </MrbRow>

          <MrbCard size="full-width">
            <MrbCol gap={4}>
              {GoogleOauth.isActive() && (
                <MrbRow className="mrb-fill-x mb-5">
                  <GoogleButton
                    onSuccess={handleGoogleSuccess}
                    onError={onError}
                  />
                </MrbRow>
              )}

              <RegisterForm isLoading={isLoading} onSubmit={handleSubmit} />

              {hasErrors && <ErrorAlert errors={errors} />}
            </MrbCol>
          </MrbCard>
          <MrbRow horizontal="center">
            <MrbLink to={RouterObject.route.LOGIN}>Login</MrbLink>
          </MrbRow>
        </MrbCol>
      </Content>
    </MrbRow>
  )
}
