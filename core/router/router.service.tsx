import { RouterObject } from './router.object'

export namespace RouterService {
  export function buildUrl(
    route: string,
    params: Record<string, string> = {},
  ): string {
    let routeBuilt = route as string

    Object.entries(params).forEach(
      ([key, value]) => (routeBuilt = routeBuilt.replace(`:${key}`, value)),
    )

    return routeBuilt
  }

  export function restoreUrl(
    route: string,
    params: Record<string, string>,
  ): RouterObject.route {
    let routeRestored = route

    Object.entries(params).forEach(
      ([key, value]) =>
        (routeRestored = routeRestored.replace(value, `:${key}`)),
    )

    return routeRestored as RouterObject.route
  }

  export function applyParamsToUrl(
    route: string,
    params: Record<string, string>,
  ): RouterObject.route {
    let routeRestored = route

    Object.entries(params).forEach(
      ([key, value]) =>
        (routeRestored = routeRestored.replace(`:${key}`, value)),
    )

    return routeRestored as RouterObject.route
  }
}
