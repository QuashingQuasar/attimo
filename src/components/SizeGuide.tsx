import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { SizeRow } from "@/lib/sizeGuides";

// Collapsible size guide shown under the PDP description. Collapsed by default;
// the header toggles a flat-measurement table (Size / Length / Width).
export function SizeGuide({ rows }: { rows: SizeRow[] }) {
  const [open, setOpen] = useState(false);
  if (!rows?.length) return null;

  const labelStyle: React.CSSProperties = {
    fontFamily: "UDC Working Man Sans, sans-serif",
    color: "#1B4229",
    letterSpacing: "0.1em",
    fontSize: "0.85rem",
    opacity: 0.7,
  };

  return (
    <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(27, 66, 41, 0.15)" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between"
      >
        <span className="uppercase" style={labelStyle}>
          Size guide
        </span>
        <ChevronDown
          size={18}
          className="transition-transform duration-300 ease-out"
          style={{
            color: "#1B4229",
            opacity: 0.6,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? 480 : 0, opacity: open ? 1 : 0 }}
      >
        <table
          className="w-full mt-4"
          style={{
            borderCollapse: "collapse",
            fontFamily: "Space Grotesk, sans-serif",
            color: "#1B4229",
          }}
        >
          <thead>
            <tr>
              {["Size", "Length (cm)", "Width (cm)"].map((h) => (
                <th
                  key={h}
                  className="text-left py-2"
                  style={{
                    fontFamily: "UDC Working Man Sans, sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontSize: "0.72rem",
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
            {rows.map((r) => (
              <tr key={r.size}>
                <td
                  className="py-2.5"
                  style={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    borderBottom: "1px solid rgba(27, 66, 41, 0.08)",
                  }}
                >
                  {r.size}
                </td>
                <td
                  className="py-2.5"
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.8,
                    borderBottom: "1px solid rgba(27, 66, 41, 0.08)",
                  }}
                >
                  {r.length}
                </td>
                <td
                  className="py-2.5"
                  style={{
                    fontSize: "0.95rem",
                    opacity: 0.8,
                    borderBottom: "1px solid rgba(27, 66, 41, 0.08)",
                  }}
                >
                  {r.width}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
