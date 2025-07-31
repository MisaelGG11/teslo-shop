import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { QuantitySelector } from "@/components";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  // Add more products as needed
]; // This would be replaced with actual cart data

export default async function CheckoutPage() {
  return (
    <main className="flex justify-center items-center mb-72 px-6 sm:px-0">
      <section className="flex flex-col w-[1000px]">
        <Title title="Checkout" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Cart items will be rendered here */}

          <div className="flex flex-col mt-5">
            <span className="text-lg font-bold">Ajustar artículos</span>

            <div className="flex items-center justify-between">
              <Link
                href="/cart"
                className="hover:text-blue-700 underline transition-all duration-300 "
              >
                Editar carrito
              </Link>

              <span className="text-sm font-bold">
                {productsInCart.length} item
                {productsInCart.length === 1 ? "" : "s"}
              </span>
            </div>

            {/*  Cart items */}
            {productsInCart.map((product) => (
              <div
                key={product.slug}
                className="flex items-center gap-4 p-4 border-b border-gray-300"
              >
                <Image
                  src={"/products/" + product.images[0]}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex flex-col w-full">
                  <h2 className="">{product.title}</h2>
                  <span className="font-semibold">
                    ${product.price.toFixed(2)} x 1
                  </span>
                  <span className="font-bold">
                    Subtotal: ${(product.price * 1).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Cart summary - Checkout */}
          <div className="flex flex-col bg-white shadow-lg p-5 rounded-lg">
            {/* Address and Payment Details */}
            <h2 className="text-xl font-bold">Resumen del pedido</h2>
            <div className="mb-3 pb-3 border-b border-gray-300">
              <h3 className="font-semibold mb-2 ">Dirección de envío</h3>
              <div className="text-sm text-gray-700">
                <div>Juan Pérez</div>
                <div>Calle Falsa 123</div>
                <div>Colonia Centro</div>
                <div>Ciudad de México, CDMX</div>
                <div>C.P. 06000</div>
                <div>México</div>
                <div>Tel: +52 55 1234 5678</div>
              </div>
              <Link
                href="/checkout/address"
                className="text-blue-600 underline text-xs mt-1 inline-block"
              >
                Editar dirección
              </Link>
            </div>

            <h2 className="text-lg font-semibold">Artículos del carrito</h2>
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

            {/* Disclaimer */}
            <p className="mb-5">
              {/* Disclaimer */}
              <span className="text-xs leading-0.5">
                Al hacer clic en &quot;Completar orden&quot;, aceptas nuestros{" "}
                <a href="#" className="underline">
                  términos y condiciones
                </a>{" "}
                y{" "}
                <a href="#" className="underline">
                  política de privacidad
                </a>
              </span>
            </p>

            {/* Checkout Button */}
            <Link href="/orders/123" className="btn-primary mt-2 text-center">
              Completar orden
            </Link>
            <button className="btn-secondary mt-4">Vaciar carrito</button>
          </div>
        </div>
      </section>
    </main>
  );
}
