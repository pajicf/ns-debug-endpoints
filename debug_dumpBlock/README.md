## debug_dumpBlock
Retrieves the state that corresponds to the block number and returns a list of accounts (including storage and code).

### Parameters
- **blockNr** - int64

### Returns
object
- **root** - string
- **accounts** - map[AccountHash][AccountDump](../shared/accounts.ts#3)