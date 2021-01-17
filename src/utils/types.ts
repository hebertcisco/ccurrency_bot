export interface IConversionRates {
  USD: string;
  AED: string;
  ARS: string;
  AUD: string;
  BGN: string;
  BRL: string;
  BSD: string;
  CAD: string;
  CHF: string;
  CLP: string;
  CNY: string;
  COP: string;
  CZK: string;
  DKK: string;
  DOP: string;
  EGP: string;
  EUR: string;
  FJD: string;
  GBP: string;
  GTQ: string;
  HKD: string;
  HRK: string;
  HUF: string;
  IDR: string;
  ILS: string;
  INR: string;
  ISK: string;
  JPY: string;
  KRW: string;
  KZT: string;
  MVR: string;
  MXN: string;
  MYR: string;
  NOK: string;
  NZD: string;
  PAB: string;
  PEN: string;
  PHP: string;
  PKR: string;
  PLN: string;
  PYG: string;
  RON: string;
  RUB: string;
  SAR: string;
  SEK: string;
  SGD: string;
  THB: string;
  TRY: string;
  TWD: string;
  UAH: string;
  UYU: string;
  ZAR: string;
}
export interface IExchangeRate {
  conversion_rates: IConversionRates;
}
export interface IcardInfos {
  ref: string;
  title: string;
  description: string;
}

export interface IInfoFooter {
  ref: string;
  title: string;
  image: string;
}
export interface IDolarTodayDefault {
  default: string;
  base: string;
  BRL: string;
}
