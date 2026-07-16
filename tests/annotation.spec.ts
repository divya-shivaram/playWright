/*
only
skip
fail
fixme
slow
*/
import { test, Page, expect } from "@playwright/test";

test.fail("Open application 1", async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page).toHaveTitle("Demo Web Shop. Login");
});

test("Open application 2", async ({ page ,browserName}) => {
    test.skip(browserName==='chromium',"condition not matching");
    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page).toHaveTitle("Demo Web Shop. Login");
});

test.fixme("Open application 3", async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
});

test("Open application 4", async ({ page }) => {
    test.slow(); //triple the timeout
    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page).toHaveTitle("Demo Web Shop. Login");
});