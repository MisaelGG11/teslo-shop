export const metadata = {
  title: "Login",
  description: "Login to your account"
};

export default async function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {/* Login form goes here */}
      </div>
    </main>
  );
}
