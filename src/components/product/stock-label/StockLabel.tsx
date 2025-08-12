"use client";

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    const stock = await getStockBySlug(slug);
    setStock(stock);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1
          className={` ${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse `}
        >
          &nbsp;
        </h1>
      ) : (
        stock === 0 ? (
        <h1 className={` ${titleFont.className} antialiased font-bold text-lg text-red-500`}>
          Sin stock
        </h1>
      ) : (
        <h1 className={` ${titleFont.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      ))}
    </>
  );
};
