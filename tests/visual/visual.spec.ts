import { test, expect } from '@playwright/test';

test.describe('Visual tests', async () => {
  test('Visual test example', {
    tag: ['@smoke', '@visual']
  }, async ({ page }) => {
    await page.goto('/demo-site');
    await expect(page.getByTestId('count_btn')).toContainText("0");
  });
});
