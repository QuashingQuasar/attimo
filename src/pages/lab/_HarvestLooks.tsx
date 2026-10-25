import { UpcomingHarvest } from "@/components/UpcomingHarvest";
import { HarvestLookB } from "./_HarvestLookB";
import { HarvestLookC } from "./_HarvestLookC";

// SANDBOX — three looks of the homepage next-harvest section, stacked for
// comparison. Same data and copy in all three; only the design differs.
const Label = ({ children }: { children: string }) => (
  <div className="px-6 py-3 text-center uppercase" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", fontWeight: 700, letterSpacing: ".15em", fontSize: ".85rem", backgroundColor: "#FFFFFF", color: "#1B4229", borderTop: "1px dashed #1B4229", borderBottom: "1px dashed #1B4229" }}>
    {children}
  </div>
);

export default function HarvestLooks() {
  return (
    <div>
      <Label>Look A · deep green, cards (current homepage)</Label>
      <UpcomingHarvest />
      <Label>Look B · cream editorial, bottles on a shelf</Label>
      <HarvestLookB />
      <Label>Look C · lime band, split with bottle panel</Label>
      <HarvestLookC />
    </div>
  );
}
