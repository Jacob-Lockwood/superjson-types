export type Primitive =
  | string
  | number
  | boolean
  | null
  | Primitive[]
  | { [k: string]: Primitive };
export type NonPrimitive = bigint | Date | RegExp | URL;
export type Nested =
  | Set<AcceptedValue>
  | Map<string, AcceptedValue>
  | { [k in string]: AcceptedValue }
  | AcceptedValue[];
export type AcceptedValue = Primitive | NonPrimitive | Nested;

export interface SpecialValuesMap {
  Date: Date;
  regexp: RegExp;
  set: Set<AcceptedValue>;
  map: Map<string, AcceptedValue>;
  bigint: BigInt;
  URL: URL;
}
export type SpecialValue = SpecialValuesMap[keyof SpecialValuesMap];
export type SpecialValueString<T> = {
  [K in keyof SpecialValuesMap]: T extends SpecialValuesMap[K] ? K : never;
}[keyof SpecialValuesMap];
