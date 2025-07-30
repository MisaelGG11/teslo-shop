import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  const validCategories = [ 'men', 'women', 'children' ];

  if (!validCategories.includes(id)) {
    return notFound();
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Category: {id}</h1>
      <p>Displaying products for category {id}</p>
    </main>
  );
}