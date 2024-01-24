'use client'

import { RouterObject } from '@/core/router'
import { useCoreStore } from '@/core/store'
import {
  MrbAlert,
  MrbCard,
  MrbCol,
  MrbIcon,
  MrbImage,
  MrbLink,
  MrbRow,
  MrbToast,
} from '@/designSystem'
import { AuthenticationHook } from '@/domain/authentication'
import { useAuthentication } from '@/modules/authentication'
import { GoogleOauth } from '@/modules/googleOauth'
import { GoogleButton } from '@/modules/googleOauth/components/googleButton'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styled from 'styled-components'
import { ErrorAlert } from './components/ErrorAlert'
import { LoginForm } from './components/LoginForm'

const Content = styled.div`
  width: 340px;
`

export default function LoginPage() {
  const router = useRouter()
  const store = useCoreStore()
  const toast = MrbToast.useToast()
  const authentication = useAuthentication()

  const {
    login,
    isLoading: isLoadingLogin,
    isSuccess: isSuccessLogin,
    errors: errorsLogin,
  } = AuthenticationHook.useLogin()

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
    toast.error(`Could not login with Google`)
  }

  const onSuccess = async () => {
    try {
      router.push(RouterObject.route.HOME)
    } catch (error) {
      toast.error(`Something went wrong during the initialization`)
    }
  }

  /* -------------------------------- HANDLERS -------------------------------- */

  const handleSubmit = (values: { email: string; password: string }) => {
    login(values)
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
                <MrbRow className="mrb-fill-x ">
                  <GoogleButton
                    onSuccess={handleGoogleSuccess}
                    onError={onError}
                  />
                </MrbRow>
              )}

              <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />

              {hasErrors && <ErrorAlert errors={errors} />}

              <MrbLink to={RouterObject.route.RESET_PASSWORD}>
                Forgotten your password?
              </MrbLink>
            </MrbCol>
          </MrbCard>

          <MrbRow horizontal="center">
            <MrbLink variant="primary" to={RouterObject.route.REGISTER}>
              Register now
            </MrbLink>
          </MrbRow>

          <MrbRow horizontal="center">
            <MrbAlert className="mrb-fill-x">
              <span>Default user account</span>
              <MrbRow vertical="center" gap={2}>
                <MrbIcon name="user-fill" />
                <MrbCol xs="fill">test@test.com</MrbCol>
              </MrbRow>
              <MrbRow vertical="center" gap={2}>
                <MrbIcon name="key-fill" />
                <MrbCol xs="fill">password</MrbCol>
              </MrbRow>
            </MrbAlert>
          </MrbRow>
        </MrbCol>
      </Content>
    </MrbRow>
  )
}
