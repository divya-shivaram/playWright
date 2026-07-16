import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 14 Pro Max'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.getByText('About Us', { exact: true })).toBeVisible();
  await expect(page.getByText('Get in Touch')).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('admin');
  await page.locator('#loginpassword').press('Tab');
  await page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up').press('Tab');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').press('Tab');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome admin');
  await expect(page.locator('#logout2')).toContainText('Log out');
  await expect(page.locator('#nameofuser')).toMatchAriaSnapshot(`
    - link "Welcome admin":
      - /url: "#"
    `);
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.locator('#signin2')).toContainText('Sign up');
});