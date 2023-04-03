// env related to network and contracts fallback to goerli

export const GOERLI_NETWORK = "Goerli";
const GOERLI_FOREVER_PFP_CONTRACT =
  "0x03AC7dd6bF9A72d3522000B366f531652B10Ad74";

export const env = {
  ALCHEMY_API_KEY:
    process.env.NEXT_PUBLIC_ALCHEMY_ID ?? process.env.ALCHEMY_ID ?? "",
  FOREVER_PFP_CONTRACT: (process.env.NEXT_PUBLIC_FOREVER_PFP_CONTRACT ??
    process.env.FOREVER_PFP_CONTRACT ??
    GOERLI_FOREVER_PFP_CONTRACT) as `0x${string}`,
  NETWORK:
    process.env.NEXT_PUBLIC_NETWORK ?? process.env.NETWORK ?? GOERLI_NETWORK,
  TX_EXPLORER:
    process.env.NEXT_PUBLIC_TX_EXPLORER ?? "https://goerli.etherscan.io/tx/",
};
