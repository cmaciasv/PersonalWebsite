import { Project } from "@shared/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Ingress Prime",
    short_description: "A short description of project one.",
    case_study_content: "This is a detailed case study of project one.",
    image_url: "/images/projects/ingressprime.png",
    gif_url: "/images/projects/ingressprime.gif",
    live_demo_url: "https://ingress.com/en",
    youtube_video_id: "RJ52YyG4BJQ",
  },
  {
    id: "2",
    title: "Car Town Racing",
    short_description: "A short description of project two.",
    case_study_content: "This is a detailed case study of project two.",
    image_url: "/images/projects/cartownracing.jpg",
    gif_url: "/images/projects/cartownracing.gif",
    youtube_video_id: "N3PUfvmbWNc",
  },
];

export async function getProjectById(id: string): Promise<Project | undefined> {
  return projects.find((project) => project.id === id);
}
