import { test, expect } from '@playwright/test';

test.describe('UI tests', async () => {
  test('UI test example', {
    tag: ['@smoke', '@ui']
  }, async ({ page }) => {
    await page.goto('/demo-site');
    await expect(page.getByTestId('heading_pg')).toHaveText('Vite + React');
  });
});
