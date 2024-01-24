'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCol, MrbEmptyState, MrbLink, MrbList, MrbLoader, MrbRow, MrbTypography } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { ViewingHistory, ViewingHistoryApi } from '@/domain/viewingHistory'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function ViewingHistoryPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<ViewingHistory[]>([])

  useEffect(() => {
    if (userId) {
      ViewingHistoryApi.findManyByUserId(userId, { includes: ['title'] })
        .then((viewingHistory) => {
          setItems(viewingHistory)
          setLoading(false)
        })
        .catch((error) => {
          toast.error('Failed to fetch viewing history.')
          setLoading(false)
        })
    }
  }, [userId])

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items?.length === 0 && (
            <MrbEmptyState>
              You haven't watched anything yet.
            </MrbEmptyState>
          )}
          <MrbList divider={true}>
            {items?.map((item) => (
              <MrbList.Item
                key={item.id}
                onClick={() => {
                  router.push(`/title/${item.titleId}`)
                }}
              >
                <MrbRow gap={2} className="mrb-fill-x">
                  <MrbCol xs="fill">
                    <MrbLink to={`/title/${item.titleId}`} variant="primary">
                      <MrbTypography variant="h3">
                        {item.title?.name}
                      </MrbTypography>
                    </MrbLink>
                    <MrbTypography variant="secondary">
                      Watched on: {DateLibrary.toHuman(item.dateCreated)}
                    </MrbTypography>
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