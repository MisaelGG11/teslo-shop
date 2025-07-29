export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header className="bg-teal-800 text-white p-4">
        <h1 className="text-2xl font-bold">Auth</h1>
      </header>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
