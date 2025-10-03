import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactPage from './page';

describe('ContactPage', () => {
  it('renders the main heading', () => {
    render(<ContactPage />);
    const heading = screen.getByRole('heading', { name: /Get in Touch/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the friendly message', () => {
    render(<ContactPage />);
    const message = screen.getByText(
      /I'm always open to new opportunities and collaborations./i
    );
    expect(message).toBeInTheDocument();
  });

  it('renders the Email Me link with correct href', () => {
    render(<ContactPage />);
    const emailLink = screen.getByRole('link', { name: /Email Me/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:Carlos.Macias23@gmail.com');
  });

  it('renders the GitHub link with correct href', () => {
    render(<ContactPage />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/cmaciasv');
  });

  it('renders the LinkedIn link with correct href', () => {
    render(<ContactPage />);
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/carlosamacias');
  });
});
