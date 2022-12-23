import { AnySuperJSONResult } from "./serialize";

export type DeserializeSet<T> = T extends (infer U)[] ? Set<U> : never;
export type DeserializeMap<T> = T extends [infer U, infer V][] ? Map<U, V> : never;

export type DeserializeProp<As, T> = As extends "set"
  ? DeserializeSet<T>
  : As extends "map"
  ? DeserializeMap<T>
  : As extends "Date"
  ? Date
  : As extends "URL"
  ? URL
  : As extends "regexp"
  ? RegExp
  : As extends "bigint"
  ? bigint
  : T;

type J<T extends AnySuperJSONResult> = T["json"];
type M<T extends AnySuperJSONResult> = T["meta"]["values"];

export type Deserialize<Serialized extends AnySuperJSONResult> = {
  [K in Exclude<keyof J<Serialized>, keyof M<Serialized>>]: J<Serialized>[K];
} & {
  [K in Extract<keyof M<Serialized>, keyof J<Serialized>>]: DeserializeProp<
    M<Serialized>[K][0],
    J<Serialized>[K]
  >;
};
