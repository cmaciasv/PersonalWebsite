import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Link from './Link';
import { vi } from 'vitest';

// Mock next/link to prevent actual navigation during tests
vi.mock('next/link', () => ({
  __esModule: true,
  default: vi.fn(({ children, href, className, ...props }) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )),
}));

describe('Link Component', () => {
  it('renders a link with children and href', () => {
    render(<Link href="/test">Test Link</Link>);
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  it('applies the default link-hover-light class', () => {
    render(<Link href="/test">Test Link</Link>);
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toHaveClass('link-hover-light');
  });

  it('applies additional className props', () => {
    render(<Link href="/test" className="custom-class">Test Link</Link>);
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toHaveClass('link-hover-light');
    expect(linkElement).toHaveClass('custom-class');
  });

  it('passes through other props to the underlying NextLink', () => {
    render(<Link href="/test" target="_blank" rel="noopener noreferrer">External Link</Link>);
    const linkElement = screen.getByText('External Link');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});