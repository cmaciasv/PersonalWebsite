import Link from '../../../components/ui/Link';
import { getProjectById } from '../../../lib/data';
import { notFound } from 'next/navigation';
import YouTubeEmbed from '../../../components/ui/YouTubeEmbed';
import ReactMarkdown from 'react-markdown';

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
      <h1 className="text-7xl tracking-tighter mb-8 text-center">{project.title}</h1>
      {project.youtube_video_id && (
        <YouTubeEmbed 
        videoId={project.youtube_video_id} 
        title={project.title} 
        thumbnailUrl={project.image_url} 
        gifUrl={project.gif_url ?? ""} />
      )}
      <div className="text-lg mb-4 w-[90%] mx-auto text-gray-300 mb-8">
        <ReactMarkdown>{project.case_study_content}</ReactMarkdown>
      </div>
      <div className="text-lg mb-4 w-[90%] mx-auto text-gray-300">
      <ReactMarkdown>
        {project.case_study_bullets}
      </ReactMarkdown>
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
