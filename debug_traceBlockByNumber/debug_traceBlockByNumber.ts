import {ITraceConfig, ITxTraceResult} from "../shared/tracer";

type Params = [
  blockNumber: number,
  traceConfig: ITraceConfig
]

type Returns = ITxTraceResult[]