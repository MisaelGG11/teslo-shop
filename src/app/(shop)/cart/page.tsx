import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductsInCart } from "./UI/ProductsInCart";
import { OrderSummary } from "./UI/OrderSummary";

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

            {/*  Cart items */}
            <ProductsInCart />
          </div>

          {/* Cart summary - Checkout */}
          <OrderSummary />
        </div>
      </section>
    </main>
  );
}
