import { render, screen, within } from '@testing-library/react';
import { it, expect } from 'vitest';
import { ProjectsSection } from './ProjectsSection';
it('features the independent SaaS before the client website and keeps older projects', () => {
  render(<ProjectsSection />);
  const section = screen.getByRole('region', { name: 'Built outside the day job.' });
  expect(section).toHaveAttribute('id', 'projects');
  const headings = within(section).getAllByRole('heading', { level: 3 });
  expect(headings[0]).toHaveTextContent('UK Property Checker');
  expect(headings[1]).toHaveTextContent('Mindful Craft Handmades');
  expect(screen.getByText('More projects')).toBeInTheDocument();
});
