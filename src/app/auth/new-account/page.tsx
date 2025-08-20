import { titleFont } from "@/config/fonts";

import { RegisterForm } from "./UI/RegisterForm";

export const metadata = {
  title: "New Account",
  description: "Create a new account",
};

export default async function NewAccountPage() {
  return (
 <main className="flex flex-col min-h-screen justify-center">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Nueva cuenta</h1>

      <RegisterForm />
    </main>
  );
}
