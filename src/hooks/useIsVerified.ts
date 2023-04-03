import { useContractRead, useNetwork } from "wagmi";

import FOREVER_PFP_ABI from "@/abi/foreverPFP.json";
import { env } from "@/config";

export const useIsVerified = (nftContract: string) => {
  const { data, isLoading, error } = useContractRead({
    abi: FOREVER_PFP_ABI,
    address: env.FOREVER_PFP_CONTRACT,
    functionName: "isVerified",
    args: [nftContract],
  });

  return {
    isLoading,
    error,
    isVerified: data,
  };
};
