import { useContractRead, useNetwork } from "wagmi";

import { BigNumber } from "ethers";
import FOREVER_PFP_ABI from "@/abi/forever-pfp-abi.json";
import { env } from "@/config";
import { useUser } from "./useUser";

export const useGetPFP = () => {
  const { address } = useUser();

  const { data, isLoading, error, refetch } = useContractRead({
    abi: FOREVER_PFP_ABI,
    address: env.FOREVER_PFP_CONTRACT,
    functionName: "getPFP",
    args: [address],
  });

  const [contractAddress, tknId] =
    (data as [string | undefined, BigNumber | undefined]) ?? [];
  const tokenId = tknId?.toNumber();

  const pfpBinded =
    "0x0000000000000000000000000000000000000000" === contractAddress &&
    tokenId === 0
      ? false
      : true;

  return {
    isLoading,
    error,
    tokenId,
    contractAddress,
    pfpBinded,
    refetch,
  };
};
