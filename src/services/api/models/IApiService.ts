export interface IApiService {
  get: (path: string, params?: Record<string, string | number>) => Promise<any>,
}
