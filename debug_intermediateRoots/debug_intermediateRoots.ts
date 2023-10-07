import {Hash} from "../shared/common";
import {ITraceConfig} from "../shared/tracer";

type Params = [
  hash: Hash,
  config?: ITraceConfig
]

type Returns = Hash[]