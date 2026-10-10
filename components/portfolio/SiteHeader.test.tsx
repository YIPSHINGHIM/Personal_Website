import { render, screen, within } from '@testing-library/react';
import { it, expect } from 'vitest';
import { SiteHeader } from './SiteHeader';
it('offers keyboard skip navigation and the four portfolio destinations', () => {
  render(<SiteHeader />);
  expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
  expect(screen.getByRole('link', { name: 'SHING HIM YIP.' })).toHaveAttribute('href', '#top');
  const nav = within(screen.getByRole('navigation', { name: 'Main navigation' }));
  for (const [name, href] of [['Experience', '#work'], ['Projects', '#projects'], ['About', '#about'], ['Connect', '#contact']]) {
    expect(nav.getByRole('link', { name })).toHaveAttribute('href', href);
  }
});
