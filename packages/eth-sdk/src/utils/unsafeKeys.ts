/** @see https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208 */
export const unsafeKeys = Object.keys as <T extends object>(x: T) => (keyof T)[]
export const unsafeEntries = Object.entries as <T extends object>(x: T) => [keyof T, T[keyof T]][]
