import {BlockHash, BlockNumber} from "./common";

export interface IBlockNumberOrHash {
  blockNumber: BlockNumber;
  blockHash: BlockHash;
  requireCanonical: boolean;
}

// Geth specific enumeration for block number param for API when exact block number is unknown by the external caller
export enum EBlockNumberType {
  SafeBlockNumber = -4,
  FinalizedBlockNumber = -3,
  LatestBlockNumber = -2,
  PendingBlockNumber = -1,
  EarliestBlockNumber = 0
}