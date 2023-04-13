import { Button } from "../ui/button";
import { Error } from "../ui/Error";
import { ExploreLink } from "../ExplorerLink";
import { Infos } from "../ui/Infos";
import { NftData } from "./BindPFP";
import React from "react";
import { Success } from "../ui/Success";
import { locales } from "@/locales";
import { useBind } from "@/hooks/useBind";

interface BindProps {
  selectedNft: NftData | null;
}

export default ExploreLink;

export const Bind: React.FC<BindProps> = ({ selectedNft }) => {
  const {
    bind,
    error,
    isError,
    isLoading,
    transactionPending,
    isSuccess,
    transactionUrl,
    transactionHash,
  } = useBind(selectedNft?.contract, selectedNft?.tokenId);

  return (
    <div className="">
      <Button
        className="w-full"
        disabled={selectedNft === null}
        onClick={bind}
        loading={isLoading}
      >
        {locales.bindSelectedPfp}
      </Button>
      {isError ? (
        <Error>
          {error?.message} <br />
          {transactionHash ? <ExploreLink href={transactionUrl} /> : null}
        </Error>
      ) : null}
      {transactionPending ? (
        <Infos>
          {locales.transactionPending} <br />
          <ExploreLink href={transactionUrl} />
        </Infos>
      ) : null}
      {isSuccess ? (
        <Success>
          {locales.transactionSuccess}
          <br />
          <ExploreLink href={transactionUrl} />
        </Success>
      ) : null}
    </div>
  );
};
