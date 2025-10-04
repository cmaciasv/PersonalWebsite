import React from 'react';
import { projects } from '../../lib/data';
import ProjectCard from '../../features/projects/components/ProjectCard';

const ProjectsPage: React.FC = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No projects found.</p>
        )}
      </div>
    </main>
  );
};

export default ProjectsPage;
