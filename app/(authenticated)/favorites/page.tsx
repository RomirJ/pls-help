'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbDescription, MrbButton, MrbCol, MrbEmptyState, MrbList, MrbLoader, MrbRow, MrbTypography, MrbDescriptionList } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Favorite, FavoriteApi } from '@/domain/favorite'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function FavoritesPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Favorite[]>([])

  useEffect(() => {
    if (userId) {
      FavoriteApi.findManyByUserId(userId, { includes: ['title'] })
        .then(favorites => {
          setItems(favorites)
          setLoading(false)
        })
        .catch(() => {
          toast.error('Failed to fetch favorites')
          setLoading(false)
        })
    }
  }, [userId])

  const handleRemoveFavorite = async (favoriteId: string) => {
    try {
      await FavoriteApi.deleteOne(favoriteId)
      setItems(prevItems => prevItems.filter(item => item.id !== favoriteId))
    } catch {
      toast.error('Failed to remove from favorites')
    }
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items?.length === 0 && (
            <MrbEmptyState>
              You don't have any favorites yet.
            </MrbEmptyState>
          )}
          <MrbList divider={true}>
            {items?.map(favorite => (
              <MrbList.Item
                key={favorite.id}
                onClick={() => {
                  router.push(`/title/${favorite.titleId}`)
                }}
              >
                <MrbRow gap={2} className="mrb-fill-x">
                  <MrbCol xs="fill">
                    <MrbTypography variant="h3">
                      {favorite.title?.name}
                    </MrbTypography>
                    <MrbDescriptionList orientation="horizontal">
                      <MrbTypography variant="secondary">
                        {favorite.title?.synopsis}
                      </MrbTypography>
                    </MrbDescriptionList>
                    <MrbRow horizontal="right" gap={1}>
                      <MrbButton
                        variant="danger"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleRemoveFavorite(favorite.id)
                        }}
                      >
                        Remove from Favorites
                      </MrbButton>
                    </MrbRow>
                  </MrbCol>
                </MrbRow>
              </MrbList.Item>
            ))}
          </MrbList>
        </>
      )}
    </PageLayout>
  )
}