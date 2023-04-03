import React, { useEffect } from "react";

import { BaseCard } from "./BaseCard";
import { Bind } from "./Bind";
import { Button } from "../ui/button";
import { Error } from "../ui/Error";
import { PickListPlaceholder } from "./Placeholder";
import { PickerList } from "./PickerList";
import { locales } from "@/locales";
import { useNfts } from "@/hooks/useNfts";
import { useUser } from "@/hooks/useUser";

export interface NftData {
  contract: string;
  tokenId: number;
}

export const BindPFP: React.FC = ({}) => {
  const { isConnected, address } = useUser();
  const { nfts, isLoading, error } = useNfts(address);
  const [selectedNft, setSelectedNft] = React.useState<NftData | null>(null);

  useEffect(() => {
    setSelectedNft(null);
  }, [address]);

  if (!isConnected) return null;

  if (isLoading) {
    return (
      <BaseCard>
        <PickListPlaceholder />
      </BaseCard>
    );
  }

  if (error) {
    return (
      <BaseCard>
        <Error>{locales.errorFetchingNfts}</Error>
      </BaseCard>
    );
  }

  return (
    <BaseCard>
      <PickerList
        nfts={nfts}
        onSelect={(data) => setSelectedNft(data)}
        selected={selectedNft}
      />
      <Bind selectedNft={selectedNft} />
    </BaseCard>
  );
};
