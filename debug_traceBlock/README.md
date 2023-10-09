## debug_traceBlock
The `traceBlock` method will return a full stack trace of all invoked opcodes of all transaction that were included in this block.
**Note**, the parent of this block must be present or it will fail. For the second parameter see TraceConfig reference.

### Parameters
- **rlpEncodedBlock** - []byte
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