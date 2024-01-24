import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Title } from './title.model'

export namespace TitleApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Title>,
  ): Promise<Title[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/titles${buildOptions}`)
  }

  export function findOne(
    titleId: string,
    queryOptions?: ApiHelper.QueryOptions<Title>,
  ): Promise<Title> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/titles/${titleId}${buildOptions}`,
    )
  }

  export function createOne(
    title: Partial<Title>,
  ): Promise<Title> {
    return HttpService.api.post(`/v1/titles`, title)
  }

  export function updateOne(
    titleId: string,
    values: Partial<Title>,
  ): Promise<Title> {
    return HttpService.api.patch(
      `/v1/titles/${titleId}`,
      values,
    )
  }

  export function deleteOne(titleId: string): Promise<void> {
    return HttpService.api.delete(`/v1/titles/${titleId}`)
  }

export function findManyByGenreId(
    genreId: string,
    queryOptions?: ApiHelper.QueryOptions<Title>,
  ): Promise<Title[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/genres/genre/${genreId}/titles${buildOptions}`,
    )
  }

  export function createOneByGenreId(
    genreId: string,
    values: Partial<Title>,
  ): Promise<Title> {
    return HttpService.api.post(
      `/v1/genres/genre/${genreId}/titles`,
      values,
    )
  }

}
