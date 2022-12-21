# `superjson-types`

This package provides accurate serialization and deserialization types for the popular package [SuperJSON]. It's a shallow wrapper, so just install this instead of `superjson` and you'll get the type definitions.

Note: This package is unstable so I will change whatever I feel like whenever I feel like. So I might make breaking changes like changing the way the wrapper works or update the types to be more accurate without a major version bump.

```
npm install superjson-types
```
```typescript
import { serialize, deserialize } from "superjson-types"
const serialized = serialize(
  { a: new Date(), b: "hi", c: new Set([1, 2, 3]) }
)
/* typeof serialized: {
  json: { a: string, b: string, c: number[] },
  meta: { a: ["Date"], c: ["set"] }
} */
const deserialized = deserialize(serialized)
// typeof deserialized: { a: Date, b: string, c: Set<number> }
```

[SuperJSON]: https://github.com/blitz-js/superjson