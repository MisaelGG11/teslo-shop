export const revalidate = 60; // Revalidate every 60 seconds

import { redirect } from "next/navigation";

import { titleFont } from "@/config/fonts";
import { Title, ProductGrid, Pagination } from "@/components";

import { getPaginatedProductsWithImages } from "@/actions";

interface Props {
  searchParams: Promise<{ page?: string, take?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const take = params.take ? parseInt(params.take) : 12;

  const { products, totalPages, currentPage } = await getPaginatedProductsWithImages({
    page,
    take,
  });

  if(products.length === 0) {
    redirect('/');
  }

  return (
    <>
      <main className={`${titleFont.className} font-bold px-5 md:px-0`}>
        <Title
          title="Welcome to the Shop"
          subTitle="Find the best products here."
          className="mb-2"
        />

        <ProductGrid products={products} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </main>
    </>
  );
}
