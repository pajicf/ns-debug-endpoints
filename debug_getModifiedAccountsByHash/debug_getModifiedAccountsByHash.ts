import {Hash} from "../shared/common";
import {Address} from "../shared/common";

type Params = [
  startHash: Hash,
  endHash?: Hash
]

type Returns = Address[]