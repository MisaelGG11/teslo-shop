import { titleFont } from "@/config/fonts";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { SizeSelector, QuantitySelector, Slideshow, MobileSlideshow } from "@/components";

const products: Product[] = initialData.products;

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((prod) => prod.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        <Slideshow 
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />

        <MobileSlideshow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price.toFixed(2)}</p>

        {/* Selector de Tallas */}
        <SizeSelector availableSizes={product.sizes} selectedSize={product.sizes[0]} />

        {/* Selector de Cantidad */}
        <QuantitySelector quantity={2} />


        {/* Button */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </main>
  );
}
