![ns_debug_docs_banner](./assets/banner.png)
# Debug namespace RPC Methods
This repository documents the **non standard** methods of the `debug_` namespace of Go Ethereum client RPC

## How to use it?
The repository is organized in folder <=> method basis, meaning every
method in the namespace has its own folder of the same name.

Every folder contains the next files:
- `.md` file, documenting the method in more details
- `.ts` file, documenting the data types of the method

Because some data types can be shared or aliased between different methods,
there is also a "shared" folder containing `.ts` files to be used between the method definitions