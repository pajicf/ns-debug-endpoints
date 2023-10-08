import {Hash} from "../shared/common";
import {IStdTraceConfig} from "../shared/tracer";

type Params = [
  hash: Hash,
  config?: IStdTraceConfig
]

type Returns = string[]