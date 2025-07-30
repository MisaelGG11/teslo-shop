import { TopMenu, SideBard } from "@/components";

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen px-0 sm:px-10">
      <TopMenu />
      <SideBard />
      
      {children}
    </main>
  );
}
