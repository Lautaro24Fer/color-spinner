import type { Metadata } from "next";

import RoulettePage from "@/components/roulette/RoulettePage";

export const metadata: Metadata = {
  title: "Ruleta de colores",
};

export default function RouletteRoute() {
  return <RoulettePage username="amigo" />;
}
