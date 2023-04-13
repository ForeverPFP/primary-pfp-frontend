import { env, keyStore } from "@/config";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import FOREVER_PFP_ABI from "@/abi/forever-pfp-abi.json";
import { useGetPFP } from "./useGetPFP";

export const useUnbind = () => {
  const { refetch, contractAddress, tokenId } = useGetPFP();

  const {
    config,
    isError: isPrepareError,
    error: prepareError,
  } = usePrepareContractWrite({
    address: env.FOREVER_PFP_CONTRACT,
    abi: FOREVER_PFP_ABI,
    functionName: "unbind",
    args: [contractAddress, tokenId],
    enabled: !!contractAddress && !!tokenId,
  });

  const { data, isLoading, write, error, isError } = useContractWrite(config);

  const {
    isError: isTransactionError,
    error: transactionError,
    isLoading: transactionPending,
    isSuccess,
  } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
      refetch();
    },
  });

  return {
    isLoading,
    error: prepareError || error || transactionError,
    isError: isPrepareError || isError || isTransactionError,
    unbind: write,
    transactionPending,
    transactionHash: data?.hash,
    transactionUrl: `${env.TX_EXPLORER}/${data?.hash}`,
    isSuccess,
  };
};
