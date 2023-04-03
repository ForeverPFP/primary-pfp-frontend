import { useAccount, useEnsAvatar, useEnsName, useQuery } from "wagmi";

export const useUser = () => {
  const { isConnected, address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ address });

  const formattedAdr = address
    ? `${address.substring(0, 8)}…${address.substring(
        address.length - 8,
        address.length
      )}`
    : "";

  return {
    isConnected,
    address,
    ensName,
    ensAvatar,
    formattedAdr,
  };
};
