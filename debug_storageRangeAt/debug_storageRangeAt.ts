import {IBlockNumberOrHash} from "../shared/blocks";
import {Address, Bytes, Hash} from "../shared/common";
import {IStorageEntry} from "../shared/state";

type Params = [
  blockNrOrHash: IBlockNumberOrHash,
  txIndex: number,
  contractAddress: Address,
  keyStart: Bytes,
  maxResults: number
]

type Returns = {
  storage: Record<string, IStorageEntry>, // Hash => IStorageEntry,
  nextKey?: Hash
}