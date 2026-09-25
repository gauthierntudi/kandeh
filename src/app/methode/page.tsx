import type { Metadata } from "next";
import MethodPage from "@/components/MethodPage";

export const metadata: Metadata = {
  title: "Méthode — Herman Kande",
  description:
    "Méthodologie de travail Herman Kande — immersion, conception, production et déploiement.",
};

export default function MethodeRoute() {
  return <MethodPage />;
}
