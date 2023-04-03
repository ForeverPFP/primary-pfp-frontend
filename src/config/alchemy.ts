import { GOERLI_NETWORK } from "./env";
import { Network } from "alchemy-sdk";
import { env } from "process";

export const alchemySettings = {
  apiKey: env.ALCHEMY_API_KEY,
  network:
    env.NETWORK === GOERLI_NETWORK ? Network.ETH_GOERLI : Network.ETH_MAINNET,
};
