"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product, CartProduct, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {

  const addProductToCart = useCartStore((state) => state.addToCart);

  const [size, setSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [posted, setPosted] = useState(false);


  const addItemToCart = () => {
    setPosted(true);

    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      size,
      quantity,
      image: product.images[0],
    };

    addProductToCart(cartProduct);

    setPosted(false);
    setSize(null);
    setQuantity(1);
  }


  return (
    <>
      {
        posted && !size && (
          <div className="text-red-500 mt-2">
            Debe seleccionar una talla
          </div>
        )
      }

      {/* Selector de Tallas */}
        <SizeSelector 
          availableSizes={product.sizes}
          selectedSize={size} 
          onSizeChange={setSize}
        />

        {/* Selector de Cantidad */}
        <QuantitySelector 
          quantity={quantity} 
          onQuantityChange={setQuantity}
        />

        {/* Button */}
        <button 
          className="btn-primary my-5"
          onClick={addItemToCart}
        >
          Agregar al carrito
        </button>
    </>
  );
};