export function makeError(err: unknown): Error {
  return err instanceof Error ? err : new Error(JSON.stringify(err))
}
