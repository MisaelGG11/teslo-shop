"use client";

import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {

  const productsInCart = useCartStore.getState().cart;
  const updateQuantity = useCartStore((state) => state.updateProductQuantity);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  });

  if (!loaded) return (
    <div className="flex justify-center items-center h-72">
      <span className="text-white animate-spin">Loading...</span>
    </div>
  );

  return (
    <>
      {productsInCart.map((product) => (
        <div
          key={product.slug + '_' + product.size}
          className="flex items-center gap-4 p-4 border-b border-gray-300"
        >
          <Image
            src={"/products/" + product.image}
            alt={product.title}
            width={100}
            height={100}
            className="w-20 h-20 object-cover"
          />
          <div className="flex flex-col w-full">
            <h2 className="">{product.title}</h2>
            <span className="font-bold">${product.price.toFixed(2)}</span>
            <div className="flex">
              <QuantitySelector
                quantity={product.quantity}
                onQuantityChange={(quantity) =>
                  updateQuantity(product.id, quantity)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
