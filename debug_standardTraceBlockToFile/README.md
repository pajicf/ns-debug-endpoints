## debug_standardTraceBlockToFile
When JS-based tracing (see below) was first implemented, the intended usecase was to enable long-running tracers that could stream results back via a subscription channel. 
This method works a bit differently. (For full details, see [PR](https://github.com/ethereum/go-ethereum/pull/17914x))

- It streams output to disk during the execution, to not blow up the memory usage on the node
- It uses `jsonl` as output format (to allow streaming)
- Uses a cross-client standardized output, so called 'standard json'
  - Uses `op` for string-representation of opcode, instead of `op`/`opName` for numeric/string, and other simlar small differences.
  - has `refund`
  - Represents memory as a contiguous chunk of data, as opposed to a list of `32`-byte segments like [debug_traceTransaction](../debug_traceTransaction)

This means that this method is only 'useful' for callers who control the node -- at least sufficiently to be able to read the artefacts from the filesystem after the fact.

The method can be used to dump a certain transaction out of a given block:
```bash
> debug.standardTraceBlockToFile("0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63", {txHash:"0x4049f61ffbb0747bb88dc1c85dd6686ebf225a3c10c282c45a8e0c644739f7e9", disableMemory:true})  
["/tmp/block_0x0bbe9f14-14-0x4049f61f-099048234"]
```

Or all txs from a block:
```bash
> debug.standardTraceBlockToFile("0x0bbe9f1484668a2bf159c63f0cf556ed8c8282f99e3ffdb03ad2175a863bca63", {disableMemory:true})
["/tmp/block_0x0bbe9f14-0-0xb4502ea7-409046657", "/tmp/block_0x0bbe9f14-1-0xe839be8f-954614764", "/tmp/block_0x0bbe9f14-2-0xc6e2052f-542255195", "/tmp/block_0x0bbe9f14-3-0x01b7f3fe-209673214", "/tmp/block_0x0bbe9f14-4-0x0f290422-320999749", "/tmp/block_0x0bbe9f14-5-0x2dc0fb80-844117472", "/tmp/block_0x0bbe9f14-6-0x35542da1-256306111", "/tmp/block_0x0bbe9f14-7-0x3e199a08-086370834", "/tmp/block_0x0bbe9f14-8-0x87778b88-194603593", "/tmp/block_0x0bbe9f14-9-0xbcb081ba-629580052", "/tmp/block_0x0bbe9f14-10-0xc254381a-578605923", "/tmp/block_0x0bbe9f14-11-0xcc434d58-405931366", "/tmp/block_0x0bbe9f14-12-0xce61967d-874423181", "/tmp/block_0x0bbe9f14-13-0x05a20b35-267153288", "/tmp/block_0x0bbe9f14-14-0x4049f61f-606653767", "/tmp/block_0x0bbe9f14-15-0x46d473d2-614457338", "/tmp/block_0x0bbe9f14-16-0x35cf5500-411906321", "/tmp/block_0x0bbe9f14-17-0x79222961-278569788", "/tmp/block_0x0bbe9f14-18-0xad84e7b1-095032683", "/tmp/block_0x0bbe9f14-19-0x4bd48260-019097038", "/tmp/block_0x0bbe9f14-20-0x1517411d-292624085", "/tmp/block_0x0bbe9f14-21-0x6857e350-971385904", "/tmp/block_0x0bbe9f14-22-0xbe3ae2ca-236639695"]
```

Files are created in a temp-location, with the naming standard `block_<blockhash:4>-<txindex>-<txhash:4>-<random suffix>`. Each opcode immediately streams to file, with no in-geth buffering aside from whatever buffering the os normally does.

On the server side, it also adds some more info when regenerating historical state, namely, the reexec-number if `required historical state is not avaiable` is encountered, so a user can experiment with increasing that setting. It also prints out the remaining block until it reaches target:

```bash
INFO [10-15|13:48:25.263] Regenerating historical state            block=2385959 target=2386012 remaining=53   elapsed=3m30.990537767s
INFO [10-15|13:48:33.342] Regenerating historical state            block=2386012 target=2386012 remaining=0    elapsed=3m39.070073163s
INFO [10-15|13:48:33.343] Historical state regenerated             block=2386012 elapsed=3m39.070454362s nodes=10.03mB preimages=652.08kB
INFO [10-15|13:48:33.352] Wrote trace                              file=/tmp/block_0x14490c57-0-0xfbbd6d91-715824834
INFO [10-15|13:48:33.352] Wrote trace                              file=/tmp/block_0x14490c57-1-0x71076194-187462969
INFO [10-15|13:48:34.421] Wrote trace file=/tmp/block_0x14490c57-2-0x3f4263fe-056924484
```

The `options` is as follows:
```go
type StdTraceConfig struct {
  *vm.LogConfig
  Reexec *uint64
  TxHash *common.Hash
}
```

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
- **listOfFiles** - []string