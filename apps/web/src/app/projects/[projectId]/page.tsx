import React from 'react';

interface ProjectDetailPageProps {
  params: { projectId: string };
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Project Detail Page</h1>
      <p>Project ID: {params.projectId}</p>
      <p>This is a placeholder for the project detail page.</p>
    </div>
  );
};

export default ProjectDetailPage;
