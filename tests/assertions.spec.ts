import { expect, test } from "@playwright/test";

test("verify assertion", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");


    // Auto-retrying assertions
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    // Auto-retrying assertions
    await expect(page.getByText("Welcome to our store")).toBeVisible();


    // Non-retrying assertions
    const title = await page.title();
    expect(title).toContain("Web Shop");

    // Negating matchers
    expect(title).not.toContain("Divya");
    // await expect(page.getByText("Welcome to our store")).not.toBeVisible();
    


});