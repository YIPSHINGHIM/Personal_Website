import { test, expect } from '@playwright/test';

test('routes and assets survive the migration', async ({ request }) => {
  const hello = await request.get('/api/hello');
  expect(hello.status()).toBe(200);
  expect(await hello.json()).toEqual({ name: 'John Doe' });
  const cv = await request.get('/ShingHimYipCV.pdf');
  expect(cv.status()).toBe(200);
  expect(cv.headers()['content-type']).toContain('application/pdf');
  expect((await request.get('/him-removebg.png')).status()).toBe(200);
  for (const route of ['/not-a-real-page', '/components/PersonalInfo', '/SkillList']) {
    expect((await request.get(route)).status()).toBe(404);
  }
});

test('project, social and CV destinations remain correct', async ({ page }) => {
  await page.goto('/');
  for (const [name, href] of [
    ['Explore the product — UK Property Checker', 'https://ukpropertychecker.com/'],
    ['Visit the website — Mindful Craft Handmades', 'https://www.mindfulcrafthandmades.com/'],
    ['Connect on LinkedIn', 'https://www.linkedin.com/in/shing-him-yip'],
    ['Explore GitHub', 'https://github.com/YIPSHINGHIM'],
    ['Download CV', '/ShingHimYipCV.pdf'],
  ]) {
    const link = page.getByRole('link', { name, exact: true });
    await expect(link).toHaveAttribute('href', href);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
});
