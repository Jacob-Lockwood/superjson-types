import { SuperJSONResult } from "./serialize";

export type DeserializeSet<T> = T extends (infer U)[] ? Set<U> : never;
export type DeserializeMap<T> = T extends [infer U, infer V][]
  ? Map<U, V>
  : never;

export type DeserializeProp<As, T extends any> = As extends "set"
  ? DeserializeSet<T>
  : As extends "map"
  ? DeserializeMap<T>
  : As extends "Date"
  ? Date
  : As extends "URL"
  ? URL
  : As extends "regexp"
  ? RegExp
  : T;

export type Deserialize<
  Serialized extends SuperJSONResult<any>,
  json = Serialized["json"],
  meta = Serialized["meta"]["values"]
> = {
  [K in Exclude<keyof json, keyof meta>]: json[K];
} & {
  [K in Extract<keyof meta, keyof json>]: 0 extends keyof meta[K]
    ? DeserializeProp<meta[K][0], json[K]>
    : never;
};
