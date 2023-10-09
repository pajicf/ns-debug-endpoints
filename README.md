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

![ns_debug_docs_banner](./assets/banner.png)