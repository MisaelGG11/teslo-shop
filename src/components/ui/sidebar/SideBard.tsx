"use client";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

const sideBardItems = [
  { name: "Perfil", icon: IoPersonOutline, path: "/" },
  { name: "Ordenes", icon: IoTicketOutline, path: "/" },
  { name: "Ingresar", icon: IoLogInOutline, path: "/" },
  { name: "Salir", icon: IoLogOutOutline, path: "/" },
  { name: "Productos", icon: IoShirtOutline, path: "/" },
  { name: "Usuarios", icon: IoPeopleOutline, path: "/" },
];

export const SideBard = () => {
  const isSideBarOpen = useUIStore((state) => state.isSidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <>
      {isSideBarOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-[#00000070] backdrop-blur-sm z-10"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={clsx(
          "fixed right-0 top-0 w-72 h-screen bg-white shadow-lg z-20 p-4 transform transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isSideBarOpen,
          }
        )}
      >
        <IoCloseOutline
          className="text-2xl cursor-pointer absolute top-4 right-4 hover:bg-gray-100 rounded-full p-0.5"
          onClick={toggleSidebar}
        />

        <Link href="/" className="text-base md:text-xl px-2">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo&nbsp;
          </span>
          <span className="">| Shop</span>
        </Link>
        {/* Sidebar content goes here */}

        {/* Input */}
        <div className="relative mt-10 mb-8">
          <IoSearchOutline size={18} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}

        {sideBardItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center space-x-2 p-2 mt-4 rounded-md hover:bg-gray-100 transition-colors"
          >
            <item.icon size={22} />
            <span className="text-">{item.name}</span>
          </Link>
        ))}
      </aside>
    </>
  );
};
