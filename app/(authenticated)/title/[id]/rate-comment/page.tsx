'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbButton, MrbLoader, MrbRow, MrbTypography, MrbForm } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Title, TitleApi } from '@/domain/title'
import { Rating, RatingApi } from '@/domain/rating'
import { Comment, CommentApi } from '@/domain/comment'
import { Favorite, FavoriteApi } from '@/domain/favorite'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function TitleRatingandCommentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [title, setTitle] = useState<Title | null>(null)

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const titleDetails = await TitleApi.findOne(params.id)
        setTitle(titleDetails)
        setLoading(false)
      } catch (error) {
        toast.error('Error fetching title details')
        setLoading(false)
      }
    }
    fetchTitle()
  }, [params.id])

  const handleRatingSubmit = async (values: any) => {
    if (userId) {
      try {
        await RatingApi.createOneByUserId(userId, {
          score: values.rating,
          titleId: params.id,
        })
        toast.success('Rating submitted successfully')
      } catch (error) {
        toast.error('Error submitting rating')
      }
    }
  }

  const handleCommentSubmit = async (values: any) => {
    if (userId) {
      try {
        await CommentApi.createOneByUserId(userId, {
          content: values.comment,
          titleId: params.id,
        })
        toast.success('Comment submitted successfully')
      } catch (error) {
        toast.error('Error submitting comment')
      }
    }
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && title && (
        <MrbCard>
          <MrbCard.Body>
            <MrbRow horizontal="center">
              <MrbTypography variant="h3">{title.name}</MrbTypography>
            </MrbRow>
            <MrbForm
              onSubmit={handleRatingSubmit}
              inputs={[
                {
                  key: 'rating',
                  type: 'number',
                  label: 'Rating (1-5)',
                },
              ]}
            >
              <MrbButton type="submit">Submit Rating</MrbButton>
            </MrbForm>
            <MrbForm
              onSubmit={handleCommentSubmit}
              inputs={[
                {
                  key: 'comment',
                  type: 'textarea',
                  label: 'Comment',
                },
              ]}
            >
              <MrbButton type="submit">Submit Comment</MrbButton>
            </MrbForm>
          </MrbCard.Body>
          <MrbCard.Footer>
            <MrbRow horizontal="right" gap={1}>
              <MrbButton onClick={() => router.push(`/title/${params.id}`)}>
                Title Details
              </MrbButton>
              <MrbButton onClick={() => router.push('/catalog')}>
                Catalog
              </MrbButton>
              <MrbButton onClick={() => router.push('/favorites')}>
                Favorites
              </MrbButton>
            </MrbRow>
          </MrbCard.Footer>
        </MrbCard>
      )}
    </PageLayout>
  )
}