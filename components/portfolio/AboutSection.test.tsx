import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { AboutSection } from './AboutSection';
it('shows bio, skills and both education records without a second portrait', () => {
  render(<AboutSection />);
  expect(screen.getByRole('region', { name: /Engineer by profession/ })).toHaveAttribute('id', 'about');
  expect(screen.getByText(/I enjoy turning ideas/)).toBeVisible();
  expect(screen.getByText('React')).toBeVisible();
  expect(screen.getByText('Royal Holloway, University of London')).toBeVisible();
  expect(screen.getByText(/First Class Honours/)).toBeVisible();
  expect(screen.getByText('PolyU Hong Kong Community College')).toBeVisible();
  expect(screen.getByText(/GPA: 3.36/)).toBeVisible();
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});
