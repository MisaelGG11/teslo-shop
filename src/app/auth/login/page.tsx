import { titleFont } from "@/config/fonts";
import Link from "next/link";

import { LoginForm } from "./UI/LoginForm";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage() {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

      <LoginForm />
    </main>
  );
}
