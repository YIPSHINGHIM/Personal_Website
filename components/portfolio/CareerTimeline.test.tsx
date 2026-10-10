import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { CareerTimeline } from './CareerTimeline';
it('shows the supplied previous role, company and dates', () => {
  render(<CareerTimeline entries={[{ role: 'Engineer', company: 'Example Co', dates: '2022–2023' }]} />);
  expect(screen.getByText('Engineer')).toBeVisible();
  expect(screen.getByText(/Example Co/)).toHaveTextContent('2022–2023');
});
it('renders no empty career list', () => {
  const { container } = render(<CareerTimeline entries={[]} />);
  expect(container).toBeEmptyDOMElement();
});
