## debug_getModifiedAccountsByHash
Returns all accounts that have changed between the two blocks specified. A change is defined as a difference in nonce, balance, code hash, or storage hash. With one parameter, returns the list of accounts modified in the specified block.

### Parameters
- **startHash** - [32]byte
- **endHash** - [32]byte | nil

### Returns
- **accounts** - [20]byte