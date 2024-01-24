import { HttpError } from '../http.error'

interface ConstructorOptions {
  baseUrl: string
}

type Middleware = (
  response: Response,
  error?: HttpError,
) => void | Promise<void>

export class HttpClient {
  private baseUrl: string

  private middlewaresOnSuccess: Middleware[] = []
  private middlewaresOnError: Middleware[] = []

  constructor(options: ConstructorOptions) {
    this.baseUrl = options.baseUrl
  }

  private requestOptions: RequestInit = {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  async get<Type>(url: string): Promise<Type> {
    const requestOptions: RequestInit = {
      ...this.requestOptions,
      method: 'GET',
    }

    return fetch(`${this.baseUrl}${url}`, requestOptions).then(response => {
      return this.handleResponse(response)
    })
  }

  async post<Type>(url: string, data: any = {}): Promise<Type> {
    const requestOptions: RequestInit = {
      ...this.requestOptions,
      method: 'POST',
      body: JSON.stringify(data),
    }

    return fetch(`${this.baseUrl}${url}`, requestOptions).then(response => {
      return this.handleResponse(response)
    })
  }

  async patch<Type>(url: string, data: any = {}): Promise<Type> {
    const requestOptions: RequestInit = {
      ...this.requestOptions,
      method: 'PATCH',
      body: JSON.stringify(data),
    }

    return fetch(`${this.baseUrl}${url}`, requestOptions).then(response => {
      return this.handleResponse(response)
    })
  }

  async delete<Type>(url: string): Promise<Type> {
    const requestOptions: RequestInit = {
      ...this.requestOptions,
      method: 'DELETE',
    }

    return fetch(`${this.baseUrl}${url}`, requestOptions).then(response => {
      return this.handleResponse(response)
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                  UTILITIES                                 */
  /* -------------------------------------------------------------------------- */

  addMiddlewareOnSuccess(...middlewares: Middleware[]): void {
    this.middlewaresOnSuccess.push(...middlewares)
  }

  addMiddlewareOnError(...middlewares: Middleware[]): void {
    this.middlewaresOnError.push(...middlewares)
  }

  private async handleResponse(response: Response) {
    const data = await response.json()

    if (response.ok) {
      await this.runMiddlewares(response, this.middlewaresOnSuccess)

      return data
    } else {
      const error = new HttpError(response.status, data)

      await this.runMiddlewares(response, this.middlewaresOnError, error)

      throw error
    }
  }

  private async runMiddlewares(
    response: Response,
    middlewares: Middleware[],
    error?: HttpError,
  ): Promise<void> {
    for (const middleware of middlewares) {
      try {
        await middleware(response, error)
      } catch (error) {
        // ignore
      }
    }
  }
}
