import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';
it('explains the project and preserves its accessible external destination', () => {
  const title = 'A very long client project name that must stay readable';
  render(<ProjectCard project={{ id: 'client', title, category: 'Client website', summary: 'Online shop.', brief: 'Bring the business online.', contribution: 'Website development.', href: 'https://example.com/', linkLabel: 'Visit the website' }} />);
  expect(screen.getByRole('heading', { name: title })).toBeVisible();
  expect(screen.getByText('Client website')).toBeVisible();
  expect(screen.getByText('Bring the business online.')).toBeVisible();
  expect(screen.getByText('Website development.')).toBeVisible();
  const link = screen.getByRole('link', { name: `Visit the website — ${title}` });
  expect(link).toHaveAttribute('href', 'https://example.com/');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});
