import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { PortraitFlip } from './PortraitFlip';
it('starts with an accessible SHY monogram', () => {
  render(<PortraitFlip />);
  expect(screen.getByRole('button', { name: 'Reveal photo of Shing Him Yip' })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByText('IDEAS → REALITY')).toBeInTheDocument();
});

import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
it('reveals the original portrait and flips back without losing focus', async () => {
  const user = userEvent.setup();
  render(<PortraitFlip />);
  const button = screen.getByRole('button', { name: 'Reveal photo of Shing Him Yip' });
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
  await user.click(button);
  expect(button).toHaveAttribute('aria-pressed', 'true');
  expect(button).toHaveAccessibleName('Show SHY monogram');
  expect(screen.getByRole('img', { name: 'Shing Him Yip' })).toHaveAttribute('src', expect.stringContaining('him-removebg.png'));
  expect(screen.getByText('IDEAS → REALITY').closest('[aria-hidden]')).toHaveAttribute('aria-hidden', 'true');
  await user.click(button);
  expect(button).toHaveAttribute('aria-pressed', 'false');
  expect(button).toHaveFocus();
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});
it('responds to Enter and Space with focus retained', async () => {
  const user = userEvent.setup();
  render(<PortraitFlip />);
  const button = screen.getByRole('button');
  button.focus();
  await user.keyboard('{Enter}');
  expect(button).toHaveAttribute('aria-pressed', 'true');
  await user.keyboard(' ');
  expect(button).toHaveAttribute('aria-pressed', 'false');
  expect(button).toHaveFocus();
});
it('keeps flipping usable when the portrait cannot load', async () => {
  const user = userEvent.setup();
  render(<PortraitFlip />);
  await user.click(screen.getByRole('button'));
  fireEvent.error(screen.getByRole('img', { name: 'Shing Him Yip' }));
  expect(screen.getByText('Photo unavailable')).toBeVisible();
  await user.click(screen.getByRole('button'));
  expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
});
