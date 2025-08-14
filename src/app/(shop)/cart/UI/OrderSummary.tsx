"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { useCartStore } from "@/store";
import { QuantitySelector } from "@/components";

import { IoSyncCircleOutline } from "react-icons/io5";
import { currencyFormat } from "@/utils";

export const OrderSummary = () => {
  const productsInCart = useCartStore((state) => state.cart);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const clearCart = useCartStore((state) => state.clearCart);

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
    <div className="flex flex-col bg-white shadow-lg p-5 rounded-lg">
      <h2 className="text-xl font-bold">Resumen del carrito</h2>
      <span className="text-sm text-gray-500">
        {totalItems} item
        {totalItems === 1 ? "" : "s"} en el carrito
      </span>
      <div className="flex flex-col gap-3 my-5">
        {productsInCart.map((product) => (
          <div
            key={product.slug + "_" + product.size}
            className="flex items-center justify-between gap-3"
          >
            <span>
              {product.title} ({product.size}) <b>X {product.quantity}</b>
            </span>
            <span className="font-bold">
              {currencyFormat(product.price * product.quantity)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col border-t py-4 px-2 border-gray-300">
        <div className="flex items-center justify-between">
          <span className="font-bold">Subtotal</span>
          <span className="font-bold">
            {currencyFormat(
              productsInCart.reduce(
                (total, product) => total + product.price * product.quantity,
                0
              )
            )}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">Impuesto (15%)</span>
          <span className="font-bold">
            {currencyFormat(
              productsInCart.reduce(
                (total, product) =>
                  total + product.price * product.quantity * 0.15,
                0
              )
            )}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">
            {currencyFormat(
              productsInCart.reduce(
                (total, product) =>
                  total + product.price * product.quantity * 1.15,
                0
              )
            )}
          </span>
        </div>
      </div>
      <Link href="/checkout/address" className="btn-primary mt-2 text-center">
        Checkout
      </Link>
      <button className="btn-secondary mt-4" onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
};
