import {Hash} from "../shared/common";
import {IStdTraceConfig, ITxTraceResult} from "../shared/tracer";

type Params = [
  hash: Hash,
  config?: IStdTraceConfig
]

type Returns = ITxTraceResult[]