## debug_traceCall
The `debug_traceCall` method lets you run an `eth_call` within the context of the given block execution using the final state of parent block as the base. 
The first argument (just as in `eth_call`) is a transaction object. 
The block can be specified either by hash or by number as the second argument. 
The trace can be configured similar to `debug_traceTransaction`, see [TraceConfig](../debug_traceTransaction). 
The method returns the same output as [debug_traceTransaction](../debug_traceTransaction).

### Parameters
- **args**
  - **from** - [20]byte
  - **to** - [20]byte
  - **gas** - uint64
  - **gasPrice** - big.Int
  - **maxFeePerGas** - big.Int
  - **maxPriorityFeePerGas** - big.Int
  - **value** - big.Int
  - **nonce** - uint64
  - **data** - []byte
  - **input** - []byte
  - **accessList** array of objects
    - **address** - [20]byte
    - **storageKeys** - [][32]byte
  - **chainId** - big.Int
- **blockNrOrHash**
  - **blockNumber** - int64
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
- **txTrace** - object