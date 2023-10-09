import {IBlockTraceResult, ITraceConfig} from "../shared/tracer";

type Params = [
  start: number,
  end: number,
  config?: ITraceConfig
]

type Returns = IBlockTraceResult