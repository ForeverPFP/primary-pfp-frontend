# ForeverPFP Frontend

Website for Foreveer PFP

## Get started

### Environement variables

`.env.local`

```
NEXT_PUBLIC_ALCHEMY_ID=
ALCHEMY_ID=
NEXT_PUBLIC_NETWORK=
NETWORK=
NEXT_PUBLIC_TX_EXPLORER=
```

- `NEXT_PUBLIC_ALCHEMY_ID` : Alchemy ID use in frontend part of next.js
- `ALCHEMY_ID` : Alchemy ID use in api part of next.js
- `NEXT_PUBLIC_NETWORK` : Selected Network use in api part of next.js. Allowed values Goerli, Ethereum
- `NETWORK` : Selected Network use in api part of next.js. Allowed values Goerli, Ethereum
- `NEXT_PUBLIC_TX_EXPLORER` : Blockchain explorer to see transactions ie: https://goerli.etherscan.io/tx/
- `NEXT_FOREVER_PFP_CONTRACT` : Contract use in frontend part of next.js
- `FOREVER_PFP_CONTRACT` : Contract use in api part of next.js

By default only `NEXT_PUBLIC_ALCHEMY_ID` and `ALCHEMY_ID` are required all others env variables are defaulted to Goerli network.

## Run project

```
yarn & yarn dev
```
