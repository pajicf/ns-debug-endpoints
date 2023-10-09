import {ITraceConfig, ITxTraceResult} from "../shared/tracer";

type Params = [
  fileName: string,
  traceConfig: ITraceConfig
]

type Returns = ITxTraceResult[]