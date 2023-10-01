import {Hash} from "./common";

export type BlockNumber = number // int64
export type BlockHash = Hash;

export interface IBlockNumberOrHash {
  blockNumber: BlockNumber;
  blockHash: BlockHash;
  requireCanonical: boolean;
}