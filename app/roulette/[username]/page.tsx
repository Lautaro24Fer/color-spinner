import type { Metadata } from "next";

import RoulettePage from "@/components/roulette/RoulettePage";

export const metadata: Metadata = {
  title: "Ruleta de colores",
};

export default async function RouletteRoute({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  return <RoulettePage username={username} />;
}