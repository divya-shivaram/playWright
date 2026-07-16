import { expect,test } from "@playwright/test";

test("Verify Hard and Soft", async ({page})=>{
  
    await page.goto("https://demowebshop.tricentis.com/");
    const logo =  page.getByAltText("Tricentis Demo Web Shop");

    //soft Assertion
    await expect.soft(page).toHaveTitle("Demo Web Shop11");
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/a");
    await expect.soft(logo).toBeVisible();

    // Hard Assertion
    await expect(page).toHaveTitle("Demo Web Shop");
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(logo).toBeVisible();

    


})