# Debug namespace RPC Methods
This repository documents the **non standard** methods of the `debug_` namespace of Go Ethereum client RPC

## How to use it?
The repository is organized in folder <=> method basis, meaning every
method in the namespace has its own folder of the same name.

Every folder contains the next files:
- `README.md` file, documenting the method in more details in the following structure
  - Name of the method
  - Input parameters, which are always ordered set of variables (a tuple)
  - Return, which can either be
    - None
    - object
    - array of objects
    - Single Value, but named for easier reading.
      - Example: [debug_dbAncients](./debug_dbAncients/README.md) where it returns a `uint64` but we named it `numberOfItems` in the readme for easier readability
- `.ts` file, documenting the data types of the method

Because some data types can be shared or aliased between different methods,
there is also a "shared" folder containing `.ts` files to be used between the method definitions

### Scaffolding
To add a new method to the repo, you can use the [scaffold_new_method.js](./scaffold_new_method.js) helper script
by running: `node scaffold_new_method.js [method_name]`

Example: `node scaffold_new_method.js debug_accountRange`  
Which will generate new files and directories.

### Tracers
Geth comes with a bundle of [built-in tracers](https://geth.ethereum.org/docs/developers/evm-tracing/built-in-tracers), each providing various data about a transaction. 
Alternatively a [custom tracer](https://geth.ethereum.org/docs/developers/evm-tracing/custom-tracer) can be implemented in either Go or Javascript.

Some method call results can be different based on which
tracer is picked for usage.  
For example [`ITxTraceResult`](./shared/tracer.ts) will return different object
based on `tracer` param.  
All `debug_trace*` method calls are setup this way.

**In this repository, the next tracers have been documented:**
- [Struct/opcode logger](./shared/logger/tracer_standard.ts)

## Content
- [debug_accountRange](./debug_accountRange)
  - [docs](./debug_accountRange/README.md)
  - [data types](./debug_accountRange/debug_accountRange.ts)
- [debug_backtraceAt](./debug_backtraceAt)
  - [docs](./debug_backtraceAt/README.md)
  - [data types](./debug_backtraceAt/debug_backtraceAt.ts)
- [debug_blockProfile](./debug_blockProfile)
  - [docs](./debug_blockProfile/README.md)
  - [data types](./debug_blockProfile/debug_blockProfile.ts)
- [debug_chaindbCompact](./debug_chaindbCompact)
  - [docs](./debug_chaindbCompact/README.md)
  - [data types](./debug_chaindbCompact/debug_chaindbCompact.ts)
- [debug_chaindbProperty](./debug_chaindbProperty)
  - [docs](./debug_chaindbProperty/README.md)
  - [data types](./debug_chaindbProperty/debug_chaindbProperty.ts)
- [debug_cpuProfile](./debug_cpuProfile)
  - [docs](./debug_cpuProfile/README.md)
  - [data types](./debug_cpuProfile/debug_cpuProfile.ts)
- [debug_dbAncient](./debug_dbAncient)
  - [docs](./debug_dbAncient/README.md)
  - [data types](./debug_dbAncient/debug_dbAncient.ts)
- [debug_dbAncients](./debug_dbAncients)
  - [docs](./debug_dbAncients/README.md)
  - [data types](./debug_dbAncients/debug_dbAncients.ts)
- [debug_dbGet](./debug_dbGet)
  - [docs](./debug_dbGet/README.md)
  - [data types](./debug_dbGet/debug_dbGet.ts)
- [debug_dumpBlock](./debug_dumpBlock)
  - [docs](./debug_dumpBlock/README.md)
  - [data types](./debug_dumpBlock/debug_dumpBlock.ts)
- [debug_freeOSMemory](./debug_freeOSMemory)
  - [docs](./debug_freeOSMemory/README.md)
  - [data types](./debug_freeOSMemory/debug_freeOSMemory.ts)
- [debug_freezeClient](./debug_freezeClient)
  - [docs](./debug_freezeClient/README.md)
  - [data types](./debug_freezeClient/debug_freezeClient.ts)
- [debug_gcStats](./debug_gcStats)
  - [docs](./debug_gcStats/README.md)
  - [data types](./debug_gcStats/debug_gcStats.ts)
- [debug_getAccessibleState](./debug_getAccessibleState)
  - [docs](./debug_getAccessibleState/README.md)
  - [data types](./debug_getAccessibleState/debug_getAccessibleState.ts)
- [debug_getBadBlocks](./debug_getBadBlocks)
  - [docs](./debug_getBadBlocks/README.md)
  - [data types](./debug_getBadBlocks/debug_getBadBlocks.ts)
- [debug_getRawBlock](./debug_getRawBlock)
  - [docs](./debug_getRawBlock/README.md)
  - [data types](./debug_getRawBlock/debug_getRawBlock.ts)
- [debug_getRawHeader](./debug_getRawHeader)
  - [docs](./debug_getRawHeader/README.md)
  - [data types](./debug_getRawHeader/debug_getRawHeader.ts)
- [debug_getRawTransaction](./debug_getRawTransaction)
  - [docs](./debug_getRawTransaction/README.md)
  - [data types](./debug_getRawTransaction/debug_getRawTransaction.ts)
- [debug_getModifiedAccountsByHash](./debug_getModifiedAccountsByHash)
  - [docs](./debug_getModifiedAccountsByHash/README.md)
  - [data types](./debug_getModifiedAccountsByHash/debug_getModifiedAccountsByHash.ts)
- [debug_getModifiedAccountsByNumber](./debug_getModifiedAccountsByNumber)
  - [docs](./debug_getModifiedAccountsByNumber/README.md)
  - [data types](./debug_getModifiedAccountsByNumber/debug_getModifiedAccountsByNumber.ts)
- [debug_getRawReceipts](./debug_getRawReceipts)
  - [docs](./debug_getRawReceipts/README.md)
  - [data types](./debug_getRawReceipts/debug_getRawReceipts.ts)
- [debug_goTrace](./debug_goTrace)
  - [docs](./debug_goTrace/README.md)
  - [data types](./debug_goTrace/debug_goTrace.ts)
- [debug_intermediateRoots](./debug_intermediateRoots)
  - [docs](./debug_intermediateRoots/README.md)
  - [data types](./debug_intermediateRoots/debug_intermediateRoots.ts)
- [debug_memStats](./debug_memStats)
  - [docs](./debug_memStats/README.md)
  - [data types](./debug_memStats/debug_memStats.ts)
- [debug_mutexProfile](./debug_mutexProfile)
  - [docs](./debug_mutexProfile/README.md)
  - [data types](./debug_mutexProfile/debug_mutexProfile.ts)
- [debug_preimage](./debug_preimage)
  - [docs](./debug_preimage/README.md)
  - [data types](./debug_preimage/debug_preimage.ts)
- [debug_printBlock](./debug_printBlock)
  - [docs](./debug_printBlock/README.md)
  - [data types](./debug_printBlock/debug_printBlock.ts)
- [debug_setBlockProfileRate](./debug_setBlockProfileRate)
  - [docs](./debug_setBlockProfileRate/README.md)
  - [data types](./debug_setBlockProfileRate/debug_setBlockProfileRate.ts)
- [debug_setGCPercent](./debug_setGCPercent)
  - [docs](./debug_setGCPercent/README.md)
  - [data types](./debug_setGCPercent/debug_setGCPercent.ts)
- [debug_setHead](./debug_setHead)
  - [docs](./debug_setHead/README.md)
  - [data types](./debug_setHead/debug_setHead.ts)
- [debug_setMutexProfileFraction](./debug_setMutexProfileFraction)
  - [docs](./debug_setMutexProfileFraction/README.md)
  - [data types](./debug_setMutexProfileFraction/debug_setMutexProfileFraction.ts)
- [debug_setTrieFlushInterval](./debug_setTrieFlushInterval)
  - [docs](./debug_setTrieFlushInterval/README.md)
  - [data types](./debug_setTrieFlushInterval/debug_setTrieFlushInterval.ts)
- [debug_stacks](./debug_stacks)
  - [docs](./debug_stacks/README.md)
  - [data types](./debug_stacks/debug_stacks.ts)
- [debug_standardTraceBlockToFile](./debug_standardTraceBlockToFile)
  - [docs](./debug_standardTraceBlockToFile/README.md)
  - [data types](./debug_standardTraceBlockToFile/debug_standardTraceBlockToFile.ts)
- [debug_standardTraceBadBlockToFile](./debug_standardTraceBadBlockToFile)
  - [docs](./debug_standardTraceBadBlockToFile/README.md)
  - [data types](./debug_standardTraceBadBlockToFile/debug_standardTraceBadBlockToFile.ts)
- [debug_startCPUProfile](./debug_startCPUProfile)
  - [docs](./debug_startCPUProfile/README.md)
  - [data types](./debug_startCPUProfile/debug_startCPUProfile.ts)
- [debug_startGoTrace](./debug_startGoTrace)
  - [docs](./debug_startGoTrace/README.md)
  - [data types](./debug_startGoTrace/debug_startGoTrace.ts)
- [debug_stopCPUProfile](./debug_stopCPUProfile)
  - [docs](./debug_stopCPUProfile/README.md)
  - [data types](./debug_stopCPUProfile/debug_stopCPUProfile.ts)
- [debug_stopGoTrace](./debug_stopGoTrace)
  - [docs](./debug_stopGoTrace/README.md)
  - [data types](./debug_stopGoTrace/debug_stopGoTrace.ts)
- [debug_storageRangeAt](./debug_storageRangeAt)
  - [docs](./debug_storageRangeAt/README.md)
  - [data types](./debug_storageRangeAt/debug_storageRangeAt.ts)
- [debug_traceBadBlock](./debug_traceBadBlock)
  - [docs](./debug_traceBadBlock/README.md)
  - [data types](./debug_traceBadBlock/debug_traceBadBlock.ts)
- [debug_traceBlock](./debug_traceBlock)
  - [docs](./debug_traceBlock/README.md)
  - [data types](./debug_traceBlock/debug_traceBlock.ts)
- [debug_traceBlockByNumber](./debug_traceBlockByNumber)
  - [docs](./debug_traceBlockByNumber/README.md)
  - [data types](./debug_traceBlockByNumber/debug_traceBlockByNumber.ts)
- [debug_traceBlockByHash](./debug_traceBlockByHash)
  - [docs](./debug_traceBlockByHash/README.md)
  - [data types](./debug_traceBlockByHash/debug_traceBlockByHash.ts)
- [debug_traceBlockFromFile](./debug_traceBlockFromFile)
  - [docs](./debug_traceBlockFromFile/README.md)
  - [data types](./debug_traceBlockFromFile/debug_traceBlockFromFile.ts)
- [debug_traceCall](./debug_traceCall)
  - [docs](./debug_traceCall/README.md)
  - [data types](./debug_traceCall/debug_traceCall.ts)
- [debug_traceChain](./debug_traceChain)
  - [docs](./debug_traceChain/README.md)
  - [data types](./debug_traceChain/debug_traceChain.ts)
- [debug_traceTransaction](./debug_traceTransaction)
  - [docs](./debug_traceTransaction/README.md)
  - [data types](./debug_traceTransaction/debug_traceTransaction.ts)
- [debug_verbosity](./debug_verbosity)
  - [docs](./debug_verbosity/README.md)
  - [data types](./debug_verbosity/debug_verbosity.ts)
- [debug_vmodule](./debug_vmodule)
  - [docs](./debug_vmodule/README.md)
  - [data types](./debug_vmodule/debug_vmodule.ts)
- [debug_writeBlockProfile](./debug_writeBlockProfile)
  - [docs](./debug_writeBlockProfile/README.md)
  - [data types](./debug_writeBlockProfile/debug_writeBlockProfile.ts)
- [debug_writeMemProfile](./debug_writeMemProfile)
  - [docs](./debug_writeMemProfile/README.md)
  - [data types](./debug_writeMemProfile/debug_writeMemProfile.ts)
- [debug_writeMutexProfile](./debug_writeMutexProfile)
  - [docs](./debug_writeMutexProfile/README.md)
  - [data types](./debug_writeMutexProfile/debug_writeMutexProfile.ts)

![ns_debug_docs_banner](./assets/banner.png)