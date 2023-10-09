import { IStructTxExecutionResult} from "./tracer_opcode";

export type ILoggerConfig = {
  enableMemory?: boolean; // enable memory capture
  disableStack?: boolean; // disable stack capture
  disableStorage?: boolean; // disable storage capture
  enableReturnData?: boolean; // enable return data capture
  debug?: boolean; // print output during capture end
  limit?: number; // maximum length of output, but zero means unlimited
}

// Result depends on the tracer that was used
export type ITxExecutionResult =
  IStructTxExecutionResult;