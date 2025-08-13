import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductsInCart } from "./UI/ProductsInCart";

export default async function CartPage() {

  // if(productsInCart.length === 0) {
  //   redirect("/empty");
  // }

  return (
    <main className="flex justify-center items-center mb-72 px-6 sm:px-0">
      <section className="flex flex-col w-[1000px]">
        <Title title="Cart" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Cart items will be rendered here */}

          <div className="flex flex-col mt-5">
            <span className="text-lg font-bold">Agregar más artículos</span>

            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="hover:text-blue-700 underline transition-all duration-300 "
              >
                Ir a la tienda
              </Link>
{/* 
              <span className="text-sm font-bold">
                {productsInCart.length} item
                {productsInCart.length === 1 ? "" : "s"}
              </span> */}
            </div>

            {/*  Cart items */}
            <ProductsInCart />
          </div>

          {/* Cart summary - Checkout */}
          {/* <div className="flex flex-col bg-white shadow-lg p-5 rounded-lg">
            <h2 className="text-xl font-bold">Resumen del carrito</h2>
            <span className="text-sm text-gray-500">
              {productsInCart.length} item
              {productsInCart.length === 1 ? "" : "s"} en el carrito
            </span>
            <div className="flex flex-col gap-3 my-5">
              {productsInCart.map((product) => (
                <div
                  key={product.slug}
                  className="flex items-center justify-between"
                >
                  <span>{product.title}</span>
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col border-t py-4 px-2 border-gray-300">
              <div className="flex items-center justify-between">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">
                  $
                  {productsInCart
                    .reduce((total, product) => total + product.price, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Impuesto (15%)</span>
                <span className="font-bold">
                  $
                  {productsInCart
                    .reduce((total, product) => total + product.price * 0.15, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold">
                  $
                  {productsInCart
                    .reduce((total, product) => total + product.price * 1.15, 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>
            <Link href="/checkout/address" className="btn-primary mt-2 text-center">
              Checkout
            </Link>
            <button className="btn-secondary mt-4">Vaciar carrito</button>
          </div> */}
        </div>
      </section>
    </main>
  );
}
