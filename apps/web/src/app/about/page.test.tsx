import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './page';

describe('AboutPage', () => {
  it('renders the main heading', () => {
    render(<AboutPage />);
    const heading = screen.getByRole('heading', { name: /About Me/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the professional summary', () => {
    render(<AboutPage />);
    const summary = screen.getByText(
      /Senior Software Engineer with over 10 years of experience/i
    );
    expect(summary).toBeInTheDocument();
  });

  it('renders the skills list heading', () => {
    render(<AboutPage />);
    const skillsHeading = screen.getByRole('heading', { name: /Skills/i });
    expect(skillsHeading).toBeInTheDocument();
  });

  it('renders at least one skill item', () => {
    render(<AboutPage />);
    const skillItem = screen.getByText(/Languages:/i);
    expect(skillItem).toBeInTheDocument();
  });
});
