import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Team — Herman Kande",
  description:
    "Best crew — Herman Kande’s talent in Kinshasa. Strategy, creation, and production.",
};

export default function EquipePage() {
  return <Team />;
}
