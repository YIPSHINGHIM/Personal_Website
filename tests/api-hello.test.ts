import { it, expect } from 'vitest';
import { GET } from '@/app/api/hello/route';
it('preserves the existing hello API response as JSON', async () => {
  const response = GET();
  expect(response.status).toBe(200);
  expect(response.headers.get('content-type')).toContain('application/json');
  expect(await response.json()).toEqual({ name: 'John Doe' });
});
