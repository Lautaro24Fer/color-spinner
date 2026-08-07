export type Color = {
  name: string;
  hex: string;
};

export const colors: Color[] = [
  { name: "Rojo", hex: "#E53935" },
  { name: "Azul", hex: "#1E88E5" },
  { name: "Verde", hex: "#43A047" },
  { name: "Amarillo", hex: "#FDD835" },
  { name: "Violeta", hex: "#8E24AA" },
  { name: "Naranja", hex: "#FB8C00" },
  { name: "Rosa", hex: "#D81B60" },
];

export const SEGMENT = 360 / colors.length;

export function colorIndexToRotation(index: number, fullTurns = 4): number {
  const offset = (360 - (index * SEGMENT + SEGMENT / 2)) % 360;
  return fullTurns * 360 + offset;
}

export function findColorIndex(hex: string): number {
  const index = colors.findIndex(
    (color) => color.hex.toLowerCase() === hex.toLowerCase(),
  );
  return index === -1 ? 0 : index;
}
