import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Herman Kande",
  description:
    "Herman Kande’s creative selection — campaigns, identities, and content for brands.",
};

export default function ProjetsRoute() {
  const projects = getProjects();
  return <ProjectsPage projects={projects} />;
}
