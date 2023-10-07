## debug_intermediateRoots
Executes a block (bad- or canon- or side-), and returns a list of intermediate roots: the stateroot after each transaction.

### Parameters
- **hash** - [32]byte
- **traceConfig**
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
- **stateRoots** - [][32]byte