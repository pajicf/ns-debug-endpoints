## debug_traceTransaction
In most scenarios, `debug.standardTraceBlockToFile` is better suited for tracing!

The `traceTransaction` debugging method will attempt to run the transaction in the exact same manner as it was executed on the network. 
It will replay any transaction that may have been executed prior to this one before it will finally attempt to execute the transaction that corresponds to the given hash.

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
- **txTrace** - object