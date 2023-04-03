import { createQueryKeyStore } from "@lukemorales/query-key-factory";

export const keyStore = createQueryKeyStore({
  nfts: {
    byAddress: (address: string) => [address],
  },
  nftMetaData: {
    byContractAndTokenId: (contract: string, tokenId: number) => [
      contract,
      tokenId,
    ],
  },
});
