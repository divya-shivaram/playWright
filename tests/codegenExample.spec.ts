import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/login');
  await page.locator('#small-searchterms').fill('laptop');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('h2')).toContainText('laptop');
});