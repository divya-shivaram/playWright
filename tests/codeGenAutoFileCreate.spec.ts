import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('img', { name: 'Second slide' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();

  
  await expect(page.locator('#cat')).toContainText('CATEGORIES');
  await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');
  await expect(page.locator('#nameofuser')).toMatchAriaSnapshot(`
    - link "Welcome admin":
      - /url: "#"
    `);
  await expect(page.getByRole('link', { name: 'Monitors' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
  await expect(page.locator('#signin2')).toContainText('Sign up');
});