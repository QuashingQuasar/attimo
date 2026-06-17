import { useState } from "react";
import { ChevronDown } from "lucide-react";

// A labelled collapsible section used on the merch PDP (Description, Sizing).
// Collapsed by default; the header toggles the body. Uses a grid-rows
// animation so it expands to the natural content height regardless of size.
export function Collapsible({
  label,
  defaultOpen = false,
  children,
}: {
  label: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(27, 66, 41, 0.15)" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between"
      >
        <span
          className="uppercase"
          style={{
            fontFamily: "UDC Working Man Sans, sans-serif",
            color: "#1B4229",
            letterSpacing: "0.1em",
            fontSize: "0.85rem",
            opacity: 0.7,
          }}
        >
          {label}
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
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
          transition: "grid-template-rows 300ms ease-out, opacity 300ms ease-out",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
