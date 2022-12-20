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

type J<T extends SuperJSONResult<any>> = T["json"];
type M<T extends SuperJSONResult<any>> = T["meta"]["values"];

export type Deserialize<Serialized extends SuperJSONResult<any>> = {
  [K in Exclude<keyof J<Serialized>, keyof M<Serialized>>]: J<Serialized>[K];
} & {
  [K in Extract<keyof M<Serialized>, keyof J<Serialized>>]: DeserializeProp<
    M<Serialized>[K][0],
    J<Serialized>[K]
  >;
};
