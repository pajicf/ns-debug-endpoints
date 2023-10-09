import {ITransactionArguments} from "../shared/transaction";
import {IBlockNumberOrHash} from "../shared/blocks";
import {ITraceConfig, ITxTraceResult} from "../shared/tracer";

type Params = [
  args: ITransactionArguments,
  blockNrOrHash: IBlockNumberOrHash,
  config?: ITraceConfig
]

type Returns = ITxTraceResult