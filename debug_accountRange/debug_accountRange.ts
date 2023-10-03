import {IBlockNumberOrHash} from "../shared/blocks";
import {Bytes} from "../shared/common";
import {IDump} from "../shared/state";

type Params = [
	blockNrOrHash: IBlockNumberOrHash,
	start: Bytes,
	maxResult: number,
	noCode: boolean,
	noStorage: boolean,
	incompletes: boolean
]

type Returns = IDump