import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', {
      name: /Carlos Macias: Engineer, Creator, Problem-Solver./i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the introductory paragraph', () => {
    render(<HomePage />);
    const paragraph = screen.getByText(
      /I build software that delights users/i
    );
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    render(<HomePage />);
    const button = screen.getByRole('link', { name: /View My Work/i });
    expect(button).toBeInTheDocument();
  });

  it('call-to-action button links to the projects page', () => {
    render(<HomePage />);
    const button = screen.getByRole('link', { name: /View My Work/i });
    expect(button).toHaveAttribute('href', '/projects');
  });
});
