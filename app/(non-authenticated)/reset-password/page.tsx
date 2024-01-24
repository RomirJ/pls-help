'use client'

import { RouterObject } from '@/core/router'
import { MrbCard, MrbCol, MrbImage, MrbLink, MrbRow } from '@/designSystem'
import { AuthenticationHook } from '@/domain/authentication'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ErrorAlert } from './components/ErrorAlert'
import { Form } from './components/Form'
import { MessageSuccess } from './components/MessageSuccess'

const Content = styled.div`
  width: 340px;
`

export default function ResetPasswordPage() {
  const [email, setEmail] = useState<string>()

  const { isLoading, isSuccess, sendEmail, errors } =
    AuthenticationHook.useSendResetPassword()

  const hasErrors = errors.length > 0

  useEffect(() => {
    if (isSuccess) {
      onSuccess()
    }
  }, [isSuccess])

  /* -------------------------------- HANDLERS -------------------------------- */

  const handleSubmit = (email: string) => {
    sendEmail(email)

    setEmail(email)
  }

  const onSuccess = async () => {}

  return (
    <MrbRow className="mrb-fill-xy" horizontal="center" vertical="center">
      <Content>
        <MrbCol gap={4}>
          <MrbRow horizontal="center">
            <MrbImage size="small" src="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/bpMb3l-filmi-LsLG" />
          </MrbRow>

          <MrbCard size="full-width">
            <MrbCol gap={4}>
              {isSuccess && <MessageSuccess email={email} />}

              {!isSuccess && (
                <Form isLoading={isLoading} onSubmit={handleSubmit} />
              )}

              {hasErrors && <ErrorAlert errors={errors} />}
            </MrbCol>
          </MrbCard>

          <MrbRow horizontal="center">
            <MrbLink to={RouterObject.route.LOGIN}>Login</MrbLink>
          </MrbRow>

          <MrbRow horizontal="center">
            <MrbLink to={RouterObject.route.REGISTER}>Register now</MrbLink>
          </MrbRow>
        </MrbCol>
      </Content>
    </MrbRow>
  )
}
