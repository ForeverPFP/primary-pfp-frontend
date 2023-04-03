import type { NextApiRequest, NextApiResponse } from "next";

import { Alchemy } from "alchemy-sdk";
import { alchemySettings } from "@/config/alchemy";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).end();
    return;
  }

  const { contract, tokenId } = req.query;
  const alchemy = new Alchemy(alchemySettings);
  const data = await alchemy.nft.getNftMetadata(
    contract as string,
    tokenId as string,
    {}
  );
  return res.status(200).json(data);
}
