import type { AcceptedValue } from "./input";
import type { Deserialize } from "./deserialize";
import type { SuperJSONResult } from "./serialize";
import * as superjson from "superjson";

const serialize = superjson.serialize as <T extends AcceptedValue>(
  obj: T
) => SuperJSONResult<T>;
const deserialize = superjson.deserialize as <T extends SuperJSONResult<any>>(
  payload: T
) => Deserialize<T>;
const { stringify, parse } = superjson;

export { serialize, deserialize, stringify, parse };
export default superjson.default; // TODO: add correct types to base class
