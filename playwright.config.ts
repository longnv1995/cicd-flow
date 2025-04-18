import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
import dotenv from 'dotenv';
import path from 'path';

const getEnv = process.env.ENV ? `.${process.env.ENV}.env` : '.env';

dotenv.config({
	path: path.resolve(__dirname, getEnv),
	override: true,
});

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: process.env.CI ? [
  //   [
  //     '@estruyf/github-actions-reporter', <GitHubActionOptions>{
  //       title: 'E2E test report',
  //       useDetails: true,
  //       showError: true
  //     }
  //   ]
  // ] : [
  //   // ['json', { outputFile: './test-results/reports.json' }],
  //   ['list'],
  //   ['html', { open: process.env.PLAYWRIGHT_HTML_OPEN }],
  // ],
  reporter: [
    ['list'],
    ['html'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'api tests',
      use: { ...devices['Desktop Chrome'] },
      testDir: './tests/api',
    },
    {
      name: 'visual tests',
      use: { ...devices['Desktop Chrome'] },
      testDir: './tests/visual',
    },
    {
      name: 'ui tests',
      use: { ...devices['Desktop Chrome'] },
      testDir: './tests/ui',
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
