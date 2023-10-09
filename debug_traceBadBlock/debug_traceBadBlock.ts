import {Hash} from "../shared/common";
import {ITraceConfig, ITxTraceResult} from "../shared/tracer";

type Params = [
  hash: Hash,
  traceConfig: ITraceConfig
]

type Returns = ITxTraceResult[]