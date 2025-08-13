"use client";

import { titleFont } from "@/config/fonts";
import { useUIStore, useCartStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const categories = [
  { name: "Hombres", path: "/gender/men" },
  { name: "Mujeres", path: "/gender/women" },
  { name: "Niños", path: "/gender/kid" },
];

export const TopMenu = () => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}

      <div>
        <Link href="/" className="text-base md:text-lg">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo&nbsp;
          </span>
          <span className="">| Shop</span>
        </Link>
      </div>

      <div className="hidden sm:flex items-center space-x-2 py-1">
        {/* Category Links */}
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.path}
            className="p-2 transition ease-in-out duration-300 hover:bg-gray-100 rounded-md"
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            {loaded && (
              <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart()}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={toggleSidebar}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
