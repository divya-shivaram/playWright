import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Desktop Safari'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Log in').getByText('Close').click();
});