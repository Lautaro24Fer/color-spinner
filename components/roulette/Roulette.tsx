import { colors, SEGMENT } from "@/config/colors";

type RouletteProps = {
  rotation: number;
  spinning: boolean;
  onSpinEnd?: () => void;
};

const SIZE = 320;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 208;
const CENTER = 72;

export default function Roulette({ rotation, spinning, onSpinEnd }: RouletteProps) {
  const pointAt = (deg: number) => {
    const rad = (Math.PI / 180) * deg;
    return { x: CX + R * Math.sin(rad), y: CY - R * Math.cos(rad) };
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px]">
      {/* Marker */}
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-2 drop-shadow-md">
        <svg width="30" height="42" viewBox="0 0 34 44" aria-hidden="true">
          <path
            d="M17 2 L4 10 L30 10 Z"
            fill="#ffffff"
            stroke="#0f172a"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <rect
            x="13"
            y="9"
            width="8"
            height="30"
            fill="#ffffff"
            stroke="#0f172a"
            strokeWidth="3"
          />
          <path d="M17 40 L13 20 L21 20 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Wheel */}
      <div
        className="overflow-hidden rounded-full bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/80"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning
            ? "transform 4600ms cubic-bezier(0.12, 0.82, 0.15, 1)"
            : "none",
          willChange: "transform",
        }}
        onTransitionEnd={onSpinEnd}
      >
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label="Ruleta de colores"
        >
          {colors.map((color, index) => {
            const start = index * SEGMENT;
            const end = (index + 1) * SEGMENT;
            const p0 = pointAt(start);
            const p1 = pointAt(end);
            return (
              <path
                key={color.hex}
                d={`M ${CX} ${CY} L ${p0.x} ${p0.y} A ${R} ${R} 0 0 1 ${p1.x} ${p1.y} Z`}
                fill={color.hex}
                stroke="#ffffff"
                strokeWidth={4}
              />
            );
          })}
          <circle
            cx={CX}
            cy={CY}
            r={CENTER}
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth={5}
          />
          <circle cx={CX} cy={CY} r="34" fill="#f8fafc" />
        </svg>
      </div>
    </div>
  );
}
