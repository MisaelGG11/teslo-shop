'use client';

import { generatePaginationNumbers } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({
  totalPages,
}: Props) => {

  const pathName = usePathname();
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get('page')) || 1;
  
  const allPages = generatePaginationNumbers(currentPage, totalPages);
  

  const createPageUrl = ( pageNumber: number | string ) => {

    const params = new URLSearchParams( searchParams );

    if ( +pageNumber <= 0 ) {
      return `${ pathName }`; //   href="/kid";
    }

    if ( +pageNumber > totalPages ) { // Next > 
      return `${ pathName }?${ params.toString() }`;
    }

    params.set('page', pageNumber.toString());
    return `${  pathName }?${ params.toString() }`;

  }

  return (
    <div className="flex justify-center mt-10">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className={ clsx("page-item ", {
            'opacity-50': currentPage === 1
          })}>
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={ createPageUrl(currentPage - 1) }
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>

          {allPages.map((page, index) => (
            <li key={index} className="page-item">
              <Link
                className={`page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded ${page === currentPage ? 'text-blue-600 bg-blue-100' : 'text-gray-800 hover:text-gray-800 hover:bg-gray-200'}`}
                href={createPageUrl(page)}
              >
                {page === -1 ? '...' : page}
              </Link>
            </li>
          ))}

          <li className={ clsx("page-item ", {
            'opacity-50': currentPage === totalPages
          })}>
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={ createPageUrl(currentPage + 1) }
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
