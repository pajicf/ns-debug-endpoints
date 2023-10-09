## debug_standardTraceBadBlockToFile
This method is similar to [debug_standardTraceBlockToFile](../debug_standardTraceBlockToFile), but can be used to obtain info about a block which has been rejected as invalid (for some reason).

### Parameters
- **hash** - [32]byte
- **config**
  - **enableMemory** - bool | nil
  - **disableStack** - bool | nil
  - **disableStorage** - bool | nil
  - **enableReturnData** - bool | nil
  - **debug** - bool | nil
  - **limit** - int | nil
  - **reexec** - uint64 | nil
  - **txHash** - [32]byte

### Returns
- **txTraces** - array of objects