import { getPaginatedProductsWithImages } from "@/actions";
import { Title, ProductGrid } from "@/components";
import { titleFont } from "@/config/fonts";
import { Gender } from "@/generated/prisma";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{ page?: string, take?: string, gender?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const take = params.take ? parseInt(params.take) : 12;

  const { products, totalPages, currentPage } = await getPaginatedProductsWithImages({
    page,
    take,
    gender: params.gender as Gender,
  });

  console.log("Current Page:", currentPage);
  console.log("Total Pages:", totalPages);

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
      </main>
    </>
  );
}
