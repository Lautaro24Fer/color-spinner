"use client";

import { useCallback, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import Roulette from "./Roulette";
import ResultCard from "./ResultCard";
import {
  colors,
  colorIndexToRotation,
  findColorIndex,
  type Color,
} from "@/config/colors";
import { getStoredResult, storeResult } from "@/utils/rouletteStorage";

const SPIN_TURNS = 5;

export default function RoulettePage({ username }: { username: string }) {
  const [winner, setWinner] = useState<Color | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const stored = getStoredResult(username);

    if (!stored) return;

    setWinner(stored);
    setRotation(colorIndexToRotation(findColorIndex(stored.hex), 3));
  }, [username]);

  const handleSpin = useCallback(() => {
    if (spinning) return;

    const chosen = colors[Math.floor(Math.random() * colors.length)];
    const index = colors.findIndex((color) => color.hex === chosen.hex);

    setWinner(chosen);
    storeResult(username, chosen);
    setRotation(colorIndexToRotation(index, SPIN_TURNS));
    setSpinning(true);
  }, [spinning, username]);

  return (
    <section className="relative flex min-h-screen grow flex-col items-center justify-center overflow-hidden px-5 py-10 text-center sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#e0f2fe_0,#f7f8fc_36%,#fff7ed_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-44 w-44 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />

      <div className="relative flex w-full max-w-[520px] flex-col items-center gap-7 rounded-[28px] border border-white/80 bg-white/80 px-5 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:px-8 sm:py-10">
        <header>
          <h1 className="font-nacelle text-4xl font-semibold text-slate-950 sm:text-5xl">
          Ruleta de colores
        </h1>
          <p className="mt-3 text-base font-medium text-slate-500">
            Que haces primo
          </p>
      </header>

      <Roulette
        rotation={rotation}
        spinning={spinning}
        onSpinEnd={() => setSpinning(false)}
      />

      {winner ? (
        !spinning && (
          <>
              <p className="text-sm font-medium text-slate-400">
                Ya giraste
              </p>
            <ResultCard color={winner} />
          </>
        )
      ) : (
          <button
            onClick={handleSpin}
            className="btn min-w-36 gap-2 rounded-full bg-slate-950 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-slate-800"
          >
          Girar
        </button>
      )}

      {spinning && (
        <button
          disabled
            className="btn min-w-36 cursor-not-allowed gap-2 rounded-full bg-slate-950 px-7 py-3 text-base font-semibold text-white opacity-70 shadow-lg shadow-slate-900/20"
          aria-busy="true"
        >
          <Loader2 className="h-4 w-4 animate-spin" />
          Girando...
        </button>
      )}
      </div>
    </section>
  );
}
