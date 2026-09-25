import type { Metadata } from "next";
import MethodPage from "@/components/MethodPage";

export const metadata: Metadata = {
  title: "Method — Herman Kande",
  description:
    "Herman Kande’s working method — immersion, concept, production, and rollout.",
};

export default function MethodeRoute() {
  return <MethodPage />;
}
