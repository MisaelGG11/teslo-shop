'use server';

import prisma from "@/lib/prisma"

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      ProductImage: true,
      category: true,
    },
  });

  if (!product) {
    throw new Error("Producto no encontrado");
  }

  const productWithImages = {
    ...product,
    images: product.ProductImage.map((img) => img.url),
  };

  return productWithImages;
};