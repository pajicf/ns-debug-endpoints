import {IAccountDump} from "./accounts";

export interface IDump {
  root: string;
  accounts: Record<string, IAccountDump>; // Address => AccountDump
}