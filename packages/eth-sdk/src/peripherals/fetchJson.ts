import got from 'got'

export type FetchJson<T = any> = (url: string) => Promise<T>

export const fetchJson: FetchJson = (url: string) => got(url).json()
