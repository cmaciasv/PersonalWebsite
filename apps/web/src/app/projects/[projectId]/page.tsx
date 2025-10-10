import Link from '../../../components/ui/Link';
import Image from 'next/image';
import { getProjectById } from '../../../lib/data';
import { notFound } from 'next/navigation';

interface ProjectDetailPageProps {
  params: { projectId: string };
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  // Explicitly await params to satisfy Next.js linter, even though it's typically an object.
  const resolvedParams = await params;
  const projectId: string = resolvedParams.projectId;
  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-grow flex-col mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <p className="text-lg mb-4">{project.short_description}</p>
      <Image src={project.image_url} alt="" width={1200} height={600} className="w-full h-64 object-cover mb-4" priority={true} />
      <div className="prose lg:prose-xl mb-8">
        <p>{project.case_study_content}</p>
      </div>
      {project.live_demo_url && (
        <Link
          href={project.live_demo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover-bg-accent-dark font-bold py-2 px-4 rounded"
        >
          Live Demo
        </Link>
      )}
      <div className="mt-8">
        <Link href="/projects" className="hover:underline">
          &larr; Back to Projects
        </Link>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
