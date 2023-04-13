import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Frown, FrownIcon, ImageOff } from "lucide-react";

import { NftData } from "./BindPFP";
import { OwnedNft } from "alchemy-sdk";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import { locales } from "@/locales";
import { useGetPFP } from "@/hooks/useGetPFP";

interface PickerListProps {
  nfts: OwnedNft[];
  onSelect: (nft: NftData) => void;
  selected: NftData | null;
}

export const PickerList: React.FC<PickerListProps> = ({
  nfts,
  onSelect,
  selected,
}) => {
  const { contractAddress, tokenId } = useGetPFP();

  if (nfts.length === 0)
    return (
      <div className="mb-10 flex h-72 w-full flex-col items-center justify-center">
        <FrownIcon className="mb-6 h-12 w-12 text-gray-400" />
        <p className="text-lg font-bold text-gray-400">{locales.noNftsFound}</p>
      </div>
    );

  return (
    <ScrollArea className="mb-10 h-72 w-full">
      <div className="grid grid-cols-4 gap-6 p-1 sm:grid-cols-5">
        {nfts.map((nft) => {
          const isAlreadyBound =
            nft.contract.address.toUpperCase() ===
              contractAddress?.toUpperCase() && +nft.tokenId === tokenId;

          return (
            <Avatar
              key={`${nft.contract.address}${nft.tokenId}`}
              onClick={() =>
                isAlreadyBound
                  ? null
                  : onSelect({
                      contract: nft.contract.address,
                      tokenId: +nft.tokenId,
                    })
              }
              className={cn(
                selected?.contract === nft.contract.address &&
                  selected?.tokenId === +nft.tokenId &&
                  "shadow-lg ring-2 ring-theme-500 "
              )}
            >
              <AvatarImage
                src={nft.media[0]?.thumbnail}
                className={cn(
                  isAlreadyBound
                    ? "cursor-default opacity-40"
                    : "cursor-pointer"
                )}
              />
              <AvatarFallback
                className={cn(
                  isAlreadyBound
                    ? "cursor-default opacity-40"
                    : "cursor-pointer"
                )}
              >
                <ImageOff />
              </AvatarFallback>
            </Avatar>
          );
        })}
      </div>
    </ScrollArea>
  );
};
