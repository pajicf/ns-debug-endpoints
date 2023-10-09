import {ITraceConfig, ITxTraceResult} from "../shared/tracer";
import {Hash} from "../shared/common";

type Params = [
  blockHash: Hash,
  traceConfig: ITraceConfig
]

type Returns = ITxTraceResult[]