import { render, screen, within } from '@testing-library/react';
import { it, expect } from 'vitest';
import { WorkSection } from './WorkSection';
it('explains the current role and three professional contributions', () => {
  render(<WorkSection />);
  const section = screen.getByRole('region', { name: 'What I build at work.' });
  expect(section).toHaveAttribute('id', 'work');
  expect(within(section).getAllByRole('article')).toHaveLength(3);
  expect(within(section).getByText('Software Developer')).toBeVisible();
  expect(within(section).getByText(/Jan 2024/)).toHaveTextContent('Content Guru');
  expect(within(section).getByText(/50\+ countries/)).toBeVisible();
  expect(within(section).getByText(/FedRAMP High readiness/)).toHaveTextContent('Contributed');
  expect(screen.getByText('Graduate Software Engineer')).toBeVisible();
  expect(screen.getByText('Full Stack Web Developer Intern')).toBeVisible();
  expect(screen.getByText('Event Support Crew')).toBeVisible();
});
