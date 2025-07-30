import { Product } from "@/interfaces";
import Image from "next/image";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {/* Product items will be rendered here */}
      {products.map((product) => (
        <div key={product.slug} className="p-4 rounded-xl shadow-lg">
          <Image
            src={'/products/' + product.images[0]}
            alt={product.title}
            width={200}
            height={400}
            className="w-full object-cover rounded-lg mb-2"
          />
          <h3 className="font-bold">{product.title}</h3>
          <hr className="my-2" />
          <p className="font-light truncate">{product.description}</p>
          <p className="font-semibold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
}