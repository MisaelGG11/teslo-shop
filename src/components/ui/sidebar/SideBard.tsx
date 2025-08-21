"use client";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
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

const sideBardUserItems = [
  { name: "Perfil", icon: IoPersonOutline, path: "/profile" },
  { name: "Ordenes", icon: IoTicketOutline, path: "/" },
];

const sideBardAdminItems = [
  { name: "Productos", icon: IoShirtOutline, path: "/" },
  { name: "Ordenes", icon: IoTicketOutline, path: "/" },
  { name: "Usuarios", icon: IoPeopleOutline, path: "/" },
];

export const SideBard = () => {
  const isSideBarOpen = useUIStore((state) => state.isSidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  const { data: session, update, status } = useSession();

  const isAuthenticated = !!session?.user;

  const hasUpdatedSession = useRef(false);

  useEffect(() => {
    if (isSideBarOpen && !hasUpdatedSession.current) {
      update();
      hasUpdatedSession.current = true;
    }
    if (!isSideBarOpen) {
      hasUpdatedSession.current = false;
    }
  });

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

        { status === 'loading' && (
          <div className="flex justify-center items-center h-60">
            <p>Cargando...</p>
          </div>
          )}

        {isAuthenticated &&
          sideBardUserItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={toggleSidebar}
              className="flex items-center space-x-2 p-2 mt-8 rounded-md hover:bg-gray-100 transition-colors"
            >
              <item.icon size={22} />
              <span className="text-">{item.name}</span>
            </Link>
          ))}

        {isAuthenticated && (
          <button
            onClick={() => {
              signOut();
            }}
            className="flex w-full items-center space-x-2 p-2 mt-4 rounded-md hover:bg-gray-100 transition-colors"
          >
            <IoLogOutOutline size={22} />
            <span className="text-">Salir</span>
          </button>
        )}

        {!isAuthenticated && (
          <Link
            key="login"
            href="/auth/login"
            onClick={toggleSidebar}
            className="flex items-center space-x-2 p-2 mt-4 rounded-md hover:bg-gray-100 transition-colors"
          >
            <IoLogInOutline size={22} />
            <span className="text-">Ingresar</span>
          </Link>
        )}

        <hr className="my-4 border-gray-300" />

        {isAuthenticated &&
          session.user.role === "admin" &&
          sideBardAdminItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={toggleSidebar}
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
