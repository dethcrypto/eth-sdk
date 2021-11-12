/**
 * constrains argument type, without forgetting it
 * @see https://kentcdodds.com/blog/how-to-write-a-constrained-identity-function-in-typescript
 * @keywords partial, subset
 */
export const constrain =
  <Given extends unknown>() =>
  <Inferred extends Given>(item: Inferred) =>
    item
