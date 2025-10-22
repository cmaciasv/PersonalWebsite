import React from 'react';
import { projects } from '../../lib/data';
import ProjectCard from '../../features/projects/components/ProjectCard';

const ProjectsPage: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col justify-center p-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Projects</h1>
      <div className="grid gap-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center">No projects found.</p>
        )}
      </div>
    </main>
  );
};

export default ProjectsPage;
