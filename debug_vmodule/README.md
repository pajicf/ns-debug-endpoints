## debug_vmodule
Sets the logging verbosity pattern.

**Examples:**

If you want to see messages from a particular Go package (directory) and all subdirectories, use:

```bash
> debug.vmodule("eth/*=6")
If you want to restrict messages to a particular package (e.g. p2p) but exclude subdirectories, use:
```

```bash
> debug.vmodule("p2p=6")
If you want to see log messages from a particular source file, use
```

```bash
> debug.vmodule("server.go=6")
You can compose these basic patterns. If you want to see all output from peer.go in a package below eth (eth/peer.go, eth/downloader/peer.go) as well as output from package p2p at level <= 5, use:
```

```bash
debug.vmodule('eth/*/peer.go=6,p2p=5');
```

### Parameters
- **pattern** - string

### Returns
None