import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { Hero } from './Hero';
it('introduces full-time work and independent projects with useful calls to action', () => {
  render(<Hero />);
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('BUILDING AT SCALE. CREATING WITH PURPOSE.');
  expect(screen.getByText(/alongside my full-time role/)).toHaveTextContent('Content Guru');
  expect(screen.getByRole('link', { name: 'Explore my work' })).toHaveAttribute('href', '#work');
  expect(screen.getByRole('link', { name: "Let's connect" })).toHaveAttribute('href', '#contact');
  expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute('href', '/ShingHimYipCV.pdf');
  expect(screen.getByRole('button', { name: 'Reveal photo of Shing Him Yip' })).toBeInTheDocument();
});
