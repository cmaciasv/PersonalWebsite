import { render, screen } from '@testing-library/react';
import ProjectsPage from './page';
import { projects } from '../../lib/data'; // Import actual projects data
import ProjectCard from '@/features/projects/components/ProjectCard';

// Mock the ProjectCard component to simplify testing ProjectsPage
vi.mock('../../features/projects/components/ProjectCard', () => ({
  default: vi.fn(({ project }) => (
    <div data-testid="project-card">{project.title}</div>
  )),
}));

describe('ProjectsPage', () => {
  it('renders the correct number of ProjectCard components', () => {
    render(<ProjectsPage />);

    // Check if the heading is rendered
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();

    // Check if the correct number of mocked ProjectCard components are rendered
    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards).toHaveLength(projects.length);

    // Optionally, check if the titles are displayed (via the mock)
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('renders a message when no projects are found', () => {
    // Temporarily mock the projects array to be empty for this test
    const originalProjects = [...projects]; // Save original projects
    projects.length = 0; // Clear the array

    render(<ProjectsPage />);

    // Check if the heading is rendered
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();

    // Check if the "No projects found." message is displayed
    expect(screen.getByText('No projects found.')).toBeInTheDocument();

    // Check that no ProjectCard components are rendered
    expect(screen.queryAllByTestId('project-card')).toHaveLength(0);

    // Restore original projects data
    projects.splice(0, 0, ...originalProjects);
  });
});
