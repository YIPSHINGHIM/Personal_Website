import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { ContactSection } from './ContactSection';
it('invites selected project enquiries and professional connections through real links', () => {
  render(<ContactSection />);
  expect(screen.getByRole('region', { name: "LET'S CONNECT." })).toHaveAttribute('id', 'contact');
  expect(screen.getByText(/selected freelance project enquiries/)).toBeVisible();
  expect(screen.getByRole('link', { name: 'Connect on LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/shing-him-yip');
  expect(screen.getByRole('link', { name: 'Explore GitHub' })).toHaveAttribute('href', 'https://github.com/YIPSHINGHIM');
});
