import {expect,test} from "@playwright/test";
import path from "path";

test("Verify ScreenShot", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.screenshot({path:'screenShots/homePage.png'}); // static name

    // const Timestamp = Date.now();
    // await page.screenshot({path:'screenShots/homePage'+Timestamp+'.png'}); // dynamic name

    // await page.screenshot({path:'screenShots/FullPagehomePage'+Timestamp+'.png',fullPage:true}); // Full page

    // await page.screenshot({
    //     path: `screenShots/HomePage_${Date.now()}.png`,
    //     fullPage: true,
    //   });

    // const menu = page.locator(".header-menu");
    // await menu.screenshot({path:'screenShots/Menu'+Timestamp+'.png'}); // part of the page

    // await page.locator(".product-grid.home-page-product-grid").screenshot({path:'screenShots/FeatureProducts'+Timestamp+'.png'});
    
})

test.only("Fail to take screen shot", async({page})=>{
        await page.goto('https://demowebshop.tricentis.com/login');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.getByRole('textbox', { name: 'Password:' }).click();
        await page.getByRole('textbox', { name: 'Email:' }).click();
        await page.getByRole('textbox', { name: 'Email:' }).fill('admin@gmail.com');
        await page.getByRole('textbox', { name: 'Password:' }).click();
        await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
        await page.getByRole('button', { name: 'Log in' }).click();
        await expect.soft(page.locator('.validation-summary-errors')).toContainText('123 Login was unsuccessful. Please correct the errors and try again.');
});