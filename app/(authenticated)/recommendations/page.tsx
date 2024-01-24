'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbButton, MrbEmptyState, MrbGrid, MrbGridItem, MrbImage, MrbLoader, MrbTypography } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Favorite, FavoriteApi } from '@/domain/favorite'
import { ViewingHistory, ViewingHistoryApi } from '@/domain/viewingHistory'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function RecommendationsPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    if (userId) {
      UserApi.findOne(userId, { includes: ['viewingHistorys', 'ratings'] })
        .then(user => {
          setItems(user.viewingHistorys.map(vh => vh.title).concat(user.ratings.map(r => r.title)))
          setLoading(false)
        })
        .catch(error => {
          toast.error('Failed to fetch recommendations')
          setLoading(false)
        })
    }
  }, [userId])

  const handleCardClick = (titleId: string) => {
    router.push(`/title/${titleId}`)
  }

  const addToFavorites = async (titleId: string) => {
    if (userId) {
      try {
        await FavoriteApi.createOneByUserId(userId, { titleId })
        toast.success('Added to Favorites')
      } catch (error) {
        toast.error('Failed to add to Favorites')
      }
    }
  }

  const addToWatchLater = async (titleId: string) => {
    if (userId) {
      try {
        await ViewingHistoryApi.createOneByUserId(userId, { titleId })
        toast.success('Added to Watch Later')
      } catch (error) {
        toast.error('Failed to add to Watch Later')
      }
    }
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items?.length === 0 && (
            <MrbEmptyState>
              There are no items to display.
            </MrbEmptyState>
          )}
          <MrbGrid gap={2}>
            {items?.map(item => (
              <MrbGridItem xs={12} sm={6} md={4} lg={3} xl={3} key={item.id}>
                <MrbCard
                  onClick={() => handleCardClick(item.id)}
                >
                  <MrbCard.Body>
                    <MrbImage src={item.pictureUrl} size="fill" />
                    <MrbTypography variant="h3">{item.name}</MrbTypography>
                    <MrbTypography>{item.synopsis}</MrbTypography>
                  </MrbCard.Body>
                  <MrbCard.Footer>
                    <MrbButton variant="primary" size="small" onClick={() => addToFavorites(item.id)}>
                      Add to Favorites
                    </MrbButton>
                    <MrbButton variant="default" size="small" onClick={() => addToWatchLater(item.id)}>
                      Watch Later
                    </MrbButton>
                  </MrbCard.Footer>
                </MrbCard>
              </MrbGridItem>
            ))}
          </MrbGrid>
        </>
      )}
    </PageLayout>
  )
}