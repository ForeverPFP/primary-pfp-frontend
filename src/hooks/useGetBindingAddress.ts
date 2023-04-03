import { useContractRead, useNetwork } from "wagmi";

import FOREVER_PFP_ABI from "@/abi/foreverPFP.json";
import { env } from "@/config";

export const useGetBindingAddress = (nftContract: string, tokenId: number) => {
  const { data, isLoading, error } = useContractRead({
    abi: FOREVER_PFP_ABI,
    address: env.FOREVER_PFP_CONTRACT,
    functionName: "getBindingAddress",
    args: [nftContract, tokenId],
  });

  return {
    isLoading,
    error,
    bindedAddress: data,
  };
};
