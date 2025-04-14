import { test, expect } from '@playwright/test';

test('UI test example', {
  tag: ['@smoke', '@ui']
}, async ({ page }) => {
  await page.goto('/demo-site');
  await expect(page.getByTestId('heading_pg')).toHaveText('Vite + React');
});

test('API test example', {
  tag: ['@api']
}, async ({ page }) => {
  await page.goto('/demo-site');
  await expect(page.getByTestId('count_btn')).toContainText("0");
});

test('Visual test example', {
  tag: ['@smoke', '@visual']
}, async ({ page }) => {
  await page.goto('/demo-site');
  await expect(page.getByTestId('count_btn')).not.toContainText("0");
});
