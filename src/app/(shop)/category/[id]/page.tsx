import { ProductGrid, Title } from "@/components";
import { notFound } from "next/navigation";

import { Category, Product } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { titleFont } from "@/config/fonts";

const products: Product[] = initialData.products;

interface Props {
  params: Promise<{ id: Category }>;
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  const validCategories: Record<Category, string> = {
    men: "Men's Clothing",
    women: "Women's Clothing",
    kid: "Kids' Clothing",
    unisex: "Unisex Clothing",
  }

  if (!Object.keys(validCategories).includes(id)) {
    return notFound();
  }
  
  const categoryProducts = products.filter(product => product.gender === id);

  return (
        <>
          <main className={`${titleFont.className} font-bold`}>
            <Title
              title={ validCategories[id] }
              className="mb-10 capitalize"
            />

            <ProductGrid products={categoryProducts} />
          </main>
        </>
  );
}