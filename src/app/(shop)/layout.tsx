export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Shop</h1>
      </header>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
