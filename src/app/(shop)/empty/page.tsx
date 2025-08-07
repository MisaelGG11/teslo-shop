import { Title } from "@/components";
import Link from "next/link";

import { IoCart, IoArrowForward, IoHeartCircleOutline } from "react-icons/io5";

export default async function EmptyPage() {
  return (
    <div className="flex flex-col p-8 text-center items-center">
      <div className="mb-8">
       <Title title="Your Cart" />
      </div>

      {/* Animated Cart Icon */}
      <div className="relative inline-block mb-6">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
          <IoCart className="w-12 h-12 text-slate-800" />
        </div>
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center animate-pulse">
          <IoHeartCircleOutline size={30} className="text-white" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        Your cart is empty
      </h3>
      <p className="text-gray-600 mb-6 max-w-sm mx-auto">
        Add some products to get started on your shopping journey!
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="btn-primary flex items-center gap-1.5"
        >
          <span>Start Shopping</span>
          <IoArrowForward />
        </Link>

        <Link
          href="/category/kid"
          className="btn-secondary flex items-center"
        >
          Browse Categories
        </Link>
      </div>
    </div>
  );
}
