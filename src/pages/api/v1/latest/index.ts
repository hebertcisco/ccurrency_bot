import { NowRequest, NowResponse } from "@vercel/node";

import { IExchangeRate } from "../../../../utils/types";

export default async (req: NowRequest, res: NowResponse) => {
  const response = await fetch(`${process.env.BASE_URL}`);
  const data: IExchangeRate = await response.json();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.json(data);
};
