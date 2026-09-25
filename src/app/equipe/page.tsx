import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Équipe — Herman Kande",
  description:
    "Best crew — les talents Herman Kande à Kinshasa. Stratégie, création et production.",
};

export default function EquipePage() {
  return <Team />;
}
