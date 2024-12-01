import { Currencies } from "./currencies";

export const DateToUTC = (date: Date) =>
  new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  );


  export const GetFormatterForCurrency = (currency: string) => {
    const locale = Currencies.find(c => c.value === currency)?.locale;

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency
    })
  }