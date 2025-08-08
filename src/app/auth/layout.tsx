export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md px-10">
        {children}
      </div>
    </div>
  );
}
