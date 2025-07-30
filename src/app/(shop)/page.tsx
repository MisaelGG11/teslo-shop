import { Title } from "@/components/ui/Title/Title";
import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={`${titleFont.className} font-bold`}>
        <Title title="Welcome to the Shop" subTitle="Find the best products here." className="mb-2"/>
      </main>
    </>
  );
}
