import { render, screen } from '@testing-library/react';
import HomePage from './page';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('renders the main headings', () => {
    render(<HomePage />);
    const heading1 = screen.getByRole('heading', {
      name: /Hi, I'm Carlos Macias/i,
    });
    const heading2 = screen.getByRole('heading', {
      name: /Engineer, Creator, Problem-Solver/i,
    });
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
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

  it('applies fade-in animation to the main headings', () => {
    render(<HomePage />);
    const heading1 = screen.getByRole('heading', {
      name: /Hi, I'm Carlos Macias/i,
    });
    const heading2 = screen.getByRole('heading', {
      name: /Engineer, Creator, Problem-Solver/i,
    });

    // Check for initial animation properties (Framer Motion applies these as inline styles)
    expect(heading1).toHaveStyle('opacity: 0');
    expect(heading1).toHaveStyle('transform: translateY(20px)');
    expect(heading2).toHaveStyle('opacity: 0');
    expect(heading2).toHaveStyle('transform: translateY(20px)');
  });
});
