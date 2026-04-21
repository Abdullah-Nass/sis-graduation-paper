import { useLocale } from "./UseLocale";

const Gauge = ({ value = 89 }: { value?: number }) => {
  const { locale } = useLocale();
  const R = 100;
  const cx = 120,
    cy = 125;
  const circumference = Math.PI * R;

  const pct = Math.min(Math.max(value, 0), 100) / 100;
  const greenLen = pct * circumference;
  const redLen = circumference - greenLen;

  const d = `M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy}`;

  return (
    <div style={{ textAlign: "center", padding: "20px 25px" }}>
      <svg
        viewBox="0 0 240 140"
        width="100%"
        style={{ transform: locale === "en" ? "scaleX(-1)" : "none" }}
      >
        <path
          d={d}
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="30"
          strokeLinecap="butt"
        />
        <path
          d={d}
          fill="none"
          stroke="#FF002A"
          strokeWidth="30"
          strokeLinecap="butt"
          strokeDasharray={`${redLen} ${circumference}`}
          strokeDashoffset={0}
        />
        <path
          d={d}
          fill="none"
          stroke="#00D560"
          strokeWidth="30"
          strokeLinecap="butt"
          strokeDasharray={`${greenLen} ${circumference}`}
          strokeDashoffset={-redLen}
        />
        <text
          x={cx}
          y={cy - 15}
          textAnchor="middle"
          fontSize="34"
          fontWeight="500"
          fill="#333"
          transform={
            locale === "en" ? `scale(-1,1) translate(-${2 * cx}, 0)` : ""
          }
        >
          {value}
        </text>
        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          fontSize="13"
          fill="#888"
          transform={
            locale === "en" ? `scale(-1,1) translate(-${2 * cx}, 0)` : ""
          }
        >
          %
        </text>
      </svg>
    </div>
  );
};

export default Gauge;
