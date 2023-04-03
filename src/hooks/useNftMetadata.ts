import { Nft, OwnedNftsResponse } from "alchemy-sdk";

import { keyStore } from "@/config/keystore";
import { useQuery } from "wagmi";

export const useNftMetata = (
  contract: string | undefined,
  tokenId: number | undefined
) => {
  const { data, isLoading, error } = useQuery<Nft>(
    keyStore.nftMetaData.byContractAndTokenId(
      contract as string,
      tokenId as number
    ).queryKey,
    () =>
      fetch(`/api/nft/${contract}/${tokenId}`, {
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        return res.json();
      }),
    { enabled: !!contract && !!tokenId }
  );

  return {
    metadata: data,
    isLoading,
    error,
  };
};
