import {Bytes} from "../shared/common";
import {ITraceConfig, ITxTraceResult} from "../shared/tracer";

type Params = [
  rlpEncodedBlock: Bytes,
  traceConfig: ITraceConfig
]

type Returns = ITxTraceResult[]