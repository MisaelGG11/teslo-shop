import { Title, ProductGrid } from "@/components";
import { titleFont } from "@/config/fonts";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";

const products: Product[] = initialData.products;

export default function Home() {
  return (
    <>
      <main className={`${titleFont.className} font-bold px-5 md:px-0`}>
        <Title
          title="Welcome to the Shop"
          subTitle="Find the best products here."
          className="mb-2"
        />

        <ProductGrid products={products} />
      </main>
    </>
  );
}
