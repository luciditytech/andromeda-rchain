# Andromeda - RChain

**RChain On-Chain Proof-of-Stake Consensus**

## Overview

This repository is a collection of smart contracts to launch Sidechains 
which can store consensus-driven blocks of information on the RChain blockchain.

**Base on RNode v0.6.4**  

## Development

To run this you need to have RNode installed. 
Please visit [User guide for running RNode](https://rchain.atlassian.net/wiki/spaces/CORE/pages/428376065/User+guide+for+running+RNode).

* You can find predefined rnode configuration in `./rnode/` directory.
* Starting script: `./resetAndStartRNode.sh`
* Latest working version of contract: `andromeda.rho` 

In order to use/test contract you need to deploy and propose:  
```
rnode deploy andromeda.rho
rnode propose
```

### Signatures

You can generate key pairs signatures for RNode using:

```
npm install
npm run build
``` 

This will be useful when we develop verifiers.   