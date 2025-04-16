import { test, expect } from '@playwright/test';

test.describe('Visual tests', async () => {
  test('Visual test example', {
    tag: ['@smoke', '@visual']
  }, async ({ page }, testInfo) => {
    console.log(testInfo.project.name);
    // console.log(suite.allTests());
    await page.goto('/demo-site');
    await expect(page.getByTestId('count_btn')).toContainText("0");
  });
});
