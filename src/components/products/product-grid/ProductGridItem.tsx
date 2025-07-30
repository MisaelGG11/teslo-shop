'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interfaces";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {

  const [display, setDisplay] = useState(product.images[0]);

  const handleMouseOver = () => {
    setDisplay(product.images[1] || product.images[0]);
  };

  const handleMouseOut = () => {
    setDisplay(product.images[0]);
  };

  return (
    <div key={product.slug} className="rounded-xl shadow fade-in">
      <Image
        src={"/products/" + display}
        alt={product.title}
        width={400}
        height={400}
        className="w-full object-cover rounded-lg"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      />
      <div className="p-4">
        <Link href={`/product/${product.slug}`} className="font-light hover:text-blue-700 transition-all">{product.title}</Link>
        <p className="font-semibold">${product.price}</p>
      </div>
    </div>
  );
};
