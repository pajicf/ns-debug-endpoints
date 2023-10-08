## debug_setBlockProfileRate
Sets the rate (in samples/sec) of goroutine block profile data collection. A non-zero rate enables block profiling, setting it to zero stops the profile. Collected profile data can be written using `debug_writeBlockProfile`.

### Parameters
- **rate** - int

### Returns
None