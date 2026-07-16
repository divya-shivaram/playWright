import { expect, test } from "@playwright/test";

const loginTestData: string[][] = [
    ["admin@gmail.com", "admin", "invalid"],
    ["admin1@gmail.com", "admin1", "invalid"],
    ["admin@gmail.com", "password", "invalid"]
];

for (const [email, password, validity] of loginTestData) {
    test.describe('Login data driven test', async () => {

        test(`login test for ${email} and ${password}`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/login');

            //fill the form
            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(password);
            await page.locator('input[value="Log in"]').click();

            if (validity.toLowerCase() === "valid") {
                const logoutlink = page.locator('a[href="/logout"]');
                await expect(logoutlink).toBeVisible({timeout:5000});
            } else { 
                const error =page.locator('.validation-summary-errors');
                await expect(error).toBeVisible({timeout:5000});
            }

        })

    })
}




