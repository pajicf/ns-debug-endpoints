## debug_accountRange

AccountRange enumerates all accounts in the given block and start point in paging request

`maxResults` are returned in the page and the items have keys that come after the start key (hashed address).

If `incompletes` is false, then accounts for which the key preimage (i.e: the address) doesn't exist in db are skipped. NB: geth by default does not store preimages.

### Parameters

- `blockNrOrHash`
  - `BlockNumber` - int64
  - `BlockHash` - [32]byte
- `start` - []byte
- `maxResults` - int
- `noCode` - bool
- `noStorage` - bool
- `incompletes` - bool

### Returns
- `root` - string
- `accounts` - map[AccountHash][AccountDump](../shared/accounts.ts#3)