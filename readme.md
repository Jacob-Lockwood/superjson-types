# `superjson-types`

This package provides accurate serialization and deserialization types for the popular package [SuperJSON]. It's a thin wrapper around the package which just adds some type-assertions, no actual code.

Note: This package is unstable so I will change whatever I feel like whenever I feel like. So I might change the way the wrapper works or update the types to be more accurate without a major version bump.

```
npm install superjson-types
```

```typescript
import { serialize, deserialize } from "superjson-types"
const serialized = serialize({ 
  a: new Date(), 
  b: "hey", 
  c: new Set(["clarence", "jeff"]) 
}) 
// typeof serialized: { 
//   json: { a: string, b: string, c: string[] }, 
//   meta: { values: { a: ["Date"], c: ["set"]} }
// }
const deserialized = deserialize(serialized)
// typeof deserialized: { a: Date, b: string, c: Set<string> }
```

[SuperJSON]: https://github.com/blitz-js/superjson