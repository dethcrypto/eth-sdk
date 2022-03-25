import got, { RequiredRetryOptions } from 'got'

export type FetchJson<T = any> = (url: string) => Promise<T>

const retryOptions: Partial<RequiredRetryOptions> = {
  limit: 2,
  statusCodes: [
    // defaults
    408, 413, 429, 500, 502, 503, 504, 521, 522, 524,
    // added
    403,
  ],
}

export const fetchJson: FetchJson = (url: string) => got(url, { retry: retryOptions }).json()
