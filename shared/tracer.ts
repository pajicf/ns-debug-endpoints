import {Bytes, Hash} from "./common";
import {ITxExecutionResult, ILoggerConfig} from "./logger/logger";

export interface ITraceConfig extends ILoggerConfig {
  tracer?: string;
  timeout?: string; // The amount of time a single transaction can execute, by default before being forcefully aborted.
  reexec?: number; // The number of blocks the tracer is willing to go back and reexecute to produce missing historical state necessary to run a specific trac
  tracerConfig?: Bytes // Config specific to given tracer. Note struct logger
}

export interface IStdTraceConfig extends ILoggerConfig {
  reexec: number,
  txHash: Hash
}

export interface ITxTraceResult {
  result: ITxExecutionResult;
}