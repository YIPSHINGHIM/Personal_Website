import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { WorkHighlight } from './WorkHighlight';
it('renders a supplied work contribution with its technology labels', () => {
  const title = 'A particularly long real-time platform engineering contribution';
  render(<WorkHighlight highlight={{ id: 'frontend', title, description: 'Built reliable video messaging.', tags: ['React', 'WebRTC'] }} />);
  expect(screen.getByRole('heading', { name: title })).toBeVisible();
  expect(screen.getByText('Built reliable video messaging.')).toBeVisible();
  expect(screen.getByText('React / WebRTC')).toBeVisible();
});
