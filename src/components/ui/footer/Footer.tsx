import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-10">
      <div className="mx-auto text-center">
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold `}>
            Teslo{" "}
          </span>
          <span>| shop </span>
          <span>© {new Date().getFullYear()}</span>
        </Link>
        <p className="text-xs mt-2">
          Follow us on
          <a
            href="https://twitter.com"
            className="text-gray-500 ml-1 font-semibold hover:underline"
            target="_blank"
          >
            Twitter
          </a>
          <span className="mx-1">|</span>
          <a
            href="https://facebook.com"
            className="text-gray-500 ml-1 font-semibold hover:underline"
            target="_blank"
          >
            Facebook
          </a>
          <span className="mx-1">|</span>
          <a
            href="https://instagram.com"
            className="text-gray-500 ml-1 font-semibold hover:underline"
            target="_blank"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};
