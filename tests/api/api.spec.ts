import { test, expect } from '@playwright/test';

test.describe('API tests', async () => {
  test('API test example', {
    tag: ['@api']
  }, async ({ page }, testInfo) => {
    // console.log(testInfo.project.name);
    await page.goto('/demo-site');
    await expect(page.getByTestId('count_btn')).toContainText("0");
  });
});
