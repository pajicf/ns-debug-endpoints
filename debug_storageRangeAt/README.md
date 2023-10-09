## debug_storageRangeAt
Returns the storage at the given block height and transaction index. 
The result can be paged by providing a `maxResult` to cap the number of storage slots returned as well as specifying the offset via `keyStart` (hash of storage key).

### Parameters
- **blockNrOrHash**
  - **blockNumber** - int64
  - **blockHash** - [32]byte
- **txIndex** - int
- **contractAddress** - [20]byte
- **keyStart** - []byte
- **maxResults** - int

### Returns
object
- **storage** - map[32[byte]]{key: [32]byte, value: [32]byte}
- **nextKey** - [32]byte | nil