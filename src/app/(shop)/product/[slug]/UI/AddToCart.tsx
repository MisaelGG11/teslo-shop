"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Size } from "@/interfaces";
import { useState } from "react";

interface Props {
  sizes : Size[];
}

export const AddToCart = ({ sizes }: Props) => {

  const [size, setSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [posted, setPosted] = useState(false);


  const addItemToCart = () => {
    setPosted(true);

    console.log("Producto agregado al carrito", {
      size,
      quantity
    });
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
          availableSizes={sizes}
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