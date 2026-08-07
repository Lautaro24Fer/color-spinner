import type { Color } from "@/config/colors";

const BASE_KEY = "roulette_result";

export function resultKey(username: string): string {
  return `${BASE_KEY}_${username}`;
}

export function getStoredResult(username: string): Color | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(resultKey(username));
    if (!raw) return null;

    const parsed = JSON.parse(raw) as { color?: string; hex?: string };
    if (typeof parsed?.hex !== "string" || typeof parsed?.color !== "string") {
      return null;
    }

    return { name: parsed.color, hex: parsed.hex };
  } catch {
    return null;
  }
}

export function storeResult(username: string, result: Color): void {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    resultKey(username),
    JSON.stringify({ color: result.name, hex: result.hex }),
  );
}
