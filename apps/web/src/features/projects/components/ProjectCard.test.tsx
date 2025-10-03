import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { Project } from '@shared/types/project';

// Mock next/image and next/link
vi.mock('next/image', () => ({
  default: vi.fn((props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} src={props.src as string} alt={props.alt || ''} />;
  }),
}));
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

describe('ProjectCard', () => {
  const mockProject: Project = {
    id: '1',
    title: 'Test Project',
    image_url: '/images/test-project.jpg',
    short_description: 'This is a test project.',
    case_study_content: 'Detailed case study content for the test project.',
  };

  it('renders the project title and image', () => {
    render(<ProjectCard project={mockProject} />);

    // Check if the title is rendered
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();

    // Check if the image is rendered with correct src and alt
    const image = screen.getByAltText(mockProject.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProject.image_url);
  });

  it('has the correct link to the project detail page', () => {
    render(<ProjectCard project={mockProject} />);

    // Check if the link has the correct href
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/projects/${mockProject.id}`);
  });
});
