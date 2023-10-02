# Debug namespace RPC Methods
This repository documents the **non standard** methods of the `debug_` namespace of Go Ethereum client RPC

## How to use it?
The repository is organized in folder <=> method basis, meaning every
method in the namespace has its own folder of the same name.

Every folder contains the next files:
- `README.md` file, documenting the method in more details
- `.ts` file, documenting the data types of the method

Because some data types can be shared or aliased between different methods,
there is also a "shared" folder containing `.ts` files to be used between the method definitions

### Scaffolding
To add a new method to the repo, you can use the [scaffold_new_method.js](./scaffold_new_method.js) helper script
by running: `node scaffold_new_method.js [method_name]`

Example: `node scaffold_new_method.js debug_accountRange`  
Which will generate new files and directories.

## Content
- [debug_accountRange](./debug_accountRange)
  - [docs](./debug_accountRange/README.md)
  - [data types](./debug_accountRange/debug_accountRange.ts)
- [debug_backtraceAt](./debug_backtraceAt)
  - [docs](./debug_backtraceAt/README.md)
  - [data types](./debug_backtraceAt/debug_backtraceAt.ts)

![ns_debug_docs_banner](./assets/banner.png)