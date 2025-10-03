import Image from 'next/image';
import Link from '../../../components/ui/Link';
import { Project } from '@shared/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={project.image_url}
          alt={project.title}
          width={300}
          height={200}
          className="rounded-md object-cover w-full h-48"
        />
        <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
      </div>
    </Link>
  );
}