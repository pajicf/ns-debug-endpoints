## debug_getBadBlocks
Returns a list of the last 'bad blocks' that the client has seen on the network and returns them as a JSON list of block-hashes.

### Parameters
None

### Returns
array of objects
- **hash** - [32]byte
- **block** - map[string]interface{}
- **rlp** - string