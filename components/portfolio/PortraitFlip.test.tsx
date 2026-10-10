import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { PortraitFlip } from './PortraitFlip';
it('starts with an accessible SHY monogram', () => {
  render(<PortraitFlip />);
  expect(screen.getByRole('button', { name: 'Reveal photo of Shing Him Yip' })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByText('IDEAS → REALITY')).toBeInTheDocument();
});
