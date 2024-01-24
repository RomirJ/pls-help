'use client'

import { RouterObject } from '@/core/router'
import { MrbCard, MrbCol, MrbLink, MrbRow, MrbTypography } from '@/designSystem'
import { AuthenticationHook } from '@/domain/authentication'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import styled from 'styled-components'
import { ErrorAlert } from './components/ErrorAlert'
import { Form } from './components/form'
import { MessageSuccess } from './components/messageSuccess'

const Content = styled.div`
  width: 340px;
`

export default function ResetPasswordTokenPage() {
  const { token } = useParams<{ token: string }>()

  const { isLoading, isSuccess, reset, errors } =
    AuthenticationHook.useResetPassword()

  const hasErrors = errors.length > 0

  useEffect(() => {
    if (isSuccess) {
      onSuccess()
    }
  }, [isSuccess])

  const handleSubmit = (password: string) => {
    reset(token, password)
  }

  const onSuccess = async () => {}

  return (
    <MrbRow className="mrb-fill-xy" horizontal="center" vertical="center">
      <Content>
        <MrbCol gap={4}>
          <MrbTypography horizontal="center" variant="h1">
            __application.name__
          </MrbTypography>

          <MrbCard size="full-width">
            <MrbCol gap={4}>
              {isSuccess && <MessageSuccess />}

              {!isSuccess && (
                <Form isLoading={isLoading} evSubmit={handleSubmit} />
              )}

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
