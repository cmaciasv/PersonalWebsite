'use client'
import Image from 'next/image';
import Link from '../../../components/ui/Link';
import { Project } from '@shared/types/project';
import React, { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="flex flex-grow flex-col items-center rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          src={isHovering ? (project.gif_url ?? '') : project.image_url}
          alt=""
          width={1280}
          height={720}
          priority={false}
          className="rounded-md object-cover items-center w-[90%]"
        />
        <h2 className="h3 mt-4 text-xl font-semibold">{project.title}</h2>
      </div>
    </Link>
  );
};

export default ProjectCard;