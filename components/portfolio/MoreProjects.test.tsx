import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { MoreProjects } from './MoreProjects';
import { archivedProjects } from '@/content/portfolio';
it('keeps the six earlier projects in a native disclosure', () => {
  const { container } = render(<MoreProjects projects={archivedProjects} />);
  expect(screen.getByText('More projects').tagName).toBe('SUMMARY');
  expect(container.querySelector('details')).not.toHaveAttribute('open');
  expect(container.querySelectorAll('a')).toHaveLength(6);
  expect(container.querySelector('a')).toHaveAttribute('href', 'https://github.com/YIPSHINGHIM/TodoList_using_React_and_Django');
});
it('omits the disclosure when there are no older projects', () => {
  const { container } = render(<MoreProjects projects={[]} />);
  expect(container).toBeEmptyDOMElement();
});
