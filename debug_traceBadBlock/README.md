## debug_traceBadBlock
Returns the structured logs created during the execution of EVM against a block pulled from the pool of bad ones and returns them as a JSON object. 
For the second parameter see [TraceConfig](../debug_traceTransaction) reference.

### Parameters
- **hash** - [32]byte
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