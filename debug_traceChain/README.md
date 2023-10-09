## debug_traceChain
Returns the structured logs created during the execution of EVM between two blocks (excluding start) as a JSON object. This endpoint must be invoked via debug_subscribe as follows:
```javascript
const res = provider.send('debug_subscribe', ['traceChain', '0x3f3a2a', '0x3f3a2b'])`
```
please refer to the [subscription page](https://geth.ethereum.org/docs/interacting-with-geth/rpc/pubsub) for more details.

### Parameters
- **start** - int64
- **end** - int64
- **traceConfig** - object | nil
  - **enableMemory** - bool | nil
  - **disableStack** - bool | nil
  - **disableStorage** - bool | nil
  - **enableReturnData** - bool | nil
  - **debug** - bool | nil
  - **limit** - int | nil
  - **tracer** - string | nil
  - **timeout** - string | nil
  - **exec** - uint64 | nil
  - **tracerConfig** - []byte

### Returns
- **blockTrace** - object