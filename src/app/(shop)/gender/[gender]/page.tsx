export const revalidate = 60; // Revalidate every 60 seconds

import { Pagination, ProductGrid, Title } from "@/components";
import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";
import { Gender } from "@/generated/prisma";
import { getPaginatedProductsWithImages } from "@/actions";

interface Props {
  params: Promise<{ gender: string }>;
  searchParams: Promise<{ page?: string; take?: string; }>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = await params;
  const sParams = await searchParams;

  const page = sParams.page ? parseInt(sParams.page) : 1;
  const take = sParams.take ? parseInt(sParams.take) : 12;


  const validCategories: Record<string, string> = {
    men: "Men's Clothing",
    women: "Women's Clothing",
    kid: "Kids' Clothing",
    unisex: "Unisex Clothing",
  };

  if (!Object.keys(validCategories).includes(gender)) {
    return notFound();
  }

  const { products, totalPages, currentPage } =
    await getPaginatedProductsWithImages({
      page,
      take,
      gender: (gender as Gender),
    });

  return (
    <>
      <main className={`${titleFont.className} font-bold px-5 md:px-0`}>
        <Title title={validCategories[gender]} className="mb-10 capitalize" />

        <ProductGrid products={products} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </main>
    </>
  );
}
