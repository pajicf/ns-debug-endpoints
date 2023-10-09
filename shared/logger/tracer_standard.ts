export interface IStructTxExecutionResult {
  gas: number;
  failed: boolean;
  returnValue: string;
  structLogs: IStructuredEvmLog[];
}

interface IStructuredEvmLog {
  pc: number; // program counter
  op: string; // opcode to be executed
  gas: number; // remaining gas
  gasCost: number; // cost for executing op
  depth: number; // Current call depth
  error: string; // Error message if any
  stack?: string[]; // EVM stack. Disabled via disableStack
  returnData: string; // Last call's return data. Enabled via enableReturnData
  memory?: string; // EVM memory. Enabled via enableMemory
  storage?: Record<string, string>; // Storage slots of current contract read from and written to. Only emitted for SLOAD and SSTORE. Disabled via disableStorage
  refund: number; // Refund counter
}