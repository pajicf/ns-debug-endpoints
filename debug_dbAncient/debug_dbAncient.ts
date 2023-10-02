import {EAncientTableKinds} from "../shared/db";
import {Bytes} from "../shared/common";

type Params = [
  kind: EAncientTableKinds,
  number: number
]

type Returns = Bytes