import { Project } from "@shared/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    short_description: "A short description of project one.",
    case_study_content: "This is a detailed case study of project one.",
    image_url: "/images/projects/project-one.png",
    live_demo_url: "https://example.com/project-one-demo",
  },
  {
    id: "2",
    title: "Project Two",
    short_description: "A short description of project two.",
    case_study_content: "This is a detailed case study of project two.",
    image_url: "/images/projects/project-two.png",
    live_demo_url: "https://example.com/project-two-demo",
  },
];

export async function getProjectById(id: string): Promise<Project | undefined> {
  return projects.find((project) => project.id === id);
}
