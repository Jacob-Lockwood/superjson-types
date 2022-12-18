import { AcceptedValue } from "./src/input";
import { Deserialize } from "./src/deserialize";
import { SuperJSONResult } from "./src/serialize";

declare module "superjson" {
  function serialize<T extends AcceptedValue>(obj: T): SuperJSONResult<T>;
  function deserialize<T extends SuperJSONResult<any>>(
    payload: T
  ): Deserialize<T>;
  class SuperJSON {
    serialize<T extends AcceptedValue>(obj: T): SuperJSONResult<T>;
    deserialize<T extends SuperJSONResult<any>>(payload: T): Deserialize<T>;
    static serialize<T extends AcceptedValue>(obj: T): SuperJSONResult<T>;
    static deserialize<T extends SuperJSONResult<any>>(
      payload: T
    ): Deserialize<T>;
  }
}
