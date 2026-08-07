"use client";

import { useEffect } from "react";

export default function Error({
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
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="font-nacelle text-3xl font-semibold text-gray-100">
        Algo salió mal
      </h2>
      <p className="max-w-md text-gray-400">
        Hubo un problema al cargar la ruleta. Intentá recargar la página.
      </p>
      <button
        onClick={reset}
        className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)]"
      >
        Reintentar
      </button>
    </div>
  );
}
