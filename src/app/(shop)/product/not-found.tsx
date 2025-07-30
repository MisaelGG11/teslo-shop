import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-reverse md:flex-row h-[700px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h1 className={`${titleFont.className} antialiased text-9xl`}>404</h1>
        <p className="font-semibold text-xl">
          Lo sentimos, el producto que buscas no existe.
        </p>
        <p className="font-light">
          <span className="">
            Verifica la URL o regresa a la página principal - {" "}
          </span>
          <Link href="/" className="transition-all duration-500 ease-in-out hover:underline">
            Inicio
          </Link>
        </p>
      </div>


      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          width={400}
          height={400}
          className="rounded-lg p-5 sm:p-0"
        />
      </div>
    </main>
  );
}
