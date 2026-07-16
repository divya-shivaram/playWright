import { test, expect } from '@playwright/test';

//npx playwright codegen

test('CodeGen', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('admin');;
  await page.locator('#loginpassword').fill('admin');

  await page.getByRole('button', { name: 'Log in' }).click();
});