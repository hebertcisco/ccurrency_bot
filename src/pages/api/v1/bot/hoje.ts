const { Telegraf } = require("telegraf");

import { NowRequest, NowResponse } from "@vercel/node";

import { IConversionRates } from "../../../../utils/types";

export default async (req: NowRequest, res: NowResponse) => {
  const {
    query: { base },
  } = req;
  const response_conversion_rates = await fetch(
    `http://localhost:3000/api/v1/latest/hoje?base=${base}`
  );
  const conversion_rates: IConversionRates = await response_conversion_rates.json();
  const brl = conversion_rates.BRL;
  const bot = new Telegraf(process.env.ER_TELEGRAM_API_KEY);
  let message = `1 ${base} está à *R$${brl.slice(0, 4)}* na cotação atual.`;

  bot.command("start", (ctx) =>
    ctx.replyWithMarkdown(`Olá, _${ctx.message.from.username}_, seja bem vindo`)
  );
  bot.command("dolarhoje", (ctx) => ctx.replyWithMarkdown(message));

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.json({ message: message });
  bot.launch();
};
