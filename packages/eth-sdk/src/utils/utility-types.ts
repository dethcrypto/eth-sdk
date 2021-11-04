export interface NestedDict<TValue> {
  [name: string]: TValue | NestedDict<TValue>
}

export type URLString = `http${string}`
