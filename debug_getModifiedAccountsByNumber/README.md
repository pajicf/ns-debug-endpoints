## debug_getModifiedAccountsByNumber
Returns all accounts that have changed between the two blocks specified. A change is defined as a difference in nonce, balance, code hash or storage hash.

### Parameters
- **startNum** - uint64
- **endNum** - uint64 | nil

### Returns
- **accounts** - [20]byte