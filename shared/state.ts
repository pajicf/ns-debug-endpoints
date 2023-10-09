import {IAccountDump} from "./accounts";
import {Hash} from "./common";

export interface IDump {
  root: string;
  accounts: Record<string, IAccountDump>; // Address => AccountDump
}

export interface IStorageEntry {
  key?: Hash;
  value: Hash;
}