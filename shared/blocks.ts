import {BlockHash, BlockNumber} from "./common";

export interface IBlockNumberOrHash {
  blockNumber: BlockNumber;
  blockHash: BlockHash;
  requireCanonical: boolean;
}