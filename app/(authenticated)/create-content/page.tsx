'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbButton, MrbTypography, MrbForm } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Title, TitleApi } from '@/domain/title'

import { Content, ContentApi } from '@/domain/content'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function UserContentCreationPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (values) => {
    if (!userId) {
      toast.error('You must be logged in to create content.')
      return
    }

    setLoading(true)
    try {
      await ContentApi.createOneByUserId(userId, {
        title: values.title,
        description: values.description,
      })
      toast.success('Content created successfully!')
      setLoading(false)
      router.push('/catalog')
    } catch (error) {
      toast.error('Failed to create content.')
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <MrbTypography variant="h1">Create Your Content</MrbTypography>
      <MrbCard size="full-width" className="m-2">
        <MrbCard.Body>
          <MrbForm
            onSubmit={handleSubmit}
            inputs={[
              {
                key: 'title',
                type: 'text',
                label: 'Title',
              },
              {
                key: 'description',
                type: 'textarea',
                label: 'Description',
              },
            ]}
          >
            <MrbButton variant="primary" type="submit" isLoading={isLoading}>
              Create
            </MrbButton>
          </MrbForm>
        </MrbCard.Body>
      </MrbCard>
    </PageLayout>
  )
}