import { OwnedNft, OwnedNftsResponse } from "alchemy-sdk";

import { keyStore } from "@/config/keystore";
import { useQuery } from "wagmi";

export const useNfts = (address: string | undefined) => {
  const { data, isLoading, error } = useQuery<OwnedNft[]>(
    keyStore.nfts.byAddress(address as string).queryKey,
    () =>
      fetch(`/api/nfts/${address}`, {
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        return res.json();
      }),
    { enabled: !!address }
  );

  return {
    nfts: data ?? [],
    total: data?.length ?? 0,
    isLoading,
    error,
    collections: [...new Set(data?.map((nft) => nft.title))],
  };
};
