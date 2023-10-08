## debug_setTrieFlushInterval
Configures how often in-memory state tries are persisted to disk. The interval needs to be in a format parsable by a [time.Duration](https://pkg.go.dev/time#ParseDuration).
Note that the interval is not wall-clock time. 
Rather it is accumulated block processing time after which the state should be flushed. 
For example the value `0s` will essentially turn on archive mode. 
If set to `1h`, it means that after one hour of effective block processing time, the trie would be flushed. 
If one block takes 200ms, a flush would occur every `5*3600=18000` blocks. 
The default interval for mainnet is `1h`.

**Note:** this configuration will not be persisted through restarts.

### Parameters
- **rate** - int

### Returns
None