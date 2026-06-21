import { Collapsible } from "@/components/Collapsible";
import type { SizeGuide as SizeGuideData } from "@/lib/sizeGuides";

// Collapsible size guide shown under the PDP description. Columns are
// data-driven so different garments (tee vs hoodie) can show different
// measurements.
export function SizeGuide({ guide }: { guide: SizeGuideData }) {
  if (!guide?.rows?.length) return null;

  const headers = ["Size", ...guide.columns.map((c) => `${c} (${guide.unit})`)];

  return (
    <Collapsible label="Sizing">
      <table
        className="w-full"
        style={{
          borderCollapse: "collapse",
          fontFamily: "Space Grotesk, sans-serif",
          color: "#1B4229",
        }}
      >
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left py-2"
                style={{
                  fontFamily: "UDC Working Man Sans, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  opacity: 0.6,
                  borderBottom: "1px solid rgba(27, 66, 41, 0.2)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {guide.rows.map((r) => (
            <tr key={r.size}>
              <td
                className="py-2.5"
                style={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  borderBottom: "1px solid rgba(27, 66, 41, 0.08)",
                }}
              >
                {r.size}
              </td>
              {r.values.map((v, i) => (
                <td
                  key={i}
                  className="py-2.5"
                  style={{
                    fontSize: "1.25rem",
                    opacity: 0.8,
                    borderBottom: "1px solid rgba(27, 66, 41, 0.08)",
                  }}
                >
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Collapsible>
  );
}
