import { NowRequest, NowResponse } from "@vercel/node";

import { IConversionRates } from "../../../../utils/types";

export default async (req: NowRequest, res: NowResponse) => {
  const {
    query: { base, b2b },
  } = req;
  const response = await fetch(`${process.env.BASE_URL}`);
  const data: IConversionRates = await response.json();

  switch (b2b) {
    case "BRL":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data[0].BRL);
      break;

    case "CAD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data[0].CAD);
      break;

    case "EUR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data[0].EUR);
      break;

    case "USD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data[0].USD);
      break;

    default:
      if (base === "BRL") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.json({
          error: `${base} cannot be converted to itself`,
        });
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.json({
          default: `${base} to BRL`,
          base: `${base}: ${data[0].USD}`,
          BRL: data[0].BRL,
        });
      }
  }
};
