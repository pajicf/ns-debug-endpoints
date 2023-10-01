import {Address, Bytes} from "./common";

export interface IAccountDump {
  balance: string;
  nonce: number;
  root: Bytes;
  codeHash: Bytes;
  code?: Bytes;
  storage?: Record<string, string>
  address?: Address
}