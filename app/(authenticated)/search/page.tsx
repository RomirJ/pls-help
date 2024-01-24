'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbDescription, MrbEmptyState, MrbLink, MrbList, MrbLoader, MrbTypography, MrbDescriptionList } from '@/designSystem'
import { Title, TitleApi } from '@/domain/title'
import { Rating, RatingApi } from '@/domain/rating'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function SearchResultsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Title[]>([])

  useEffect(() => {
    if (params.query) {
      TitleApi.findMany({ filters: { name: params.query }, includes: ['ratings'] })
        .then(titles => {
          setItems(titles)
          setLoading(false)
        })
        .catch(error => {
          toast.error('Failed to fetch titles.')
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [params.query])

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items.length === 0 ? (
            <MrbEmptyState>
              No matches found. Try a new search with different keywords.
            </MrbEmptyState>
          ) : (
            <MrbList divider={false}>
              {items.map(item => (
                <MrbCard key={item.id} size="full-width" className="m-1">
                  <MrbCard.Header>
                    <MrbLink to={`/title/${item.id}`} variant="primary">
                      {item.name}
                    </MrbLink>
                  </MrbCard.Header>
                  <MrbCard.Body>
                    <MrbTypography variant="secondary">
                      {item.synopsis}
                    </MrbTypography>
                    <MrbDescriptionList>
                      <MrbDescription>
                        <MrbDescription.Label>Rating</MrbDescription.Label>
                        <MrbDescription.Value>
                          {item.ratings?.reduce((acc, rating) => acc + rating.score, 0) / (item.ratings?.length || 1)}
                        </MrbDescription.Value>
                      </MrbDescription>
                    </MrbDescriptionList>
                  </MrbCard.Body>
                </MrbCard>
              ))}
            </MrbList>
          )}
        </>
      )}
    </PageLayout>
  )
}