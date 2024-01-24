'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbDescription, MrbButton, MrbLoader, MrbRow, MrbTypography, MrbDescriptionList } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Genre, GenreApi } from '@/domain/genre'
import { Title, TitleApi } from '@/domain/title'

import { Comment, CommentApi } from '@/domain/comment'
import { Favorite, FavoriteApi } from '@/domain/favorite'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function TitleDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [item, setItem] = useState<Title | null>(null)

  useEffect(() => {
    async function fetchTitleDetails() {
      try {
        const titleDetails = await TitleApi.findOne(params.id, {
          includes: ['genre', 'ratings', 'comments'],
        })
        setItem(titleDetails)
      } catch (error) {
        console.error('Failed to fetch title details:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchTitleDetails()
    }
  }, [params.id])

  const handleAddToFavorites = async () => {
    if (userId && item) {
      try {
        await FavoriteApi.createOneByUserId(userId, { titleId: item.id })
        toast.success('Added to favorites successfully!')
      } catch (error) {
        console.error('Failed to add to favorites:', error)
      }
    }
  }

  const handleRateAndComment = () => {
    router.push(`/title/${params.id}/rate-comment`)
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && item && (
        <MrbCard>
          <MrbCard.Body>
            <MrbRow horizontal="center">
              <MrbTypography variant="h3">{item.name}</MrbTypography>
            </MrbRow>
            <MrbDescriptionList>
              <MrbDescription>
                <MrbDescription.Label>Synopsis</MrbDescription.Label>
                <MrbDescription.Value>{item.synopsis}</MrbDescription.Value>
              </MrbDescription>
              <MrbDescription>
                <MrbDescription.Label>Genre</MrbDescription.Label>
                <MrbDescription.Value>{item.genre?.name}</MrbDescription.Value>
              </MrbDescription>
            </MrbDescriptionList>
          </MrbCard.Body>
          <MrbCard.Footer>
            <MrbRow horizontal="right" gap={1}>
              <MrbButton onClick={handleAddToFavorites}>Add to Favorites</MrbButton>
              <MrbButton onClick={handleRateAndComment}>Rate & Comment</MrbButton>
            </MrbRow>
          </MrbCard.Footer>
        </MrbCard>
      )}
    </PageLayout>
  )
}