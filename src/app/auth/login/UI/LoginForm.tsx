"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useActionState } from "react";

import { authenticate } from "@/actions";
import clsx from "clsx";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border border-gray-400 bg-gray-200 rounded mb-5"
        id="email"
        name="email"
        type="email"
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border border-gray-400 bg-gray-200 rounded mb-5"
        id="password"
        name="password"
        type="password"
      />

      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <button type="submit" className={
        clsx({
          "btn-loading": isPending,
          "btn-primary": !isPending
        })
      } disabled={isPending}>
        {isPending ? "Cargando..." : "Ingresar"}
      </button>

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>

      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
