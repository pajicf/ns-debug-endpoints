import {Address, Bytes, Hash} from "./common";

export interface ITransactionArguments {
  from: Address;
  to: Address;
  gas: number;
  gasPrice: BigInteger;
  maxFeePerGas: BigInteger;
  maxPriorityFeePerGas: BigInteger;
  value: BigInteger;
  nonce: number;
  data: Bytes;
  input: Bytes;
  accessList: AccessTuple[]
  chainId: BigInteger
}

export type AccessTuple = {
  address: Address,
  storageKeys: Hash[]
}