'use client'
import ReactMarkdown from 'react-markdown';
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
    <div>
      <Link href={`/projects/${project.id}`}>
        <div className="flex flex-grow flex-col items-center rounded-lg p-4 transition-shadow duration-300">
          <h2 className="h2 mt-4 text-4xl tracking-tighter p-4">{project.title}</h2>
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
        </div>
      </Link>
      <div className="text-lg mb-4 w-[90%] px-4 mx-auto text-gray-300">
        <ReactMarkdown>{project.short_description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectCard;