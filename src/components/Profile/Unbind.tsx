import { Button } from "../ui/button";
import { Error } from "../ui/Error";
import { ExploreLink } from "../ExplorerLink";
import { Infos } from "../ui/Infos";
import React from "react";
import { Success } from "../ui/Success";
import { locales } from "@/locales";
import { useUnbind } from "@/hooks/useUnbind";

export const Unbind: React.FC = () => {
  const {
    unbind,
    error,
    isError,
    isLoading,
    transactionPending,
    isSuccess,
    transactionUrl,
  } = useUnbind();

  return (
    <div className="space-y-4">
      <Button
        variant="destructive"
        className="w-full"
        onClick={unbind}
        loading={isLoading}
      >
        {locales.removePfp}
      </Button>
      {isError ? (
        <Error>
          {error?.message} <br />
          <ExploreLink href={transactionUrl} />
        </Error>
      ) : null}
      {transactionPending ? (
        <Infos>
          {locales.transactionPending}
          <br />
          <ExploreLink href={transactionUrl} />
        </Infos>
      ) : null}
      {isSuccess ? (
        <Success>
          {locales.transactionSuccess} <br />
          <ExploreLink href={transactionUrl} />
        </Success>
      ) : null}
    </div>
  );
};
