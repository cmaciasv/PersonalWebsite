import Link from '../../../components/ui/Link';
import Image from 'next/image';
import { getProjectById } from '../../../lib/data';
import { notFound } from 'next/navigation';

interface ProjectDetailPageProps {
  params: Promise<{ projectId: string }>;
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { projectId } = await params;
  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-grow flex-col justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>
      <p className="text-lg mb-4 text-center">{project.short_description}</p>
      <Image src={project.image_url} alt="" width={800} height={600} className="w-md h-64 object-cover mb-4 items-centered mx-auto" priority={true} />
      <div className="prose lg:prose-xl mb-8 items-center mx-auto">
        <p>{project.case_study_content}</p>
      </div>
      {project.live_demo_url && (
        <Link
          href={project.live_demo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover-bg-accent-dark font-bold py-2 px-4 rounded w-fit text-center mx-auto"
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
