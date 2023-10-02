## debug_backtraceAt

Sets the logging backtrace location. When a backtrace location is set and a log message is emitted at that location, the stack of the goroutine executing the log statement will be printed to stderr.

The location is specified as `filename:line`

### Parameters
- **location** - string

### Returns
None