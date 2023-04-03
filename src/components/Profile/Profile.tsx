import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardTitle } from "../ui/card";

import React from "react";
import { Text } from "../ui/text";
import { Unbind } from "./Unbind";
import { User } from "lucide-react";
import { locales } from "@/locales";
import { useGetPFP } from "@/hooks/useGetPFP";
import { useNftMetata } from "@/hooks/useNftMetadata";
import { useUser } from "@/hooks/useUser";

export const Profile: React.FC = () => {
  const { isConnected, ensName, formattedAdr } = useUser();
  const { contractAddress, tokenId, pfpBinded } = useGetPFP();
  const { metadata } = useNftMetata(contractAddress, tokenId);

  if (!isConnected) return null;

  return (
    <>
      <Card>
        <CardTitle className="text-center mb-8">Your profile</CardTitle>
        <Avatar className="mx-auto h-40 w-40">
          <AvatarImage src={metadata?.media[0].thumbnail} />
          <AvatarFallback>
            <User className="w-8 h-8" />
          </AvatarFallback>
        </Avatar>
        <Text variant={"large"} className="tracking-tight text-center my-6">
          {ensName ?? formattedAdr}
        </Text>
        {pfpBinded ? (
          <Unbind />
        ) : (
          // <h2 className="text-center py-2 text-red-500 text-md leading-6">
          <Text
            variant={"large"}
            className="tracking-tight text-center my-6 text-red-500"
          >
            {locales.noPfpBinded}
          </Text>
        )}
      </Card>
    </>
  );
};
