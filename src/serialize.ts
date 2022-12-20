import {
  AcceptedValue,
  Primitive,
  SpecialValue,
  SpecialValueString,
} from "./input";

export type SerializeSet<T> = T extends Set<infer U> ? Serialize<U>[] : never;
export type SerializeMap<T> = T extends Map<infer U, infer V>
  ? [U, Serialize<V>][]
  : never;
export type SerializeObject<
  T extends Record<string, AcceptedValue> | AcceptedValue[]
> = { [K in keyof T]: Serialize<T[K]> };
export type SerializeArray<T extends AcceptedValue[]> = {
  [I in keyof T]: Serialize<T[I]>;
};
export type Serialize<T> = T extends Primitive
  ? T
  : T extends Set<AcceptedValue>
  ? SerializeSet<T>
  : T extends Map<string, AcceptedValue>
  ? SerializeMap<T>
  : T extends Record<string, AcceptedValue> | AcceptedValue[]
  ? SerializeObject<T>
  : string;

export type Json<T extends AcceptedValue> = Serialize<T>;

export type Meta<T extends AcceptedValue> = {
  values: {
    [K in keyof T as T[K] extends SpecialValue ? K : never]: readonly [
      SpecialValueString<T[K]>
    ];
  };
};
export type SuperJSONResult<T extends AcceptedValue> = {
  json: Json<T>;
  meta: Meta<T>;
};
