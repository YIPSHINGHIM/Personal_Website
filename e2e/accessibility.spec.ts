import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('accessible portrait faces and expanded projects', async ({ page }) => {
  await page.goto('/');
  const scan = () => new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect((await scan()).violations).toEqual([]);
  await page.getByRole('button').click();
  expect((await scan()).violations).toEqual([]);
  await page.getByText('More projects', { exact: true }).click();
  expect((await scan()).violations).toEqual([]);
});

test('keyboard skip link and portrait have visible focus', async ({ page, browserName }) => {
  await page.goto('/');
  // macOS Safari uses Option+Tab when full keyboard access is disabled.
  await page.keyboard.press(browserName === 'webkit' && process.platform === 'darwin' ? 'Alt+Tab' : 'Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeInViewport();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
  const tile = page.getByRole('button');
  await tile.focus();
  await expect(tile).toHaveCSS('outline-style', 'solid');
  await expect(tile).toHaveCSS('outline-color', 'rgb(255, 214, 0)');
});

test('filled primary links retain contrasting keyboard focus', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const work = page.getByRole('link', { name: 'Explore my work', exact: true });
  await work.focus();
  await expect(work).toHaveCSS('outline-style', 'solid');
  await expect(work).toHaveCSS('outline-color', 'rgb(255, 214, 0)');
  const linkedin = page.getByRole('link', { name: 'Connect on LinkedIn', exact: true });
  await linkedin.focus();
  await expect(linkedin).toHaveCSS('outline-style', 'solid');
  await expect(linkedin).toHaveCSS('outline-color', 'rgb(11, 11, 11)');
  await page.goto('/missing-page');
  await page.keyboard.press('Tab');
  const home = page.getByRole('link', { name: 'Back to home' });
  await home.focus();
  await expect(home).toHaveCSS('outline-style', 'solid');
  await expect(home).toHaveCSS('outline-color', 'rgb(255, 214, 0)');
});
