import {BlockNumber} from "../shared/common";
import {EBlockNumberType} from "../shared/blocks";
import {IDump} from "../shared/state";

type Params = [
  blockNr: BlockNumber | EBlockNumberType
]

type Returns = IDump