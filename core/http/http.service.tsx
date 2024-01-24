import { ConfigurationService } from '../configuration'
import { HttpClient } from './internal/http.client'

export class HttpService {
  static api = new HttpClient({
    baseUrl: ConfigurationService.getApiBaseUrl() + '/api',
  })
}
