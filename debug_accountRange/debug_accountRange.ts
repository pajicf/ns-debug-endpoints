import {IBlockNumberOrHash} from "../shared/blocks";
import {Bytes} from "../shared/common";
import {IAccountDump} from "../shared/accounts";

type Params = [
	blockNrOrHash: IBlockNumberOrHash,
	start: Bytes,
	maxResult: number,
	noCode: boolean,
	noStorage: boolean,
	incompletes: boolean
]

type Returns = {
	root: string;
	accounts: Record<string, IAccountDump> // Address => AccountDump
}