import { render, screen } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, it, expect, vi } from 'vitest';
import HomePage from '@/app/page';
import RootLayout, { metadata } from '@/app/layout';
import NotFound from '@/app/not-found';

describe('App Router portfolio shell', () => {
  it('composes the approved sections in order with one h1 and a main target', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-10-10T12:00:00Z'));
    const { container } = render(<HomePage />);
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main');
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(Array.from(container.querySelectorAll('main > section')).map(section => section.id)).toEqual(['top', 'work', 'projects', 'about', 'contact']);
    expect(screen.getByRole('contentinfo')).toHaveTextContent('© 2026 Shing Him Yip');
    vi.useRealTimers();
  });
  it('provides an English document and descriptive portfolio metadata', () => {
    const html = renderToStaticMarkup(<RootLayout><div>Portfolio content</div></RootLayout>);
    expect(html).toContain('lang="en"');
    expect(html).toContain('Portfolio content');
    expect(metadata.title).toBe('Shing Him Yip | Software Engineer & Product Builder');
    expect(metadata.description).toContain('Content Guru');
  });
  it('offers a useful home destination for missing routes', () => {
    render(<NotFound />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page not found');
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/');
  });
});
