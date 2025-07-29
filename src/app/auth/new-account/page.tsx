export const metadata = {
  title: "New Account",
  description: "Create a new account",
};

export default async function NewAccountPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Create New Account</h2>
        {/* New account form goes here */}
      </div>
    </main>
  );
}
