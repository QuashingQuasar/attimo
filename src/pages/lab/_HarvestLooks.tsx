import { UpcomingHarvest } from "@/components/UpcomingHarvest";
import { C } from "@/components/harvest/useHarvestSection";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { useHarvestSection } from "@/components/harvest/useHarvestSection";
import { StackedLook, Header, OilCard, Timeline, type Theme } from "./_harvestParts";
import { LookD2, LookD2b, LookD3, LookD4, LookD4b, LookD5, LookD5b, LookD6 } from "./_HarvestLookDs";

// SANDBOX — looks of the homepage next-harvest section, stacked for
// comparison. Same data and copy everywhere; only the design differs.
const { CREAM, GREEN, DEEP, CHARTREUSE, LIME } = C;
const cr = (a: number) => `rgba(255,250,234,${a})`;
const gr = (a: number) => `rgba(27,66,41,${a})`;

const darkTimeline: Theme["timeline"] = {
  track: cr(0.18), fill: CHARTREUSE, nodeNow: CHARTREUSE, nodeNowBorder: CHARTREUSE, ping: CHARTREUSE,
  nodeDone: cr(0.7), nodeFuture: DEEP, nodeFutureBorder: cr(0.45),
  label: cr(0.95), labelNow: CHARTREUSE, labelMuted: cr(0.75), when: cr(0.6),
};
const lightTimeline = (future: string): Theme["timeline"] => ({
  track: gr(0.2), fill: GREEN, nodeNow: CHARTREUSE, nodeNowBorder: GREEN, ping: GREEN,
  nodeDone: GREEN, nodeFuture: future, nodeFutureBorder: gr(0.45),
  label: GREEN, labelNow: GREEN, labelMuted: gr(0.6), when: gr(0.62),
});
const darkCardText = {
  name: CREAM, muted: cr(0.6), body: cr(0.8), rule: cr(0.12),
  polyValue: CREAM, polyPending: cr(0.55), polyLabel: cr(0.45),
};
const lightCardText = {
  name: GREEN, muted: gr(0.55), body: gr(0.8), rule: gr(0.15),
  polyValue: GREEN, polyPending: gr(0.55), polyLabel: gr(0.45),
};
const darkHeader = { eyebrow: CHARTREUSE, heading: CREAM, intro: cr(0.82), note: cr(0.5), formTone: "dark" as const, button: "primary" as const };
const creamHeader = { eyebrow: gr(0.55), heading: GREEN, intro: gr(0.78), note: gr(0.55), formTone: "light" as const, button: "primary" as const };

// A2 — deep green band, each card gets a cream stage the bottle stands on.
// (A lime stage swallowed the Picual label, which is the same lime.)
const A2: Theme = {
  section: DEEP, ...darkHeader,
  card: { bg: cr(0.04), border: cr(0.14), borderNew: "rgba(205,219,45,.55)", stage: CREAM, ...darkCardText,
    tagNewBg: GREEN, tagNewText: CHARTREUSE, tagBg: gr(0.12), tagText: GREEN },
  timeline: darkTimeline,
};
// A3 — lime band, deep-green cards.
const A3: Theme = {
  section: LIME, eyebrow: gr(0.62), heading: GREEN, headingWeight: 700, intro: gr(0.82), note: gr(0.62), formTone: "light", button: "secondary",
  card: { bg: DEEP, border: DEEP, glow: "rgba(179,229,140,.22)", ...darkCardText, shadow: "0 18px 40px rgba(16,34,27,.18)",
    tagNewBg: CHARTREUSE, tagNewText: GREEN, tagBg: cr(0.1), tagText: cr(0.8) },
  timeline: lightTimeline(LIME),
};
// B2 — cream, white cards with a green border and a lime-tinted stage; the
// timeline sits on its own green panel.
const B2: Theme = {
  section: CREAM, ...creamHeader,
  card: { bg: "#FFFFFF", border: GREEN, stage: "rgba(179,229,140,.42)", ...lightCardText,
    tagNewBg: GREEN, tagNewText: CHARTREUSE, tagBg: "#FFFFFF", tagText: GREEN },
  timeline: { ...darkTimeline, nodeFuture: GREEN, panel: { backgroundColor: GREEN, borderRadius: 16, padding: "32px 28px 24px" } },
};
// B3 — cream section, green cards: dark blocks on a light page.
const B3: Theme = {
  section: CREAM, ...creamHeader,
  card: { bg: GREEN, border: GREEN, glow: "rgba(179,229,140,.20)", ...darkCardText, shadow: "0 18px 40px rgba(27,66,41,.16)",
    tagNewBg: CHARTREUSE, tagNewText: GREEN, tagBg: cr(0.12), tagText: cr(0.85) },
  timeline: lightTimeline(CREAM),
};
// C2 — split on lime: pitch, form and timeline left; three green cards right,
// each bottle above its own profile.
const C2 = A3;

const LookC2 = () => {
  const locale = DEFAULT_LOCALE;
  const { oils } = useHarvestSection(locale);
  return (
    <section className="relative overflow-hidden px-4 md:px-6 py-16 md:py-24" style={{ backgroundColor: C2.section }}>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start" style={{ maxWidth: 1280 }}>
        <div className="lg:col-span-4">
          <Header t={C2} locale={locale} align="left" />
          <div className="mt-12"><Timeline t={C2} locale={locale} vertical /></div>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {oils.map((o) => <OilCard key={o.key} o={o} t={C2} locale={locale} bottleHeight={230} />)}
        </div>
      </div>
    </section>
  );
};

const Label = ({ children }: { children: string }) => (
  <div className="px-6 py-3 text-center uppercase" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", fontWeight: 700, letterSpacing: ".15em", fontSize: ".85rem", backgroundColor: "#FFFFFF", color: GREEN, borderTop: `1px dashed ${GREEN}`, borderBottom: `1px dashed ${GREEN}` }}>
    {children}
  </div>
);

export default function HarvestLooks() {
  return (
    <div>
      <Label>A · deep green, cards (current homepage, bottles recut)</Label>
      <UpcomingHarvest />
      <Label>A2 · deep green, cards with a cream stage</Label>
      <StackedLook t={A2} />
      <Label>A3 · lime band, deep green cards</Label>
      <StackedLook t={A3} />
      <Label>B2 · cream, white cards with a lime stage, timeline on a green panel</Label>
      <StackedLook t={B2} />
      <Label>B3 · cream, green cards</Label>
      <StackedLook t={B3} />
      <Label>C2 · lime split, pitch and timeline left, three cards right</Label>
      <LookC2 />
      <Label>D2 · colour band, one oil at a time, bottle-thumbnail picker</Label>
      <LookD2 t={B3} />
      <Label>D3 · colour panels, all three side by side</Label>
      <LookD3 t={B3} />
      <Label>D4 · one band, all three bottles, band takes the selected oil's colour</Label>
      <LookD4 t={B3} />
      <Label>D5 · colour panels, the selected one widens</Label>
      <LookD5 t={B3} />
      <Label>D5b · widening panels, profile 20% bigger beside the bottle</Label>
      <LookD5b t={B3} />
      <Label>D6 · static colour panels, details right of each bottle</Label>
      <LookD6 t={B3} />
      <Label>D2b · one at a time, thumbnail rail beside the bottle</Label>
      <LookD2b t={B3} />
      <Label>D4b · one band, all three bottles, no name under the active bottle</Label>
      <LookD4b t={B3} />
    </div>
  );
}
