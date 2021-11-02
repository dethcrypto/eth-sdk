export interface NestedDict<TValue> {
  [name: string]: TValue | NestedDict<TValue>
}
