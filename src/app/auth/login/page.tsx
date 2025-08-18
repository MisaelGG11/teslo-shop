import { titleFont } from "@/config/fonts";

import { LoginForm } from "./UI/LoginForm";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage() {

  const session = await auth();

  if (session?.user) redirect("/");

  return (
    <main className="flex flex-col min-h-screen justify-center">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

      <LoginForm />
    </main>
  );
}
