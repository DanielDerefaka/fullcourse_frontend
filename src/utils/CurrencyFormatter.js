// import { NumberFormat } from "react-number-format";

export const CurrencyFormatter = (number) => {
  return `₦${number
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
  //   return (
  //     <NumberFormat value={number} displayType="text" thousandSeparator={true} />
  //   );
};
