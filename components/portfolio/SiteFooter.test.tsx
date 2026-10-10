import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { SiteFooter } from './SiteFooter';
it('uses the server-supplied year instead of retaining a stale copyright', () => {
  const { rerender } = render(<SiteFooter year={2026} />);
  expect(screen.getByRole('contentinfo')).toHaveTextContent('© 2026 Shing Him Yip');
  rerender(<SiteFooter year={2027} />);
  expect(screen.getByRole('contentinfo')).toHaveTextContent('© 2027 Shing Him Yip');
});
