import { test, expect } from '@playwright/test';

test('homepage content and anchor navigation', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle('Shing Him Yip | Software Engineer & Product Builder');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByRole('main')).toHaveAttribute('id', 'main');
  await expect(page.getByRole('contentinfo')).toContainText('Shing Him Yip');
  expect(await page.locator('main > section').evaluateAll(elements => elements.map(el => el.id))).toEqual(['top', 'work', 'projects', 'about', 'contact']);
  for (const [name, hash] of [['Experience', '#work'], ['Projects', '#projects'], ['About', '#about'], ['Connect', '#contact']]) {
    await page.getByRole('navigation').getByRole('link', { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${hash}$`));
    await expect(page.locator(hash)).toBeInViewport();
  }
  await expect(page.locator('#about img')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('portrait pointer and keyboard round trip', async ({ page, isMobile }, testInfo) => {
  await page.goto('/');
  const tile = page.getByRole('button');
  await expect(tile).toHaveAccessibleName('Reveal photo of Shing Him Yip');
  await expect(tile).toHaveAttribute('aria-pressed', 'false');
  await page.screenshot({ path: testInfo.outputPath('front.png'), fullPage: true });
  if (isMobile) await tile.tap(); else await tile.click();
  await expect(tile).toHaveAttribute('aria-pressed', 'true');
  await expect(tile).toHaveAccessibleName('Show SHY monogram');
  const photo = page.getByRole('img', { name: 'Shing Him Yip' });
  await expect(photo).toBeVisible();
  await expect.poll(() => photo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  await expect(photo).toHaveCSS('filter', 'none');
  await expect(photo).toHaveCSS('object-fit', 'contain');
  await expect.poll(() => tile.locator('[data-revealed]').evaluate(el => getComputedStyle(el).transform)).toMatch(/^matrix3d\(-1,/);
  await page.screenshot({ path: testInfo.outputPath('portrait.png'), fullPage: true });
  if (isMobile) await tile.tap(); else await tile.click();
  await expect(tile).toHaveAttribute('aria-pressed', 'false');
  await expect(page.getByRole('img', { name: 'Shing Him Yip' })).toHaveCount(0);
  await tile.focus();
  await page.keyboard.press('Enter');
  await expect(tile).toHaveAttribute('aria-pressed', 'true');
  await page.keyboard.press('Space');
  await expect(tile).toHaveAttribute('aria-pressed', 'false');
  await expect(tile).toBeFocused();
});

test('portrait error fallback', async ({ page }) => {
  await page.route('**/*him-removebg*', route => route.abort());
  await page.goto('/');
  const tile = page.getByRole('button');
  await expect(tile).toHaveAccessibleName('Reveal photo of Shing Him Yip');
  await tile.click();
  await expect(page.getByText('Photo unavailable')).toBeVisible();
  await tile.click();
  await expect(tile).toHaveAttribute('aria-pressed', 'false');
});

test('reduced motion preserves portrait behavior without animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const tile = page.getByRole('button');
  await expect(tile.locator('[data-revealed]')).toHaveCSS('transition-duration', '0s');
  await tile.click();
  await expect(tile).toHaveAttribute('aria-pressed', 'true');
});

test('narrow layout and older project disclosure', async ({ page }) => {
  await page.goto('/');
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    for (const element of await page.locator('h1, h2, nav a, #projects > div > article').all()) {
      const bounds = await element.boundingBox();
      expect(bounds).not.toBeNull();
      expect(bounds!.x).toBeGreaterThanOrEqual(0);
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width + 1);
    }
  }
  await page.getByText('More projects', { exact: true }).click();
  await expect(page.locator('details')).toHaveAttribute('open', '');
  await expect(page.locator('details a')).toHaveCount(6);
  await expect(page.getByRole('link', { name: 'View source — Todo List' })).toBeVisible();
  await page.getByText('More projects', { exact: true }).click();
  await expect(page.locator('details')).not.toHaveAttribute('open', '');
});
