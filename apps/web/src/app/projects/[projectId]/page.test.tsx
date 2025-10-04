import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectDetailPage from './page';
import { getProjectById } from '../../../lib/data';
import { notFound } from 'next/navigation';

// Mock the getProjectById function
vi.mock('../../../lib/data', () => ({
  getProjectById: vi.fn(),
}));

// Mock the notFound function from next/navigation
vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('Not Found'); // Simulate Next.js notFound behavior
  }),
}));

describe('ProjectDetailPage', () => {
  const mockProject = {
    id: '1',
    title: 'Test Project',
    short_description: 'A short description.',
    case_study_content: 'Detailed case study content.',
    image_url: '/images/test-project.png',
    live_demo_url: 'https://test-demo.com',
  };

  beforeEach(() => {
    vi.clearAllMocks(); // Clear all mocks before each test
  });

  it('renders project details correctly when project is found', async () => {
    (getProjectById as Mock).mockResolvedValue(mockProject);

    render(await ProjectDetailPage({ params: { projectId: '1' } }));

    expect(screen.getByRole('heading', { name: mockProject.title })).toBeInTheDocument();
    expect(screen.getByText(mockProject.short_description)).toBeInTheDocument();
    expect(screen.getByText(mockProject.case_study_content)).toBeInTheDocument();
    const image = screen.getByAltText('');
    expect(image).toHaveAttribute('src');
    expect(image.getAttribute('src')).toMatch(/_next\/image/);
    expect(image.getAttribute('src')).toContain(encodeURIComponent(mockProject.image_url));
    expect(screen.getByRole('link', { name: 'Live Demo' })).toHaveAttribute('href', mockProject.live_demo_url);
    expect(screen.getByRole('link', { name: '← Back to Projects' })).toHaveAttribute('href', '/projects');
  });

  it('calls notFound when project is not found', async () => {
    (getProjectById as Mock).mockResolvedValue(undefined);

    await expect(ProjectDetailPage({ params: { projectId: 'non-existent' } })).rejects.toThrow('Not Found');

    expect(notFound).toHaveBeenCalledTimes(1);
  });

  it('does not render live demo link if live_demo_url is not provided', async () => {
    const projectWithoutDemo = { ...mockProject, live_demo_url: undefined };
    (getProjectById as Mock).mockResolvedValue(projectWithoutDemo);

    render(await ProjectDetailPage({ params: { projectId: '1' } }));

    expect(screen.queryByRole('link', { name: 'Live Demo' })).not.toBeInTheDocument();
  });
});
