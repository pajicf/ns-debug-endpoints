## debug_getAccessibleState
Returns the first number where the node has accessible state on disk. This is the post-state of that block and the pre-state of the next block. The (from, to) parameters are the sequence of blocks to search, which can go either forwards or backwards.

Note: to get the last state pass in the range of blocks in reverse, i.e. (last, first).

### Parameters
- **from** - int64
- **to** - int64

### Returns
- **firstAvailableBlock** - int64