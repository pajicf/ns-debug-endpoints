## debug_traceBlockByHash
Similar to [debug_traceBlock](../debug_traceBlock), `traceBlockByHash` accepts a block hash and will replay the block that is already present in the database.
For the second parameter see [TraceConfig](../debug_traceTransaction) reference.

### Parameters
- **blockHash** - [32]byte
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
- **txTraces** - array of objects