## debug_dbAncient
Retrieves an ancient binary blob from the freezer. The freezer is a collection of append-only immutable files. The first argument kind specifies which table to look up data from. The list of all table kinds are as follows:  
`headers`: block headers  
`hashes`: canonical hash table (block number -> block hash)  
`bodies`: block bodies  
`receipts`: block receipts  
`diffs`: total difficulty table (block number -> td)  

### Parameters
- **kind** - string
- **number** - uint64

### Returns
- **binaryBlob** - []byte