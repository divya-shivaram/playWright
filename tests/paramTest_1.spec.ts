import { expect, test } from "@playwright/test";

//testdata
const searchItem: string[] = ['laptop', 'gift card', 'smartphone', 'monitor'];

// for of loop
for (const item of searchItem) {
    test(`Search for for of loop "${item}"`, async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/login');
        await page.locator('#small-searchterms').fill(item);
        await page.getByRole('button', { name: 'Search' }).click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
    });
}

// using for each function
searchItem.forEach((item) => {
    test(`Search for forEach loop "${item}"`, async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/login');
        await page.locator('#small-searchterms').fill(item);
        await page.getByRole('button', { name: 'Search' }).click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
    });
})

// using describe block
test.describe("searching items", async()=>{
    searchItem.forEach((item) => {
        test(`Search for describe forEach loop "${item}"`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/login');
            await page.locator('#small-searchterms').fill(item);
            await page.getByRole('button', { name: 'Search' }).click();
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
        });
    })
})
