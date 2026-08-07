"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-gray-950 font-inter text-gray-200 antialiased">
        <main className="flex min-h-screen items-center justify-center px-6 text-center">
          <div className="space-y-4">
            <h1 className="font-nacelle text-4xl font-semibold text-gray-100">
              Error inesperado
            </h1>
            <p className="max-w-md text-gray-400">
              La aplicación no pudo renderizarse correctamente.
            </p>
            <button
              onClick={reset}
              className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)]"
            >
              Reintentar
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
