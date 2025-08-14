"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { useCartStore } from "@/store";
import { QuantitySelector } from "@/components";

import { IoSyncCircleOutline } from "react-icons/io5";

export const ProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateProductQuantity);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  });

  if (!loaded)
    return (
      <div className="flex justify-center items-center h-72">
        <span className="animate-spin">
          <IoSyncCircleOutline className="text-slate-800" size={50} />
        </span>
      </div>
    );

  return (
    <>
      {productsInCart.map((product) => (
        <div
          key={product.slug + "_" + product.size}
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
            <Link
              href={`/products/${product.slug}`}
              className="cursor-pointer hover:underline"
            >
              <h2 className="">{product.title}</h2>
            </Link>
            <span className="text-sm text-gray-500">
              Size:{" "}
              <span className="text-xs px-1.5 border rounded-full bg-gray-700 text-white">
                {product.size}
              </span>
            </span>
            <span className="font-bold">${product.price.toFixed(2)}</span>
            <div className="flex">
              <QuantitySelector
                quantity={product.quantity}
                onQuantityChange={(quantity) =>
                  updateQuantity(product, quantity)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
