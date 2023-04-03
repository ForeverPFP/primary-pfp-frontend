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
      <div className="h-72 w-full mb-10 flex items-center justify-center flex-col">
        <FrownIcon className="text-gray-400 h-12 w-12 mb-6" />
        <p className="text-gray-400 text-lg font-bold">{locales.noNftsFound}</p>
      </div>
    );

  return (
    <ScrollArea className="h-72 w-full mb-10">
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 p-1">
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
                  "ring-2 ring-theme-500 shadow-lg "
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
