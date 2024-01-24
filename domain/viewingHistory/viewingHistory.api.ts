import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ViewingHistory } from './viewingHistory.model'

export namespace ViewingHistoryApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<ViewingHistory>,
  ): Promise<ViewingHistory[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/viewingHistorys${buildOptions}`)
  }

  export function findOne(
    viewingHistoryId: string,
    queryOptions?: ApiHelper.QueryOptions<ViewingHistory>,
  ): Promise<ViewingHistory> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/viewingHistorys/${viewingHistoryId}${buildOptions}`,
    )
  }

  export function createOne(
    viewingHistory: Partial<ViewingHistory>,
  ): Promise<ViewingHistory> {
    return HttpService.api.post(`/v1/viewingHistorys`, viewingHistory)
  }

  export function updateOne(
    viewingHistoryId: string,
    values: Partial<ViewingHistory>,
  ): Promise<ViewingHistory> {
    return HttpService.api.patch(
      `/v1/viewingHistorys/${viewingHistoryId}`,
      values,
    )
  }

  export function deleteOne(viewingHistoryId: string): Promise<void> {
    return HttpService.api.delete(`/v1/viewingHistorys/${viewingHistoryId}`)
  }

export function findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<ViewingHistory>,
  ): Promise<ViewingHistory[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/viewingHistorys${buildOptions}`,
    )
  }

  export function createOneByUserId(
    userId: string,
    values: Partial<ViewingHistory>,
  ): Promise<ViewingHistory> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/viewingHistorys`,
      values,
    )
  }

export function findManyByTitleId(
    titleId: string,
    queryOptions?: ApiHelper.QueryOptions<ViewingHistory>,
  ): Promise<ViewingHistory[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/titles/title/${titleId}/viewingHistorys${buildOptions}`,
    )
  }

  export function createOneByTitleId(
    titleId: string,
    values: Partial<ViewingHistory>,
  ): Promise<ViewingHistory> {
    return HttpService.api.post(
      `/v1/titles/title/${titleId}/viewingHistorys`,
      values,
    )
  }

}
