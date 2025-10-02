import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { Project } from '@shared/types/project';

// Mock next/image and next/link
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />,
}));
vi.mock('next/link', () => ({
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));

describe('ProjectCard', () => {
  const mockProject: Project = {
    id: '1',
    title: 'Test Project',
    description: 'A description for the test project.',
    image: '/images/test-project.jpg',
    tags: ['React', 'Next.js'],
    githubUrl: 'https://github.com/test/test-project',
    liveUrl: 'https://test-project.com',
  };

  it('renders the project title and image', () => {
    render(<ProjectCard project={mockProject} />);

    // Check if the title is rendered
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();

    // Check if the image is rendered with correct src and alt
    const image = screen.getByAltText(mockProject.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProject.image);
  });

  it('has the correct link to the project detail page', () => {
    render(<ProjectCard project={mockProject} />);

    // Check if the link has the correct href
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/projects/${mockProject.id}`);
  });
});
