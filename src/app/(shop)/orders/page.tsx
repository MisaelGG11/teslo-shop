import { Title } from "@/components";

import Link from "next/link";
import { IoCardOutline, IoOpenOutline } from "react-icons/io5";

export default async function OrdersPage() {
  return (
    <main>
      <Title title="Orders" />

      <div className="my-10">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                #ID
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Nombre completo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Estado
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200 transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                1
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center py-1 rounded-full bg-green-800 gap-2 w-28">
                  <IoCardOutline className="text-white" />
                  <span className="text-white font-semibold">Pagada</span>
                </div>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 ">
                <Link href="/orders/123" className="flex items-center gap-1 hover:underline">
                  Ver orden <IoOpenOutline className="" />
                </Link>
              </td>
            </tr>

            <tr className="bg-white border-b border-gray-200 transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                2
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center py-1 rounded-full bg-red-800 gap-2 w-28">
                  <IoCardOutline className="text-white" />
                  <span className="text-white font-semibold">No Pagada</span>
                </div>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 ">
                <Link href="/orders/123" className="flex items-center gap-1 hover:underline">
                  Ver orden <IoOpenOutline className="" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
