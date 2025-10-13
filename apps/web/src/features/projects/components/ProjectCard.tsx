import Image from 'next/image';
import Link from '../../../components/ui/Link';
import { Project } from '@shared/types/project';
import React from 'react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="flex flex-grow flex-col items-center rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={project.image_url}
          alt="" 
          width={300}
          height={200}
          priority={false}
          className="max-w-md rounded-md object-cover items-center"
        />
        <h2 className="h3 mt-4 text-xl font-semibold">{project.title}</h2>
      </div>
    </Link>
  );
};

export default ProjectCard;