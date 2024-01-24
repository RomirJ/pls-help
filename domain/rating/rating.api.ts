import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Rating } from './rating.model'

export namespace RatingApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Rating>,
  ): Promise<Rating[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/ratings${buildOptions}`)
  }

  export function findOne(
    ratingId: string,
    queryOptions?: ApiHelper.QueryOptions<Rating>,
  ): Promise<Rating> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/ratings/${ratingId}${buildOptions}`,
    )
  }

  export function createOne(
    rating: Partial<Rating>,
  ): Promise<Rating> {
    return HttpService.api.post(`/v1/ratings`, rating)
  }

  export function updateOne(
    ratingId: string,
    values: Partial<Rating>,
  ): Promise<Rating> {
    return HttpService.api.patch(
      `/v1/ratings/${ratingId}`,
      values,
    )
  }

  export function deleteOne(ratingId: string): Promise<void> {
    return HttpService.api.delete(`/v1/ratings/${ratingId}`)
  }

export function findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Rating>,
  ): Promise<Rating[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/ratings${buildOptions}`,
    )
  }

  export function createOneByUserId(
    userId: string,
    values: Partial<Rating>,
  ): Promise<Rating> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/ratings`,
      values,
    )
  }

export function findManyByTitleId(
    titleId: string,
    queryOptions?: ApiHelper.QueryOptions<Rating>,
  ): Promise<Rating[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/titles/title/${titleId}/ratings${buildOptions}`,
    )
  }

  export function createOneByTitleId(
    titleId: string,
    values: Partial<Rating>,
  ): Promise<Rating> {
    return HttpService.api.post(
      `/v1/titles/title/${titleId}/ratings`,
      values,
    )
  }

}
