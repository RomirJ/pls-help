'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbEmptyState, MrbGrid, MrbGridItem, MrbImage, MrbLoader, MrbTypography } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Title, TitleApi } from '@/domain/title'

import { ViewingHistory, ViewingHistoryApi } from '@/domain/viewingHistory'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function CatalogPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Title[]>([])
  const [viewingHistory, setViewingHistory] = useState<ViewingHistory[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    async function fetchTitles() {
      try {
        const titles = await TitleApi.findMany({ includes: ['genre'] })
        setItems(titles)
        setLoading(false)
      } catch (error) {
        toast.error('Failed to fetch titles.')
        setLoading(false)
      }
    }

    async function fetchViewingHistory() {
      if (userId) {
        try {
          const history = await ViewingHistoryApi.findManyByUserId(userId, { includes: ['title'] })
          setViewingHistory(history)
        } catch (error) {
          toast.error('Failed to fetch viewing history.')
        }
      }
    }

    fetchTitles()
    fetchViewingHistory()
  }, [userId])

  useEffect(() => {
    if (searchQuery) {
      setLoading(true)
      TitleApi.findMany({ filters: { name: searchQuery }, includes: ['genre'] })
        .then((searchResults) => {
          setItems(searchResults)
          setLoading(false)
        })
        .catch(() => {
          toast.error('Failed to perform search.')
          setLoading(false)
        })
    }
  }, [searchQuery])

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
            {items?.map((item) => (
              <MrbGridItem xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                <MrbCard
                  onClick={() => router.push(`/title/${item.id}`)}
                >
                  <MrbCard.Body>
                    {/* Assuming a default image for genres */}
                    <MrbImage src="/assets/default-genre.png" size="medium" />
                    <MrbTypography variant="h3">{item.name}</MrbTypography>
                    <MrbTypography variant="caption">{item.synopsis}</MrbTypography>
                  </MrbCard.Body>
                  <MrbCard.Footer>
                    <MrbTypography variant="secondary">{item.genre?.name}</MrbTypography>
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