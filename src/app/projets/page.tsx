import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projets — Herman Kande",
  description:
    "Sélection créative Herman Kande — campagnes, identités et contenus pour les marques.",
};

export default function ProjetsRoute() {
  const projects = getProjects();
  return <ProjectsPage projects={projects} />;
}
