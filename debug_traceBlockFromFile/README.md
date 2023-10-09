## debug_traceBlockFromFile
Similar to [debug_traceBlock](../debug_traceBlock), `traceBlockFromFile` accepts a file containing the RLP of the block.
For the second parameter see [TraceConfig](../debug_traceTransaction) reference.

### Parameters
- **fileName** - string
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
  - **txHash** - [32]byte
  - **result** - interface{}
  - **error** - string